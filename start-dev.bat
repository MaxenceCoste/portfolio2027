@echo off
title Portfolio 2027 - Serveur Astro
cd /d "%~dp0"
echo Demarrage du serveur local Portfolio 2027...
call npm run dev -- --open
pause
