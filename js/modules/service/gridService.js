app.factory('js.modules.service.gridService', ['$http', function ($http) {

// var search = function (query) {
    	
//         return $http.post('/API/travel/findPeopleTravelPathDate', query);
        
//     };
    
    var searchJson = function (query) {
    	
    	 return $http.post('js/modules/json/myjson.json', query);
        
    };
    

    return {

        // search: function (query) {
        //     return search(query);
        // },    
        searchJson: function(query){
        	return searchJson(query);
        },
        
    };
}]);