## Script to generate the Pablow
$settingsJson = Get-Content -Raw -Path "../settings/appsettings.json" | ConvertFrom-Json
$botId = $settingsJson.MicrosoftAppId

$manifestJson = ((Get-Content "./manifest.template.json") `
| Foreach-Object {$_ -replace "<BOT_ID>", $botId} `
)
$manifestJson | out-file manifest.json -encoding utf8

Compress-Archive -Force -Path ".\manifest.json", ".\color.png", ".\outline.png" -DestinationPath ".\pablow.zip"
