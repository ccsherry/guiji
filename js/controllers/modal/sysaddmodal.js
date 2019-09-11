  app.controller('js.controller.modal.sysaddmodalController', ['$scope', '$modalInstance',  function($scope, $modalInstance) {
    


    $scope.ok = function () {
      $modalInstance.close();
    };

    // alert('ddddd');
    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }])
  ; 