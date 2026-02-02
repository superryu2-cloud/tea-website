# 「導回結構」復原指南（內容變多時怎麼不把 App.jsx 撐爆）

這份指南用來處理這種情況：你加了很多資料/文章後，程式開始變難改、常出錯，或有人又把大段內容塞回 `src/App.jsx`。

目標：把內容導回目前的模組化結構（`src/data/**` + `src/content/**`），讓 `src/App.jsx` 回到「組裝/狀態」的角色。

## 一、判斷要放 data 還是 content

### 放 `src/data/**`（JSON）的情境

- 內容本質是「清單/表格/卡片資料」
- 未來想加搜尋、篩選、排序
- 可能會搬到後台/CMS

例：六大茶類、品種、節氣、時間軸、選單。

### 放 `src/content/**`（React 元件）的情境

- 內容是「長文章」或章節敘述
- 需要排版（TOC、章節卡片、表格、提示框）
- 需要在文章內放元件（例如動畫、互動）

例：陳椽全文、普洱茶百科、科學章節。

## 二、把一段內容從 App.jsx 抽出去（標準流程）

1. 在 `src/App.jsx` 找到很長的一段 JSX 或很長的資料陣列
2. 決定：
   - 是資料 → 建 `src/data/xxx.json` + `src/data/xxx.js`
   - 是文章 → 建 `src/content/.../Xxx.jsx`
3. 在新檔案完成後，回到 `src/App.jsx`：
   - `import` 新檔案
   - 保留最少的組裝碼（例如 `<Xxx />`）
4. 需要「可展開/收合」時：
   - 新增 `useState`（例如 `showPuerhEncyclopedia`）
   - 加按鈕切換

## 三、長文最佳做法（不減化但更好讀）

推薦模板（可參考現成元件）：

- `src/content/varieties/ChenChuanTeaClassification.jsx`
- `src/content/varieties/PuerhEncyclopedia.jsx`

共同特徵：

- 有清楚標題與引言
- 有 TOC 方便跳章
- 每章節獨立卡片，避免「一整坨文字」
- 表格加 `overflow-x-auto`，手機也可讀

## 四、如果未來要搬資料到「真正的網站/後台」怎麼辦？

目前專案的拆法已經在為「搬站」做準備：

- 結構資料放 JSON（未來可直接改成從 API 讀）
- 文章先用 component（未來可逐步資料化或改成 Markdown/MDX/CMS）

如果你要更進一步「完全資料化」，下一步通常是：

- 把長文章改成 Markdown 檔（`content/*.md`）
- 或用 MDX（在 Markdown 裡可嵌 React 元件）
- 前端再做 Markdown renderer 或在 build 時轉成 HTML

