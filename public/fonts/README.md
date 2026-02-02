把霞鶩文楷（LXGW WenKai TC）的 woff2 字體檔放在這裡（網站會用本機載入，不依賴外部 CDN）。

請放兩個檔案（檔名需一致）：
- `public/fonts/LXGWWenKaiTC-Regular.woff2`
- `public/fonts/LXGWWenKaiTC-Bold.woff2`

字體載入設定位置：
- `src/index.css`（`@font-face`）
- `tailwind.config.js`（把 Tailwind 的 `font-serif` / `font-sans` 指到 `LXGW WenKai TC`）

