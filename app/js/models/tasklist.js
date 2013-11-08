define(function () {
	var TaskList = Backbone.Model.extend({
		url: 'taskLists'
	});
	return TaskList;
});