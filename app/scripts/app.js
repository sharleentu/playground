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
    'ConfirmationCtrl',
    'OppService',
    'OppCtrl',
    'LeadCtrl',
    'LeadService'
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
    templateUrl: 'views/purchase/detail.html',
    controller: 'DetailCtrl'
  })
  .state('detail_item',{
    url: '/detail/:id/:itemid',
    templateUrl: 'views/purchase/item-detail.html',
    controller: 'DetailCtrl'
  })
  .state('purchase', {
  	url: '/purchase',
  	templateUrl: 'views/purchase/main.html',
  	controller: 'PurchaseCtrl'
  })
  .state('delivery', {
    url: '/delivery',
    templateUrl: 'views/delivery/main.html',
    controller: 'ConfirmationCtrl'
  })
  .state('delivery.1', {
    url: '/1',
    templateUrl: 'views/delivery/1.html',
  })
  .state('delivery.2', {
    url: '/2',
    templateUrl: 'views/delivery/2.html',
  })
  .state('delivery.3', {
    url: '/3',
    templateUrl: 'views/delivery/3.html',
  })
  .state('delivery.4', {
    url: '/4',
    templateUrl: 'views/delivery/pic.html',
  })
  .state('delivery.confirmation', {
    url: '/confirmation',
    templateUrl: 'views/delivery/4.html',
  })
  .state('sales', {
    url: '/sales',
    templateUrl: 'views/sales/main.html',
  })
  .state('sales.home', {
    url: '/sales',
    templateUrl: 'views/sales/home.html',
  })
  .state('sales.opp', {
    url: '/opportunity',
    templateUrl: 'views/sales/opp.html',
    controller: 'OppCtrl'
  })
  .state('sales.opp.table',{
    url: '/',
    templateUrl: 'views/sales/opp-table.html',
    controller: 'OppCtrl'
  })
  .state('sales.opp.detail',{
    url: '/:id',
    templateUrl: 'views/sales/opp-detail.html',
    controller: 'OppCtrl'
  })
  .state('sales.opp.new',{
    url: '/opp/new',
    templateUrl: 'views/sales/opp-new.html',
    controller: 'OppCtrl'
  })
  .state('sales.leads', {
    url: '/leads',
    templateUrl: 'views/sales/leads.html',
    controller: 'LeadCtrl'
  })
  .state('sales.leads.table',{
    url: '/',
    templateUrl: 'views/sales/lead-table.html',
    controller: 'LeadCtrl'
  })
  .state('sales.leads.detail',{
    url: '/:id',
    templateUrl: 'views/sales/lead-detail.html',
    controller: 'LeadCtrl'
  })
  .state('sales.tasks', {
    url: '/tasks',
    templateUrl: 'views/sales/tasks.html',
  });
  $urlRouterProvider.when("views/sales/main.html", "views/sales/home.html"); 
}]);
