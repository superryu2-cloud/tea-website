# 常見問題排查

## 1) 我打不開網頁 / 只有白畫面

先確認開發伺服器是否正常啟動：

- 用 `start_website.bat` 啟動
- 瀏覽器打開 `http://localhost:5173/`

如果 console 有紅字錯誤，優先看第一個錯誤訊息（通常是根因）。

## 2) `Uncaught ReferenceError: XXX is not defined`

這代表某個變數/元件沒有被 import 或作用域不對。

已遇過的案例：

- `EnzymeAnimation is not defined`
  - 修正方式：把動畫元件獨立成 `src/content/science/EnzymeAnimation.jsx`
  - 然後在 `src/content/scienceChapters.jsx` 明確 import 使用

## 3) ESLint：`react-refresh/only-export-components`

這個規則常在「同一檔案同時 export 常數（非 component）＋定義 component」時觸發。

建議作法：

- 將 component 移到獨立檔案（例如 `src/content/science/EnzymeAnimation.jsx`）
- 原檔案只 export 內容（資料/章節結構）或只 export component（避免混用）

## 4) Build 警告：chunk 超過 500kB

這不是錯誤，網站仍可正常 build。
如果未來內容越來越多，可以再做：

- 以 `import()` 做分割載入（code-splitting）
- 或在 Vite/Rollup 設定 manualChunks

## 5) 文字出現亂碼

如果你在 UI 上看到部分中文字變成奇怪符號，通常是：

- 檔案編碼不是 UTF-8
- 或編輯器/終端機在寫入時造成編碼轉換

建議：

- 確保 `.jsx/.md/.json` 都用 UTF-8 儲存
- 用 VS Code 右下角編碼檢查/轉存 UTF-8

