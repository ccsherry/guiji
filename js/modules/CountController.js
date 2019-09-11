
app.controller('js.modules.CountController'
  , ['$scope', '$modal', '$log', 
  'js.modules.service.CountService',
    '$http',function($scope, $modal, $log,CountService,$http) {  

      $scope.count = {  //查询信息
        count_Jbs:"0",
        count_Gq:"0",
        count_Ss:"0",
        count_Yy:"0",
        count_Hjs:"0",
        count_ck:"0",
        count_lxwc:"0"
      };  
      
      CountService.search().success(function(response) {
    	  $scope.count.count_Jbs = response.count_Jbs;
    	  $scope.count.count_Gq = response.count_Gq;
    	  $scope.count.count_Ss = response.count_Ss;
    	  $scope.count.count_Yy = response.count_Yy;
    	  $scope.count.count_Hjs = response.count_Hjs;
    	  $scope.count.count_ck = response.count_ck;
    	  $scope.count.count_lxwc = response.count_lxwc;
    	  console.info("-----------");
    	  console.info($scope.count);
      });
 
      CountService.search();

}]) ; 