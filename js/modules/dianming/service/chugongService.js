app.factory('js.modules.dianming.service.chugongService', ['$http', function ($http) {

    var search = function (query) {
       
        return $http.post('js/modules/dianming/Json/chugongJson.json', query);
    };
    

    return {

        search: function (query) { /*查询*/
            return search(query);
        },    
        
    };
}]);