@echo off
echo Checking Node.js...
node --version
if errorlevel 1 (
    echo Node.js not found! Please install from https://nodejs.org/
    pause
    exit
)

echo.
echo Checking npm...
npm --version
if errorlevel 1 (
    echo npm not found!
    pause
    exit
)

echo.
echo Changing to project directory...
cd /d "%~dp0"
echo Current directory: %CD%

echo.
echo Checking package.json...
if not exist package.json (
    echo ERROR: package.json not found!
    echo Current directory: %CD%
    pause
    exit
)

echo.
echo Installing dependencies if needed...
if not exist node_modules (
    echo Running npm install...
    npm install
)

echo.
echo Starting server...
echo.
echo Website will be at: http://localhost:5173
echo.
timeout /t 3
start http://localhost:5173
npm run dev

pause
