# Cloudflare Pages 上線（Vite + React）

這個專案是 Vite + React 靜態網站，最適合用 Cloudflare Pages 直接部署 `dist/`。

## 你可以繼續在電腦開發嗎？

可以。流程是：

1. 你在電腦本機開發與測試（`npm run dev`）
2. 需要更新時，把修改推到 GitHub（`git push`）
3. Cloudflare Pages 會自動重新 build + 部署（幾十秒到幾分鐘），國外老師用同一個網址就能看到最新內容

## 一次性設定（第一次上線）

### 1) 把專案放到 GitHub

在專案資料夾執行：

```bash
git init
git add -A
git commit -m "init"
git branch -M main
git remote add origin <你的 GitHub repo URL>
git push -u origin main
```

### 2) Cloudflare Pages 建立專案

1. 登入 Cloudflare Dashboard
2. 進入 **Workers & Pages** → **Create** → **Pages**
3. 選 **Connect to Git**，連結 GitHub 並選擇你的 repo
4. Build 設定填以下：
   - Framework preset：`Vite`
   - Build command：`npm run build`
   - Build output directory：`dist`

完成後 Cloudflare 會給你一個網址（例如 `https://xxx.pages.dev`）。

## 之後更新（最簡單）

每次更新只要：

```bash
git add -A
git commit -m "update content"
git push
```

Cloudflare Pages 會自動部署到同一個網址。

## 常見問題

### 1) 為什麼我點到某個路徑會 404？

已加入 `public/_redirects`，會把所有路徑導回 `index.html`（SPA 常用設定）。你不需要手動處理。

### 2) Node 版本要設嗎？

通常不用；若你遇到 build 失敗，可以在 Pages 設定環境變數：

- `NODE_VERSION=20`

