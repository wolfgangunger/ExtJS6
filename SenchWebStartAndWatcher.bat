call env.bat
cd %base_path%\src\main\webapp
rem call sencha app build development
start sencha web start --j2ee
rem start sencha -debug web start --j2ee
call sencha app watch
pause