Visor.View.ListImagen = Backbone.View.extend({
	el:$('.listadoImagenes'),
	tagName:"section",
	
	initialize: function(){
		//this.listenTo escuchar a !!!
		//this al final es para no perder el contexto interno o si no escuha el window
		//casa vez que exista un cambio en el moldelo actualiza la vista 
		this.listenTo(this.collection,"add",this.render,this);
		this.listenTo(this.collection,"reset",this.render,this);

	},
	render: function () {
		this.$el.empty();
		this.addAll();
	},
	addOne: function(imagenes){
		
		var itemImagen = new Visor.View.Imagen({ model: imagenes });
		this.$el.append(itemImagen.render().el);
	},
	addAll: function(){
		this.collection.forEach(this.addOne,this);
	}
});