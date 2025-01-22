@echo off
REM Cambia al directorio de tu proyecto (esto es opcional si ya estás en la raíz)
cd /d "%~dp0"

REM Inicia el servidor de Express
start cmd /k "node app.js"

REM Espera un momento para asegurarte de que el servidor esté en funcionamiento
timeout /t 5

REM Abre el navegador con la URL de tu aplicación
start http://localhost:3000