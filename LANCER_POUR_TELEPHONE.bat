@echo off
title Serveur EduGenius pour Telephone
echo =========================================================
echo   SERVEUR EDUGENIUS ACTIF POUR ORDINATEUR ET TELEPHONE
echo =========================================================
echo.
echo 1. Connecte ton telephone au MEME reseau Wi-Fi que ce PC.
echo 2. Ouvre le navigateur de ton telephone (Chrome ou Safari).
echo 3. Tape exactement cette adresse :
echo.
echo        http://192.168.1.119:8000
echo.
echo =========================================================
cd /d "%~dp0"
python -m http.server 8000 --bind 0.0.0.0
pause

