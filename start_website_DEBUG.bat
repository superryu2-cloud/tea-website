@echo off
setlocal EnableDelayedExpansion

:: Keep window open for debugging
set "KEEP_OPEN=1"

cd /d "%~dp0"
title Tea Website - Launcher (Debug Mode)

color 0A
echo.
echo ==========================================
echo   Tea Website - Launcher (Debug Mode)
echo ==========================================
echo.
echo Current directory: %CD%
echo.

:: Check Node.js
echo [1/5] Checking Node.js...
where node >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo [OK] Node.js found
    node --version
) else (
    color 0C
    echo [ERROR] Node.js not found in PATH
    echo.
    echo Please install Node.js from: https://nodejs.org/
    echo After installation, restart this script.
    echo.
    goto :end_with_pause
)
echo.

:: Check npm
echo [2/5] Checking npm...
where npm >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo [OK] npm found
    npm --version
) else (
    color 0C
    echo [ERROR] npm not found
    echo npm should be installed with Node.js
    echo Please reinstall Node.js
    echo.
    goto :end_with_pause
)
echo.

:: Check package.json
echo [3/5] Checking package.json...
if exist "package.json" (
    echo [OK] package.json found
) else (
    color 0C
    echo [ERROR] package.json not found
    echo Current directory: %CD%
    echo Please make sure you are in the correct project folder
    echo.
    goto :end_with_pause
)
echo.

:: Check/Install dependencies
echo [4/5] Checking dependencies...
if exist "node_modules" (
    echo [OK] node_modules folder exists
) else (
    echo [INFO] Installing dependencies (first time)...
    echo This may take 2-5 minutes, please wait...
    echo.
    npm install
    if %ERRORLEVEL% NEQ 0 (
        color 0C
        echo.
        echo [ERROR] npm install failed
        echo Please check your internet connection
        echo.
        goto :end_with_pause
    )
    echo.
    echo [OK] Dependencies installed
)
echo.

:: Start server
echo [5/5] Starting development server...
echo.
color 0B
echo ==========================================
echo  Server starting at: http://localhost:5173
echo ==========================================
echo.
echo Opening browser in 3 seconds...
echo Press Ctrl+C to stop the server
echo.

:: Open browser after delay
start "" cmd /c "timeout /t 3 >nul & start http://localhost:5173"

:: Start Vite
npm run dev

:: If we get here, server stopped
:end_with_pause
echo.
echo ==========================================
echo Press any key to close this window...
pause >nul
endlocal
