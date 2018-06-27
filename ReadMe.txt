Created by Wolfgang Unger, 8.2017

    Simple ExtJS application to setup new project.

    Start page will show a grid and some entries.
    You can select an entry and edit on a detail page.

    You will find already the correct structure under Web pages:
    -app
    --model
    --store
    --view

    Start the Application in your browser on:
    http://localhost:1841

    Required :  Pre-Conditions:
    Project MicroServiceJEE7
    (Simple CA4 example with 2 entities and REST endpoints - also here in GIT)
    MicroServiceJEE7 deployed and running
    call to
    http://localhost:8080/microServiceJEE7/api/v1/sample/salesOrders/
    must return json object with sales orders

    ExtJS project can be deployed on a pure web-server, so web-app and enterprise app ( on app server) are 
    seperated:
    ExtJS6 war on Apache Server
    MicroServiceJEE7 on Application Server

    You can start the Web App with the Bat File 
    SenchWebStartAndWatcher
    This will launch the Sencha Webserver via Sencha cmd
    A local App Server (GF4) must run on your local machine with MicroServiceJEE7 deployed and running.

SenchaWebStartProduction will also copy some files in the /build/prodcution folder

In the web.xml you find the redirect to the Application Server URL
http://localhost:8080/microServiceJEE7/api

---------------------------------

