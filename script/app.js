/**
 * Created by darshang on 1/22/2015.
 */
angular.module("todoApp", [])
    .controller("MainCtrl", function ($scope) {
        $scope.todos = [];
        $scope.add = function () {
            console.log("Add");
            console.log($scope.newTodo);
            $scope.todos.push($scope.newTodo);
            $scope.newTodo = {};
        }

        $scope.delete = function (item) {
            var index = $scope.todos.indexOf(item);
            $scope.todos.splice(index, 2);
        }
    });


