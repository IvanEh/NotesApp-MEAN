app = angular.module("myApp", []);

app.controller("NotesController", ['$scope', NotesController])

function NotesController ($scope) {
	this.dummy = "dummy";
	this.$scope = $scope;

	this.categories = [
	 {id: 0, label:"Null"},
	 {id:  1, label:"Default"}
	];

	this.flags = [
		"#49B434",
		"#b86962",
		"#34B4B4",
		"#7F34B4"
	]

	this.notesCollections = [[],[],[]];

	this.notes = [
		{title: "Default Note 1",
		 content: "Nothing here",
		 categoryId: 1,
		 date: "01.01.2015",
		 flagId: 0,
		},
		{title: "Default Note 2",
		 content: "Nothing here",
		 categoryId: 1,
		 date: "01.01.2015"	,
		 flagId: 1
		},
		{title: "Default Note 3",
		 content: "Nothing here",
		 categoryId: 1,
		 date: "01.01.2015"	,
		 flagId: 1
		},
		{title: "Default Note 4",
		 content: "Nothing here ",
		 categoryId: 1,
		 date: "01.01.2015"	,
		 flagId: 1
		},
		{title: "Default Note 5",
		 content: "Nothing here",
		 categoryId: 1,
		 date: "01.01.2015"	,
		 flagId: 1
		},
		{title: "Default Note 6",
		 content: "Nothing here",
		 categoryId: 1,
		 date: "01.01.2015"	,
		 flagId: 1
		},
		{title: "Default Note 7",
		 content: "Nothing here",
		 categoryId: 1,
		 date: "01.01.2015"	,
		 flagId: 1
		}
	];
}

NotesController.prototype.categoryOf = function (id) {
	return this.categories[id] || "Null";
}

NotesController.prototype.flagCss = function (id, col) {
	if(col != undefined)
		id = id*3 + col - 1;

	var note = this.notes[id];

		var css = {
			'border-left': "solid 10px " + this.flags[note.flagId]
		}

	return css;
}

NotesController.prototype.nextFlag = function (id, col) {
	if(col != undefined)
		id = id*3 + col - 1;

	var note = this.notes[id];

	note.flagId++;
	if(note.flagId > this.flags.length)
		note.flagId = 0;	

	console.log(this.notes[id].flagId);
	// this.$scope.$apply()
}

NotesController.prototype.addEmpty = function () {
	this.notes.push({
		 title: "Default Note " + (this.notes.length + 1),
		 content: "Nothing here",
		 categoryId: 1,
		 date: "01.01.2015",
		 flagId: 0
		});
}

NotesController.prototype.remove = function(key, col) {
	if(col != undefined)
		key = key*3 + col - 1;
	this.notes.splice(key, 1);
}

NotesController.prototype.column = function(col) {
	var n = this.notes.length;
	var collection = this.notesCollections[col-1];
	collection.splice(0, collection.length);
	var c = Math.ceil(n / 3.0);

	for(var i = 0, len = c; i < len; i++){
		var t = this.notes[i*3 +col- 1];
		if(t != undefined) 
			collection[i] = t;

	}

	return collection;
}