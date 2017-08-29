Ext.onReady(function () {

    Ext.enableAriaPanels = false;
    Ext.ariaWarn = Ext.emptyFn;
});

Ext.application({
    name: 'extjs6',
    extend: 'ExtJS6.Application',
    requires: [
        'ExtJS6.util.*',
        'ExtJS6.view.*',
        'ExtJS6.store.*',
        'ExtJS6.model.*',
        'Ext.chart.*',
        'Ext.app.*',
        'Ext.tree.*',
        'Ext.container.*',
        'Ext.button.*',
        'Ext.dd.*',
        'Ext.window.*',
        'Ext.grid.*',
        'Ext.Mixin',
        'Ext.menu.*',
        'Ext.form.*',
        'Ext.data.*',
        'Ext.panel.*',
        'Ext.tab.*',
        'Ext.plugin.*',
        'Ext.chart.*',
        'Ext.locale.*',
        'Ext.dashboard.*',
        'Ext.toolbar.*'
    ]

            // Will be created after app initializer (async) is finished
            //mainView : 'ExtJS6.view.main.Main'

});
