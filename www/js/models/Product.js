define(function (require) {

    var Backbone = require("backbone");
    
    var $ = require('jquery'); 

    var authentication = function (xhr) {
        var key64 = 'SVlJNk0zNU1MQjhVVlczOFk5OVJZM1lQUVdSWDVYOEg6'; //codifica 64 della API key
        var token = 'Basic '.concat(key64);
        xhr.setRequestHeader('Authorization', token);
    }

    var Product = Backbone.Model.extend({
        constructorName: "Product",
        initialize: function () {
           
        },
        url: function () {
            var url = 'http://192.168.56.101/loveitaly/api/products/';
            url += this.id;
            url += '?io_format=JSON';
            return url;
        },
        sync: function (method, collection, options) {
            options = options || {};
            options.beforeSend = authentication;
            return Backbone.Model.prototype.sync.apply(this, arguments);
        },
        parse: function (response) {
            return response.product;
},
    });

    return Product;
});