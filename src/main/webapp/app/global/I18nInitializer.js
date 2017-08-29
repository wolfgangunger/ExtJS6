/* global appLang */

/**
 * Singelton to inialize the needed internationalisation
 */
Ext.define('ExtJS6.global.I18nInitializer', {
    singleton: true,
    alternateClassName: 'I18nInitializer',
    appLanguage: 'en',
    requires: ['ExtJS6.global.service.UrlParameterService'],

    /**
     * Init function: Is reading out the app language and
     * is initializing the internationalization for the ext components
     */
    init: function () {
        var me = this;
        me.appLanguage = appLang;
        if (me.appLanguage === 'de') {
            me.initDE();
        } else {
            me.initEN();
        }
    },

    /**
     * Getter for the language
     * @returns {String}
     */
    getLanguage: function () {
        var me = this;
        return me.appLanguage;
    },
    
    /**
     * Override components with the english language
     */
    initEN: function () {
        if (Ext.data && Ext.data.Types) {
            Ext.data.Types.stripRe = /[\$,%]/g;
        }
        if (Ext.Date) {
            Ext.Date.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August",
                "September", "October", "November", "December"];
            Ext.Date.getShortMonthName = function (a) {
                return Ext.Date.monthNames[a].substring(0, 3);
            };
            Ext.Date.monthNumbers = {
                January: 0,
                Jan: 0,
                February: 1,
                Feb: 1,
                March: 2,
                Mar: 2,
                April: 3,
                Apr: 3,
                May: 4,
                June: 5,
                Jun: 5,
                July: 6,
                Jul: 6,
                August: 7,
                Aug: 7,
                September: 8,
                Sep: 8,
                October: 9,
                Oct: 9,
                November: 10,
                Nov: 10,
                December: 11,
                Dec: 11
            };
            Ext.Date.getMonthNumber = function (a) {
                return Ext.Date.monthNumbers[a.substring(0, 1).toUpperCase()
                        + a.substring(1, 3).toLowerCase()];
            };
            Ext.Date.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            Ext.Date.getShortDayName = function (a) {
                return Ext.Date.dayNames[a].substring(0, 3);
            };
            Ext.Date.parseCodes.S.s = "(?:st|nd|rd|th)";
            Ext.Date.firstDayOfWeek = 0;
            Ext.Date.weekendDays = [6, 0];
        }
        if (Ext.util && Ext.util.Format) {
            Ext.apply(Ext.util.Format, {
                thousandSeparator: ",",
                decimalSeparator: ".",
                currencySign: "$",
                dateFormat: "m/d/Y"
            });
        }
    },

    /**
     * Override components with the german language
     */
    initDE: function () {
        if (Ext.Date) {
            Ext.Date.monthNames = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August",
                "September", "Oktober", "November", "Dezember"];
            Ext.Date.defaultFormat = "d.m.Y";
            Ext.Date.getShortMonthName = function (a) {
                return Ext.Date.monthNames[a].substring(0, 3);
            };
            Ext.Date.monthNumbers = {
                Jan: 0,
                Feb: 1,
                "M\u00e4r": 2,
                Apr: 3,
                Mai: 4,
                Jun: 5,
                Jul: 6,
                Aug: 7,
                Sep: 8,
                Okt: 9,
                Nov: 10,
                Dez: 11
            };
            Ext.Date.getMonthNumber = function (a) {
                return Ext.Date.monthNumbers[a.substring(0, 1).toUpperCase()
                        + a.substring(1, 3).toLowerCase()];
            };
            Ext.Date.dayNames = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag",
                "Samstag"];
            Ext.Date.getShortDayName = function (a) {
                return Ext.Date.dayNames[a].substring(0, 3);
            };
        }
        if (Ext.util && Ext.util.Format) {
            Ext.util.Format.__number = Ext.util.Format.number;
            Ext.util.Format.number = function (a, b) {
                return Ext.util.Format.__number(a, b || "0.000,00/i");
            };
            Ext.apply(Ext.util.Format, {
                thousandSeparator: ".",
                decimalSeparator: ",",
                currencySign: "\u20ac",
                dateFormat: "d.m.Y"
            });
        }
    }
});

