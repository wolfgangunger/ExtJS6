call env.bat
cd %base_path%\src\main\webapp
REM call sencha app build production

cd %base_path%\src\main\webapp\build\production

rem Copy necessary files
xcopy  /F/E/I/Y ..\..\WEB-INF WEB-INF
xcopy  /F/Y "..\..\i18n.js" "extjs6\i18n.js"*
xcopy  /F/E/I/Y ..\..\i18n "extjs6\i18n"
xcopy  /F/E/I/Y ..\..\constants "extjs6\constants"

REM pause
start sencha web start --j2ee
