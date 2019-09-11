app.controller('js.modules.dianming.controller.workinController', [
  '$scope', '$modal', '$log', 'js.modules.dianming.service.workinService','$http',

  function($scope, $modal, $log,workinService,$http) {


    $scope.query = {  //查询信息
        beginTime:"2018-11-10 11:11:11",
        endTime:"2018-12-30 11:11:11",
        pageIndex : 0,
        pageSize : 10,
        Name : null,
        // begin:null,
        // end:null,
        callsTypeId:2
      };  
      
      
      $scope.search = function() {   //查询       
        $scope.query.pageIndex = $scope.paginationConf.currentPage;
        $scope.query.pageSize = $scope.paginationConf.itemsPerPage;
        // $scope.clearAll();  //清空数组
        // console.log('hhh');
        workinService.search($scope.query).success(function(response) {
          $scope.paginationConf.totalItems = response.totalElements;
          $scope.items = response.content;
        });

      };

      $scope.reset = function(){
        // alert('aa');
        $scope.query.beginTime = '';
        $scope.query.endTime = '';


      };

      // $scope.detail = function(item){
      //  chugongService.detail(item).success(function(response) {
      //    $scope.paginationConf.totalItems = response.totalElements;
      //    $scope.items = response.content;
      //  });

      // };



      // 配置分页基本参数
      $scope.paginationConf = {  //分页信息
        currentPage : 1,
        itemsPerPage : 15,
        pagesLength : 15,
        perPageOptions : [ 10, 20, 30, 40, 50 ]
    
      };      

    

      /*******************************************************************
       * 当页码和页面记录数发生变化时监控后台查询 如果把currentPage和itemsPerPage分开监控的话则会触发两次后台事件。
       ******************************************************************/
      $scope.$watch(
          'paginationConf.currentPage + paginationConf.itemsPerPage',
          $scope.search);
      
      
      
    







//modal  start~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // $scope.items = ['item1', 'item2', 'item3'];
    $scope.opendetail = function (id,size) {

      var modalInstance = $modal.open({
        templateUrl: 'tpl/dianming/workindetailmodal.html',
        controller: 'js.controller.modal.sysaddmodalController',
        size: size,
        backdrop:'static',
        resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['js/controllers/modal/sysaddmodal.js']);
                    }]

            }
      
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

//未点
    $scope.opendetail2 = function (size) {

      var modalInstance = $modal.open({
        templateUrl: 'tpl/dianming/workin2detailmodal.html',
        controller: 'js.controller.modal.sysaddmodalController',
        size: size,
        backdrop:'static',
        resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['js/controllers/modal/sysaddmodal.js']);
                    }]

            }
      
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

//police
$scope.openpolice = function (size) {

      var modalInstance = $modal.open({
        templateUrl: 'tpl/dianming/workinpolicemodal.html',
        controller: 'js.controller.modal.sysaddmodalController',
        size: size,
        backdrop:'static',
        resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['js/controllers/modal/sysaddmodal.js']);
                    }]

            }
      
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };


   
  }]) ; 