# 簡繁轉換工具使用說明

## 功能

自動將文件中的簡體中文轉換為繁體中文，並確保 UTF-8 編碼正確。

## 使用方法

### 單個文件轉換

```powershell
.\scripts\convert-to-traditional.ps1 -FilePath "src\content\academy\NewChapter.jsx"
```

### 批量轉換（整個目錄）

```powershell
Get-ChildItem -Path "src\content" -Include *.jsx,*.js -Recurse | ForEach-Object {
    .\scripts\convert-to-traditional.ps1 -FilePath $_.FullName
}
```

## 轉換對照表

| 簡體 | 繁體 |
|------|------|
| 粘 | 黏 |
| 咸 | 鹹 |
| 这 | 這 |
| 体 | 體 |
| 复 | 複 |
| 杂 | 雜 |
| 为 | 為 |
| 认 | 認 |
| 识 | 識 |
| 说 | 說 |
| 话 | 話 |
| 语 | 語 |
| 过 | 過 |
| 们 | 們 |
| 学 | 學 |
| 习 | 習 |
| 实 | 實 |
| 际 | 際 |
| 应 | 應 |
| 该 | 該 |

## 特殊處理

- **咸豐**：歷史年號，自動跳過不轉換

## 注意事項

1. 腳本會自動使用 UTF-8 編碼
2. 轉換前會檢查文件是否存在
3. 只有發現簡體字時才會修改文件
4. 轉換完成後會顯示詳細報告
