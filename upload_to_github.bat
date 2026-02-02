@echo off
setlocal enabledelayedexpansion

cd /d "%~dp0"

echo ==========================================
echo     Tea Website - One-Click GitHub Push
echo ==========================================
echo.

where git >nul 2>nul
if errorlevel 1 (
  echo [ERROR] Git not found. Please install Git for Windows first.
  echo         https://git-scm.com/download/win
  echo.
  pause
  exit /b 1
)

git rev-parse --is-inside-work-tree >nul 2>nul
if errorlevel 1 (
  echo [ERROR] This folder is not a Git repository.
  echo         Please clone your repo first, then run this script inside the cloned folder.
  echo         Repo: https://github.com/superrryu2-cloud/tea-website
  echo         Example:
  echo           git clone https://github.com/superrryu2-cloud/tea-website.git
  echo           cd tea-website
  exit /b 1
)

for /f "delims=" %%A in ('git remote get-url origin 2^>nul') do set "ORIGIN_URL=%%A"
if "%ORIGIN_URL%"=="" (
  echo [ERROR] Remote "origin" is not set.
  echo         Set it with: git remote add origin ^<repo_url^>
  echo.
  pause
  exit /b 1
)

for /f "delims=" %%A in ('git branch --show-current 2^>nul') do set "BRANCH=%%A"
if "%BRANCH%"=="" set "BRANCH=(unknown)"

echo [INFO] Repo: %ORIGIN_URL%
echo [INFO] Branch: %BRANCH%
echo.

echo [INFO] Checking changes...
for /f "delims=" %%A in ('git status --porcelain') do set "HAS_CHANGES=1"
if not defined HAS_CHANGES (
  echo [INFO] No changes to upload.
  echo.
  pause
  exit /b 0
)

set "COMMIT_MSG="
set /p COMMIT_MSG=Commit message (leave empty = auto): 
if "%COMMIT_MSG%"=="" (
  for /f "delims=" %%A in ('powershell -NoProfile -Command "Get-Date -Format \"yyyy-MM-dd HH:mm:ss\""' ) do set "NOW=%%A"
  set "COMMIT_MSG=update: !NOW!"
)

echo [INFO] Staging files...
git add -A
if errorlevel 1 (
  echo [ERROR] git add failed.
  echo.
  pause
  exit /b 1
)

echo [INFO] Committing...
git commit -m "%COMMIT_MSG%"
if errorlevel 1 (
  echo [ERROR] git commit failed.
  echo         If it says "nothing to commit", try again after making changes.
  echo.
  pause
  exit /b 1
)

echo [INFO] Syncing (pull --rebase)...
git pull --rebase
if errorlevel 1 (
  echo [ERROR] git pull --rebase failed. Please resolve conflicts, then run again.
  echo.
  pause
  exit /b 1
)

echo [INFO] Pushing to GitHub...
git push
if errorlevel 1 (
  echo [ERROR] git push failed.
  echo         If you see auth errors, sign in with Git Credential Manager or SSH.
  echo.
  pause
  exit /b 1
)

echo [OK] Uploaded. Cloudflare Pages will auto-deploy shortly.
echo [TIP] Check GitHub "Commits" and Cloudflare "Deployments" if you don't see changes yet.
echo.
pause
exit /b 0
