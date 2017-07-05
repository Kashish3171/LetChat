angular.module('login',[]).


service('loginspcl',function($http,$q){
var loginspcl;
return{
logincheck : function(email,pass){
    return $http({
    method: 'POST',
    url: "server/loginhandler.php",
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    transformRequest: function(obj) {
        var str = [];
        for(var p in obj)
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        return str.join("&");
    },
        data: {email: email, password: pass}
}).then(function (response){
         if (typeof response.data === 'object') {
                            return response.data;
                        } else {
                            // invalid response
                            return $q.reject(response.data);
                        }

    },function (response){
            return $q.reject(response.data);
    });
},
signup:function(firstname,lastname,email,pass)
{
    return $http({
        method:'POST',
        url:'server/loginhandler.php',
        headers:{'Content-Type':'application/x-www-form-urlencoded'},
        transformRequest: function(obj) {
        var str = [];
        for(var p in obj)
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        return str.join("&");
    },
    data : {fname:firstname,lname:lastname,signupemail:email,signuppassword:pass}
    }).then( function(response){
          if (typeof response.data === 'object') {
                            return response.data;
                        } else {
                            // invalid response
                            return $q.reject(response.data);
                        }

    },function (response){
            return $q.reject(response.data);
    });

}
};

}).
controller('loginctrl',["$scope","loginspcl",function($scope,loginspcl){
$scope.logincheck=function(){
loginspcl.logincheck($scope.email,$scope.pass).then(function (data){
        //console.log(response.data);
        $scope.result= data;},function (error){
            $scope.result= error;
    });

}; 



}]).

controller('signupctrl',["$scope","$location","loginspcl",function($scope,$location,loginspcl){
$scope.processstatus=true;
$scope.signup=function(){
    loginspcl.signup($scope.fname,$scope.lname,$scope.signupemail,$scope.signuppassword)
    .then 
        (
            function(data)
            {
                $scope.processstatus=false;
                $scope.signupstatus=data;
                setTimeout(function(){
                    $location="#!"
                },500);
            },
            function (data)
            { 
                $scope.processstatus=false;
                $scope.signupstatus=data;
            }
        )
}

}]);

