# sync-upstream.ps1
# 同步上游更新，保留自定义配置（环境变量）

Write-Host "=== 同步上游更新 ===" -ForegroundColor Cyan

# 1. 备份你的 workflow 配置
Write-Host "1. 备份自定义配置..." -ForegroundColor Yellow
Copy-Item .github/workflows/daily-digest.yml .github/workflows/daily-digest.yml.bak
Copy-Item .github/workflows/weekly-digest.yml .github/workflows/weekly-digest.yml.bak
Copy-Item .github/workflows/monthly-digest.yml .github/workflows/monthly-digest.yml.bak

# 2. 获取上游
Write-Host "2. 获取上游更新..." -ForegroundColor Yellow
git fetch upstream

# 3. 合并上游（源码 + workflow）
Write-Host "3. 合并上游..." -ForegroundColor Yellow
git merge upstream/master --no-edit

# 4. 恢复你的 workflow 配置
Write-Host "4. 恢复自定义配置..." -ForegroundColor Yellow
Copy-Item .github/workflows/daily-digest.yml.bak .github/workflows/daily-digest.yml -Force
Copy-Item .github/workflows/weekly-digest.yml.bak .github/workflows/weekly-digest.yml -Force
Copy-Item .github/workflows/monthly-digest.yml.bak .github/workflows/monthly-digest.yml -Force

# 5. 添加新功能所需的环境变量（DEEPSEEK_API_KEY）
Write-Host "5. 添加 DEEPSEEK_API_KEY 到 daily workflow..." -ForegroundColor Yellow
$content = Get-Content .github/workflows/daily-digest.yml -Raw
$content = $content -replace 'OPENROUTER_MODEL:.*\n', "`$0          DEEPSEEK_API_KEY: `${{ secrets.DEEPSEEK_API_KEY }}`n"
Set-Content .github/workflows/daily-digest.yml $content

# 6. 清理备份
Write-Host "6. 清理备份文件..." -ForegroundColor Yellow
Remove-Item .github/workflows/*.bak -Force

# 7. 提交
Write-Host "7. 提交更改..." -ForegroundColor Yellow
git add -A
git commit -m "sync upstream: add DeepSeek fallback, feishu multi-webhook, close stale issues"

# 8. 推送
Write-Host "8. 推送到远程..." -ForegroundColor Yellow
git push origin master

Write-Host "=== 同步完成 ===" -ForegroundColor Green
