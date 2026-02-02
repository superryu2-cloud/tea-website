# 替換 CultivarSection 佈局的腳本

$appJsxPath = "d:\tea-website\src\App.jsx"

Write-Host "開始替換 CultivarSection 佈局..." -ForegroundColor Green

# 讀取文件
$content = Get-Content $appJsxPath -Encoding UTF8 -Raw

# 定義要替換的舊佈局模式（從 AtlasDockLayout 開始到結束）
$oldPattern = @'
          <AtlasDockLayout
            topOffsetPx={siteNavHeightPx \+ 16}
            sidebar={
              <CollapsibleSidebar
                title="章節"
                sections={CULTIVARS_SECTIONS}
                activeSection={activeCultivarSection}
                activeSectionHref={activeCultivarHref}
                onSelectSection={setActiveCultivarSection}
                onSelectHref={scrollToCultivarSection}
                topOffsetPx={siteNavHeightPx \+ 16}
                pinMode="static"
              />
            }
          >
            <div className="min-w-0">
'@

# 定義新的佈局結構
$newLayout = @'
          {/* 水平導航 */}
          <HorizontalNavigation
            sections={CULTIVARS_SECTIONS}
            activeSection={activeCultivarSection}
            activeSectionHref={activeCultivarHref}
            onSelectSection={setActiveCultivarSection}
            onSelectHref={scrollToCultivarSection}
            stickyTop={siteNavHeightPx}
          />

          {/* 主要內容區域 - 全寬 */}
          <div className="w-full">
            <div className="max-w-7xl mx-auto px-6">
'@

# 執行替換
if ($content -match [regex]::Escape($oldPattern)) {
    $content = $content -replace [regex]::Escape($oldPattern), $newLayout
    Write-Host "✓ 已替換 AtlasDockLayout 開頭" -ForegroundColor Green
} else {
    Write-Host "⚠ 找不到 AtlasDockLayout 開頭模式" -ForegroundColor Yellow
}

# 還需要替換結尾的 </div></AtlasDockLayout>
$oldEnd = @'
            </div>
          </AtlasDockLayout>
'@

$newEnd = @'
            </div>
          </div>
'@

if ($content -match [regex]::Escape($oldEnd)) {
    $content = $content -replace [regex]::Escape($oldEnd), $newEnd
    Write-Host "✓ 已替換 AtlasDockLayout 結尾" -ForegroundColor Green
} else {
    Write-Host "⚠ 找不到 AtlasDockLayout 結尾模式" -ForegroundColor Yellow
}

# 保存文件
$content | Set-Content $appJsxPath -Encoding UTF8 -NoNewline

Write-Host "`n完成！CultivarSection 佈局已更新為水平導航" -ForegroundColor Green
