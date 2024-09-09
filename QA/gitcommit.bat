@echo off
setlocal

:: Use the current directory where the script is run
set "repo_dir=%cd%"

:: Change directory to the current directory
cd /d "%repo_dir%"

:: Stage changes
git add .

:: Commit changes with the entered message
git commit -m "commit"

:: Push changes to the origin remote
git push origin main

:: Push changes to the backup remote
git push backup main

endlocal
