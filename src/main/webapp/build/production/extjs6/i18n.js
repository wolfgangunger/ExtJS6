
function getLanguage() {
    var locale;
    var lang = getLangParameterFromUrl();


    if(!lang) {
       lang = navigator.language; 
    }

    /* German is "de" or a string like "de-DE"; apparently IE pads with whitespace characters */
    var reg = new RegExp("^de(-\w{2})?\s*");
    if (reg.test(lang)) {
        locale = 'de';
    } else {
        locale = 'en';
    }
    return locale;
}

/**
 * Is only working if the lang is the last parameter
 * http://localhost:8080/atg/#validation-planning-project/--active_project_id-15115,lang-en
 * @returns {String}
 */
function getLangParameterFromUrl() {
    var url = window.location.href;
    var par = url.split('lang-');
    if (par.length > 1) {
        var lang = par[par.length - 1];
        return lang;
    }
    return null;
}

var Dictio;
var appLang;

function initDictio(lang) {
    appLang = lang;
    if (!lang) {
        appLang = getLanguage();
    }
    Dictio_DE = Dictio_DE || {};
    Dictio_EN = Dictio_EN || {};
    Dictio = appLang === 'de' ? Dictio_DE : Dictio_EN;
}

initDictio();

/**
 *  "Some sample text".i18n()
 *  "Some sample text".i18n(index)
 *                            - defined as array in Dictio object
 */
String.prototype.i18n = function (index) {
    var idx = index || 0,
            value = Dictio[this];

    /* first try translation, if no translation available return english key */
    if (!value && appLang === 'en') {
        return this.toString();
    }
    switch (typeof (value)) {
        case "string":
            return value;
            break;
        case "object":
            return value[idx];
            break;
    }
    return "[" + this + "]";
}

