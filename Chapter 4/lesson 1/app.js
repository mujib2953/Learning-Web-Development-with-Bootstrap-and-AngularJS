( function () {
	
	var app = angular.module( "myApp", [ 'ngRoute' ] );
	
	//-- controllers
	app.controller( 'IndexCtrl', [ '$scope', '$rootScope', function( $scope, $rootScope ) {
		$scope.hello = "Hello index..!";
		$rootScope.navPath = "partials/nav.html";
		
		$scope.templateName = $rootScope.navPath;
	} ] );

	app.controller( 'AddCtrl', [ '$scope', '$rootScope', function( $scope, $rootScope ) {
		$scope.hello = "Hello Add..!";
		$scope.templateName = $rootScope.navPath;
	} ] );

	app.controller( 'ContactCtrl', [ '$scope', '$rootScope', '$routeParams', function( $scope, $rootScope, $routeParams ) {
		$scope.hello = "Hello contact..!";
		$scope.templateName = $rootScope.navPath;
		console.log( $routeParams );
		console.log( "The user id is " + $routeParams.id );
	} ] );

	// -- routing
	app.config( function( $routeProvider, $locationProvider ) {
		$routeProvider.when( '/' , {
			controller: 'IndexCtrl',
			templateUrl: 'partials/page_start.html'
		} )
		.when( '/add_contact', {
			controller: 'AddCtrl',
			templateUrl: 'partials/add_contact.html'
		} )
		.when( '/contact/:id', {
			controller: 'ContactCtrl',
			templateUrl: 'partials/contact.html'
		} )
		.otherwise({
			redirectTo: "/"
		});

		// // -- to remove that # root symbol in URL
		// $locationProvider.html5Mode( {
		// 	enabled: true,
		// 	requireBase: true
		// } );

		// $locationProvider.hashPrefix( "!" ); //-- to check this please coment above code htmlMode

	} );
}() );
