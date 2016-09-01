myApp.controller('heroCreateController' , ['$scope' , '$http', function($scope , $http){
  // $scope.heros = [];
  // $scope.newHero = {};
  $scope.alias = '';
  $scope.first_name = '';
  $scope.last_name = '';
  $scope.city = '';
  $scope.powers = '';
  $scope.primary_power = '';

  $scope.addHero = function() {
    var hero = {
      alias: $scope.alias,
      first_name: $scope.first_name,
      last_name: $scope.last_name,
      city: $scope.city,
      primary_power: $scope.primary_power
    };

    $http.post('/data', hero).then(function(response) {
      console.log("post data??" , $scope.primary_power);
      $scope.alias = '';
      $scope.first_name = '';
      $scope.last_name = '';
      $scope.city = '';
      $scope.primary_power = '';
    });
    $scope.added = true;
  };
}]);
