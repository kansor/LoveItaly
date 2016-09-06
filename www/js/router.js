define(function (require) {

    var $ = require("jquery");
    var Backbone = require("backbone");
    var MyModel = require("models/MyModel");
    var StructureView = require("views/StructureView");
    var MyView = require("views/pages/MyView");
    var MapView = require("views/pages/MapView");
    var Framework7 = require('framework7');
    var myApp = new Framework7({swipePanel: 'left'});
    var ProductListView = require("views/pages/products/ProductListView");
    var ProductDetailView = require("views/pages/products/ProductDetailView");
    var CategoryListView = require("views/pages/products/CategoryListView");
    var FarmListView = require('views/pages/farm/FarmListView');
    var FarmDetailView = require('views/pages/farm/FarmDetailView');


    var AppRouter = Backbone.Router.extend({
        constructorName: "AppRouter",
        routes: {
            // the default is the structure view
            "": "showStructure",
            "myview": "myView",
            "map": "map",
            "gotoproductlist": "goToProductList",
            "gotoproductdetail": "goToProductDetail",
            "gotocategorylist": "goToCategoryList",
            "gotofarmlist": "goToFarmList",
            "gotofarmdetail" : "goToFarmDetail"
        },
        firstView: "myview",
        initialize: function (options) {
            this.currentView = undefined;
        },
        myView: function () {
            // highlight the nav1 tab bar element as the current one
            this.structureView.setActiveTabBarElement("nav1");
            // create a model with an arbitrary attribute for testing the template engine
            var model = new MyModel({
                key: "Sto Cazzo"
            });
            // create the view
            var page = new MyView({
                model: model
            });
            // show the view
            this.changePage(page);
        },
        map: function () {
            // highlight the nav2 tab bar element as the current one
            this.structureView.setActiveTabBarElement("nav2");
            // create the view and show it
            var page = new MapView();
            this.changePage(page);
        },
        // load the structure view
        showStructure: function () {
            if (!this.structureView) {
                this.structureView = new StructureView({
                    myApp : myApp
                });
                // put the el element of the structure view into the DOM
                document.body.appendChild(this.structureView.render().el);
                this.structureView.trigger("inTheDOM");
            }
            // go to first view
            this.navigate(this.firstView, {trigger: true});
        },
        goToProductList: function (e) {

            var page = new ProductListView({
            });
            // show the view
            this.changePage(page);
        },
        goToProductDetail: function (event) {

            var page = new ProductDetailView({
            });
            // show the view
            this.changePage(page);
        },
        goToCategoryList : function (event) {

            var page = new CategoryListView({
            });
            // show the view
            this.changePage(page);
        },
        goToFarmList : function (event) {

            var page = new FarmListView({
            });
            // show the view
            this.changePage(page);
        },
        goToFarmDetail : function (event) {

            var page = new FarmDetailView({
            });
            // show the view
            this.changePage(page);
        }

    });

    return AppRouter;

});