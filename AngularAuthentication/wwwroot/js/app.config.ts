namespace AngularAuthentication {
    Configuration.$inject = [
        '$urlRouterProvider',
        '$locationProvider',
        '$httpProvider'
    ];

    export function Configuration(
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider,
        $httpProvider: ng.IHttpProvider
    ) {
        // Add Custom Interceptors
        $httpProvider.interceptors.push('AuthenticationInterceptor');

        // Handle Default Route
        $urlRouterProvider.otherwise('/');

        // Set HTML5 Mode
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true
        });
    }
}