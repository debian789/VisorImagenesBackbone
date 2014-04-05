Visor.View.Albums = Backbone.View.extend({
	el:$('.contendioAlbum'),

	template : Handlebars.compile($('#album-template').html()),
	initialize: function(){
		this.listenTo(this.collection,"add",this.addOne,this);
	},

	render: function () {
		this.collection.forEach(this.addOne,this)
	},
	
	addOne: function(model){
		var albumView = new Visor.View.Album({ model: model });
   		this.$el.append(albumView.render().el);
	}
});