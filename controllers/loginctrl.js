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
     
                            
                            return response.data;
                        

    },function (response){
          console.log('level3');
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
         
                          
                            return response.data;
                       

    },function (response){
         //console.log('level3');
            return $q.reject(response.data);
    });

}
};

}).
controller('loginctrl',["$scope","$location","$timeout","loginspcl",function($scope,$location,$timeout,loginspcl){
$scope.logincheck=function(){
loginspcl.logincheck($scope.email,$scope.pass).then(function (data){
      //  console.log(response.data);
        $scope.result= data;
       //  console.log('level4');
        $timeout(
          function(){$location.url("home");},500);
                 
        },
        function (error){
          //  console.log(error);
           $scope.result= error;
          
    
});

}; 



}]).

controller('signupctrl',["$scope","$location","$timeout","loginspcl",function($scope,$location,$timeout,loginspcl){
$scope.processstatus=true;
$scope.signup=function(){
    loginspcl.signup($scope.fname,$scope.lname,$scope.signupemail,$scope.signuppassword)
    .then 
        (
            function(data)
            {
                $scope.processstatus=false;
                $scope.signupstatus=data;
                 $timeout(  function(){
           $location.url("");},500);
               
            },
            function (data)
            { 
                $scope.processstatus=false;
                $scope.signupstatus=data;
            }
        )
}

}]);

