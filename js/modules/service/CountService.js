app.factory('js.modules.service.CountService', ['$http', function ($http) {

	var searchJson = function (query) {
	       
        return $http.get('js/modules/json/myjson2.json', query);
    };
    
    var search = function () {
        
        return $http.post('/API/travel/countTravel');
    };
    

    return {

    	search: function () { /*查询*/
            return search();
        },    
        searchJson: function (query) { /*查询*/
            return searchJson(query);
        },    
        
    };
}]);