$file = 'src/routes/admin.courses.tsx'
$content = Get-Content $file -Raw
$lines = $content -split "`n"

# Lines 772-1267 need 2 extra spaces at the beginning
# Line numbers are 0-indexed in array, so line 772 = index 771
for ($i = 771; $i -lt 1267; $i++) {
    $lines[$i] = '  ' + $lines[$i]
}

$fixed = $lines -join "`n"
Set-Content $file $fixed
Write-Host 'Fixed indentation for lines 772-1267'
