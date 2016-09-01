myApp.controller('heroListController' , ['$scope' , '$http' , function($scope, $http){

  function heroGet(){
    console.log("Heros Assemble!");
    $http.get('/data').then(function(response) {
      $scope.heros = response.data;
      console.log('hero array: ' ,$scope.heros);
    });
  }
  heroGet();

  $scope.delete = function(id) {
    $http.delete('/data/' + id).then(function(response){
      console.log('id: ' , id);
      $scope.deleted = "Hero vanished";
    });
    heroGet();
  }
}])
