app.factory('js.modules.service.grid2Service', ['$http', function ($http) {

var search = function (query) {
    	
        return $http.post('/API/travel/findPeopleTravelPathDate', query);
        
    };
    
    var searchJson = function (query) {
    	
    	 return $http.post('js/modules/json/myjson3.json', query);
        
    };
    

    return {

        search: function (query) {
            return search(query);
        },    
        searchJson: function(query){
        	return searchJson(query);
        },
        
    };
}]);