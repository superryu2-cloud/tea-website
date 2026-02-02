# Cloudflare Pages 手動上傳（不接 Git）

如果你不想連結 GitHub，也可以每次 build 後手動上傳 `dist/`。

1. 本機 build：

```bash
npm run build
```

2. Cloudflare Pages 專案 → Deployments → Upload assets（或用 Wrangler）

## Wrangler（進階）

若你已安裝並登入 Wrangler：

```bash
npx wrangler pages deploy dist --project-name <你的專案名稱>
```

