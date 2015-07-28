'use strict';

/**
 * @ngdoc overview
 * @name angularTestApp
 * @description
 * # angularTestApp
 *
 * Main module of the application.
 */
angular
  .module('angularTestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'angularTestApp.controllers',
    'OrderService',
    'ui.bootstrap',
    'DetailCtrl',
  ])
  .config(['$stateProvider', '$urlRouterProvider', 
  	function($stateProvider, $urlRouterProvider){
  	$urlRouterProvider.otherwise('/');
  	$stateProvider
  .state('/',{
    url: '/',
    templateUrl: 'views/main.html',
    controller: 'PurchaseCtrl'
  })
  .state('detail',{
    url: '/detail/:id',
    templateUrl: 'views/purchase-detail.html',
    controller: 'DetailCtrl'
  })
  .state('detail_item',{
    url: '/detail/:id/:itemid',
    templateUrl: 'views/purchase-detail-item.html',
    controller: 'DetailCtrl'
  })
  .state('purchase', {
  	url: '/purchase',
  	templateUrl: 'views/purchase.html',
  	controller: 'PurchaseCtrl'
  });
}]);
