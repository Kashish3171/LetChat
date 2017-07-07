var app=angular.module('letchat',["ngRoute","login","profile"])

.config(function($routeProvider)
    {
        $routeProvider

        .when ('/',{

            templateUrl : "views/loginpage.html", 
            controller : "loginctrl"

        })

        .when ('/signup',{

        	templateUrl : "views/signup.html",
        	controller:"signupctrl"
        })

        .when('/home',{
            templateUrl:"views/profile.html",
            controller:"profilectrl"
        })
    }


    );
