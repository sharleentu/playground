"use strict";angular.module("angularTestApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngTable","ui.router","ngSanitize","ngTouch","angularTestApp.controllers","OrderService","ui.bootstrap","DetailCtrl","angularModalService","ModalCtrl","ConfirmationCtrl","OppService","OppCtrl","LeadCtrl","LeadService"]).config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/"),a.state("/",{url:"/",templateUrl:"views/main.html",controller:"PurchaseCtrl"}).state("detail",{url:"/detail/:id",templateUrl:"views/purchase/detail.html",controller:"DetailCtrl"}).state("detail_item",{url:"/detail/:id/:itemid",templateUrl:"views/purchase/item-detail.html",controller:"DetailCtrl"}).state("purchase",{url:"/purchase",templateUrl:"views/purchase/main.html",controller:"PurchaseCtrl"}).state("delivery",{url:"/delivery",templateUrl:"views/delivery/main.html",controller:"ConfirmationCtrl"}).state("delivery.1",{url:"/1",templateUrl:"views/delivery/1.html"}).state("delivery.2",{url:"/2",templateUrl:"views/delivery/2.html"}).state("delivery.3",{url:"/3",templateUrl:"views/delivery/3.html"}).state("delivery.4",{url:"/4",templateUrl:"views/delivery/pic.html"}).state("delivery.confirmation",{url:"/confirmation",templateUrl:"views/delivery/4.html"}).state("sales",{url:"/sales",templateUrl:"views/sales/main.html"}).state("sales.home",{url:"/sales",templateUrl:"views/sales/home.html"}).state("sales.opp",{url:"/opportunity",templateUrl:"views/sales/opp.html",controller:"OppCtrl"}).state("sales.opp.table",{url:"/",templateUrl:"views/sales/opp-table.html",controller:"OppCtrl"}).state("sales.opp.detail",{url:"/:id",templateUrl:"views/sales/opp-detail.html",controller:"OppCtrl"}).state("sales.opp.new",{url:"/opp/new",templateUrl:"views/sales/opp-new.html",controller:"OppCtrl"}).state("sales.leads",{url:"/leads",templateUrl:"views/sales/leads.html"}).state("sales.leads.table",{url:"/",templateUrl:"views/sales/lead-table.html",controller:"LeadCtrl"}).state("sales.lead.detail",{url:"/:id",templateUrl:"views/sales/lead-detail.html",controller:"LeadCtrl"}).state("sales.tasks",{url:"/tasks",templateUrl:"views/sales/tasks.html"}),b.when("views/sales/main.html","views/sales/home.html")}]),angular.module("angularTestApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("angularTestApp.controllers",[]).controller("PurchaseCtrl",["$scope","OrderService","ModalService",function(a,b,c){a.orders=b.all(),a.show=function(a){c.showModal({templateUrl:"modal_approve.html",controller:"ModalCtrl",inputs:{order:a}}).then(function(a){a.element.modal(),a.close.then(function(a){console.log(a)})})},a.show_reject=function(a){c.showModal({templateUrl:"modal_reject.html",controller:"ModalCtrl",inputs:{order:a}}).then(function(a){a.element.modal(),a.close.then(function(a){console.log(a)})})}}]),angular.module("ModalCtrl",[]).controller("ModalCtrl",["$scope","close","order",function(a,b,c){a.order=c,a.close=function(a){c.show=a,b(a,500)}}]),angular.module("OrderService",[]).factory("OrderService",function(){var a=[{id:"1",show:!0,name:"Industrial Suppliers",cost:"6200.00",n_types:"1",repname:"Seth",order_num:"4100023",account_num:"Cost Center Purchasing",date:"August 1, 2015",code:"2015",items:[{addr:"212 Hamilton Ave. Palo Alto, CA",item_name:" Circuit board CS 3500",item_id:"1",sku:"121",subtotal:"695.11",n_units:"50",material:"n/a",material_group:"n/a",office:"Palo Alto HQ",notes:"deliver between 9-5",pbxx:"n/a",skto:"skto"}]},{id:"2",show:!0,name:"Costco",cost:"391.00",n_types:"3",repname:"Samantha Lo",order_num:"1000293",account_num:"Not assigned",date:"August 2, 2015",code:"Not assigned",items:[{addr:"212 Hamilton Ave, Palo Alto",item_name:"Kitchen Supplies",item_id:"1",sku:"2304",subtotal:"160",n_units:"30",material:"n/a",material_group:"n/a",office:"Palo Alto HQ",notes:"deliver between 9-5",pbxx:"n/a",skto:"skto"},{addr:"212 Hamilton Ave, Palo Alto",item_name:"Office Supplies",item_id:"2",sku:"12004C",subtotal:"900",n_units:"30",material_group:"n/a",office:"Palo Alto HQ",notes:"deliver between 9-5",pbxx:"n/a",skto:"skto"}]},{id:"3",show:!0,name:"Staples",cost:"16920.13",n_types:"1",repname:"James Smith",order_num:"199274",account_num:"Not assigned",date:"September 30, 2015",code:"Not assigned",items:[{addr:"420 Florence Ave, Palo Alto",item_name:"Office Furniture Installation Services",item_id:"1",sku:" n/a",subtotal:"n/a",n_units:"n/a",material_group:"n/a",office:"Palo Alto HQ",notes:"deliver between 9-5",pbxx:"n/a",skto:"skto"}]},{id:"4",show:!0,name:"Materials Co.",cost:"135,100.00",n_types:"1",repname:"Anthony Carpenter",order_num:"12030049",account_num:"Raw Materials",date:"August 23, 2015",code:"2331",items:[{addr:"420 Florence Ave, Palo Alto",item_name:"Silicon Wafer 239 EC",item_id:"1",sku:" n/a",subtotal:"n/a",n_units:"n/a",material_group:"n/a",office:"Palo Alto HQ",notes:"deliver between 9-5",pbxx:"n/a",skto:"skto"}]},{id:"5",show:!0,name:"Office Depot",cost:"2887.22",n_types:"2",repname:"Jordan Lind",order_num:"10993099",account_num:"Cost Center Purchasing",date:"August 23, 2015",code:"2015",items:[{addr:"420 Florence Ave, Palo Alto",item_name:"Realspace Dawson 60",item_id:"1",sku:" n/a",subtotal:"2500",n_units:"n/a",material_group:"n/a",office:"Palo Alto HQ",notes:"deliver between 9-5",pbxx:"n/a",skto:"skto"},{addr:"420 Florence Ave, Palo Alto",item_name:"Safety Flooring",item_id:"2",sku:" n/a",subtotal:"387.22",n_units:"n/a",material_group:"n/a",office:"Palo Alto HQ",notes:"deliver between 9-5",pbxx:"n/a",skto:"skto"}]},{id:"6",show:!0,name:"Honeywell",cost:"8839.36",n_types:"3",repname:"Laura Johnson",order_num:"10993099",account_num:"Cost Center Purchasing",date:"October 23, 2015",code:"2015",items:[{addr:"420 Florence Ave, Palo Alto",item_name:"PIR Motion Sensor with Indoor Hidden Color Camera and SD Recorder",item_id:"1",sku:" 204213275",subtotal:"2844.16",n_units:"32",material_group:"n/a",office:"Palo Alto HQ",notes:"deliver between 9-5",pbxx:"n/a",skto:"skto"},{addr:"420 Florence Ave, Palo Alto",item_name:"VisionPRO Remote Indoor Sensor",item_id:"2",sku:" c7189U1005",subtotal:"614.60",n_units:"28",material_group:"n/a",office:"Palo Alto HQ",notes:"deliver between 9-5",pbxx:"n/a",skto:"skto"},{addr:"420 Florence Ave, Palo Alto",item_name:"Thunderbolt 27' Widescreen LED Monitor - Silver",item_id:"3",sku:"3143129",subtotal:"113880",n_units:"120",material_group:"n/a",office:"Palo Alto HQ",notes:"deliver between 9-5",pbxx:"n/a",skto:"skto"}]}];return{all:function(){return a}}}),angular.module("DetailCtrl",[]).controller("DetailCtrl",["$scope","$stateParams","OrderService","ModalService",function(a,b,c,d){a.id=b.id,a.orders=c.all(),a.myFilter=function(a){return"true"===a.show},a.orders.forEach(function(b){b.id===a.id&&(a.order=b,a.items=b.items)}),a.order=a.orders[a.id-1],a.items=a.order.items,a.itemid=b.itemid,a.item=a.items[a.itemid-1],a.show=function(a){d.showModal({templateUrl:"modal_approve.html",controller:"ModalCtrl",inputs:{order:a}}).then(function(a){a.element.modal(),a.close.then(function(a){console.log(a)})})},a.show_reject=function(a){d.showModal({templateUrl:"modal_reject.html",controller:"ModalCtrl",inputs:{order:a}}).then(function(a){a.element.modal(),a.close.then(function(a){console.log(a)})})}}]),angular.module("ConfirmationCtrl",[]).controller("ConfirmationCtrl",["$scope",function(a){a.formData={},a.processForm=function(){console.log("good")}}]),angular.module("OppService",[]).factory("OppService",function(){var a=[{id:"1",owner:"John Smith",name:"Acme-123",account:"Amazon",type:"Existing Business",phone:"",addr:"12 Stanford Street, Union City, CA 12834",close_date:"7/21/2015",stage:"Perception Analysis",prob:"70%",amount:"$192,000.00",lead_src:"Seminar - Internal",next_step:"Discuss with technical team",desc:"Great meeting, but timing is going to be next quarter",created_by:"Capriza, 8/08/15 2:33 PM",last_edited:"Capriza, 8/09/15, 3:50 PM",tag:"recent"},{id:"2",owner:"John Smith",name:"Apple Palo Alto",account:"Apple",type:"",phone:"",addr:"",close_date:"7/7/2015",stage:"",prob:"",amount:"",lead_src:"",next_step:"",desc:"",created_by:"",last_edited:"",tag:"recent"},{id:"3",owner:"Darren Row",name:"Acme-1001",account:"Acme Corporation",type:"Existing Business",phone:"801-203-3333",addr:"476 Holly Street, Denver, CO 80216",close_date:"7/7/2015",stage:"Proposal/Price Quote",prob:"75%",amount:"$3,900,000.00",lead_src:"Seminar - Internal",next_step:"in person meeting next week",desc:"Great meeting, we were able to move the close date up sooner than expected",created_by:"Capriza, 6/22/2015 5:12 PM",last_edited:"Capriza, 7/05/15, 9:12 AM",tag:"recent"},{id:"4",owner:"Sara Jane",name:"ATT",account:"3C Systems",type:"",phone:"801-203-3333",addr:"22364 Serra Drive, Los Angeles, CA 80216",close_date:"6/7/2015",stage:"Negotiations Review",prob:"90%",amount:"$1,330,000.00",lead_src:"",next_step:"",desc:"",created_by:"Sara Jane, 6/22/2015 5:12 PM",last_edited:"Sara Jane, 7/05/15, 9:12 AM",tag:"recent"},{id:"5",owner:"Todd Davis",name:"ABC Talon Opportunity",account:"ABC",type:"New Customer",phone:"801-203-3333",addr:"22364 Serra Drive, Los Angeles, CA 80216",close_date:"8/7/2015",stage:"Propose",prob:"40%",amount:"$1,330,000.00",lead_src:"ACO's Summit",next_step:"Discovery Call",desc:"",created_by:"Sara Jane, 6/22/2015 5:12 PM",last_edited:"Sara Jane, 7/05/15, 9:12 AM",tag:"recent"},{id:"6",owner:"Todd Davis",name:"Edge SLA",account:"Edge Communications",type:"New Customer",phone:"801-203-3333",addr:"22364 Serra Drive, Los Angeles, CA 80216",close_date:"8/7/2015",stage:"Closed Won",prob:"100%",amount:"$1,330,000.00",lead_src:"ACO's Summit",next_step:"Discovery Call",desc:"",created_by:"Sara Jane, 6/22/2015 5:12 PM",last_edited:"Sara Jane, 7/05/15, 9:12 AM",tag:"recent"}];return{all:function(){return a},add:function(b){return a.push(b)}}}),angular.module("OppCtrl",[]).controller("OppCtrl",["$scope","$stateParams","OppService",function(a,b,c){a.opps=c.all(),console.log("length of opps outside of add function is"+a.opps.length),a.customFilter=function(b){return b.filter===a.filterItem.opp.filter?!0:!1};var d=new Date,e=d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear()+" @ "+d.getHours()+":"+d.getMinutes(),f=a.opps.length,g=f+1;a.newOpp={},a.add=function(b){console.log("clicking add"),console.log("new opp is"+b),c.add({id:g.toString(),owner:b.owner,name:b.name,account:b.account,type:b.type,phone:b.phone,close_date:b.close_date,stage:b.stage,prob:b.prob,amount:b.amount,lead_src:b.lead_src,desc:b.desc,created_by:"Sharleen "+e,last_edited:"Sharleen "+e,tag:"recent"}),console.log("new opp name to add is"+b.name),a.newOpp={}},a.id=b.id,console.log(a.id),console.log("length of opps is"+a.opps.length),a.opps.forEach(function(b){console.log("looking for opp"),console.log("current opp id is"+b.id),console.log(b.name),b.id===a.id&&(console.log(b+"found correct opp"),a.opp=b)})}]),angular.module("LeadCtrl",[]).controller("LeadCtrl",["$scope","$stateParams","LeadService",function(a,b,c){a.opps=c.all(),console.log("length of opps outside of add function is"+a.opps.length),a.customFilter=function(b){return b.filter===a.filterItem.opp.filter?!0:!1};var d=new Date,e=d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear()+" @ "+d.getHours()+":"+d.getMinutes(),f=a.opps.length,g=f+1;a.newOpp={},a.add=function(b){console.log("clicking add"),console.log("new opp is"+b),c.add({id:g.toString(),owner:b.owner,name:b.name,account:b.account,type:b.type,phone:b.phone,close_date:b.close_date,stage:b.stage,prob:b.prob,amount:b.amount,lead_src:b.lead_src,desc:b.desc,created_by:"Sharleen "+e,last_edited:"Sharleen "+e,tag:"recent"}),console.log("new opp name to add is"+b.name),a.newOpp={}},a.id=b.id,console.log(a.id),console.log("length of opps is"+a.opps.length),a.opps.forEach(function(b){console.log("looking for opp"),console.log("current opp id is"+b.id),console.log(b.name),b.id===a.id&&(console.log(b+"found correct opp"),a.opp=b)})}]),angular.module("LeadService",[]).factory("LeadService",function(){var a=[{id:"1",owner:"John Smith",name:"Acme-123",title:"Designer",company:"Capriza",engage:"",phone:"650-112-3456",email:"john@capriza.com",status:"open",rating:"",addr:"400 Hamilton Ave, Palo Alto, CA",website:"capriza.com",revenue:"$8,000,000",n_employee:"1234",desc:"",industry:"",lead_src:"",created_by:"Capriza, 8/08/15 2:33 PM",last_edited:"Capriza, 8/09/15, 3:50 PM",tag:"recent"},{id:"2",owner:"John Smith",name:"Acme-123",title:"Designer",company:"Capriza",engage:"",phone:"650-112-3456",email:"john@capriza.com",status:"open",rating:"",addr:"400 Hamilton Ave, Palo Alto, CA",website:"capriza.com",revenue:"$8,000,000",n_employee:"1234",desc:"",industry:"",lead_src:"",created_by:"Capriza, 8/08/15 2:33 PM",last_edited:"Capriza, 8/09/15, 3:50 PM",tag:"recent"},{id:"3",owner:"John Smith",name:"Acme-123",title:"Designer",company:"Capriza",engage:"",phone:"650-112-3456",email:"john@capriza.com",status:"open",rating:"",addr:"400 Hamilton Ave, Palo Alto, CA",website:"capriza.com",revenue:"$8,000,000",n_employee:"1234",desc:"",industry:"",lead_src:"",created_by:"Capriza, 8/08/15 2:33 PM",last_edited:"Capriza, 8/09/15, 3:50 PM",tag:"recent"},{id:"4",owner:"John Smith",name:"Acme-123",title:"Designer",company:"Capriza",engage:"",phone:"650-112-3456",email:"john@capriza.com",status:"open",rating:"",addr:"400 Hamilton Ave, Palo Alto, CA",website:"capriza.com",revenue:"$8,000,000",n_employee:"1234",desc:"",industry:"",lead_src:"",created_by:"Capriza, 8/08/15 2:33 PM",last_edited:"Capriza, 8/09/15, 3:50 PM",tag:"recent"},{id:"5",owner:"John Smith",name:"Acme-123",title:"Designer",company:"Capriza",engage:"",phone:"650-112-3456",email:"john@capriza.com",status:"open",rating:"",addr:"400 Hamilton Ave, Palo Alto, CA",website:"capriza.com",revenue:"$8,000,000",n_employee:"1234",desc:"",industry:"",lead_src:"",created_by:"Capriza, 8/08/15 2:33 PM",last_edited:"Capriza, 8/09/15, 3:50 PM",tag:"recent"},{id:"6",owner:"John Smith",name:"Acme-123",title:"Designer",company:"Capriza",engage:"",phone:"650-112-3456",email:"john@capriza.com",status:"open",rating:"",addr:"400 Hamilton Ave, Palo Alto, CA",website:"capriza.com",revenue:"$8,000,000",n_employee:"1234",desc:"",industry:"",lead_src:"",created_by:"Capriza, 8/08/15 2:33 PM",last_edited:"Capriza, 8/09/15, 3:50 PM",tag:"recent"}];return{all:function(){return a},add:function(b){return a.push(b)}}}),angular.module("angularTestApp").run(["$templateCache",function(a){a.put("views/activation-main.html",'<body ng-app="formApp"> <div class="container"> <h1> hello </h1> <div ui-view></div> </div> </body>'),a.put("views/delivery.html",'<form ng-submit="processForm()"> <h1> Delivery Tracking </h1> <ul class="nav nav-tabs"> <li ui-sref-active="active"><a ui-sref=".1"> 1. Contractor Details </a></li> <li ui-sref-active="active"><a ui-sref=".2"> 2. Recipient Details </a></li> <li ui-sref-active="active"><a ui-sref=".3"> 3. Delivery Details </a></li> <li ui-sref-active="active"><a ui-sref=".4"> 4. Delivery Form Upload </a></li> <li ui-sref-active="active"><a ui-sref=".confirmation">5. Confirmation Page</a></li> </ul> <div id="form-views" ui-view> <div ng-include="\'views/delivery/1.html\'"></div> </div> </form>'),a.put("views/delivery/1.html",'<div class="topic-delivery"> <h3> Contractor Details </h3> <label for="firstname">First Name</label> <input type="text" class="form-control" id="firstname" placeholder="Bob" ng-model="formData.first_name"><br> <label for="lastname">Last Name</label> <input type="text" class="form-control" id="lastname" placeholder="Smith" ng-model="formData.last_name"><br> <label for="id">Contractor ID</label> <input type="text" class="form-control" id="id" placeholder="ex: STAN-102356" ng-model="formData.id"><br> <label for="email">Email</label> <input type="email" class="form-control" id="email" placeholder="bob@company.com" ng-model="formData.email"> <br> <div class="pull-right"> <a type="button " class="btn btn-primary" ui-sref="delivery.2"> Next </a> </div> </div>'),a.put("views/delivery/2.html",'<div class="topic-delivery"> <h3> Delivery Details </h3> <div class="form-group"> <label for="date">Today\'s Date</label> <input type="date" class="form-control" id="date" ng-model="formData.date"> </div> <div class="form-group"> <label for="time">Time of Delivery</label> <input type="time" class="form-control" id="time" ng-model="formData.time"> </div> <div class="form-group"> <label for="recipient">Recipient\'s Name </label> <input type="text" class="form-control" id="recipient" ng-model="formData.receipient"> </div> <div class="form-group"> <label for="addr">Delivery Address</label> <input type="text" class="form-control" id="addr" placeholder="400 Hamilton Ave, Palo Alto CA 94309" ng-model="formData.addr"> </div> <label>Type of Delivery</label> <br> <label> <input type="checkbox" ng-model="formData.value1"> Residential </label><br> <label> <input type="checkbox" ng-model="formData.value2"> Corporate </label><br> <label> <input type="checkbox" ng-model="formData.value3"> Other </label><br> <label for="form-control">Delivery Status</label> <select class="form-control" ng-model="formData.status"> <option>Delivered</option> <option>Not Delivered</option> </select> <div class="pull-right"> <a type="button" class="btn btn-primary" ui-sref="delivery.1"> Back </a> </div> <div class="pull-left"> <a type="button" class="btn btn-primary" ui-sref="delivery.3"> Next </a> </div> </div>'),a.put("views/delivery/3.html",'<div class="topic-delivery"> <h3> Delivery Summary </h3> <div class="form-group"> <label for="order">Delivery Package Number</label> <input type="text" class="form-control" id="order" placeholder="ex. 1000000294667 " ng-model="formData.order"> </div> <div class="form-group"> <label for="firstname">Number of Packages</label> <input type="number" class="form-control" id="firstname" ng-model="formData.n_items"> </div> <div class="form-group"> <label for="firstname">Package Description</label> <input type="text" class="form-control" id="lastname" placeholder="ex. good condition" ng-model="formData.desc"> </div> <div class="form-group"> <label for="firstname">Additional Notes</label> <input type="text" rows="3" class="form-control" id="firstname" ng-model="formData.notes"> </div> <div class="pull-right"> <a type="button" class="btn btn-primary" ui-sref="delivery.2"> Back </a></div> <div class="pull-left"> <a type="button" class="btn btn-primary" ui-sref="delivery.4"> Next </a> </div> </div>'),a.put("views/delivery/4.html",'<div class="topic-delivery"> <h3 class="text-center"> Your form has been submitted. </h3> <p> <strong>Contractor: </strong>{{formData.first_name}} {{formData.last_name}}</p> <p> <strong>Contractor ID: </strong>{{formData.id}}</p> <p> <strong>Contractor email: </strong>{{formData.email}}</p><br> <p> <strong>Package order number: </strong>{{formData.order}}</p> <p> <strong>Sent to: </strong> {{formData.recipient}}</p> <p> {{formData.time}} {{formData.date}} </p> <p> {{formData.addr}}</p> <p> <strong>Delivery status: </strong>{{formData.status}}</p> <p> <strong>Number of Packages: </strong>{{formData.n_items}}</p> <p> <strong>Package desc: </strong>{{formData.desc}}</p> <p> <strong>Additional notes: </strong>{{formData.notes}}</p> <a type="button" class="btn btn-primary" ui-sref="/"> Back to Home </a> </div>'),a.put("views/delivery/main.html",'<form ng-submit="processForm()"> <h1> Delivery Tracking </h1> <ul class="nav nav-tabs"> <li ui-sref-active="active"><a ui-sref=".1"> 1. Contractor Details </a></li> <li ui-sref-active="active"><a ui-sref=".2"> 2. Recipient Details </a></li> <li ui-sref-active="active"><a ui-sref=".3"> 3. Delivery Details </a></li> <li ui-sref-active="active"><a ui-sref=".4"> 4. Delivery Form Upload </a></li> <li ui-sref-active="active"><a ui-sref=".confirmation">5. Confirmation Page</a></li> </ul> <div id="form-views" ui-view> <div ng-include="\'views/delivery/1.html\'"></div> </div> </form>'),a.put("views/delivery/pic.html",'<div class="topic-delivery"> <div class="form-group"> <h3>Delivery form upload</h3> <p class="help-block">Must include clear image of signature</p> <input type="file" id="file"> <img id="blah" src="#" alt="Preview your document image here"> </div> <div class="pull-left"> <a type="button" class="btn btn-primary" ui-sref="delivery.3"> Back </a></div> <div class="pull-right"> <a type="button" class="btn btn-success" ui-sref="delivery.confirmation"> Submit </a></div> </div> <script>function readURL(input) {\n    if (input.files && input.files[0]) {\n      var reader = new FileReader();\n      reader.onload = function (e) {\n        $(\'#blah\').attr(\'src\', e.target.result)\n      }\n        reader.readAsDataURL(input.files[0]);\n    }\n  }\n\n  $("#file").change(function(){\n    readURL(this);\n  });</script>'),a.put("views/main.html",'<div class="row marketing"> <div class="topic"> <h3 class="text-center topic-name"> Field Services </h3> <div class="row"> <div class="col-md-3"> <a class="btn btn-home btn-default btn-block" ui-sref="delivery">Delivery Tracking</a> </div> <div class="col-md-3"> <a class="btn btn-home btn-default btn-block"> - </a> </div> <div class="col-md-3"> <a class="btn btn-home btn-default btn-block"> - </a> </div> </div> </div> <div class="topic"> <h3 class="text-center topic-name"> Sales </h3> <div class="row"> <div class="col-md-3"> <a class="btn btn-home btn-default btn-block" ui-sref="sales">Dashboard</a> </div> <div class="col-md-3"> <a class="btn btn-home btn-default btn-block" href="/geeks" role="button"> - </a> </div> <div class="col-md-3"> <a class="btn btn-home btn-default btn-block" href="/nerds" role="button"> - </a> </div> <div class="col-md-3"> <a class="btn btn-home btn-default btn-block" href="/geeks" role="button"> - </a> </div> </div> </div> <div class="topic"> <h3 class="text-center topic-name"> Management </h3> <div class="row"> <div class="col-md-3"> <a class="btn btn-home btn-default btn-block" ui-sref="purchase">Purchase Req Approvals</a> </div> <div class="col-md-3"> <a class="btn btn-home btn-default btn-block" href="/geeks" role="button"> - </a> </div> <div class="col-md-3"> <a class="btn btn-home btn-default btn-block" href="/nerds" role="button"> - </a> </div> <div class="col-md-3"> <a class="btn btn-home btn-default btn-block" href="/geeks" role="button"> - </a> </div> </div> </div> <div class="footer"> <p><span class="glyphicon glyphicon-check"></span> Capriza Playground </p> </div></div>'),a.put("views/purchase/detail.html",'<a type="button" class="btn btn-primary" ui-sref="purchase"> Back </a> <div class="gray-box"> <h2> {{ order.name }} </h2> <div class="text-right"> <h3> {{ order.cost }} USD </h3> <h4> {{ order.repname }} </h4> </div> </div> <div class="text-left"> <p> <strong>Purchase Order: </strong>{{ order.order_num }} </p> <p> <strong>Delivery Date: </strong> {{ order.date }} </p> <p> <strong>Office: </strong> {{ order.office }} </p> </div> <hr> <h3> Items ({{order.n_types}})</h3> <table class="table table-hover table-bordered"> <thead> <tr> <td><strong>Description</strong></td> <td><strong>Item</strong></td> <td><strong>Category</strong></td> <td><strong>Quantity</strong></td> <td><strong>Subtotal</strong></td> </tr> </thead> <tbody> <tr ng-repeat="item in items"> <td><a ui-sref="detail_item({id: order.id, itemid: item.item_id})">{{ item.item_name }}</a></td> <td>{{ item.item_id }}</td> <td>{{ item.sku }}</td> <td>{{ item.quant }} piece(s)</td> <td>{{ item.subtotal }}</td> </tr> </tbody> </table> <hr> <h3> Attachments </h3> <hr> <h3> Notes </h3> <div ng-repeat="item in items"> <div> {{item.notes}} </div> </div> <a class="btn btn-success btn-xs" href ng-click="show({{order}})">Approve</a> <script type="text/ng-template" id="modal_approve.html"><div class="modal fade">\n		          <div class="modal-dialog">\n		            <div class="modal-content">\n		              <div class="modal-header">\n		                <button type="button" class="close" ng-click="close()" data-dismiss="modal" aria-hidden="true">&times;</button>\n		                <h4 class="modal-title">Approve Order for {{order.repname}} </h4>\n		              </div>\n		              <div class="modal-body">\n		                <p> {{ order.name}} </p>\n		                <p> {{ order.cost}} </p>\n		              </div>\n		              <div class="modal-footer">\n		                <button type="button" ng-click="close(order.show)" class="btn btn-default" data-dismiss="modal">Cancel</button>\n		                <button type="button" ng-click="order.show=false; close(order.show)" class="btn btn-primary" data-dismiss="modal">Approve</button>\n		              </div>\n		            </div>\n		          </div>\n		        </div></script> <a class="btn btn-warning btn-xs" href ng-click="show_reject( {{order}})">Reject</a> <script type="text/ng-template" id="modal_reject.html"><div class="modal fade">\n		          <div class="modal-dialog">\n		            <div class="modal-content">\n		              <div class="modal-header">\n		                <button type="button" class="close" ng-click="close()" data-dismiss="modal" aria-hidden="true">&times;</button>\n		                <h4 class="modal-title">Reject Order for {{order.repname}}</h4>\n		              </div>\n		              <div class="modal-body">\n		                <p> {{ order.name}} </p>\n		                <p> {{ order.cost}} </p>\n		              </div>\n		              <div class="modal-footer">\n		                <button type="button" ng-click="close(\'No\')" class="btn btn-default" data-dismiss="modal">Cancel</button>\n		                <button type="button" ng-click="close(\'Yes\')" class="btn btn-warning" data-dismiss="modal">Reject</button>\n		              </div>\n		            </div>\n		          </div>\n		        </div></script>'),a.put("views/purchase/item-detail.html",'<a type="button" class="btn btn-primary" ui-sref="detail({id:order.id})"> Back </a> <h3> {{item.item_name}}</h3> <div class="topic"> <div> {{ item.n_units }} piece(s)</div> <div> {{ item.subtotal }} USD </div> </div> <h3> Materials</h3> <div class="topic"> <div class="details"><strong>Material: </strong>{{ item.material }}</div> <div class="details"><strong>Material Group: </strong>{{item.material_group }}</div> </div> <h3> Delivery on {{ item.date }} </h3> <div class="topic"> <div class="details"><strong>Office: </strong>{{ item.office }}</div> <div class="details"><strong>Address: </strong>{{ item.addr }}</div> </div> <h3> Notes </h3> <div class="topic"> <div>{{item.notes}}</div> </div> <h3> Pricing Conditions </h3> <div class="topic"> <div class="details"><strong>Gross Price (PBXX): </strong>{{item.pbxx }}</div> <div class="details"><strong>Cash Discount (SKTO): </strong>{{item.skto }}</div> </div>'),a.put("views/purchase/main.html",'<h3>Purchase Aquisition Orders</h3> <table class="table table-bordered table-hover"> <thead id="table-header"> <td> Company Name </td> <td> Item Count </td> <td> Total Cost </td> <td> Representative Name </td> <td></td> <td></td> </thead> <tbody> <tr ng-repeat="order in orders | filter : {show: \'true\'}"> <td> <a ui-sref="detail({id: order.id})">{{ order.name }} </a></td> <td> {{ order.n_types }} </td> <td> {{ order.cost }} </td> <td> {{ order.repname }} </td> <td> <a class="btn btn-success btn-xs" href ng-click="show({{order}})">Approve</a> <script type="text/ng-template" id="modal_approve.html"><div class="modal fade">\n		          <div class="modal-dialog">\n		            <div class="modal-content">\n		              <div class="modal-header">\n		                <button type="button" class="close" ng-click="close()" data-dismiss="modal" aria-hidden="true">&times;</button>\n		                <h4 class="modal-title">Approve Order for {{order.repname}} </h4>\n		              </div>\n		              <div class="modal-body">\n		                <p> {{ order.name}} </p>\n		                <p> {{ order.cost}} </p>\n		              </div>\n		              <div class="modal-footer">\n		                <button type="button" ng-click="close(order.show)" class="btn btn-default" data-dismiss="modal">Cancel</button>\n		                <button type="button" ng-click="order.show=false; close(order.show)" class="btn btn-primary" data-dismiss="modal">Approve</button>\n		              </div>\n		            </div>\n		          </div>\n		        </div></script> </td> <td> <a class="btn btn-warning btn-xs" href ng-click="show_reject( {{order}})">Reject</a> </td> <script type="text/ng-template" id="modal_reject.html"><div class="modal fade">\n		          <div class="modal-dialog">\n		            <div class="modal-content">\n		              <div class="modal-header">\n		                <button type="button" class="close" ng-click="close()" data-dismiss="modal" aria-hidden="true">&times;</button>\n		                <h4 class="modal-title">Reject Order for {{order.repname}}</h4>\n		              </div>\n		              <div class="modal-body">\n		                <p> {{ order.name}} </p>\n		                <p> {{ order.cost}} </p>\n		              </div>\n		              <div class="modal-footer">\n		                <button type="button" ng-click="close(\'No\')" class="btn btn-default" data-dismiss="modal">Cancel</button>\n		                <button type="button" ng-click="close(\'Yes\')" class="btn btn-warning" data-dismiss="modal">Reject</button>\n		              </div>\n		            </div>\n		          </div>\n		        </div></script> </tr> </tbody> </table> '),a.put("views/sales.html",'<h1> My Sales Dashboard </h1> <ul class="nav nav-tabs"> <li ui-sref-active="active"><a ui-sref=".home"> Home </a></li> <li ui-sref-active="active"><a ui-sref=".opp"> My Opportunities </a></li> <li ui-sref-active="active"><a ui-sref=".leads"> My Leads </a></li> <li ui-sref-active="active"><a ui-sref=".tasks"> My Tasks</a></li> </ul> <div id="form-views" ui-view> <!-- <div ng-include="\'views/sales/home.html\'"></div> --> </div>'),a.put("views/sales/home.html","<h1>Sales Home</h1>"),a.put("views/sales/lead-detail.html",'<h1> Lead detail </h1> <a type="button" class="btn btn-primary" ui-sref="sales.lead.table"> Back </a> <div class="row"> <div class="pair-label col-xs-6 col-sm-3"> <div><strong>Lead Owner :</strong></div> <div><strong>Name :</strong></div> <div><strong>Title:</strong></div> <div><strong>Company :</strong></div> <div><strong>Last Engagement :</strong></div> </div> <div class="pair-name col-xs-6 col-sm-3"> <div>{{lead.owner}}</div> <div>{{lead.name}}</div> <div>{{lead.title}}</div> <div>{{lead.company}}</div> <div>{{lead.engagement}}</div> </div> <div class="pair-label col-xs-6 col-sm-3"> <div><strong>Phone:</strong></div> <div><strong>Email :</strong></div> <div><strong>Lead Status :</strong></div> <div><strong>Rating :</strong></div> </div> <div class="pair-name col-xs-6 col-sm-3"> <div>{{lead.phone}}</div> <div>{{lead.email}}</div> <div>{{lead.status}}</div> <div>{{lead.rating}}</div> </div> </div> <h1> Product Interest </h1> <h1> Additional Information </h1> <div class="row"> <div class="pair-label col-xs-6 col-sm-3"> <div><strong>Address :</strong></div> </div> <div class="pair-name"> <div>{{address}}</div> </div> <div class="pair-label col-xs-6 col-sm-3"> <div><strong>website :</strong></div> </div> <div class="pair-name"> <div>{{website}}</div> </div> </div> <h1> Address Information </h1> <div class="row"> <div class="pair-label col-xs-6 col-sm-3"> <div><strong> Created By :</strong></div> </div> <div class="pair-name col-xs-6 col-sm-3"> <div>{{lead.created_by}}</div> </div> <div class="pair-label col-xs-6 col-sm-3"> <div><strong>Last Edited By :</strong></div> </div> <div class="pair-name col-xs-6 col-sm-3"> <div>{{lead.last_edited}}</div> </div> </div> <h1> Additional Information </h1> <div class="row"> <div class="pair-label col-xs-6 col-sm-3"> <div><strong>Annual Revenue :</strong></div> <div><strong>No. of Employees :</strong></div> <div><strong>Description:</strong></div> <div><strong>Created By :</strong></div> </div> <div class="pair-name col-xs-6 col-sm-3"> <div>{{lead.revenue}}</div> <div>{{lead.n_employee}}</div> <div>{{lead.desc}}</div> <div>{{lead.created_by}}</div> </div> <div class="pair-label col-xs-6 col-sm-3"> <div><strong>Industry:</strong></div> <div><strong>Lead Source :</strong></div> <div><strong>Modified By :</strong></div> </div> <div class="pair-name col-xs-6 col-sm-3"> <div>{{lead.industry}}</div> <div>{{lead.lead_src}}</div> <div>{{lead.last_edited}}</div> </div></div>'),
a.put("views/sales/lead-table.html",'<select class="form-control" ng-init="cc={tag: \'\'}" ng-model="cc.tag"> <option value="recent">My Recently Viewed Leads</option> <option value="no">My Unread Leads</option> <option value="maybe">Today\'s Leads</option> </select> <table class="table table-bordered table-hover"> <thead id="table-header"> <td> Lead Name </td> <td> Company </td> <td> Phone </td> </thead> <tbody> <tr ng-repeat="lead in leads  | filter : cc"> <td> <a ui-sref="sales.lead.detail({id: lead.id})">{{ lead.owner }} </a></td> <td> {{ lead.company }} </td> <td> {{ lead.phone }} </td> </tr> </tbody> </table> <a type="button" class="btn btn-primary" ui-sref="sales.lead.new"> New Lead </a>'),a.put("views/sales/leads.html","<div ui-view> <div ng-include=\"'views/sales/lead-table.html'\"></div> </div>"),a.put("views/sales/main.html",'<h1> My Sales Dashboard </h1> <ul class="nav nav-tabs"> <li ui-sref-active="active"><a ui-sref=".home"> Home </a></li> <li ui-sref-active="active"><a ui-sref=".opp"> My Opportunities </a></li> <li ui-sref-active="active"><a ui-sref=".leads"> My Leads </a></li> <li ui-sref-active="active"><a ui-sref=".tasks"> My Tasks</a></li> </ul> <div id="form-views" ui-view> <div ng-include="\'views/sales/home.html\'"></div> </div>'),a.put("views/sales/opp-detail.html",'<h1> Opportunity detail </h1> <a type="button" class="btn btn-primary" ui-sref="sales.opp.table"> Back </a> <div class="row"> <div class="pair-label col-xs-6 col-sm-3"> <div><strong>Opportunity Owner :</strong></div> <div><strong>Opportunity Name :</strong></div> <div><strong>Account Name :</strong></div> <div><strong>Type :</strong></div> <div><strong>Account Phone :</strong></div> <div><strong>Account Address :</strong></div> </div> <div class="pair-name col-xs-6 col-sm-3"> <div>{{opp.owner}}</div> <div>{{opp.name}}</div> <div>{{opp.account}}</div> <div>{{opp.type}}</div> <div>{{opp.phone}}</div> <div>{{opp.addr}}</div> </div> <div class="pair-label col-xs-6 col-sm-3"> <div><strong>Close Date :</strong></div> <div><strong>State :</strong></div> <div><strong>Probability :</strong></div> <div><strong>Amount :</strong></div> </div> <div class="pair-name col-xs-6 col-sm-3"> <div>{{opp.close_date}}</div> <div>{{opp.stage}}</div> <div>{{opp.prob}}</div> <div>{{opp.amount}}</div> </div> </div> <h1> Additional Information </h1> <div class="row"> <div class="pair-label col-xs-6 col-sm-3"> <div><strong>Lead Source :</strong></div> <div><strong>Next Step :</strong></div> <div><strong>Description :</strong></div> </div> <div class="pair-name"> <div>{{lead_src}}</div> <div>{{next_step}}</div> <div>{{desc}}</div> </div> </div> <h1> System Information </h1> <div class="row"> <div class="pair-label col-xs-6 col-sm-3"> <div><strong> Created By :</strong></div> </div> <div class="pair-name col-xs-6 col-sm-3"> <div>{{opp.created_by}}</div> </div> <div class="pair-label col-xs-6 col-sm-3"> <div><strong>Last Edited By :</strong></div> </div> <div class="pair-name col-xs-6 col-sm-3"> <div>{{opp.last_edited}}</div> </div> </div>'),a.put("views/sales/opp-new.html",'<div class="row"> <div class="pair-label col-xs-6 col-sm-3"> <div><strong><label for="owner">Opportunity Owner :</label></strong></div> <div><strong><label for="name">Opportunity Name :</label></strong></div> <div><strong><label for="acct">Account Name :</label></strong></div> <div><strong><label for="type">Type :</label></strong></div> <div><strong><label for="phone">Account Phone :</label></strong></div> <div><strong><label for="addr">Account Address :</label></strong></div> </div> <div class="pair-name col-xs-6 col-sm-3"> <div><input type="text" id="owner" ng-model="newOpp.owner"></div> <div><input type="text" id="name" ng-model="newOpp.name"></div> <div><input type="text" id="acct" ng-model="newOpp.account"></div> <div><input type="text" id="type" ng-model="newOpp.type"></div> <div><input type="text" id="phone" ng-model="newOpp.phone"></div> <div><input type="text" id="addr" ng-model="newOpp.addr"></div> </div> <div class="pair-label col-xs-6 col-sm-3"> <div><strong><label for="date">Close Date :</label></strong></div> <div><strong><label for="state">State :</label></strong></div> <div><strong><label for="prob">Probability :</label></strong></div> <div><strong><label for="amount">Amount :</label></strong></div> </div> <div class="pair-name col-xs-6 col-sm-3"> <div><input type="text" id="date" ng-model="newOpp.close_date"></div> <div><input type="text" id="state" ng-model="newOpp.stage"></div> <div><input type="text" id="prob" ng-model="newOpp.prob"></div> <div><input type="text" id="amount" ng-model="newOpp.amount"></div> </div> </div> <h1> Additional Information </h1> <div class="row"> <div class="pair-label col-xs-6 col-sm-3"> <div><strong><label for="src">Lead Source :</label></strong></div> <div><strong><label for="step">Next Step :</label></strong></div> <div><strong><label for="desc">Description :</label></strong></div> </div> <div class="pair-name"> <div><input type="text" id="src" ng-model="newOpp.lead_src"></div> <div><input type="text" id="step" ng-model="newOpp.next_step"></div> <div><input type="text" id="desc" ng-model="newOpp.desc"></div> </div> </div> {{newOpp}} <a type="button" class="btn btn-primary" ng-click="add(newOpp)" ui-sref="sales.opp.table"> Submit </a>'),a.put("views/sales/opp-table.html",'<select class="form-control" ng-init="cc={tag: \'\'}" ng-model="cc.tag"> <option value="recent">recently viewed</option> <option value="no">active opportunities</option> <option value="maybe">my opportunities</option> </select> <table class="table table-bordered table-hover"> <thead id="table-header"> <td> Opportunity Name </td> <td> Account Name </td> <td> Close Date </td> </thead> <tbody> <tr ng-repeat="opp in opps  | filter : cc"> <td> <a ui-sref="sales.opp.detail({id: opp.id})">{{ opp.name }} </a></td> <td> {{ opp.account }} </td> <td> {{ opp.close_date }} </td> </tr> </tbody> </table> <a type="button" class="btn btn-primary" ui-sref="sales.opp.new"> New Opportunity </a>'),a.put("views/sales/opp.html","<div ui-view> <div ng-include=\"'views/sales/opp-table.html'\"></div> </div>"),a.put("views/sales/tasks.html","")}]);