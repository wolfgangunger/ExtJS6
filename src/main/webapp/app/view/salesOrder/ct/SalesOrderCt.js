/**
 * The Sample Crud Container
 */
Ext.define('ExtJS6.view.salesOrder.ct.SalesOrderCt', {

    extend : 'Ext.container.Container',

    alias : 'widget.sales-order-ct',

    layout : 'card',
    
    id: 'sales-order-ct',


    items : [{
        xtype : 'sales-order-grid'
    }, {
       xtype : 'sales-order-detail'
    }]

});
