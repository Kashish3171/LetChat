var app=angular.module('letchat',["ngRoute","login"])

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
    }


    );
