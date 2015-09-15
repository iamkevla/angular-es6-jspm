import {
    todoModule
}
from './todo/module';
import {
    gitHubModule
}
from './github/module';

function Routes($routeProvider) {

    $routeProvider
        .when('/todo', todoModule.routeInfo)
        .when('/github', gitHubModule.routeInfo)
        .otherwise({
            redirectTo: '/todo'
        })


}

Routes.$inject = ['$routeProvider'];

export {
    Routes
};
