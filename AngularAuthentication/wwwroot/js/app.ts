namespace AngularAuthentication {
    let module: ng.IModule = angular.module('app', [
        // Third Party Dependencies
        'ui.router',
        'ngResource',

        // Application Modules
        'AngularAuthentication.Factories',
        'AngularAuthentication.Services',
        'AngularAuthentication.Views'
    ]);

    module.controller('ApplicationController', AngularAuthentication.ApplicationController);
    module.config(AngularAuthentication.Configuration);
    module.run(AngularAuthentication.Run);
}