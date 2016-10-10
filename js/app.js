var app = angular.module('app',[]).controller('calcController', function($scope){


  let strBuilder ="";
  $scope.results = "0";
  $scope.calcArray =[];

  //event Listener for items with values
  document.addEventListener("click", function(e){

    //check to see if the target has a value
    if (e.target.value) {

      //if it's a number, add it to the string
      if(Number(e.target.value) || e.target.value == "." || e.target.value == "0") {
        $scope.calcArray.push(e.target.value);
        $scope.results = $scope.calcArray.join(' ');

      }
      else {
        if ($scope.calcArray.length != 0 && Number($scope.calcArray[$scope.calcArray.length-1])) {
          $scope.calcArray.push(e.target.value);
          $scope.results = $scope.calcArray.join(' ');
        }
      }
      $scope.$apply();
    }
  });

  //A function to calculate the array of items
  $scope.calculate = function() {
    if (!(Number($scope.calcArray[$scope.calcArray.length-1]))) {
      return false;
    }
    for (var i = 0; i<$scope.calcArray.length; i++) {
      strBuilder += $scope.calcArray[i];
    }
    if (strBuilder != "") $scope.results = eval(strBuilder);
    strBuilder = "";
  }

  //a function to clear the results
  $scope.clearResults = function() {
    strBuilder ="";
    $scope.results = "0";
    $scope.calcArray =[];
  }

});
