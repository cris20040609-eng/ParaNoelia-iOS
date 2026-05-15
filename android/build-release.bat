@echo off
set "ANDROID_HOME=C:\Users\CRIS GUTIERREZ\AppData\Local\Android\Sdk"
set "ANDROID_SDK_ROOT=%ANDROID_HOME%"
cd /d "%~dp0"
call gradlew.bat assembleRelease
