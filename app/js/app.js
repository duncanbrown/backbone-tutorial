define(['gapi', 'views/app', 'views/auth', 'collections/tasklists'], function (ApiManager, AppView, AuthView, TaskLists) {
    var App = function () {
        
        this.views.app = new AppView();
        this.views.app.render();

        this.views.auth = new AuthView(this);
        this.views.auth.render();


        this.connectGapi();
    };
    App.prototype = {
        views: {},
        collections: {
            lists: new TaskLists()
        },
        connectGapi: function () {
            var self = this;
            this.apiManager = new ApiManager(this);
            this.apiManager.on('ready', function() {
                self.collections.lists.fetch({
                    data: { userId: '@me'},
                    success: function(res) {
                        _.each(res.models, function(model) {
                            console.log(model.get('title'));
                        });
                    }
                });
            });
        }
    };
    return App;
});