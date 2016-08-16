( function () {
	
	var app = angular.module( "myApp", [] );

	app.controller( 'MainCtrl', [ '$scope', function( $scope ) {
		$scope.txt = "Lorem ipsum dolor sit amet";
	} ] );


	//-- custom filter
	app.filter( 'truncate', customFilter );

	function customFilter() {
		return function( text, limit ) {
			return ( text.length > limit ) ? text.substr( 0, limit ) + "..." : text;
		};
	}
}() );
