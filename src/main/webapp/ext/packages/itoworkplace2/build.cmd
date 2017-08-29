echo off
setlocal
cd %~dp0
sencha package build
set t=..\..\classic\theme-itoworkplace2
set p=/s/q/y
rem echo ---- DEPLOYING TO classic
rem xcopy %p% .sencha %t%\.sencha
rem xcopy %p% licenses %t%\licenses
rem xcopy %p% overrides %t%\overrides
rem xcopy %p% resources %t%\resources
rem xcopy %p% sass %t%\sass
rem xcopy %p% src %t%\src
rem xcopy /q/y *.* %t%
endlocal