/* global Ext, StringUtil */

/**
 * Global Service to get or add url parameter
 */
Ext.define('ExtJS6.global.service.UrlParameterService', {
    singleton: true,
    alternateClassName: 'UrlParameterService',
    requires: ['Ext.util.History',
        'ExtJS6.util.StringUtil'],

        
    /**
     * Parameters which should be cleared if the page (alias changes)
     */
    clearOnPageChange: ['grid_view', 'grid_filter'],

    /**
     * To save the last Created Token
     * @type String
     */
    lastCreatedToken: null,
    
    /**
     * The last save alias
     */
    lastPageKey: null,
    
    
    // TODO maybe store the data in a model or the session or in a cookie
    data: {
        parameter: {}
    },

    /**
     * To initialize this service
     * @public
     */
    init: function () {
        var me = this;
        me.lastCreatedToken = Ext.util.History.getToken();
        me.lastPageKey = me.lastCreatedToken.split('/')[0];
        
        Ext.util.History.on('change', function (token, eOpts) {
           // If the token are different the url was changed by the user!
           if(me.lastCreatedToken !== token) {
               me.parseParameterFromUrl(true);
           }
           else {
               me.clearParametersOnAliasChange(token);
           }
           me.lastPageKey = token.split('/')[0];
           
        }, null, {priority: 1000 });

        me.parseParameterFromUrl(true);
    },
    
    /**
     * If the page changes (alias) some parameters should be cleared
     * @private
     */
    clearParametersOnAliasChange: function(newToken) {
        var me = this;
        var x1 = me.lastPageKey.split('/')[0];
        var x2 = newToken.split('/')[0];
        if(x1 !== x2) {
            Ext.each(me.clearOnPageChange, function(item){
               me.clearParameter(item, false); 
            });
            me.refreshUrl();
        }
    },

    /**
     * Function to refresh to url.
     * Page won't be reloaded, only url change!!
     */
    refreshUrl: function () {
        var me = this;
        var token = me.buildParameterUriToken(Ext.util.History.getToken());
        history.pushState(null, null, '#' + token);
        // Hard reload!!
        /* var ar = Ext.ComponentQuery.query('app-main');
         if(ar && ar.length > 0) {
         var c = Ext.ComponentQuery.query('app-main')[0].controller;
         if(c) {
         c.redirectTo(Ext.util.History.getToken(), false);
         }
         }*/
    },

    /**
     * Setter
     * @param {type} key
     * @param {type} value
     * @param {Boolean} refreshUrl
     */
    setParameter: function (key, value, refreshUrl) {
        var me = this;
        me.data.parameter[key] = value;
        if (refreshUrl) {
            me.refreshUrl();
        }
    },

    /**
     * Returns an parameter
     * @param {type} key
     * @returns {String}
     * @public
     */
    getParameter: function (key) {
        var me = this;
        return me.data.parameter[key];
    },

    /**
     * Returns a list of parameter mappings
     * @returns {Object}
     * @public
     */
    getParameters: function () {
        return this.data.parameter;
    },

    /**
     * To remove an parameter
     * @param {String} key
     * @param {Boolean} refreshUrl
     */
    clearParameter: function (key, refreshUrl) {
        var me = this;
        delete me.data.parameter[key];
        if (refreshUrl) {
            me.refreshUrl();
        }
    },
    
    /**
     * Is clearing all parameters 
     * @param {Boolean} refreshUrl
     */
    clearAllParameters: function(refreshUrl) {
        var me = this;
       // delete me.data.parameter;
        me.data.parameter = {};
        if (refreshUrl) {
            me.refreshUrl();
        }
    },

    /**
     * Is parsing parameter from the url
     * Example http://localhost:8080/atg/#validation-planning-project/parm1-value1,param2-value2
     * -> [{key: 'param1', value: 'value1'}, ...
     * @param {Boolean} useParameters - the cached parameter in this service will be cleared and filled with the new parsed ones
     * @returns {Array}
     * @public
     */
    parseParameterFromUrl: function (useParameters) {
        var me = this;
        var ret = [];
        var token = Ext.util.History.getToken();
        var params = token.split('--');
        if (params.length > 1) {
            var paramStr = decodeURIComponent(params[params.length - 1]);
            Ext.each(paramStr.split(','), function (param) {
                if (param.length >= 3) {
                    var mapping = param.split('-');
                    if (mapping.length >= 2 && mapping[0].length > 0 && mapping[1].length > 0) {
                        ret.push({
                            key: mapping[0],
                            value: mapping[1]
                        });
                    }
                }
            });
        }

        if (useParameters) {
            me.clearAllParameters(false);
            Ext.each(ret, function (mapping) {
                me.setParameter(mapping.key, mapping.value);
            });
        }

        return ret;
    },

    /**
     * Is building a new uri token with all current set parameters included
     * @param {String} pageKey - the xtype of the
     * @returns {String}
     * @public
     */
    buildParameterUriToken: function (pageKey) {
        var me = this;
        var str = '--';
        pageKey = StringUtil.removeTrailingAfterMatch(pageKey, '--');
        pageKey = StringUtil.trimTrailingChars(pageKey, '/');

        var param = me.getParameters();

        for (var prop in param) {
            str += prop + '-' + param[prop] + ',';
        }

        if (str.length <= 2) {
            me.lastCreatedToken = pageKey;
            return pageKey;
        }

        str = StringUtil.trimTrailingChars(str, ',');
        //  str = encodeURIComponent(str);
        str = '/' + str;

        str = pageKey + str;

        me.lastCreatedToken = str;
        return str;
    },

    /**
     * Is returning the current alias(xtype) from the url!
     * @returns {String}
     * @public
     */
    getAliasFromUrl: function () {
        var alias = Ext.util.History.getToken().split('/')[0];
        return alias;
    }
});