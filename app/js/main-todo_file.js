var Visor = {};
Visor.Model = Backbone.Model.extend();
Visor.Collection = Backbone.Collection.extend({model: Visor.model });
Visor.View = Backbone.View.extend({
	events:{
		"click img ": "mensaje"
	},

	tagName:"article",
	className:"imagenes",
	template : Handlebars.compile($('#imagenes-template').html()),
	render: function () {
		var html = this.template(this.model.toJSON());
		this.$el.html(html);
	},
	mensaje:function(e){
		alert("hola mundo !!!");
		//debugger;
	},
	initialize: function(){
		//this.listenTo escuchar a !!!
		//this al final es para no perder el contexto interno o si no escuha el window
		//casa vez que exista un cambio en el moldelo actualiza la vista 
		this.listenTo(this.model,"change",this.render,this);
	}


});


Visor.Router = Backbone.Router.extend({
	routes: {
		"":"index",
		"imagen/:name":"imagenes"
	},
	index: function(){ console.log("index cargado ")},
	imagenes: function(name){ console.log(" url de imagens")}

})







var modelo1 = new Visor.Model({titulo:"Rosas",urlImagen:"img/2.jpeg"});
var modelo2 = new Visor.Model({titulo:"Rosas",urlImagen:"img/2.jpeg"});

var coleccion = new Visor.Collection([modelo1,modelo2 ]);

var vista = new Visor.View({model:modelo2,el:$('.contenedor')});

vista.render();

Visor.app = new Visor.Router();
Backbone.history.start();



//modelo2.set({urlImagen: "img/1.jpeg"}) agregar valores a modelo
window.Visor = Visor 