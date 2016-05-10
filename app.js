var app = angular.module('camperNews',[])

app.controller('newsCtrl', function($scope, $http) {

  var url = 'https://www.freecodecamp.com/stories/hotStories';
 	$scope.news = [];
	$http.get(url).success(function(data) {
    console.log("success");
		$scope.news = data;
  })
  
});

app.directive('errSrc', function() {
  return {
    link: function(scope, element, attrs) {

      scope.$watch(function() {
          return attrs['ngSrc'];
        }, function (value) {
          if (!value) {
            element.attr('src', attrs.errSrc);  
          }
      });

      element.bind('error', function() {
        element.attr('src', attrs.errSrc);
      });
    }
  }
});