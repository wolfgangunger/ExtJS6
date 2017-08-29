Ext.define('ATG.view.sampleCrud.detail.SalesOrderDetailCtrl', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.sales-order-detail-ctrl',
    initialize: function (records) {
        console.log(records);
        if (records.length > 0) {
            this.loadDetailData(records[0].get('id'));
        }
    },
    loadDetailData: function (id) {
        var me = this;
        var model = Ext.create('ExtJS6.model.salesOrder.SalesOrder', {
            id: id
        });
        model.load({
            scope: this,
            failure: function (record, operation) {
                // do something if the load failed
            },
            success: function (record, operation) {
                console.log(record);
                me.getViewModel().set('modelReference', record);
                me.getViewModel().set('modelData', record.data);
            }
        });

    },
    onSave: function () {
        var me = this;
        var model = me.getViewModel().get('modelReference');
        model.save({
            success: function () {
                var ct = Ext.getCmp('sales-order-ct');
                ct.setActiveItem(0);
            }
        });
    },
    onCancel: function () {
        var ct = Ext.getCmp('sales-order-ct');
        ct.setActiveItem(0);
    }
});

