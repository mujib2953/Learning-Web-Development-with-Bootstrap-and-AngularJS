( function () {
	//-- Setvices are 3 types.
	/*
	*-- .value();
	*-- .factory();
	*-- .service();
	*/

	//-- Example of value service
	app.value( 'demoServiceValue', demoServiceValue() );
	function demoServiceValue() {
		var obj = [
			{
				name: 'Stephan Radford',
				phone: '0123456789',
				address: '123, Some Street\nLeicester\nLE1 2AB',
				email: 'stephen@email.com',
				website: 'stephenradford.me',
				notes: ''
			},
			{
				name: 'Declan Proud',
				phone: '91234859',
				address: '234, Some Street\nLeicester\nLE1 2AB',
				email: 'declan@declan.com',
				website: 'declanproud.me',
				notes: 'Some notes about the contact.'
			},
			{
				name: 'Badshah khan',
				phone: '786-786-786',
				address: '786, rasool Street\nBarmingham palace\nBM1 1A',
				email: 'badshah@khan.com',
				website: 'badshahKhan.me',
				notes: 'I m\' your\'s only Badshah khan.'
			}
		];
		return obj;
	};
	//-- Example of factory services
	app.factory( 'demoServiceFactory', demoServiceFactory() );
	function demoServiceFactory() {
		return true
	};

	//-----------------------------------------------------------------
	//-- Above 2 services are not used any where
	//-- Both are just to show different ways to make services
	//-- But below service is used in the code.
	//-----------------------------------------------------------------

	app.factory( 'contactFactory', contactFactoryFunc );
	function contactFactoryFunc() {

		var obj = [
			{
				name: 'Stephan Radford',
				phone: '0123456789',
				address: '123, Some Street\nLeicester\nLE1 2AB',
				email: 'stephen@email.com',
				website: 'stephenradford.me',
				notes: ''
			},
			{
				name: 'Declan Proud',
				phone: '91234859',
				address: '234, Some Street\nLeicester\nLE1 2AB',
				email: 'declan@declan.com',
				website: 'declanproud.me',
				notes: 'Some notes about the contact.'
			},
			{
				name: 'Badshah khan',
				phone: '786-786-786',
				address: '786, rasool Street\nBarmingham palace\nBM1 1A',
				email: 'badshah@khan.com',
				website: 'badshahKhan.com',
				notes: 'I m\' your\'s only Badshah khan.'
			},
			{
				name: 'Mujib Ansari',
				phone: '8956364076',
				address: 'C/N/08,\nCheeta Camp, Trombay,\nMumbai - 400 088',
				email: 'ansarimujiburrehman@gmail.com',
				website: 'fb.com/mujib2953',
				notes: 'I m the adna Developer....'
			}
		];

		return {
			get: function() {
				return obj;
			},
			find: function( index ) {
				return obj[ index ];
			}
		}

	};

}() );