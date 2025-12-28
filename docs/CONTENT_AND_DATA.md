# 內容與資料維護指南（如何新增、如何拆分、如何美化排版）

## 基本原則（最重要）

1. **不要把長內容直接貼進 `src/App.jsx`**
2. **資料用 JSON**（可搜尋、可重用、可驗證）
3. **長文章用獨立元件**（可排版、可做目錄、可做表格）

這樣做的好處是：`App.jsx` 不會越來越大；未來加內容只會「新增檔案 + 接上入口」。

## `src/data/**`：JSON + Loader（資料化）

### 檔案型態

- `*.json`：純資料（建議放在這裡）
- `*.js`：載入器（import JSON → 做簡單驗證 → export）

### 目前已資料化的項目

- 六大茶類：`src/data/teaData.json`（由 `src/data/teaData.js` 匯出）
- 茶樹品種：`src/data/cultivars.json`（由 `src/data/cultivars.js` 匯出）
- 節氣：`src/data/solarTerms.json`（由 `src/data/solarTerms.js` 匯出）
- 時間軸：`src/data/timelineData.json`（由 `src/data/timelineData.js` 匯出）
- 精選茶選單：`src/data/featuredTeaMenu.json`（由 `src/data/featuredTeaMenu.js` 匯出）
- 歷史文化內的小型清單：`src/data/historyCulture.json`（由 `src/data/historyCulture.js` 匯出）

### 新增一份資料（建議流程）

1. 在 `src/data/` 新增 `xxx.json`
2. 新增對應 `xxx.js`（負責 `import` + 基本 shape 檢查）
3. 在 `src/App.jsx` 匯入 `xxx` 使用

> 如果你希望「內容也可搜尋」或未來要搬站（CMS/後台），資料化通常會更有彈性。

## `src/content/**`：長文/章節（排版用）

### 目前的長內容元件

- 科學章節：`src/content/scienceChapters.jsx`
  - 注意：動畫元件抽出：`src/content/science/EnzymeAnimation.jsx`
- 歷史頁資料工廠：`src/content/historyData.jsx`（export `createHistoryData(...)`）
- 六大茶類文章（陳椽全文）：`src/content/varieties/ChenChuanTeaClassification.jsx`
- 普洱茶百科全文：`src/content/varieties/PuerhEncyclopedia.jsx`
- 精選茶內容拆檔：`src/content/featured/*.jsx`

### 新增一篇長文章（建議流程）

1. 在 `src/content/varieties/`（或相對應的分類資料夾）新增 `YourArticle.jsx`
2. 把原文「完整貼入」元件中，並用：
   - 章節卡片（`section`）
   - 目錄（TOC anchors）
   - 表格（`overflow-x-auto`）
   - 小標籤/提示區塊（Tailwind）
3. 在 `src/App.jsx` 加一個「展開/收合」按鈕與 state，像：
   - `showChenChuanEssay`
   - `showPuerhEncyclopedia`
4. 用 `<YourArticle />` 放進對應專區

## 美化排版（既不減化內容、又好讀）

長文內容建議用這些 UI 模式：

- **封面 Header**：標題、簡介、重點 tag
- **右側/上方快速導覽（TOC）**：章節錨點跳轉
- **章節卡片**：每段內容獨立容器，增加可讀性
- **表格可橫向滑動**：手機也能看
- **重點提示框**：把「風險/建議」集中，不刪原文

