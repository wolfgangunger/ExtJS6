/**
 *
 */
Ext.define('ExtJS6.model.salesOrder.SalesOrder', {
    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields: [{
            name: 'id',
            type: 'int'
        },
        {
            name: 'version',
            type: 'int'
        },
        {
            name: 'description',
            type: 'string'
        },
        {
            name: 'orderNumber',
            type: 'string'
        },
        {
            name: 'details'
        }],
    proxy: {
        type: 'rest',
        url: 'microServiceJEE7/api/v1/sample/salesOrders',
        reader: {
            type: 'json'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        },
        listeners: {
            exception: function (proxy, response, operation) {
                Ext.MessageBox.show({
                    title: 'REMOTE EXCEPTION',
                    msg: operation.getError(),
                    icon: Ext.MessageBox.ERROR,
                    buttons: Ext.Msg.OK
                });
            }
        }
    }

});

