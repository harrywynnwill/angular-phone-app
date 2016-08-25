describe('PhoneListController', function(){

  // loads the phonecatapp before each test
  beforeEach(module('phonecatApp'));


  // inject the controller service into our test function
  it('should create a phones model with 3 phones', inject(function($controller){
    var scope = {};
    // create an instance of the PhoneListController
    var ctrl = $controller('PhoneListController', {$scope: scope});
    //vert the phones array on this scope contains 3 records
    expect(scope.phones.length).toBe(3);
  }));
});
