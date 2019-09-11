  app.controller('js.modules.renyuan_modalController', 
  	function($scope, $state, $stateParams,$http,gridService,
						 $modalInstance, $modal, $log) {
    
	
	
    // $scope.selectItem=selectItem;

    $scope.ok = function () {
      $modalInstance.close();
    };
    $scope.cancel = function () {
          $modalInstance.dismiss('cancel');
        };
    // $scope.toggle = function() {
    //     $scope.myVar = !$scope.myVar;
    // }

 //    $scope.searchDetail = function() {   //查询			
				
	// 	gridService.search(selectItem.travelId).success(function(response) {
			
	// 		$scope.people = response;
	// 		// console.info($scope.items);
	// 	});

	// };
 //  	$scope.searchDetail();
    
  })
  ; 