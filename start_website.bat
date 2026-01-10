@echo off
:: Tea Website Launcher - Simple Version
:: Just opens a command window and runs npm run dev

echo Starting Tea Website...
echo.
echo Opening command window...
echo After the server starts, open your browser to: http://localhost:5173
echo.
echo Press Ctrl+C to stop the server
echo.

start "Tea Website Server" cmd /k "cd /d d:\tea-website && npm run dev"

timeout /t 5 >nul
start http://localhost:5173

echo.
echo Browser should open automatically in 5 seconds.
echo If not, manually open: http://localhost:5173
echo.
pause