// english
Ext.define("Ext.locale.en.data.validator.Bound", {
    override: "Ext.data.validator.Bound",
    emptyMessage: "Must be present"
});
Ext.define("Ext.locale.en.data.validator.Email", {
    override: "Ext.data.validator.Email",
    message: "Is not a valid email address"
});
Ext.define("Ext.locale.en.data.validator.Exclusion", {
    override: "Ext.data.validator.Exclusion",
    message: "Is a value that has been excluded"
});
Ext.define("Ext.locale.en.data.validator.Format", {
    override: "Ext.data.validator.Format",
    message: "Is in the wrong format"
});
Ext.define("Ext.locale.en.data.validator.Inclusion", {
    override: "Ext.data.validator.Inclusion",
    message: "Is not in the list of acceptable values"
});
Ext.define("Ext.locale.en.data.validator.Length", {
    override: "Ext.data.validator.Length",
    minOnlyMessage: "Length must be at least {0}",
    maxOnlyMessage: "Length must be no more than {0}",
    bothMessage: "Length must be between {0} and {1}"
});
Ext.define("Ext.locale.en.data.validator.Presence", {
    override: "Ext.data.validator.Presence",
    message: "Must be present"
});
Ext.define("Ext.locale.en.data.validator.Range", {
    override: "Ext.data.validator.Range",
    minOnlyMessage: "Must be must be at least {0}",
    maxOnlyMessage: "Must be no more than than {0}",
    bothMessage: "Must be between {0} and {1}",
    nanMessage: "Must be numeric"
});
Ext.define("Ext.locale.en.view.View", {
    override: "Ext.view.View",
    emptyText: ""
});
Ext.define("Ext.locale.en.grid.plugin.DragDrop", {
    override: "Ext.grid.plugin.DragDrop",
    dragText: "{0} selected row{1}"
});
Ext.define("Ext.locale.en.view.AbstractView", {
    override: "Ext.view.AbstractView",
    loadingText: "Loading..."
});
Ext.define("Ext.locale.en.picker.Date", {
    override: "Ext.picker.Date",
    todayText: "Today",
    minText: "This date is before the minimum date",
    maxText: "This date is after the maximum date",
    disabledDaysText: "",
    disabledDatesText: "",
    nextText: "Next Month (Control+Right)",
    prevText: "Previous Month (Control+Left)",
    monthYearText: "Choose a month (Control+Up/Down to move years)",
    todayTip: "{0} (Spacebar)",
    format: "m/d/y",
    startDay: 0
});
Ext.define("Ext.locale.en.picker.Month", {
    override: "Ext.picker.Month",
    okText: "&#160;OK&#160;",
    cancelText: "Cancel"
});
Ext.define("Ext.locale.en.toolbar.Paging", {
    override: "Ext.PagingToolbar",
    beforePageText: "Page",
    afterPageText: "of {0}",
    firstText: "First Page",
    prevText: "Previous Page",
    nextText: "Next Page",
    lastText: "Last Page",
    refreshText: "Refresh",
    displayMsg: "Displaying {0} - {1} of {2}",
    emptyMsg: "No data to display"
});
Ext.define("Ext.locale.en.form.Basic", {
    override: "Ext.form.Basic",
    waitTitle: "Please Wait..."
});
Ext.define("Ext.locale.en.form.field.Base", {
    override: "Ext.form.field.Base",
    invalidText: "The value in this field is invalid"
});
Ext.define("Ext.locale.en.form.field.Text", {
    override: "Ext.form.field.Text",
    minLengthText: "The minimum length for this field is {0}",
    maxLengthText: "The maximum length for this field is {0}",
    blankText: "This field is required",
    regexText: "",
    emptyText: null
});
Ext.define("Ext.locale.en.form.field.Number", {
    override: "Ext.form.field.Number",
    decimalPrecision: 2,
    minText: "The minimum value for this field is {0}",
    maxText: "The maximum value for this field is {0}",
    nanText: "{0} is not a valid number"
});
Ext.define("Ext.locale.en.form.field.Date", {
    override: "Ext.form.field.Date",
    disabledDaysText: "Disabled",
    disabledDatesText: "Disabled",
    minText: "The date in this field must be after {0}",
    maxText: "The date in this field must be before {0}",
    invalidText: "{0} is not a valid date - it must be in the format {1}",
    format: "m/d/y",
    altFormats: "m/d/Y|m-d-y|m-d-Y|m/d|m-d|md|mdy|mdY|d|Y-m-d"
});
Ext.define("Ext.locale.en.form.field.ComboBox", {
    override: "Ext.form.field.ComboBox",
    valueNotFoundText: undefined
}, function () {
    Ext.apply(Ext.form.field.ComboBox.prototype.defaultListConfig, {
        loadingText: "Loading..."
    })
});
Ext.define("Ext.locale.en.form.field.VTypes", {
    override: "Ext.form.field.VTypes",
    emailText: 'This field should be an e-mail address in the format "user@example.com"',
    urlText: 'This field should be a URL in the format "http://www.example.com"',
    alphaText: "This field should only contain letters and _",
    alphanumText: "This field should only contain letters, numbers and _"
});
Ext.define("Ext.locale.en.form.field.HtmlEditor", {
    override: "Ext.form.field.HtmlEditor",
    createLinkText: "Please enter the URL for the link:"
}, function () {
    Ext.apply(Ext.form.field.HtmlEditor.prototype, {
        buttonTips: {
            bold: {
                title: "Bold (Ctrl+B)",
                text: "Make the selected text bold.",
                cls: Ext.baseCSSPrefix + "html-editor-tip"
            },
            italic: {
                title: "Italic (Ctrl+I)",
                text: "Make the selected text italic.",
                cls: Ext.baseCSSPrefix + "html-editor-tip"
            },
            underline: {
                title: "Underline (Ctrl+U)",
                text: "Underline the selected text.",
                cls: Ext.baseCSSPrefix + "html-editor-tip"
            },
            increasefontsize: {
                title: "Grow Text",
                text: "Increase the font size.",
                cls: Ext.baseCSSPrefix + "html-editor-tip"
            },
            decreasefontsize: {
                title: "Shrink Text",
                text: "Decrease the font size.",
                cls: Ext.baseCSSPrefix + "html-editor-tip"
            },
            backcolor: {
                title: "Text Highlight Color",
                text: "Change the background color of the selected text.",
                cls: Ext.baseCSSPrefix + "html-editor-tip"
            },
            forecolor: {
                title: "Font Color",
                text: "Change the color of the selected text.",
                cls: Ext.baseCSSPrefix + "html-editor-tip"
            },
            justifyleft: {
                title: "Align Text Left",
                text: "Align text to the left.",
                cls: Ext.baseCSSPrefix + "html-editor-tip"
            },
            justifycenter: {
                title: "Center Text",
                text: "Center text in the editor.",
                cls: Ext.baseCSSPrefix + "html-editor-tip"
            },
            justifyright: {
                title: "Align Text Right",
                text: "Align text to the right.",
                cls: Ext.baseCSSPrefix + "html-editor-tip"
            },
            insertunorderedlist: {
                title: "Bullet List",
                text: "Start a bulleted list.",
                cls: Ext.baseCSSPrefix + "html-editor-tip"
            },
            insertorderedlist: {
                title: "Numbered List",
                text: "Start a numbered list.",
                cls: Ext.baseCSSPrefix + "html-editor-tip"
            },
            createlink: {
                title: "Hyperlink",
                text: "Make the selected text a hyperlink.",
                cls: Ext.baseCSSPrefix + "html-editor-tip"
            },
            sourceedit: {
                title: "Source Edit",
                text: "Switch to source editing mode.",
                cls: Ext.baseCSSPrefix + "html-editor-tip"
            }
        }
    })
});
Ext.define("Ext.locale.en.grid.header.Container", {
    override: "Ext.grid.header.Container",
    sortAscText: "Sort Ascending",
    sortDescText: "Sort Descending",
    columnsText: "Columns"
});
Ext.define("Ext.locale.en.grid.GroupingFeature", {
    override: "Ext.grid.feature.Grouping",
    emptyGroupText: "(None)",
    groupByText: "Group by this field",
    showGroupsText: "Show in Groups"
});
Ext.define("Ext.locale.en.grid.PropertyColumnModel", {
    override: "Ext.grid.PropertyColumnModel",
    nameText: "Name",
    valueText: "Value",
    dateFormat: "m/j/Y",
    trueText: "true",
    falseText: "false"
});
Ext.define("Ext.locale.en.grid.BooleanColumn", {
    override: "Ext.grid.BooleanColumn",
    trueText: "true",
    falseText: "false",
    undefinedText: "&#160;"
});
Ext.define("Ext.locale.en.grid.NumberColumn", {
    override: "Ext.grid.NumberColumn",
    format: "0,000.00"
});
Ext.define("Ext.locale.en.grid.DateColumn", {
    override: "Ext.grid.DateColumn",
    format: "m/d/Y"
});
Ext.define("Ext.locale.en.form.field.Time", {
    override: "Ext.form.field.Time",
    minText: "The time in this field must be equal to or after {0}",
    maxText: "The time in this field must be equal to or before {0}",
    invalidText: "{0} is not a valid time",
    format: "g:i A",
    altFormats: "g:ia|g:iA|g:i a|g:i A|h:i|g:i|H:i|ga|ha|gA|h a|g a|g A|gi|hi|gia|hia|g|H"
});
Ext.define("Ext.locale.en.form.field.File", {
    override: "Ext.form.field.File",
    buttonText: "Browse..."
});
Ext.define("Ext.locale.en.form.CheckboxGroup", {
    override: "Ext.form.CheckboxGroup",
    blankText: "You must select at least one item in this group"
});
Ext.define("Ext.locale.en.form.RadioGroup", {
    override: "Ext.form.RadioGroup",
    blankText: "You must select one item in this group"
});
Ext.define("Ext.locale.en.window.MessageBox", {
    override: "Ext.window.MessageBox",
    buttonText: {
        ok: "OK",
        cancel: "Cancel",
        yes: "Yes",
        no: "No"
    }
});
Ext.define("Ext.locale.en.grid.filters.Filters", {
    override: "Ext.grid.filters.Filters",
    menuFilterText: "Filters"
});
Ext.define("Ext.locale.en.grid.filters.filter.Boolean", {
    override: "Ext.grid.filters.filter.Boolean",
    yesText: "Yes",
    noText: "No"
});
Ext.define("Ext.locale.en.grid.filters.filter.Date", {
    override: "Ext.grid.filters.filter.Date",
    fields: {
        lt: {
            text: "Before"
        },
        gt: {
            text: "After"
        },
        eq: {
            text: "On"
        }
    },
    dateFormat: null
});
Ext.define("Ext.locale.en.grid.filters.filter.List", {
    override: "Ext.grid.filters.filter.List",
    loadingText: "Loading..."
});
Ext.define("Ext.locale.en.grid.filters.filter.Number", {
    override: "Ext.grid.filters.filter.Number",
    emptyText: "Enter Number..."
});
Ext.define("Ext.locale.en.grid.filters.filter.String", {
    override: "Ext.grid.filters.filter.String",
    emptyText: "Enter Filter Text..."
});
Ext.define("Ext.locale.en.view.MultiSelectorSearch", {
    override: "Ext.view.MultiSelectorSearch",
    searchText: "Search..."
});
Ext.define("Ext.locale.en.view.MultiSelector", {
    override: "Ext.view.MultiSelector",
    emptyText: "Nothing selected",
    removeRowTip: "Remove this item",
    addToolText: "Search for items to add"
});
Ext.define("Ext.locale.en.Component", {
    override: "Ext.Component"
});

