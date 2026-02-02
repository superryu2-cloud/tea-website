# App.jsx 自動修改腳本
# 此腳本會完成剩餘的 App.jsx 修改

$appJsxPath = "d:\tea-website\src\App.jsx"
$backupPath = "d:\tea-website\src\App.jsx.backup"

Write-Host "開始修改 App.jsx..." -ForegroundColor Green

# 1. 創建備份
Write-Host "創建備份..." -ForegroundColor Yellow
Copy-Item $appJsxPath $backupPath -Force

# 2. 讀取文件
$content = Get-Content $appJsxPath -Encoding UTF8 -Raw

# 3. 修改 1: 添加 cultivar 狀態變量
Write-Host "添加 cultivar 狀態變量..." -ForegroundColor Yellow
$pattern1 = '(\s+const \[showCultivarDiversity, setShowCultivarDiversity\] = useState\(true\);)\s+(const cultivarsSidebarItems)'
$replacement1 = '$1' + "`n    const [activeCultivarSection, setActiveCultivarSection] = useState('taiwan-cultivars');" + "`n    const [activeCultivarHref, setActiveCultivarHref] = useState(null);" + "`n    " + '$2'
$content = $content -replace $pattern1, $replacement1

# 4. 修改 2: 更新 cultivar 側邊欄
Write-Host "更新 cultivar 側邊欄..." -ForegroundColor Yellow
$pattern2 = '<ChapterSidebar\s+title="章節"\s+items=\{cultivarsSidebarItems\}\s+activeKey=\{cultivarsSubnav\?\.activeHref \?\? CULTIVARS_TOC\[0\]\?\.href\}\s+onSelectKey=\{\(href\) => scrollToCultivarSection\(href\)\}\s+topOffsetPx=\{siteNavHeightPx \+ 16\}\s+pinMode="static"\s+/>'
$replacement2 = '<CollapsibleSidebar' + "`n                  title=`"章節`"" + "`n                  sections={CULTIVARS_SECTIONS}" + "`n                  activeSection={activeCultivarSection}" + "`n                  activeSectionHref={activeCultivarHref}" + "`n                  onSelectSection={setActiveCultivarSection}" + "`n                  onSelectHref={scrollToCultivarSection}" + "`n                  topOffsetPx={siteNavHeightPx + 16}" + "`n                  pinMode=`"static`"" + "`n                />"
$content = $content -replace $pattern2, $replacement2

# 5. 修改 3: 添加 CultivarMysterySection
Write-Host "添加 CultivarMysterySection..." -ForegroundColor Yellow
$pattern3 = '(<div id="cultivar-diversity"[^>]*>.*?</div>\s*</div>)\s*(<div className="max-w-2xl mx-auto mb-12)'
$replacement3 = '$1' + "`n`n                {/* Cultivar Mystery Section */}" + "`n                <div id=`"cultivar-mystery`" className=`"mb-12 scroll-mt-28`">" + "`n                  <CultivarMysterySection />" + "`n                </div>" + "`n`n                " + '$2'
$content = $content -replace $pattern3, $replacement3

# 6. 修改 4: 更新 scrollToCultivarSection
Write-Host "更新 scrollToCultivarSection..." -ForegroundColor Yellow
$pattern4 = '(const scrollToCultivarSection = \(href\) => \{[^}]*?)(tryScroll\(\);)'
$replacement4 = '$1' + "setActiveCultivarHref(href);`n      " + '$2'
$content = $content -replace $pattern4, $replacement4

# 7. 保存文件
Write-Host "保存修改..." -ForegroundColor Yellow
$content | Set-Content $appJsxPath -Encoding UTF8 -NoNewline

Write-Host "`n完成！已修改以下內容：" -ForegroundColor Green
Write-Host "  ✓ 添加了 activeCultivarSection 和 activeCultivarHref 狀態" -ForegroundColor Cyan
Write-Host "  ✓ 更新了 cultivar 側邊欄為 CollapsibleSidebar" -ForegroundColor Cyan
Write-Host "  ✓ 添加了 CultivarMysterySection 組件" -ForegroundColor Cyan
Write-Host "  ✓ 更新了 scrollToCultivarSection 函數" -ForegroundColor Cyan
Write-Host "`n備份文件已保存到: $backupPath" -ForegroundColor Yellow
Write-Host "`n下一步：需要手動更新 SeasonsSection（約第2073行）" -ForegroundColor Magenta
