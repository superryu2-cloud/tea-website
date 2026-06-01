@echo off
chcp 65001 >nul
:: Tea Website Launcher - Premium Optimized Version
:: 採用 Vite 原生的 --open 參數，自動開啟瀏覽器且只佔用單一視窗，解決雙視窗殘留的技術債。

echo ===================================================
echo             啟動茶韻百科網頁系統 (Vite)
echo ===================================================
echo.
echo [狀態] 正在啟動本地開發伺服器，並會自動開啟網頁首頁...
echo [提示] 如需關閉系統，請直接關閉此視窗，或按下 Ctrl + C 鍵。
echo.

cd /d "%~dp0"
npm run dev -- --open
