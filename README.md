# Tea Website（Vite + React + Tailwind）

## 開始使用（本機）

- 一鍵啟動：執行 `start_website.bat`
- 開啟網址：`http://localhost:5173/`

## 文件（建議先讀這裡）

為了避免 `src/App.jsx` 越寫越長、後續加資料容易出錯，本專案已把「資料」與「長內容」拆分成可維護的結構。

- 文件入口：`docs/README.md`
- 專案結構：`docs/STRUCTURE.md`
- 內容/資料維護：`docs/CONTENT_AND_DATA.md`
- 常見問題：`docs/TROUBLESHOOTING.md`
- 導回結構復原：`docs/RESTORE_GUIDE.md`
- 重要檔案索引：`docs/FILE_INDEX.md`
- 部署（Cloudflare Pages）：`docs/DEPLOY_CLOUDFLARE_PAGES.md`

## 常用指令

- 開發：`npm run dev`
- 檢查：`npm run lint`
- 打包：`npm run build`
- 預覽：`npm run preview`

## 一鍵上傳（更新 Cloudflare Pages）

- 執行 `upload_to_github.bat`（會自動 `git add/commit/pull --rebase/push`）
