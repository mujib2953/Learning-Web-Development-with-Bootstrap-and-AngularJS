( function () {
	
	var app = angular.module( 'myApp', [] );

	app.controller( 'MainCtrl', [ '$scope', function( $scope ) {
		$scope.name = "Nav";
	} ] );

}() );