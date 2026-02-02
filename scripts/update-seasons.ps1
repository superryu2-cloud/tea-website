# 更新 SeasonsSection 的腳本

$appJsxPath = "d:\tea-website\src\App.jsx"

Write-Host "更新 SeasonsSection..." -ForegroundColor Green

# 讀取文件
$lines = Get-Content $appJsxPath -Encoding UTF8

# 新的 SeasonsSection 代碼
$newSeasonsSection = @'
  const SeasonsSection = () => {
    const [activeSeasonSection, setActiveSeasonSection] = useState('four-seasons');
    const [activeSeasonHref, setActiveSeasonHref] = useState(null);

    const scrollToSeasonSection = (href) => {
      if (typeof window === 'undefined') return;
      if (!href || !href.startsWith('#')) return;
      
      const id = href.slice(1);
      const element = document.getElementById(id);
      
      if (element) {
        const navHeight = document.getElementById('site-nav')?.getBoundingClientRect().height || 0;
        const offset = navHeight + 20;
        const y = element.getBoundingClientRect().top + window.scrollY - offset;
        
        window.scrollTo({ top: y, behavior: 'smooth' });
        window.history.replaceState(null, '', href);
        setActiveSeasonHref(href);
      }
    };

    return (
      <div className="museum-page">
        <div className="w-full">
          <AtlasDockLayout
            topOffsetPx={siteNavHeightPx + 16}
            sidebar={
              <CollapsibleSidebar
                title="章節"
                sections={SEASONS_SECTIONS}
                activeSection={activeSeasonSection}
                activeSectionHref={activeSeasonHref}
                onSelectSection={setActiveSeasonSection}
                onSelectHref={scrollToSeasonSection}
                topOffsetPx={siteNavHeightPx + 16}
              />
            }
          >
            <div className="min-w-0">
              {/* Four Seasons Section */}
              <div id="four-seasons-content">
                <FourSeasonsSection />
              </div>

              {/* Solar Terms Section */}
              <div id="solar-terms-content" className="mt-12">
                <SolarTermsPrimer />
              </div>
            </div>
          </AtlasDockLayout>
        </div>
      </div>
    );
  };
'@

# 找到 SeasonsSection 的開始和結束
$startLine = -1
$endLine = -1
$braceCount = 0
$foundStart = $false

for ($i = 0; $i -lt $lines.Length; $i++) {
    if ($lines[$i] -match 'const SeasonsSection = \(\) =>') {
        $startLine = $i
        $foundStart = $true
    }
    
    if ($foundStart) {
        $braceCount += ($lines[$i] -split '\{', -1).Length - 1
        $braceCount -= ($lines[$i] -split '\}', -1).Length - 1
        
        if ($braceCount -eq 0 -and $i -gt $startLine) {
            $endLine = $i
            break
        }
    }
}

if ($startLine -ge 0 -and $endLine -ge 0) {
    Write-Host "找到 SeasonsSection: 行 $($startLine + 1) 到 $($endLine + 1)" -ForegroundColor Yellow
    
    # 構建新文件
    $newLines = @()
    $newLines += $lines[0..($startLine - 1)]
    $newLines += $newSeasonsSection -split "`r?`n"
    $newLines += $lines[($endLine + 1)..($lines.Length - 1)]
    
    # 保存
    $newLines | Set-Content $appJsxPath -Encoding UTF8
    
    Write-Host "✓ SeasonsSection 已更新！" -ForegroundColor Green
} else {
    Write-Host "錯誤：找不到 SeasonsSection" -ForegroundColor Red
}
