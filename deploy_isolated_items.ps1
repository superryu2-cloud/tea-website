
$sourceDir = "C:\Users\USER\.gemini\antigravity\brain\3d6d51f1-7d2f-492a-99a7-b3cc3ebb621e"
$destDir = "d:\tea-website\public\images\ceremony"

$files = @(
    @("tea_item_pot_isolated_1769759247562.png", "tea_item_pot.png"),
    @("tea_item_pitcher_isolated_1769759306892.png", "tea_item_pitcher.png"),
    @("tea_item_caddy_isolated_1769759366154.png", "tea_item_caddy.png"),
    @("tea_item_bowl_isolated_1769760572147.png", "tea_item_bowl.png"),
    @("tea_item_towel_isolated_1769760611823.png", "tea_item_towel.png"),
    @("tea_item_scoop_isolated_1769760642506.png", "tea_item_scoop.png"),
    @("tea_item_vase_isolated_1769760687028.png", "tea_item_vase.png"),
    @("tea_item_lidrest_isolated_1769760709897.png", "tea_item_lidrest.png")
)

foreach ($pair in $files) {
    Copy-Item -Path "$sourceDir\$($pair[0])" -Destination "$destDir\$($pair[1])" -Force
    Write-Host "Deployed $($pair[1])"
}