// german
Ext.define("Ext.locale.de.view.View", {
    override: "Ext.view.View",
    emptyText: ""
});
Ext.define("Ext.locale.de.panel.Panel", {
    override: "Ext.panel.Panel",
    collapseToolText: "reduzieren",
    expandToolText: "erweitern"
});
Ext.define("Ext.locale.de.grid.plugin.DragDrop", {
    override: "Ext.grid.plugin.DragDrop",
    dragText: "{0} Zeile(n) ausgewählt"
});
Ext.define("Ext.locale.de.tab.Tab", {
    override: "Ext.tab.Tab",
    closeText: "Diesen Tab schließen"
});
Ext.define("Ext.locale.de.form.Basic", {
    override: "Ext.form.Basic",
    waitTitle: "Bitte warten..."
});
Ext.define("Ext.locale.de.form.field.Base", {
    override: "Ext.form.field.Base",
    invalidText: "Der Wert des Feldes ist nicht korrekt"
});
Ext.define("Ext.locale.de.LoadMask", {
    override: "Ext.LoadMask",
    loadingText: "Lade Daten..."
});
Ext.define("Ext.locale.de.view.AbstractView", {
    override: "Ext.view.AbstractView",
    loadingText: "Lade Daten..."
});
Ext.define("Ext.locale.de.picker.Date", {
    override: "Ext.picker.Date",
    todayText: "Heute",
    minText: "Dieses Datum liegt von dem erstmöglichen Datum",
    maxText: "Dieses Datum liegt nach dem letztmöglichen Datum",
    disabledDaysText: "",
    disabledDatesText: "",
    nextText: "Nächster Monat (Strg/Control + Rechts)",
    prevText: "Vorheriger Monat (Strg/Control + Links)",
    monthYearText: "Monat auswählen (Strg/Control + Hoch/Runter, um ein Jahr auszuwählen)",
    todayTip: "Heute ({0}) (Leertaste)",
    format: "d.m.Y",
    startDay: 1
});
Ext.define("Ext.locale.de.picker.Month", {
    override: "Ext.picker.Month",
    okText: "&#160;OK&#160;",
    cancelText: "Abbrechen"
});
Ext.define("Ext.locale.de.toolbar.Paging", {
    override: "Ext.PagingToolbar",
    beforePageText: "Seite",
    afterPageText: "von {0}",
    firstText: "Erste Seite",
    prevText: "vorherige Seite",
    nextText: "nächste Seite",
    lastText: "letzte Seite",
    refreshText: "Aktualisieren",
    displayMsg: "Anzeige Eintrag {0} - {1} von {2}",
    emptyMsg: "Keine Daten vorhanden"
});
Ext.define("Ext.locale.de.form.field.Text", {
    override: "Ext.form.field.Text",
    minLengthText: "Bitte geben Sie mindestens {0} Zeichen ein",
    maxLengthText: "Bitte geben Sie maximal {0} Zeichen ein",
    blankText: "Dieses Feld darf nicht leer sein",
    regexText: "",
    emptyText: null
});
Ext.define("Ext.locale.de.form.field.Number", {
    override: "Ext.form.field.Number",
    minText: "Der Mindestwert für dieses Feld ist {0}",
    maxText: "Der Maximalwert für dieses Feld ist {0}",
    nanText: "{0} ist keine Zahl"
});
Ext.define("Ext.locale.de.form.field.Date", {
    override: "Ext.form.field.Date",
    disabledDaysText: "nicht erlaubt",
    disabledDatesText: "nicht erlaubt",
    minText: "Das Datum in diesem Feld muss nach dem {0} liegen",
    maxText: "Das Datum in diesem Feld muss vor dem {0} liegen",
    invalidText: "{0} ist kein gültiges Datum - es muss im Format {1} eingegeben werden",
    format: "d.m.Y",
    altFormats: "j.n.Y|j.n.y|j.n.|j.|j/n/Y|j/n/y|j-n-y|j-n-Y|j/n|j-n|dm|dmy|dmY|j|Y-n-j|Y-m-d",
    startDay: 1
});
Ext.define("Ext.locale.de.form.field.ComboBox", {
    override: "Ext.form.field.ComboBox",
    valueNotFoundText: undefined
}, function () {
    Ext.apply(Ext.form.field.ComboBox.prototype.defaultListConfig, {
        loadingText: "Lade Daten ..."
    })
});
Ext.define("Ext.locale.de.form.field.VTypes", {
    override: "Ext.form.field.VTypes",
    emailText: 'Dieses Feld sollte eine E-Mail-Adresse enthalten. Format: "user@example.com"',
    urlText: 'Dieses Feld sollte eine URL enthalten. Format: "http://www.example.com"',
    alphaText: "Dieses Feld darf nur Buchstaben enthalten und _",
    alphanumText: "Dieses Feld darf nur Buchstaben und Zahlen enthalten und _"
});
Ext.define("Ext.locale.de.form.field.HtmlEditor", {
    override: "Ext.form.field.HtmlEditor",
    createLinkText: "Bitte geben Sie die URL für den Link ein:"
}, function () {
    Ext.apply(Ext.form.field.HtmlEditor.prototype, {
        buttonTips: {
            bold: {
                title: "Fett (Ctrl+B)",
                text: "Erstellt den ausgewählten Text in Fettschrift.",
                cls: Ext.baseCSSPrefix + "html-editor-tip"
            },
            italic: {
                title: "Kursiv (Ctrl+I)",
                text: "Erstellt den ausgewählten Text in Schrägschrift.",
                cls: Ext.baseCSSPrefix + "html-editor-tip"
            },
            underline: {
                title: "Unterstrichen (Ctrl+U)",
                text: "Unterstreicht den ausgewählten Text.",
                cls: Ext.baseCSSPrefix + "html-editor-tip"
            },
            increasefontsize: {
                title: "Text vergößern",
                text: "Erhöht die Schriftgröße.",
                cls: Ext.baseCSSPrefix + "html-editor-tip"
            },
            decreasefontsize: {
                title: "Text verkleinern",
                text: "Verringert die Schriftgröße.",
                cls: Ext.baseCSSPrefix + "html-editor-tip"
            },
            backcolor: {
                title: "Text farblich hervorheben",
                text: "Hintergrundfarbe des ausgewählten Textes ändern.",
                cls: Ext.baseCSSPrefix + "html-editor-tip"
            },
            forecolor: {
                title: "Schriftfarbe",
                text: "Farbe des ausgewählten Textes ändern.",
                cls: Ext.baseCSSPrefix + "html-editor-tip"
            },
            justifyleft: {
                title: "Linksbündig",
                text: "Setzt den Text linksbündig.",
                cls: Ext.baseCSSPrefix + "html-editor-tip"
            },
            justifycenter: {
                title: "Zentrieren",
                text: "Zentriert den Text in Editor.",
                cls: Ext.baseCSSPrefix + "html-editor-tip"
            },
            justifyright: {
                title: "Rechtsbündig",
                text: "Setzt den Text rechtsbündig.",
                cls: Ext.baseCSSPrefix + "html-editor-tip"
            },
            insertunorderedlist: {
                title: "Aufzählungsliste",
                text: "Beginnt eine Aufzählungsliste mit Spiegelstrichen.",
                cls: Ext.baseCSSPrefix + "html-editor-tip"
            },
            insertorderedlist: {
                title: "Numerierte Liste",
                text: "Beginnt eine numerierte Liste.",
                cls: Ext.baseCSSPrefix + "html-editor-tip"
            },
            createlink: {
                title: "Hyperlink",
                text: "Erstellt einen Hyperlink aus dem ausgewählten text.",
                cls: Ext.baseCSSPrefix + "html-editor-tip"
            },
            sourceedit: {
                title: "Source bearbeiten",
                text: "Zur Bearbeitung des Quelltextes wechseln.",
                cls: Ext.baseCSSPrefix + "html-editor-tip"
            }
        }
    })
});
Ext.define("Ext.locale.de.grid.header.Container", {
    override: "Ext.grid.header.Container",
    sortAscText: "Aufsteigend sortieren",
    sortDescText: "Absteigend sortieren",
    lockText: "Spalte sperren",
    unlockText: "Spalte freigeben (entsperren)",
    columnsText: "Spalten"
});
Ext.define("Ext.locale.de.grid.GroupingFeature", {
    override: "Ext.grid.feature.Grouping",
    emptyGroupText: "(Keine)",
    groupByText: "Dieses Feld gruppieren",
    showGroupsText: "In Gruppen anzeigen"
});
Ext.define("Ext.locale.de.grid.PropertyColumnModel", {
    override: "Ext.grid.PropertyColumnModel",
    nameText: "Name",
    valueText: "Wert",
    dateFormat: "d.m.Y"
});
Ext.define("Ext.locale.de.grid.BooleanColumn", {
    override: "Ext.grid.BooleanColumn",
    trueText: "wahr",
    falseText: "falsch"
});
Ext.define("Ext.locale.de.grid.NumberColumn", {
    override: "Ext.grid.NumberColumn",
    format: "0.000,00/i"
});
Ext.define("Ext.locale.de.grid.DateColumn", {
    override: "Ext.grid.DateColumn",
    format: "d.m.Y"
});
Ext.define("Ext.locale.de.form.field.Time", {
    override: "Ext.form.field.Time",
    minText: "Die Zeit muss gleich oder nach {0} liegen",
    maxText: "Die Zeit muss gleich oder vor {0} liegen",
    invalidText: "{0} ist keine gültige Zeit",
    format: "H:i"
});
Ext.define("Ext.locale.de.form.CheckboxGroup", {
    override: "Ext.form.CheckboxGroup",
    blankText: "Du mußt mehr als einen Eintrag aus der Gruppe auswählen"
});
Ext.define("Ext.locale.de.form.RadioGroup", {
    override: "Ext.form.RadioGroup",
    blankText: "Du mußt einen Eintrag aus der Gruppe auswählen"
});
Ext.define("Ext.locale.de.window.MessageBox", {
    override: "Ext.window.MessageBox",
    buttonText: {
        ok: "OK",
        cancel: "Abbrechen",
        yes: "Ja",
        no: "Nein"
    }
});
Ext.define("Ext.locale.de.grid.filters.Filters", {
    override: "Ext.grid.filters.Filters",
    menuFilterText: "Filter"
});
Ext.define("Ext.locale.de.grid.filters.filter.Boolean", {
    override: "Ext.grid.filters.filter.Boolean",
    yesText: "Ja",
    noText: "Nein"
});
Ext.define("Ext.locale.de.grid.filters.filter.Date", {
    override: "Ext.grid.filters.filter.Date",
    fields: {
        lt: {
            text: "Vor"
        },
        gt: {
            text: "Nach"
        },
        eq: {
            text: "An"
        }
    },
    dateFormat: null
});
Ext.define("Ext.locale.de.grid.filters.filter.List", {
    override: "Ext.grid.filters.filter.List",
    loadingText: "Laden..."
});
Ext.define("Ext.locale.de.grid.filters.filter.Number", {
    override: "Ext.grid.filters.filter.Number",
    emptyText: "Zahl eingeben..."
});
Ext.define("Ext.locale.de.grid.filters.filter.String", {
    override: "Ext.grid.filters.filter.String",
    emptyText: "Filtertext eingeben..."
});
Ext.define("Ext.locale.de.view.MultiSelectorSearch", {
    override: "Ext.view.MultiSelectorSearch",
    searchText: "Suche..."
});
Ext.define("Ext.locale.de.view.MultiSelector", {
    override: "Ext.view.MultiSelector",
    emptyText: "Nichts ausgewählt",
    removeRowTip: "Dieses Element entfernen",
    addToolText: "Suche Elemente zum Hinzufügen"
});
Ext.define("Ext.locale.de.Component", {
    override: "Ext.Component"
});