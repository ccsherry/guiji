
app.controller('js.modules.gridController'
  , ['$scope', '$modal', '$log', 
  'js.modules.service.gridService',
    '$http',function($scope, $modal, $log,gridService, $http) {  

	  var date = new Date();
	  var year = date.getFullYear();
	  var month = date.getMonth() + 1;
	  var day = date.getDate();
	  if (month < 10) {
	      month = "0" + month;
	  }
	  if (day < 10) {
	      day = "0" + day;
	  }
	  var nowDate = year + "-" + month + "-" + day;
	  
  // $scope.myVar = true;
  $scope.query = {  //查询信息
          // myd:"",
          travelDate:"",
          travelName:"",
          travelId:""
        };  
  
  
  


  var svg = document.getElementById('path');
  var car = document.getElementById('car');
  var anim = document.getElementById('motion');
  
  
  $scope.clickgj2 =function(id){
	  
	  
	  
	  // if($scope.items==undefined){
		 //  alert("没有轨迹数据");
	  // }else{
		 //  for(var i = 0;i<$scope.items.length;i++){
			//   if($scope.items[i].travelId==id){
			// 	  console.info($scope.items[i].travelPath);
			// 	  svg.setAttribute('d',$scope.items[i].travelPath);
			// 	  car.setAttributeNS('http://www.w3.org/1999/xlink',"xlink:href","img/man.png");
			// 	  var animate = document.getElementsByTagName("animateMotion")[0];
			// 	  animate.beginElement();
			//   }
		 //  }
	  // }
	  	gridService.searchJson(id).success(function(response) {
         // alert('2222');
         var items = response.filter(function (e) { return e.travelId == id; })
         // $scope.myd = response.path;
         // $scope.people=response;
         // $scope.img = response.img;
         svg.setAttribute('d', items[0].travelPath);
         // fill="url(#car)"
        car.setAttributeNS('http://www.w3.org/1999/xlink',"xlink:href",items[0].travelImg);
         // travel.setAttributeNS('http://www.w3.org/1999/xlink',"fill",items[0].travelImg);
         // console.info('*******'+items[0].travelDetail);
         // $scope.items = items[0].travelDetail;
         // console.info('!!!!'+$scope.items);

         // for(var i=0;i<detail.time.length;i++){}
          anim.beginElement();
          // svg.path.getPointAtLength(0);
     });
    
   }
   $scope.clickgj =function(id){
   
      gridService.searchJson(id).success(function(response) {
          // alert('2222');
          var items = response.filter(function (e) { return e.travelName == id; })
          // $scope.myd = response.path;
          // $scope.people=response;
          // $scope.img = response.img;
          svg.setAttribute('d', items[0].travelPath);
          // fill="url(#car)"
         car.setAttributeNS('http://www.w3.org/1999/xlink',"xlink:href",items[0].travelImg);
          // travel.setAttributeNS('http://www.w3.org/1999/xlink',"fill",items[0].travelImg);
          // console.info('*******'+items[0].travelDetail);
          // $scope.items = items[0].travelDetail;
          //console.info('!!!!'+$scope.items);

          // for(var i=0;i<detail.time.length;i++){} 
           anim.beginElement();
           // svg.path.getPointAtLength(0);
      });
    
   }

   $scope.clickpeople=function(){
     // $scope.myVar = !$scope.myVar;

      gridService.searchJson($scope.query).success(function(response) {
    	  console.info("-------------------");
    	  console.info(response);
    	  if(response.error!=undefined){
    		  alert(response.error);
    	  }else{
    		  $scope.items = response.success;
//    		  $scope.items=response.success.filter(function (e) { 
//    			  return e.travelName == $scope.query.travelName; 
//    		  });
    	  }
//    	  console.info($scope.items);
          // var response = JSON.parse(response);
// $scope.items=response.filter(function (e) { return e.travelName ==
// $scope.query.travelName; });
      });
   }

   $scope.openmodal = function (size) {

      var modalInstance = $modal.open({
        templateUrl: 'tpl/renyuan_modal.html',
        controller: 'js.modules.renyuan_modalController',
        size: size,
        backdrop:'static',
        resolve: {  
                    gridService:function(){
                    return gridService;
                    },
                    // selectItem: function () {
                    //    return $scope.selectItem;
                    // },
                    
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['js/modules/renyuan_modalController.js']);
                    }]

            }
      
      });

      modalInstance.result.then(function () {
        
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
  };
// var svg = document.getElementById('motionPath');
// svg.setAttribute("d", "220,120 220,250 340,250 340,130 370,130 370,220
// 490,220 490,280 480,280");
    // let length = chart.getTotalLength();
    // let rid = null;
    // chart.style.strokeDasharray = length;
    // chart.style.strokeDashoffset = length;
    // let frames = length;
    // let point1, point2;
    // function Frame() {
    // rid = requestAnimationFrame(Frame);
    // chart.style.strokeDashoffset = frames;

    // point1 = chart.getPointAtLength(length - frames);
    // point2 = chart.getPointAtLength((length - frames + 2) % length);
    // angle = Math.atan2(point2.y - point1.y, point2.x - point1.x);

    // arrow.setAttribute(
    // "transform",
    // "translate(" +
    // [point1.x, point1.y] +
    // ")" +
    // "rotate(" +
    // angle * 180 / Math.PI +
    // ")"
    // );

    // frames-=2;

    // if (frames <= 2) {
    // cancelAnimationFrame(rid);
    // rid = null;
    // }
    // }

  $scope.gjdetail = function(item){        
        $scope.selectItem = item;
        $scope.opendetailDialog();
      };
  $scope.opendetailDialog = function (selectItem) {

      var modalInstance = $modal.open({
        templateUrl: 'tpl/renyuan_gj.html',
        controller: 'js.modules.renyuan_gjController',
        // size: size,
        backdrop:'static',
        resolve: {  
                    gridService:function(){
                    return gridService;
                    },
                    selectItem: function () {
                       return $scope.selectItem;
                    },
                    
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['js/modules/renyuan_gjController.js']);
                    }]

            }
      
      });

      modalInstance.result.then(function () {
        
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
  };


$(document).ready( function(){
          $("#point").html("<title>当前报警：12个</title>");
});



document.body.addEventListener("click",()=>{
  // if(rid){
  // cancelAnimationFrame(rid);
  // rid=null;
  // }
  // frames = length;
  // Frame();
})
  
  // $scope.gjdetail = function() {

  // $scope.myVar = !$scope.myVar;
  // }
// datepicker-----------------------------------------------
$('#mydatepicker').datepicker({
  language:"zh-CN",
  autoclose: true,
  format: "yyyy-mm-dd"
});
}]) ; 