( function () {
	
	var app = angular.module( 'myApp', [] );

	app.controller( 'MainCtrl', [ '$scope', function( $scope ) {
		$scope.name = "Nav";
		$scope.isHidden = false;

		$scope.contacts = [ 
			{
				name: "Jhon Doe",
				phone: "0123456789",
				email: "jhon@ema.com"
			}, {
				name : "Singham",
				phone: "9876543210",
				email: "singham@email.com"
			}
		];

		$scope.clickHandler = function() {
			console.log( "Click Me button pressed." );
			$scope.isHidden = !$scope.isHidden;
		};

		$scope.isStyler = false;
		$scope.setStyle = function() {
			console.log( "changing the style...", $scope.isStyler );
			if( !$scope.isStyler ) {
				return
			} else {
				return {
					'background': 'black',
					'color': 'white'
				}
			}
		}
	} ] );

}() );