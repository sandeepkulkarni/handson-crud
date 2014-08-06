'use strict';

/* Controllers :
*  This is one way of defining controller where we put all controllers in 1 file (controllers.js)
* */

angular.module('demoApp.controllers', [])
  .controller('HomeController', ['$scope', function($scope) {

  }])
  .controller('BasicsController', ['$scope', function($scope) {
        $scope.name = 'World';
        $scope.content = 'Edit me';

        $scope.clock = {};
        var updateClock = function(){
            $scope.clock.now  = new Date();
        };
        setInterval(function(){
           $scope.$apply(updateClock);
        },1000);
        updateClock();
  }])
  .controller('NameListController', ['$scope', function($scope) {
        $scope.names = ['Kavi', 'Viky', 'Sandy'];
  }])
 .controller('FormValidationController', ['$scope', function($scope){
        //pre-populated user list
        $scope.userList = [
            {
                firstName : 'Sandeep',
                lastName : 'Kulkarni',
                email : 'sandeep@test.com'
            }
        ];

        $scope.submitted = false;
        $scope.signup = function(){
            if($scope.signupForm.$valid){
                //form submit logic
                $scope.signup.isSuccess = true;

                //add user to userList
                $scope.userList.push({
                    firstName: $scope.signup.firstName,
                    lastName: $scope.signup.lastName,
                    email: $scope.signup.email
                });
                $scope.signup.firstName = '';
                $scope.signup.lastName = '';
                $scope.signup.email = '';
                $scope.signupForm.$setPristine();
            }
        }
       $scope.removeUser = function(index){
            $scope.userList.splice(index, 1);
       }
  }])

 .controller('DirectivesController', ['$scope', function($scope) {

 }]);
