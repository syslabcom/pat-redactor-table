/**
 * Pattern for Redactor Table Plugin
 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([
            "jquery",
            "pat-redactor",
            "redactor-table",
            ], function ($, patRedactor, redactorTable) {
                return factory.apply(this, arguments);
        });
    } else {
        factory(root.jQuery, patRedactor, redactorTable);
    }
}(this, function($, patRedactor, redactorTable) {
    patRedactor.registerPlugin('table', $.Redactor.prototype.table);
    return $.Redactor.prototype.table
}));

