# 茶藝師檢定系列維護

入口：品評考題 → 茶藝師檢定。現有「茶藝師」題庫保持獨立。

目前 batch-001 收錄使用者提供的 HTML 中全部 158 題、7 個分類。完整系列約 4,000 題是規劃數量，不代表已收錄；沒有建立空白題目。繁體欄位 q_tc / opts_tc 對應題幹與選項，保留英文題、原答案和特殊答案備註。

## 新增批次

1. 相同 HTML 格式可執行 `node scripts/import-tea-certification.mjs "來源.html" batch-002`，僅解析 JSON，不執行 HTML。
2. 校對分類、題幹、選項與 note 均為繁體中文；來源只有簡體時，先完成繁體轉換與校對，不直接匯入。
3. 在 `public/data/tea-certification/manifest.json` 的 batches 加入 `batch-002.json`。
4. 每題 ID 使用 `tea-cert-批次-原題號`；同一題修訂時保留 ID，以維持既有作答記錄。新批次若與舊題重複，人工比對後再決定是否加入。
5. 分類以原始分類名稱為穩定 key，新增分類自動出現在選單。各批次使用獨立檔案，不必更動元件。
6. 執行 `node scripts/verify-tea-certification.mjs`、`npm run build` 後部署。

列表每頁 30 題，避免後續 4,000 題同時建立畫面元素。搜尋、翻卡與測驗仍使用完整已收錄題目。
