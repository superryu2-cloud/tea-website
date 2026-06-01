@echo off
chcp 65001 >nul
setlocal EnableDelayedExpansion
:: ==========================================
:: Tea Website - Smart Launcher (English Version)
:: Auto-detect environment, install dependencies, start website
:: ==========================================

cd /d "%~dp0"
title Tea Website - Smart Launcher

color 0A
echo.
echo ==========================================
echo      Tea Website - Smart Launcher
echo ==========================================
echo.

:: ==========================================
:: Step 1: Check Node.js
:: ==========================================
echo [1/4] Checking Node.js environment...

:: Try multiple ways to find Node.js
set "NODE_FOUND=0"
set "NODE_PATH="

:: Method 1: Check node in PATH
where node >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    set "NODE_FOUND=1"
    set "NODE_PATH=node"
    goto :node_found
)

:: Method 2: Check common installation paths
set "COMMON_PATHS=C:\Program Files\nodejs\node.exe;C:\Program Files (x86)\nodejs\node.exe;%LOCALAPPDATA%\Programs\nodejs\node.exe;%APPDATA%\npm\node.exe"

for %%p in ("%COMMON_PATHS:;=" "%") do (
    if exist %%p (
        set "NODE_FOUND=1"
        set "NODE_PATH=%%~p"
        goto :node_found
    )
)

:: Node.js not found
:node_not_found
color 0C
echo.
echo [ERROR] Node.js not found!
echo.
echo Node.js is required to run this website.
echo.
echo ==========================================
echo  Please follow these steps to install:
echo ==========================================
echo.
echo 1. Open your browser and go to Node.js website
echo    https://nodejs.org/
echo.
echo 2. Download the LTS (Long Term Support) version
echo    Recommended: Node.js 20.x LTS or newer
echo.
echo 3. Run the installer
echo    - Use default settings
echo    - Make sure "Add to PATH" is checked
echo.
echo 4. After installation, run this script again
echo.
echo ==========================================
echo.
echo Do you want to open the Node.js download page?
echo.
choice /C YN /M "Press Y to open download page, N to cancel"
if %ERRORLEVEL% EQU 1 (
    echo.
    echo Opening browser...
    start https://nodejs.org/
    echo.
    echo Please download and install Node.js, then run this script again.
)
echo.
pause
exit /b 1

:node_found
color 0A
echo [SUCCESS] Node.js found
"%NODE_PATH%" --version
echo.

:: ==========================================
:: Step 2: Check npm
:: ==========================================
echo [2/4] Checking npm (package manager)...

:: Find npm
set "NPM_FOUND=0"
set "NPM_PATH="

where npm >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    set "NPM_FOUND=1"
    set "NPM_PATH=npm"
    goto :npm_found
)

:: Check npm in Node.js directory
for %%p in ("%NODE_PATH%") do set "NODE_DIR=%%~dp"
if exist "%NODE_DIR%npm.cmd" (
    set "NPM_FOUND=1"
    set "NPM_PATH=%NODE_DIR%npm.cmd"
    goto :npm_found
)

if exist "%NODE_DIR%npm" (
    set "NPM_FOUND=1"
    set "NPM_PATH=%NODE_DIR%npm"
    goto :npm_found
)

color 0C
echo [ERROR] npm not found!
echo npm is usually installed with Node.js.
echo Please reinstall Node.js.
pause
exit /b 1

:npm_found
echo [SUCCESS] npm found
"%NPM_PATH%" --version
echo.

:: ==========================================
:: Step 3: Check and install dependencies
:: ==========================================
echo [3/4] Checking project dependencies...

if not exist "package.json" (
    color 0C
    echo [ERROR] package.json not found
    echo Please make sure you are in the correct project directory.
    pause
    exit /b 1
)

if not exist "node_modules" (
    echo.
    echo [INFO] First time running, installing dependencies...
    echo This may take a few minutes, please wait...
    echo.
    
    "%NPM_PATH%" install
    
    if %ERRORLEVEL% NEQ 0 (
        color 0C
        echo.
        echo [ERROR] Failed to install dependencies!
        echo Please check your internet connection, or try manually: npm install
        pause
        exit /b 1
    )
    
    echo.
    echo [SUCCESS] Dependencies installed!
) else (
    echo [SUCCESS] Dependencies already installed
)
echo.

:: ==========================================
:: Step 4: Start development server
:: ==========================================
echo [4/4] Starting development server...
echo.

set "HOST=localhost"
set "PORT=5173"

color 0B
echo ==========================================
echo  Website is starting!
echo ==========================================
echo.
echo  URL: http://%HOST%:%PORT%
echo.
echo  Browser will open automatically...
echo  Press Ctrl+C to stop the server
echo ==========================================
echo.

:: Start development server and auto-open browser natively
"%NPM_PATH%" run dev -- --host %HOST% --port %PORT% --open

:: After server stops
echo.
echo [INFO] Development server stopped
pause
endlocal
