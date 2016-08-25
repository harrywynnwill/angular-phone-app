'use strict';

describe('PhoneList', function() {

// loads the phonecatapp before each test
beforeEach(module('phoneList'));

describe('PhoneListcontroller', function() {
	var ctrl, $httpBackend;

	beforeEach(inject(function($componentController, _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('phones/phones.json')
                 .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);



    ctrl = $componentController('phoneList');
	}));

  it('should create a `phones` property with 2 phones fetched with `$http`', function() {
    expect(ctrl.phones).toBeUndefined();

    $httpBackend.flush();
    expect(ctrl.phones).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
  });

  it('should set a default value for the `orderProp` property', function() {
  expect(ctrl.orderProp).toBe('age');
});

});

});
//   // inject the controller service into our test function
//   it('should create a phones model with 3 phones', inject(function($controller){
//     var scope = {};
//     // create an instance of the PhoneListController
//     var ctrl = $controller('PhoneListController', {$scope: scope});
//     //vert the phones array on this scope contains 3 records
//     expect(scope.phones.length).toBe(3);
//     expect(scope.name).toBe("world")
//   }));
// });
