Ext.define('ExtJS6.view.salesOrder.SalesOrderGridCtrl', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.sales-order-grid-ctrl',
    
    onEdit: function () {
        var me = this;
        var model = me.getView().getSelectionModel();
        var records = model.getSelection();
        var ct = Ext.getCmp('sales-order-ct');
        ct.setActiveItem(1);
        var detail = Ext.getCmp('sales-order-detail');
        detail.getController().initialize(records);
    },
    onRefresh: function () {
        var me = this;
        me.getView().getStore().reload();
    },
    onActivate: function(grid, eOpts){
        var me = this;
        me.onRefresh();
    }

});
