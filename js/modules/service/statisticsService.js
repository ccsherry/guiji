app.factory('js.modules.service.statisticsService', ['$http', function ($http) {
	
	var statisticsIndex = function () {
        return $http.post('/API/statistics/statisticsIndex');
    };
    
    var findStatisticsNum = function () {
        return $http.post('/API/statisticsNum/findStatisticsNum');
    };
    
    var modifyInPrison = function(value) {
		return $http({
			url : "/API/statisticsNum/modifyInPrison",
			method : "POST",
			params : {
				'num' : value
			}
		});
	};
	
	var modifyXkHospital = function(value) {
		return $http({
			url : "/API/statisticsNum/modifyXkHospital",
			method : "POST",
			params : {
				'num' : value
			}
		});
	};
	
	var modifyShHospital = function(value) {
		return $http({
			url : "/API/statisticsNum/modifyShHospital",
			method : "POST",
			params : {
				'num' : value
			}
		});
	};
	
	var modifyOthers = function(value) {
		return $http({
			url : "/API/statisticsNum/modifyOthers",
			method : "POST",
			params : {
				'num' : value
			}
		});
	};
	
	var modifyOutPrison = function(value) {
		return $http({
			url : "/API/statisticsNum/modifyOutPrison",
			method : "POST",
			params : {
				'num' : value
			}
		});
	};
	
	var modifyOutRun = function(value) {
		return $http({
			url : "/API/statisticsNum/modifyOutRun",
			method : "POST",
			params : {
				'num' : value
			}
		});
	};
    
    
    return {
    	statisticsIndex : function() { 
			return statisticsIndex();
		},
		modifyInPrison : function(value){
			return modifyInPrison(value);
		},
		modifyXkHospital : function(value){
			return modifyXkHospital(value);
		},
		modifyShHospital : function(value){
			return modifyShHospital(value);
		},
		modifyOthers : function(value){
			return modifyOthers(value);
		},
		modifyOutPrison : function(value){
			return modifyOutPrison(value);
		},
		modifyOutRun : function(value){
			return modifyOutRun(value);
		},
		findStatisticsNum:function(){
			return findStatisticsNum();
		},
	};
	
}]);