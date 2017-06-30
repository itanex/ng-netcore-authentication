namespace AngularAuthentication.Views.Home {
    let module: ng.IModule = angular.module('View.Home', []);

    module.config(Home.Configuration);
    module.controller('HomeController', Home.HomeController);
}