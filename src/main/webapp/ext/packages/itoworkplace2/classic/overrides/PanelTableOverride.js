Ext.define('overrides.PanelTableOverride', {

    override: 'Ext.panel.Table',

    constructor: function (config) {
        var me = this,
            bmwTableCls = 'bmw-table',
            cls;
        config = config || {};
        cls = config.cls || me.cls || null;
        if (cls === null) {
            cls = bmwTableCls;
        } else {
            cls = cls + ' ' + bmwTableCls;
        }
        me.cls = config.cls = bmwTableCls;
        me.callParent(arguments);
        return me;
    }

});
