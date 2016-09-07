define(function (require) {

    var Backbone = require("backbone");
    var Products = require("collections/Products");
    var Product = require("models/Product");
    var Utils = require("utils");
//    var Framework7 = require('framework7');
//    var swiper = require('swiper');
//    var myapp = require('myapp');

//  var ProductListView = require("views/pages/products/ProductListView");

    var MyView = Utils.Page.extend({
        constructorName: "MyView",
        collection: Products,
        initialize: function () {
            // load the precompiled template
            this.template = Utils.templates.myview;
//            this.collection.fetch({success: function(){
//            this.render;
//            }});
//            this.collection.fetch({success: function (){
//                    this.render;
//                    
//                    
//            }});
            this.collection.on('sync', this.render, this);
            
            
            // here we can register to inTheDOM or removing events
            // this.listenTo(this, "inTheDOM", function() {
            //   $('#content').on("swipe", function(data){
            //     console.log(data);
            //   });
            // });
            // this.listenTo(this, "removing", functionName);

            // by convention, all the inner views of a view must be stored in this.subViews
        },
        id: "myview",
        className: "i-g page",
        events: {
            "tap #goToMap": "goToMap"
        },
        render: function () {
//            // Initialize your app
//            var myApp = new Framework7();
//
//            // Export selectors engine
//            var $$ = Dom7;
//
//            // Add view
//            var mainView = myApp.addView('.view-main', {
//                // Because we use fixed-through navbar we can enable dynamic navbar
//                dynamicNavbar: true
//            });
//
//            var mySwiper = myApp.swiper('.swiper-container', {
//                pagination: '.swiper-pagination',
//                paginationClickable: true,
//                autoplay: 2500,
//                autoplayDisableOnInteraction: false
//            });
//
//            var mySwiper = myApp.swiper('.swiper-container2', {
//            });
//            var mySwiper = myApp.swiper('.swiper-container3', {
//            });
             console.log('render');
              console.log(this.collection);
            $(this.el).html(this.template({Prodotti : this.collection.toJSON()}));
            return this;
        },
        goToMap: function (e) {
            Backbone.history.navigate("map", {
                trigger: true
            });
        }
    });

    return MyView;

});