import angular from 'angular';
import 'angular-animate';
import 'angular-growl';
import 'angular-route';



import {
    todoModule
}
from './todo/module'
import {
    gitHubModule
}
from './github/module';

import {
    Routes
}
from './Routes';

let app = angular.module('todo', [
    'ngAnimate',
    'angular-growl',
    'ngRoute',
    todoModule.name,
    gitHubModule.name
]);

app.config(['$compileProvider',
    function($compileProvider) {
        $compileProvider.debugInfoEnabled(true);
    }
]);

app.config(Routes);

angular.element(document).ready(function() {
    angular.bootstrap(document, ['todo']);
});


export {
    app
};
