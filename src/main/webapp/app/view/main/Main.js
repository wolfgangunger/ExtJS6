/**
 * This class is the main view for the application. It is specified in app.js as
 * the "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 */
Ext.define('ExtJS6.view.main.Main', {
    extend : 'Ext.container.Container',
    alias : 'widget.app-main',
    cls : 'atg-container',
    layout : 'border',
    plugins : 'viewport',
    
    viewModel: true,
    
    items : [ {
        region : 'center',
        layout : 'card',
        id : 'mainContent',
        defaults : {
            padding : '0 0 0 0',
            scrollable: 'y'
        },
        items : [{
            border : false,
            xtype : 'sales-order-ct'
        }]
    }]

});
