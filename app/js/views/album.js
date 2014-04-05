Visor.View.Album = Backbone.View.extend({
	tagName:"figure",

	className:"imagenes",

	events:{
		"click img ": "navegar"
	},

	template : Handlebars.compile($('#album-template').html()),
	
	initialize: function(){
		//debugger;
		//this.listenTo escuchar a !!!
		//this al final es para no perder el contexto interno o si no escuha el window
		//casa vez que exista un cambio en el moldelo actualiza la vista 
		this.listenTo(this.model,"change",this.render,this);
	},
	render: function () {
		var album = this.model.toJSON();
		var html  = this.template(album);
		this.$el.html(html);
		return this;

	},
	navegar:function(e){
		Visor.app.navigate("album/" + this.model.get("titulo"), { trigger: true });
	},

});