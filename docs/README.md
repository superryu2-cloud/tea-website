# Tea Website 文件總覽

這份文件集的目標是：未來網站出現問題時，你可以先讀文件就能理解整體結構、資料放在哪、要改哪裡，並能「導回」目前的模組化架構（避免內容全部塞回 `src/App.jsx`）。

## 快速入口

- 架構與資料位置：`docs/STRUCTURE.md`
- 內容/資料維護方式（新增文章、分拆大段內容）：`docs/CONTENT_AND_DATA.md`
- 常見錯誤與排查：`docs/TROUBLESHOOTING.md`
- 「導回結構」復原流程（亂掉時怎麼回到目前的分檔方式）：`docs/RESTORE_GUIDE.md`
- 檔案索引（重要檔案一覽）：`docs/FILE_INDEX.md`

## 專案概要

- 技術：Vite + React + Tailwind CSS
- 入口：`src/main.jsx` → `src/App.jsx`
- 長內容（文章/章節）原則：不要塞在 `src/App.jsx`，改放在 `src/content/**` 或 `src/data/**`。

