Ext.define('ExtJS6.view.salesOrder.SalesOrderGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.sales-order-grid',
    controller: 'sales-order-grid-ctrl',
    store: {type: 'sales-order-store'},
    columns: [{
            text: 'ID',
            dataIndex: 'id',
            width: 130

        },
        {
            text: 'version',
            dataIndex: 'version',
            width: 130,
            hidden: true
        },
        {
            text: 'OrderNumber'.i18n(),
            dataIndex: 'orderNumber',
            width: 130

        },
        {
            text: 'Description'.i18n(),
            dataIndex: 'description',
            width: 330

        }],
    dockedItems: [{
            xtype: 'toolbar',
            items: [
                {
                    xtype: 'button',
                    text: 'Aktualisieren',
                    handler: 'onRefresh'
                },
                {
                    xtype: 'button',
                    text: 'Bearbeiten',
                    handler: 'onEdit'
                }

            ]
        }],
    listeners: { activate: 'onActivate'}

});
