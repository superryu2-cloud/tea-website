# Tea Website — Handoff / Project Status

最後更新：2026-01-02  
專案路徑：`d:\tea-website`

> 這份文件用來讓下一位開發者「不看對話也能接手」：包含目前架構、位置、完成進度、注意事項、已知問題與下一步建議。

---

## 1) 執行環境 / 限制

- Shell：PowerShell（Windows）
- Repo：`d:\tea-website`
- 本次工作期間工具限制（當時）：`sandbox_mode=read-only`、`approval_policy=on-request`、`network_access=restricted`
- 測試：`npm run lint` 已可通過（最後一次修正後仍通過）

---

## 2) 需求核心（使用者偏好）

### 2.1 文字閱讀性（像 FB 內文）
- 內文要清楚、偏大、偏粗、對比高、行距舒服。
- 避免灰到看不清楚。

### 2.2 內容呈現
- 不喜歡「收合/展開」把正文藏起來（偏好內容直接展開）。
- 不要出現「原文：」「原文節錄」這類字眼。

### 2.3 導覽行為
- 各層導覽希望可快速切換，且 **點選錨點不被上方 sticky 導覽列遮住**。
- 第三層、第四層：改成左側章節列（第三層）＋左側展開子章節（第四層）。

---

## 3) 全站導覽結構（Tier）

### Tier 1（最上層）
位置：`src/components/SiteNavigation.jsx`  
內容：「學習旅程 / 百科」與語言切換。

### Tier 2（百科主分類）
位置：`src/components/SiteNavigation.jsx`  
內容：`ATLAS_ITEMS`（六大茶類、茶樹品種、茶葉科學、沖泡/工藝、台灣特色茶、…）

### Tier 3 + Tier 4（已改為左側章節列）
原本位置：`src/components/SiteNavigation.jsx`（桌機上方橫向列）  
現況：**已移除桌機的 Tier 3/4 上方列**，改由各頁面內的左側章節列呈現。

左側章節列元件：
- `src/components/ChapterSidebar.jsx`
  - `items`：第三層（章節主分類）
  - `subItemsByKey`：第四層（子章節清單；只在 active 主分類下展開）
  - `topOffsetPx`：跟著上方 sticky nav 高度調整，避免蓋住

---

## 4) 目前已套用左側章節（第三/四層）

### 4.1 六大茶類（Varieties）
位置：`src/App.jsx` 的 `VarietiesSection`（Render 區塊約在 `src/App.jsx:2221`）

- 左側（第三層）：`VARIETIES_KINDS`
- 左側展開（第四層）對應：
  - `ref_chenchuan` → `CHEN_CHUAN_TOC`（錨點滾動）
  - `ref_teaching` → `TEA_REFERENCE_TOC`（錨點滾動）
  - `puerh` → `PUERH_TOC`（切換普洱章節 / hash）
  - `oolong` → `OOLONG_TOC`（切換四大烏龍區 / hash）

注意：
- `ref_chenchuan` / `ref_teaching` 使用 `useAnchoredSubnav` 的 `scrollToHref`（會帶 offset）。
- `puerh` 使用 `selectPuerhChapter`（會更新 hash + scrollTo top）。
- `oolong` 使用 `selectOolongRegion`（會更新 hash）。

### 4.2 茶葉科學（Science）
位置：`src/App.jsx` 的 `ScienceSection`

- 左側（第三層）：`SCIENCE_TOC`（氧化 / 烘焙 / 內含物）
- 目前 Science 沒有第四層展開（如要可加 `subItemsByKey`）。

### 4.3 茶樹品種（Cultivars）
位置：`src/App.jsx` 的 `CultivarSection`

- 左側（第三層）：`CULTIVARS_TOC`（植物學 / 地方品種 / 引進品種 / 育成品種）
- 點左側會：
  - 自動展開內容（把 `showCultivarDiversity`、`showCultivarsAtlas` 打開）
  - 等 DOM 出現後，使用 `cultivarsSubnav.scrollToHref(href)` 滾到對應段落

---

## 5) 內容頁 / 長文整理（已完成的重構）

### 5.1 陳椽《茶業通史》整理（六大茶類分類）
檔案：`src/content/varieties/ChenChuanTeaClassification.jsx`

完成：
- 取消 `<details>` 收合：內容改為全部展開的卡片呈現。
- 移除「原文：」「原文節錄」字眼。
- 「六大茶類分類（綱目）」：
  - 移除照片區塊
  - 每一類內容改成單欄向下（不再左右兩欄）
- 重點摘要改為「一行」呈現（用 `／` 串接）
- 錨點對齊：將 `id` 放到 `<section>`（避免滾動切到上方英文小字）

### 5.2 普洱茶百科（12 章）
檔案：`src/content/varieties/PuerhEncyclopedia.jsx`

