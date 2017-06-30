namespace AngularAuthentication.Services {
    let module: ng.IModule = angular.module('AngularAuthentication.Services', []);

    module.service('RegistrationService', Services.RegistrationService);
    module.service('UserService', Services.UserService);
}