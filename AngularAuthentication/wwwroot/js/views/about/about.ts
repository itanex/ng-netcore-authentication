namespace AngularAuthentication.Views.About {
    let module: ng.IModule = angular.module('View.About', []);

    module.config(About.Configuration);
    module.controller('AboutController',About.AboutController);
}