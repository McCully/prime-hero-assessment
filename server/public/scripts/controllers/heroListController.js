myApp.controller('heroListController' , ['$scope' , '$http' , function($scope, $http){

  function heroGet(){
    console.log("Heros Assemble!");
    $http.get('/heroGet').then(function(response) {
      $scope.heros = response.data;
    });
  }
  heroGet();

  $scope.delete = function(id) {
    $http.delete('/heroDel/' + id).hen(function(response){
      $scope.deleted = "Hero vanished";
    });
  }
  heroGet();
}])
