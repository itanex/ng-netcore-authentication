namespace AngularAuthentication.Views.Contact {
    Configuration.$inject = [
        '$stateProvider'
    ];

    export function Configuration(
        $stateProvider: ng.ui.IStateProvider
    ) {
        $stateProvider
            .state('Contact', <ng.ui.IState>{
                url: '/contactus',
                templateUrl: 'js/views/contact/contact.view.html',
                controller: 'ContactController',
                controllerAs: 'vm'
            });
    }
}