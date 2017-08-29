/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */

Ext.define('ExtJS6.Application', {
    extend: 'Ext.app.Application',

    name: 'ExtJS6',


    init: function () {
        var me = this;
        
       // UrlParameterService.init();
        Ext.callback(function(){
            me.afterInit();
        });
    },

    /**
     * Has to be called after all async calls to initialize the app are finished
     */
    afterInit: function () {
        Ext.create('ExtJS6.view.main.Main');
    },





    onAppUpdate: function () {
        window.location.reload();
    }
});




