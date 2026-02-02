# 專案結構（資料放哪裡、為什麼這樣拆）

## 目錄樹（重點）

- `start_website.bat`：本機一鍵啟動（跑 `npm run dev`，固定 `localhost:5173`）。
- `src/main.jsx`：React 入口，掛載 `<App />`。
- `src/App.jsx`：頁面組裝與路由（用 `activeTab` 切換各區塊）。
- `src/data/**`：偏「資料」的 JSON 與對應載入器（.js），避免把大陣列直接寫進 `App.jsx`。
- `src/content/**`：偏「長內容/文章/章節」的 JSX 元件（可做排版、目錄、表格）。
- `src/index.css`、`tailwind.config.js`：Tailwind 與全站樣式設定。

## 為什麼要拆 `src/data` 與 `src/content`

你遇到的問題本質是：`App.jsx` 太長、資料與 UI 混在一起，後續加資料容易出錯、難以維護。

目前採用的做法：

- **結構/清單資料**（六大茶類、品種、節氣、時間軸、選單）→ 放 `src/data/*.json`
- **長篇文章/可閱讀內容**（需要排版/目錄/表格）→ 放 `src/content/**` 的 React 元件
- `src/App.jsx` 只做「組裝、切頁、狀態控制、按鈕展開/收合」

## Tab（頁籤）概念

`src/App.jsx` 內以 `activeTab` 決定要顯示哪個 section，例如：

- `home`：首頁 + 六大茶類（VarietiesSection）
- `cultivars`：品種介紹
- `varieties`：六大茶類（含普洱特別專區）
- `science` / `chemistry_deep_dive`：科學與化學內容
- `history`：歷史文化（使用 `createHistoryData` 組裝內容）

