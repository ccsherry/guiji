app.factory('js.modules.dianming.service.workinService', ['$http', function ($http) {

    var search = function (query) {
       
        return $http.post('js/modules/dianming/Json/workinJson.json', query);
    };

    var getByFKId = function (id) {
       
        return $http.get('js/modules/dianming/Json/workinJson.json', id);
    };
    
    

    return {

        search: function (query) { /*查询*/
            return search(query);
        },  
        getByFKId:function(id){
return getByFKId(id);
        }  
        
    };
}]);