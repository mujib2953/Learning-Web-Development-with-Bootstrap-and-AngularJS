( function () {
	
	var app = angular.module( "myApp", [] );

	app.controller( 'MainCtrl', [ '$scope', function( $scope ) {
		$scope.value = 125;
		$scope.number = 12345.225;
		$scope.str = "Hello world";
		$scope.bigStr = "Lorem ipsum dolor sit amet.";

		$scope.contacts = [
			{
				name: "salim",
				phone: "12345",
				email: "abc.@email.com"
			},
			{
				name: "Akshay Khanna",
				phone: "887755",
				email: "akshayK@email.com"	
			},
			{
				name: "Alia Bhatt",
				phone: "123456654321",
				email: "alia@email.com"	
			}
		];

		$scope.dateStr = 725508723000;
	} ] );
}() );
