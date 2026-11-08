$ff = 'C:\Users\ASUS\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-9.0.2-full_build\bin\ffmpeg.exe'
$dir = 'c:\Users\ASUS\OneDrive\Desktop\rolac\public\photos'
$outDir = Join-Path $dir 'hq'
New-Item -ItemType Directory -Force -Path $outDir | Out-Null
$files = Get-ChildItem $dir -Filter *.mp4
foreach ($f in $files) {
    $out = Join-Path $outDir ($f.BaseName + '.mp4')
    Write-Host "Processing $($f.Name)"
    & $ff -y -i $f.FullName -c:v libx264 -crf 26 -preset slow -vf "scale=-2:'min(1080,ih)'" -movflags +faststart -c:a aac -b:a 96k $out 2>&1 | Out-Null
}
Write-Host '--- RESULTS ---'
Get-ChildItem $outDir | ForEach-Object { "$($_.Name) :: $([math]::Round($_.Length/1MB,2)) MB" }
