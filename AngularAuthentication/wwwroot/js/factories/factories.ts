namespace AngularAuthentication.Factories {
    let module: ng.IModule = angular.module('AngularAuthentication.Factories', []);

    module.factory('AuthenticationInterceptor', Factories.AuthenticationInterceptor);
}