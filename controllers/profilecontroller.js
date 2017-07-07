angular.module("profile",[]).
service("profileservice",function($http,$q){
	//console.log('in service level1');
	//var profileservice;
	var profileservice;



	return {
		insertmessage : function(mess){
		//console.log(mess);
		return $http ({
			method :'POST',
			url:"server/messagehandler.php",
			headers:{'Content-Type':'application/x-www-form-urlencoded'},
			transformRequest:function(obj)
			{
				var str = [];
				for(var p in obj)
					str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
				return str.join("&");
			},
			data:{message:mess}
		}).then(	
		function (response)
								{ // console.log(response.data);
									//console.log('in service success level1');
									if(response.data==1)
									{
										return response.data;
									}
									else
									{
										return $q.reject(response.data);
									}
								},
								function (response)
								{ //console.log(response.data);
									//console.log('in service failure level1');
									return $q.reject(response.data);
								}

								)
	},

		allmessages : function()
		{  
			return $http({
							method :'GET',
							url:"server/messagefetch.php",

						}).then(
									function (response)
									{ 		console.log(response.data);
										return response.data;
									},
									function (response)
									{	console.log(response.data);
										return $q.reject(response.data);
									}
								)

		}
};
//return this;
}).
controller("profilectrl",["$scope","$location","profileservice",function($scope,$location,profileservice)
{		
	$scope.message=function()
		{	//console.log('in ctrl level1');
		var mess=$scope.mess;
		profileservice.insertmessage(mess).then(
			function (data)
			{ $scope.mess="";
						/*profileservice.displaymessage()
						.then(
								function (data)
								{

								},
								function (data)
								{

								}
							)
							*/
						},
						function (error)
					{ //console.log(error);

						//console.log('in ctrl failure level2');
						$scope.serverstatus="Sorry something went wrong.Please try again.";
					}
					)

	};	
	profileservice.allmessages()
	.then(
			function (data)
			{ 	



				$scope.allmessages=data;

			},
			function (data)
			{
				console.log('fucnelde'); 		
			}


		);

	
}]).filter('reverse', function() {
  return function(items) {
  	if (!angular.isArray(items)) {return false;}
    return items.slice().reverse();
  };
});