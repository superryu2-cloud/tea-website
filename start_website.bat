@echo off
setlocal
:: Switch to script directory
cd /d "%~dp0"

title Tea Website Launcher
echo ==========================================
echo      Tea Website Launcher
echo ==========================================

:: 1. Check Node.js
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js not found!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

:: 2. Check package.json
if not exist "package.json" (
    echo [ERROR] package.json not found.
    echo Please make sure this file is in the project root.
    pause
    exit /b 1
)

:: 3. Check node_modules and install if missing
if not exist "node_modules" (
    echo [INFO] node_modules not found. Installing dependencies...
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo [ERROR] npm install failed. Please check your internet connection.
        pause
        exit /b 1
    )
    echo [SUCCESS] Dependencies installed.
) else (
    echo [INFO] Environment check passed.
)

:: 4. Start server and open browser
echo [INFO] Starting development server...
set "HOST=localhost"
set "PORT=5173"
echo [INFO] Browser will open at http://%HOST%:%PORT% ...

start "" cmd /c "timeout /t 5 >nul & start http://%HOST%:%PORT%"

call npm run dev -- --host %HOST% --port %PORT% --strictPort

echo.
echo [WARN] Server stopped.
pause
endlocal
