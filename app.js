var app = angular.module('appSort', []);

var people = [];


app.controller('sortController', ['$scope', function($scope){
  this.name = '';
  this.person_winner = '';
  this.personList = people;
  
  $scope.addName = function(){
    people.push({name: $scope.name});
    this.name = '';
  };

  $scope.sortName = function(){
	this.person_winner =  "Sorteado: "+people[Math.floor(Math.random()*people.length)].name;
  };

}]);