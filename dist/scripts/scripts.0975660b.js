"use strict";angular.module("angularTestApp",["ngAnimate","ngCookies","ngResource","ngRoute","ui.router","ngSanitize","ngTouch","angularTestApp.controllers","OrderService","ui.bootstrap","DetailCtrl"]).config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/"),a.state("/",{url:"/",templateUrl:"views/main.html",controller:"PurchaseCtrl"}).state("detail",{url:"/detail/:id",templateUrl:"views/purchase-detail.html",controller:"DetailCtrl"}).state("detail_item",{url:"/detail/:id/:itemid",templateUrl:"views/purchase-detail-item.html",controller:"DetailCtrl"}).state("purchase",{url:"/purchase",templateUrl:"views/purchase.html",controller:"PurchaseCtrl"})}]),angular.module("angularTestApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("angularTestApp.controllers",[]).controller("PurchaseCtrl",["$scope","OrderService",function(a,b){a.orders=b.all()}]),angular.module("OrderService",[]).factory("OrderService",function(){var a=[{id:"1",show:"true",name:"Industrial Suppliers",cost:"6200.00",n_types:"1",repname:"Seth",order_num:"4100023",account_num:"Cost Center Purchasing",date:"August 1, 2015",code:"2015",items:[{addr:"212 Hamilton Ave. Palo Alto, CA",item_name:" Circuit board CS 3500",item_id:"1",sku:"121",subtotal:"695.11",n_units:"50",material:"n/a",material_group:"n/a",office:"Palo Alto HQ",notes:"deliver between 9-5",pbxx:"n/a",skto:"skto"}]},{id:"2",show:"true",name:"Costco",cost:"391.00",n_types:"3",repname:"Samantha Lo",order_num:"1000293",account_num:"Not assigned",date:"August 2, 2015",code:"Not assigned",items:[{addr:"212 Hamilton Ave, Palo Alto",item_name:"Kitchen Supplies",item_id:"1",sku:"2304",subtotal:"160",n_units:"30",material:"n/a",material_group:"n/a",office:"Palo Alto HQ",notes:"deliver between 9-5",pbxx:"n/a",skto:"skto"},{addr:"212 Hamilton Ave, Palo Alto",item_name:"Office Supplies",item_id:"2",sku:"12004C",subtotal:"900",n_units:"30",material_group:"n/a",office:"Palo Alto HQ",notes:"deliver between 9-5",pbxx:"n/a",skto:"skto"}]},{id:"3",show:"true",name:"Staples",cost:"16920.13",n_types:"1",repname:"James Smith",order_num:"199274",account_num:"Not assigned",date:"September 30, 2015",code:"Not assigned",items:[{addr:"420 Florence Ave, Palo Alto",item_name:"Office Furniture Installation Services",item_id:"1",sku:" n/a",subtotal:"n/a",n_units:"n/a",material_group:"n/a",office:"Palo Alto HQ",notes:"deliver between 9-5",pbxx:"n/a",skto:"skto"}]},{id:"4",show:"true",name:"Materials Co.",cost:"135,100.00",n_types:"1",repname:"Anthony Carpenter",order_num:"12030049",account_num:"Raw Materials",date:"August 23, 2015",code:"2331",items:[{addr:"420 Florence Ave, Palo Alto",item_name:"Silicon Wafer 239 EC",item_id:"1",sku:" n/a",subtotal:"n/a",n_units:"n/a",material_group:"n/a",office:"Palo Alto HQ",notes:"deliver between 9-5",pbxx:"n/a",skto:"skto"}]},{id:"5",show:"true",name:"Office Depot",cost:"2887.22",n_types:"2",repname:"Jordan Lind",order_num:"10993099",account_num:"Cost Center Purchasing",date:"August 23, 2015",code:"2015",items:[{addr:"420 Florence Ave, Palo Alto",item_name:"Realspace Dawson 60",item_id:"1",sku:" n/a",subtotal:"2500",n_units:"n/a",material_group:"n/a",office:"Palo Alto HQ",notes:"deliver between 9-5",pbxx:"n/a",skto:"skto"},{addr:"420 Florence Ave, Palo Alto",item_name:"Safety Flooring",item_id:"2",sku:" n/a",subtotal:"387.22",n_units:"n/a",material_group:"n/a",office:"Palo Alto HQ",notes:"deliver between 9-5",pbxx:"n/a",skto:"skto"}]},{id:"6",show:"true",name:"Honeywell",cost:"8839.36",n_types:"3",repname:"Laura Johnson",order_num:"10993099",account_num:"Cost Center Purchasing",date:"October 23, 2015",code:"2015",items:[{addr:"420 Florence Ave, Palo Alto",item_name:"PIR Motion Sensor with Indoor Hidden Color Camera and SD Recorder",item_id:"1",sku:" 204213275",subtotal:"2844.16",n_units:"32",material_group:"n/a",office:"Palo Alto HQ",notes:"deliver between 9-5",pbxx:"n/a",skto:"skto"},{addr:"420 Florence Ave, Palo Alto",item_name:"VisionPRO Remote Indoor Sensor",item_id:"2",sku:" c7189U1005",subtotal:"614.60",n_units:"28",material_group:"n/a",office:"Palo Alto HQ",notes:"deliver between 9-5",pbxx:"n/a",skto:"skto"},{addr:"420 Florence Ave, Palo Alto",item_name:"Thunderbolt 27' Widescreen LED Monitor - Silver",item_id:"3",sku:"3143129",subtotal:"113880",n_units:"120",material_group:"n/a",office:"Palo Alto HQ",notes:"deliver between 9-5",pbxx:"n/a",skto:"skto"}]}];return{all:function(){return a}}}),angular.module("DetailCtrl",[]).controller("DetailCtrl",["$scope","$stateParams","OrderService",function(a,b,c){a.id=b.id,a.orders=c.all(),a.myFilter=function(a){return"true"===a.show},a.orders.forEach(function(b){b.id===a.id&&(a.order=b,a.items=b.items)}),a.order=a.orders[a.id-1],a.items=a.order.items,a.itemid=b.itemid,a.item=a.items[a.itemid-1]}]),angular.module("angularTestApp").run(["$templateCache",function(a){a.put("views/main.html",'<div class="row marketing"> <!-- <h4>Approvals</h4>\n  <p>\n    HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.\n  </p>\n\n  <h4>Sales</h4>\n  <p>\n    AngularJS is a toolset for building the framework most suited to your application development.\n  </p>\n\n  <h4>Karma</h4>\n  <p>Spectacular Test Runner for JavaScript.</p>\n</div>\n --> <!-- <p class="lead">\n    <img src="images/yeoman.8cb970fb.png" alt="I\'m Yeoman"><br>\n    Always a pleasure scaffolding your apps.\n  </p> --> <div class="topic"> <h3 class="text-center topic-name"> Field Services </h3> <div class="row"> <div class="col-md-3"> <a class="btn btn-home btn-default btn-block" ui-sref="purchase">Purchase Req Approvals</a> </div> <div class="col-md-3"> <a class="btn btn-home btn-default btn-block">Sales Discount Approvals</a> </div> <div class="col-md-3"> <a class="btn btn-home btn-default btn-block">Sales KPI\'s</a> </div> <div class="col-md-3"> <a class="btn btn-home btn-default btn-block">Report a ticket</a> </div> </div> </div> <div class="topic"> <h3 class="text-center topic-name"> Human Resources </h3> <div class="row"> <div class="col-md-3"> <a class="btn btn-home btn-default btn-block" href="/nerds" role="button">Capture Field Data</a> </div> <div class="col-md-3"> <a class="btn btn-home btn-default btn-block" href="/geeks" role="button">Orders</a> </div> <div class="col-md-3"> <a class="btn btn-home btn-default btn-block" href="/nerds" role="button">Customer Directory</a> </div> <div class="col-md-3"> <a class="btn btn-home btn-default btn-block" href="/geeks" role="button">Product Directory</a> </div> </div> </div></div>'),a.put("views/purchase-detail-item.html",'<a type="button" class="btn btn-primary" ui-sref="detail({id:order.id})"> Back </a> <h3> {{item.item_name}}</h3> <div class="topic"> <div> {{ item.n_units }} piece(s)</div> <div> {{ item.subtotal }} USD </div> </div> <h3> Materials</h3> <div class="topic"> <div class="details"><strong>Material: </strong>{{ item.material }}</div> <div class="details"><strong>Material Group: </strong>{{item.material_group }}</div> </div> <h3> Delivery on {{ item.date }} </h3> <div class="topic"> <div class="details"><strong>Office: </strong>{{ item.office }}</div> <div class="details"><strong>Address: </strong>{{ item.addr }}</div> </div> <h3> Notes </h3> <div class="topic"> <div>{{item.notes}}</div> </div> <h3> Pricing Conditions </h3> <div class="topic"> <div class="details"><strong>Gross Price (PBXX): </strong>{{item.pbxx }}</div> <div class="details"><strong>Cash Discount (SKTO): </strong>{{item.skto }}</div> </div>'),a.put("views/purchase-detail.html",'<a type="button" class="btn btn-primary" ui-sref="purchase"> Back </a> <div class="gray-box"> <h2> {{ order.name }} </h2> <div class="text-right"> <h3> {{ order.cost }} USD </h3> <h4> {{ order.repname }} </h4> </div> </div> <div class="text-left"> <p> <strong>Purchase Order: </strong>{{ order.order_num }} </p> <p> <strong>Delivery Date: </strong> {{ order.date }} </p> <p> <strong>Office: </strong> {{ order.office }} </p> </div> <hr> <h3> Items ({{order.n_types}})</h3> <table class="table table-hover table-bordered"> <thead> <tr> <td><strong>Description</strong></td> <td><strong>Item</strong></td> <td><strong>Category</strong></td> <td><strong>Quantity</strong></td> <td><strong>Subtotal</strong></td> </tr> </thead> <tbody> <tr ng-repeat="item in items"> <td><a ui-sref="detail_item({id: order.id, itemid: item.item_id})">{{ item.item_name }}</a></td> <td>{{ item.item_id }}</td> <td>{{ item.sku }}</td> <td>{{ item.quant }} piece(s)</td> <td>{{ item.subtotal }}</td> </tr> </tbody> </table> <hr> <h3> Attachments </h3> <hr> <h3> Notes </h3> <div ng-repeat="item in items"> <div> {{item.notes}} </div> </div> <a class="btn btn-success">Approve</a> <a class="btn btn-warning">Reject</a>'),a.put("views/purchase.html",'<h3>Purchase Aquisition Orders</h3> <table class="table table-bordered table-hover"> <thead id="table-header"> <td> Company Name </td> <td> Item Count </td> <td> Total Cost </td> <td> Representative Name </td> <td></td> <td></td> </thead> <tbody> <tr ng-repeat="order in orders | filter : { show: \'true\'}"> <td> <a ui-sref="detail({id: order.id})">{{ order.name }} </a></td> <td> {{ order.n_types }} </td> <td> {{ order.cost }} </td> <td> {{ order.repname }} </td> <td> <a class="btn btn-success btn-xs">Approve</a> </td> <td> <a class="btn btn-warning btn-xs">Reject</a> </td> </tr> </tbody> </table> ')}]);