define(function(require) {

  var Backbone = require("backbone");
//  var MyModel = require("models/MyModel");
  var Utils = require("utils");

  var CategoryListView = Utils.Page.extend({

    constructorName: "CategoryListView",


    initialize: function() {
      // load the precompiled template
      this.template = Utils.templates.productcategory;
      // here we can register to inTheDOM or removing events
      // this.listenTo(this, "inTheDOM", function() {
      //   $('#content').on("swipe", function(data){
      //     console.log(data);
      //   });
      // });
      // this.listenTo(this, "removing", functionName);

      // by convention, all the inner views of a view must be stored in this.subViews
    },

    id: "productcategory",
    className: "i-g page",

    events: {
      "tap #goToMap": "goToMap",
      "tap #prodottiBio" : "prodottiBio",
      "tap #prodottiForno" : "prodottiForno",
      "tap #ortaggi" : "ortaggi",
      "tap #frutta" : "frutta",
      "tap #legumi" : "legumi",
      "tap #formaggi" : "formaggi",
      "tap #olio" : "olio",
      "tap #vino" : "vino",
      "tap #miele" : "miele",
      "tap #condimenti" : "condimenti",
      "tap #conserve" : "conserve",
      "tap #carne" : "carne",
      "tap #infusi" : "infusi"
    },

    render: function() {
      $(this.el).html(this.template());
//      this.model.toJSON()
      return this;
    },

    goToMap: function(e) {
      Backbone.history.navigate("map", {
        trigger: true
      });
    },

    prodottiBio: function(e) {
      Backbone.history.navigate("map", {
        trigger: true
      });
    },

    prodottiForno: function(e) {
      Backbone.history.navigate("map", {
        trigger: true
      });
    },

    ortaggi: function(e) {
      Backbone.history.navigate("map", {
        trigger: true
      });
    }
    ,

    frutta: function(e) {
      Backbone.history.navigate("map", {
        trigger: true
      });
    },

    legumi: function(e) {
      Backbone.history.navigate("map", {
        trigger: true
      });
    },

    formaggi: function(e) {
      Backbone.history.navigate("map", {
        trigger: true
      });
    },

    olio: function(e) {
      Backbone.history.navigate("map", {
        trigger: true
      });
    },

    vino: function(e) {
      Backbone.history.navigate("map", {
        trigger: true
      });
    },

    miele: function(e) {
      Backbone.history.navigate("map", {
        trigger: true
      });
    },

    condimenti: function(e) {
      Backbone.history.navigate("map", {
        trigger: true
      });
    },

    conserve: function(e) {
      Backbone.history.navigate("map", {
        trigger: true
      });
    },

    carne: function(e) {
      Backbone.history.navigate("map", {
        trigger: true
      });
    },

    infusi: function(e) {
      Backbone.history.navigate("map", {
        trigger: true
      });
    }
      
    
  });

  return CategoryListView;

});