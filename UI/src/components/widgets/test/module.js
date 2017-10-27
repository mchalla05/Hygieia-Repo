(function () {
    'use strict';

    var widget_state,
        config = {
        view: {
            defaults: {
                title: 'test' // widget title
            },
            controller: 'featureViewController',
            //controllerAs: 'test',
            templateUrl: 'components/widgets/test/view.html'
        },
        config: {
            controller: 'featureConfigController',
            templateUrl: 'components/widgets/test/config.html'
        },
	
        getState: getState
    };

    angular
        .module(HygieiaConfig.module)
        .config(register);

    register.$inject = ['widgetManagerProvider', 'WidgetState'];
    function register(widgetManagerProvider, WidgetState) {
        widget_state = WidgetState;
        widgetManagerProvider.register('test', config);
    }

    function getState(widgetConfig) {
        //return widget_state.READY;
        return HygieiaConfig.local || widgetConfig.id ?
                widget_state.READY :
                widget_state.CONFIGURE;
    }
})();
