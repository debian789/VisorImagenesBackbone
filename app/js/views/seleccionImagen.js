Visor.View.SeleccionImagen = Backbone.View.extend({
	el:$('.imagenVisualizar'),

	template:Handlebars.compile($("#imagen-visualizada-template").html()),

	initialize:function(){
		this.listenTo(this.model,"change",this.render );

	},
	render:function(){
		var imagen = this.model.toJSON();
		this.$el.html(this.template(imagen));
	},
});