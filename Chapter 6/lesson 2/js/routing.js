( function () {
	// body...
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
		.when( '/gravtar/:id', {
			controller: 'GravtarCtrl',
			templateUrl: 'partials/gravtar.html'
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