define([
  "Backbone",
  "Handlebars",
  "text!templates/user-view.hbs"
], function(Backbone, Handlebars, tmpl) {

  var UserView = Backbone.View.extend({

    template: Handlebars.compile(tmpl),

    render: function() {
      var htmlContent = this.template({name: "Batman!!!"});
      this.$el.html(htmlContent);
    }

  });

  return UserView;
});
