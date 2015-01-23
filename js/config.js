requirejs.config({
  baseUrl: 'js',
  paths: {
    vendor: '../vendor',
    text: "../vendor/text",
    underscore: "../vendor/underscore",
    jquery: "../vendor/jquery",
    Backbone: "../vendor/backbone",
    Handlebars: "../vendor/handlebars",
    templates: "../templates"
  }
});

// app bootstrap
requirejs([
  'jquery',
  "views/UserView"
], function($, UserView) {

  //console.log("bootstrap", arguments);

  // start app
  $(function() {
    //console.log("init app");

    var view = new UserView();
    view.render();
    $(".js-app").append(view.$el);
  });
});
