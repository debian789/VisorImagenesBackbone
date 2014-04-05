Visor.View.Imagen = Backbone.View.extend({

	tagName:"div",

	className:"item",

	events:{
		"click img ": "visualizar"
	},

	template : Handlebars.compile($('#listado-imagenes-template').html()),
	
	render: function () {
		var imagenes = this.model.toJSON();
		var html = this.template(imagenes);
		this.$el.html(html);
		return this 
	},
	
	initialize: function(){
		//this.listenTo escuchar a !!!
		//this al final es para no perder el contexto interno o si no escuha el window
		//casa vez que exista un cambio en el moldelo actualiza la vista 
		this.listenTo(this.model,"change",this.render,this);
	},

	visualizar:function(e){
		Visor.app.seleccionImagen.model.set(this.model.toJSON());
	},

});