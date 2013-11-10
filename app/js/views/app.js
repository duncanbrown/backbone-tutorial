define([
    'text!templates/app.html',
    'views/lists/add',
    'views/lists/edit'
],
function (template, AddListView, EditListView) {
    var AppView = Backbone.View.extend({
        id: 'main',
        tagName: 'div',
        className: 'container-fluid',
        el: 'body',
        template: _.template(template),
        events: {
            'click #add-list-button': 'addList',
            'click #edit-list-button': 'editList',
            'click #delete-list-button': 'deleteList'
        },
        initialize: function () {

        },
        render: function () {
            this.$el.html(this.template());
            return this;
        },
        addList: function() {
            var list = new bTask.collections.lists.model({title:''}),
                form = new AddListView({model:list}),
                self = this;
            this.$el.find('#list-editor').html(form.render().el);
            form.$el.find('input:first').focus();
            return false;
        },
        editList: function(){
            var list = bTask.views.activeListMenuItem.model,
                form = new EditListView({model: list});
            this.$el.find('#list-editor').html(form.render().el);
            this.$el.find('input:first').focus();
            return false;
        },
        deleteList: function(){
            bTask.views.activeListMenuItem.model.destroy();
            return false;
        }
    });
    return AppView;
}
);