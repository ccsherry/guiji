
app.controller('js.modules.grid2Controller'
  , ['$scope', '$modal', '$log', 
  'js.modules.service.grid2Service',
    '$http',function($scope, $modal, $log, grid2Service,$http) {  

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
  // $(function() {
  //            var svgRootDom = $("#svg")[0];
  //            adjustToFreezeHeight(svgRootDom);
  // });
  $scope.query = {  // 查询信息
          travelDate:nowDate,
          travelName:""
        };  
   
  var svg = document.getElementById('path');
  var car = document.getElementById('car');
  // car.setAttribute('style', 'border-radius: 25px;');
  var anim = document.getElementById('motion');

  $scope.clickgj =function(id){
   
      grid2Service.searchJson(id).success(function(response) {
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

      grid2Service.searchJson($scope.query).success(function(response) {

          // var response = JSON.parse(response);
          $scope.items=response.filter(function (e) { return e.travelName == $scope.query.travelName; });
      });
   }


  // $scope.gjdetail = function(item){        
  //       $scope.selectItem = item;
  //       $scope.opendetailDialog();
  //     };
  // $scope.opendetailDialog = function (selectItem) {

  //     var modalInstance = $modal.open({
  //       templateUrl: 'tpl/renyuan_gj.html',
  //       controller: 'js.modules.renyuan_gjController',
  //       // size: size,
  //       backdrop:'static',
  //       resolve: {  
  //                   gridService:function(){
  //                   return gridService;
  //                   },
  //                   selectItem: function () {
  //                      return $scope.selectItem;
  //                   },
                    
  //                   deps: ['$ocLazyLoad',
  //                     function( $ocLazyLoad ){
  //                       return $ocLazyLoad.load(['js/modules/renyuan_gjController.js']);
  //                   }]

  //           }
      
  //     });

  //     modalInstance.result.then(function () {
        
  //     }, function () {
  //       $log.info('Modal dismissed at: ' + new Date());
  //     });
  // };
$('#mydatepicker').datepicker({
  language:"zh-CN",
  autoclose: true,
  format: "yyyy-mm-dd"
});



}]) ; 