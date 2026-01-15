# 簡體轉繁體自動化腳本
# 使用方法: .\scripts\convert-to-traditional.ps1 -FilePath "path\to\file.jsx"

param(
    [Parameter(Mandatory=$true)]
    [string]$FilePath
)

# 簡體到繁體的映射表
$conversionMap = @{
    '粘' = '黏'
    '咸' = '鹹'  # 注意：咸豐年號除外
    '这' = '這'
    '体' = '體'
    '复' = '複'
    '杂' = '雜'
    '为' = '為'
    '认' = '認'
    '识' = '識'
    '说' = '說'
    '话' = '話'
    '语' = '語'
    '过' = '過'
    '们' = '們'
    '学' = '學'
    '习' = '習'
    '实' = '實'
    '际' = '際'
    '应' = '應'
    '该' = '該'
}

# 檢查文件是否存在
if (-not (Test-Path $FilePath)) {
    Write-Error "文件不存在: $FilePath"
    exit 1
}

# 讀取文件內容（UTF-8）
$content = Get-Content $FilePath -Raw -Encoding UTF8

# 執行轉換
$modified = $false
foreach ($key in $conversionMap.Keys) {
    $value = $conversionMap[$key]
    
    # 特殊處理：跳過「咸豐」
    if ($key -eq '咸') {
        if ($content -match '咸豐') {
            Write-Host "保留歷史年號：咸豐"
            continue
        }
    }
    
    if ($content -match $key) {
        $content = $content -replace $key, $value
        Write-Host "轉換: $key → $value"
        $modified = $true
    }
}

# 如果有修改，寫回文件
if ($modified) {
    $content | Out-File -FilePath $FilePath -Encoding UTF8 -NoNewline
    Write-Host "✓ 文件已更新: $FilePath" -ForegroundColor Green
} else {
    Write-Host "○ 未發現需要轉換的簡體字" -ForegroundColor Yellow
}
