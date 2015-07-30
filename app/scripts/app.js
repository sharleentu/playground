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
    'angularModalService',
    'ModalCtrl',
    'ConfirmationCtrl'
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
  })
  .state('delivery', {
    url: '/delivery',
    templateUrl: 'views/delivery.html',
    controller: 'ConfirmationCtrl'
  })
  .state('delivery.1', {
    url: '/1',
    templateUrl: 'views/delivery-1.html',
  })
  .state('delivery.2', {
    url: '/2',
    templateUrl: 'views/delivery-2.html',
  })
  .state('delivery.3', {
    url: '/3',
    templateUrl: 'views/delivery-3.html',
  })
  .state('delivery.4', {
    url: '/4',
    templateUrl: 'views/delivery-pic.html',
  })
  .state('delivery.confirmation', {
    url: '/confirmation',
    templateUrl: 'views/delivery-4.html',
  });
}]);
