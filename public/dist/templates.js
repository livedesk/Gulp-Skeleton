this["templates"] = this["templates"] || {};
this["templates"]["greeting"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "<p>Starting Now</p>\n<p>"
    + alias5(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"message","hash":{},"data":data,"loc":{"start":{"line":2,"column":3},"end":{"line":2,"column":14}}}) : helper)))
    + "</p>\n<p>"
    + alias5(((helper = (helper = helpers.myVar || (depth0 != null ? depth0.myVar : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"myVar","hash":{},"data":data,"loc":{"start":{"line":3,"column":3},"end":{"line":3,"column":12}}}) : helper)))
    + "</p>\n<p>Stopping</p>\n";
},"useData":true});