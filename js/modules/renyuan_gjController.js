  app.controller('js.modules.renyuan_gjController', 
  	function($scope, $state, $stateParams,$http,gridService,selectItem,
						 $modalInstance, $modal, $log) {
    
	console.log(selectItem);
	
    $scope.selectItem=selectItem;

    $scope.ok = function () {
      $modalInstance.close();
    };
    $scope.cancel = function () {
          $modalInstance.dismiss('cancel');
        };
    // $scope.toggle = function() {
    //     $scope.myVar = !$scope.myVar;
    // }

    $scope.searchDetail = function() {   //查询			
				
		gridService.search(selectItem.travelId).success(function(response) {
			
			$scope.people = response;
			// console.info($scope.items);
		});

	};
  	$scope.searchDetail();
    
  })
  ; 