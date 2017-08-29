Ext.define('ATG.view.sampleCrud.detail.SalesOrderDetail', {

    extend : 'Ext.form.Panel',

    alias : 'widget.sales-order-detail',

    controller : 'sales-order-detail-ctrl',
    
    viewModel: 'sales-order-detail-vm',
    
    id: 'sales-order-detail',
    
    items: [{
        hidden: true,
        name: 'id',
        xtype: 'textfield',
        bind: '{modelData.id}'
    },
    {
        hidden: true,
        name: 'version',
        xtype: 'textfield',
        bind: '{modelData.version}'
    },
    	{
        fieldLabel: 'OrderNumber',
        name: 'orderNumber',
        xtype: 'textfield',
        bind: '{modelData.orderNumber}'
    }, {
        fieldLabel: 'Description',
        name: 'description',
        xtype: 'textarea',
        bind: '{modelData.description}'
    }
    ],
        dockedItems: [{
            xtype: 'toolbar', 
            items: [{
                    xtype: 'button',
                    text: 'Abbrechen',
                    handler: 'onCancel'
            },
            {
                    xtype: 'button',
                    text: 'Speichern',
                    handler: 'onSave'
            }
        ]
    }]

});
