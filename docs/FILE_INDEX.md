# 檔案索引（重要檔案快速定位）

> 這份索引列出「與網站結構/內容維護最相關」的檔案；`node_modules/`、`dist/` 不在維護範圍內。

## 啟動與設定

- `start_website.bat`：本機啟動開發伺服器（Vite）
- `package.json`：scripts（`dev / build / lint / preview`）與依賴
- `vite.config.js`：Vite 設定
- `tailwind.config.js`、`postcss.config.js`：Tailwind / PostCSS 設定

## App 主入口

- `src/main.jsx`：React 掛載點
- `src/App.jsx`：主頁面組裝（tabs、section、狀態控制）
- `src/index.css`：Tailwind base + 全域樣式
- `src/App.css`：局部樣式（若有）

## 資料（JSON + Loader）

> 規則：使用 `*.json` 保存內容，`*.js` 做載入與驗證，避免資料直接進 `App.jsx`。

- 六大茶類：`src/data/teaData.json`、`src/data/teaData.js`
- 品種介紹：`src/data/cultivars.json`、`src/data/cultivars.js`
- 節氣：`src/data/solarTerms.json`、`src/data/solarTerms.js`
- 時間軸：`src/data/timelineData.json`、`src/data/timelineData.js`
- 精選茶選單：`src/data/featuredTeaMenu.json`、`src/data/featuredTeaMenu.js`
- 歷史文化小清單：`src/data/historyCulture.json`、`src/data/historyCulture.js`

## 內容（長文/章節/排版）

- 科學章節集合：`src/content/scienceChapters.jsx`
- 科學動畫：`src/content/science/EnzymeAnimation.jsx`
- 歷史內容工廠：`src/content/historyData.jsx`
- 陳椽全文（六大茶類分類）：`src/content/varieties/ChenChuanTeaClassification.jsx`
- 普洱茶百科全文：`src/content/varieties/PuerhEncyclopedia.jsx`

## 精選茶（拆檔）

- `src/content/featured/tieguanyin.jsx`
- `src/content/featured/dongding.jsx`
- `src/content/featured/redoolong.jsx`
- `src/content/featured/orientalbeauty.jsx`
- `src/content/featured/wenshan.jsx`

