/**
 * Util class to work with strings
 */
Ext.define('ExtJS6.util.StringUtil', {
    singleton: true,
    alternateClassName: 'StringUtil',

    /**
     * Function to trim trailing chars
     * @param {type} s
     * @param {type} charToTrim
     * @returns {String}
     */
    trimTrailingChars: function (s, charToTrim)
    {
        var regExp = new RegExp(charToTrim + "+$");
        var result = s.replace(regExp, "");
        return result;
    },
    
    /**
     * Removes all trailing characters after the first match of the pattern.
     * Example: removeTrailingAfterMatch('Hello123World', '123')
     *          -> 'Hello'
     * @param {String} s
     * @param {String} pattern
     * @returns {String}
     */
    removeTrailingAfterMatch: function(s, pattern) {
        var ar = s.split(pattern);
        if(ar.length > 0) {
            return ar[0];
        }
        return s;
    }

});
