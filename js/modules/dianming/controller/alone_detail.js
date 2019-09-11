app.controller('js.controllers.modal.alonedetailController', ['$scope', '$modal', '$log', function($scope, $modal, $log) {
    // $scope.items = ['item1', 'item2', 'item3'];
    $scope.opendetail = function (size) {

      var modalInstance = $modal.open({
        templateUrl: 'tpl/dianming/alonedetailmodal.html',
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

    $scope.openpolice = function (size) {

      var modalInstance = $modal.open({
        templateUrl: 'tpl/dianming/alonepolicemodal.html',
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