完成：
- `ReadingAssist` 只抓 `h4`（章內小節清單），降低雜訊。
- 移除外層 `overflow-hidden`，避免 sticky 失效。

---

## 6) 文章導覽（本頁目錄 / 閱讀進度）

元件：`src/components/ReadingAssist.jsx`

功能：
- sticky「閱讀進度」+「本頁目錄」（可收合）
- 點目錄會平滑捲動（有 offset 避免上方導覽列遮住）

注意：
- 過去使用者曾回報某些頁面「點目錄會被切到標題上方」；目前主要透過 offset 與 anchor 位置改善。
- 若再出現對不準，建議改為全站 `scroll-padding-top` 策略或針對卡片 header 統一 anchor 容器。

---

## 7) 全站樣式（字體 / 文字 / 對比）

主檔：`src/index.css`

### 7.1 內文大小與可讀性（FB 取向）
- `.museum-page :where(p, li)`：
  - `font-size: 16px`
  - `font-weight: 600`
  - `line-height: 1.9`
  - `color: inherit`（重要：避免深色卡片被強制改成深色字看不到）

### 7.2 深色卡片文字「看不到」的修正（全站）
問題：以前 `p/li` 強制深色，放到 `bg-stone-900 text-stone-100` 的卡片會變成深底深字。  
解法：
- `.museum-page` 設定預設字色（深色）
- `p/li` 改 `color: inherit` → 讓深色卡片可繼承白字

### 7.3 系統字體堆疊
- `:root` 內：`--font-body`
- `body { font-family: var(--font-body); }`
- 目前「不使用 serif 混搭」，避免字體看起來不一致。

### 7.4 標題視覺（不換字體，用樣式差異）
- `h1~h5`：`font-weight: 800`
- `h3`：使用「粗底線」強調（不整行改紅字）

### 7.5 上方功能列字重
- `.nav-pill` 改成 `font-semibold`

---

## 8) 已移除 / 已更動的 UI 行為

- 上方（桌機）第三/四層橫向列：已移除  
  檔案：`src/components/SiteNavigation.jsx`
- 第三/四層改由左側 `ChapterSidebar` 取代（見第 4 節）。

---

## 9) 已知問題 / 技術債（重要）

### 9.1 檔案編碼（mojibake）
部分 `src/content/featured/redoolong.jsx` 等檔案出現亂碼（中文變成奇怪字元）。  
推測原因：編碼曾被非 UTF-8 的流程寫入或複製導致。  
建議：
- 後續請用 UTF-8 無 BOM 儲存。
- 若要徹底修正：以原文重新貼回內容並確認 repo 的 `core.autocrlf` / editor encoding。

### 9.2 Cultivars Section 的顯示條件較複雜
`CultivarSection` 原本有「展開內容/收合內容」邏輯，現在左側章節會強制展開並跳轉。  
若未來要「完全移除收合」，可把 `showCultivarDiversity` 永遠設為 true、移除切換按鈕。

### 9.3 Mobile 版第三/四層
目前 mobile menu 仍用格子按鈕切換第三層（Varieties kinds）；第四層在 mobile 未做成展開式左側（因為沒有左側）。  
若要一致體驗：可在 mobile menu 中加「依 active 第三層顯示第四層」的子清單。

---

## 10) 下一步建議（若要繼續優化）

1) 導覽一致性
   - Mobile 也加入第四層列表（隨第三層切換），或在內容區提供固定的「本頁目錄」。

2) 錨點對齊統一
   - 針對常用的 SectionCard / header，統一 anchor 放在 container 起點（避免切到 header 上方小字）。

3) 編碼修復
   - 優先修 `src/content/featured/redoolong.jsx` 等內容的亂碼，避免後續編輯痛苦。

4) 視覺整理
   - 現在標題用粗底線：若想更像「文章標題」，可以針對 `h3/h4` 讓 margin/line-height 更一致。

---

## 11) 近期主要改動檔案清單（便於快速定位）

- `src/index.css`（字體堆疊、內文 16px、對比、h3 底線、nav 字重、深色卡片繼承字色）
- `src/components/ChapterSidebar.jsx`（新：左側第三/四層章節列）
- `src/components/SiteNavigation.jsx`（移除桌機 tier3/4，上方只保留 tier1/2；mobile 仍保留第三層切換）
- `src/App.jsx`（Varieties/Science/Cultivars 套用左側章節列、修 JSX 結構）
- `src/components/ReadingAssist.jsx`（本頁目錄 + 閱讀進度）
- `src/content/varieties/ChenChuanTeaClassification.jsx`（取消收合、移除原文字眼、綱目區排版）
- `src/content/varieties/PuerhEncyclopedia.jsx`（ReadingAssist selector、sticky 修正）

