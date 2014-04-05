
Visor.Router = Backbone.Router.extend({
	routes: {
		"":"index",
		"album/:name":"imagenes"
	},
	initialize:function(){
		this.current = {};
		this.jsonData = {};
		this.imagenesCollection   = new Visor.Collections.Imagenes();
		this.albums      = new Visor.Collections.Albums();
		this.seleccionImagen = new Visor.View.SeleccionImagen({model:new Visor.Models.Imagenes() });
		this.imagenList  = new Visor.View.ListImagen({ collection: this.imagenesCollection });
		this.albumsList  = new Visor.View.Albums({ collection: this.albums });

		Backbone.history.start();

	},
	index: function(){ 
		console.log("index cargado ");
		this.Datos();
	},
	imagenes: function(name){ 
		if (Object.keys(this.jsonData).length === 0) {
			var self = this;

			this.Datos().done(function () {
				self.addImagenes(name);
			});

		} else {
			this.addImagenes(name);
		}
	},
	Datos: function(){
		var self = this;

		return $.getJSON('data.json').then(function (data) {
			self.jsonData = data;
			for (var name in data) {
				if (data.hasOwnProperty(name)) {
					self.addAlbum(name, data[name]);
				}
			}

		});
	},
	addImagenes:function(name){
		this.imagenesCollection.reset();
		this.current.album = this.jsonData[name];
		this.current.album.imagenes.forEach(this.addImagen,this); 
	},
	addImagen:function(imagen){
		var album = this.current.album;
		this.imagenesCollection.add( new Visor.Models.Imagenes({
			titulo:imagen.titulo,
			urlImagen:imagen.urlImagen
		}));
	},
	addAlbum:function(titulo,url){
		this.albums.add(new Visor.Models.Album ({
			titulo:titulo,
			urlImagen:url.url
		}));
	}
});

