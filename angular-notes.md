Angular uses kebab-casing

`ng-app` an angular directive, used to flag HTML element that angular should consider to be the root of the app.

when browser downloads `<script src="bower_components/angular/angular.js"></script>` it will look for the `ng-app` directive, it will bootstrap the application

`{{}}` binding tells angular it should evalutate an expression and insert the result into the DOM in place of the binding.
binding results in efficient continous updates.

#View and template

the view is a projection of the model through the HTML template.
Whenever the model changes, angular refreshes the appropiate bindings.

`ng-repeat` tags an angular repeater directive, the repeater tells angular to create a li element for each phone in the list.

`ng-controller` is in charge of the DOM sub-tree and including the `<body>`

the data *model* (a simple array of phones in object literal notation) is instantiated in the the *controller*

once the app has been defined as a module. The controller can then be registered to the module

`ngApp` directive (on the <html> tag) now specifies the phonecatApp module name as the module to load when bootstrapping the application.

the `ngController` references the name of the PhoneListController

the PhoneListController attaches the phone data to `$scope` that was injected into our controller function. this `scope` is prototypal descendant of the `root scope` that was created when our app was defined.

this scope is available to all bindings located with within `<body ng-controller="PhoneListController">`

Angular uses scopes, along with the information contained in the template, data model, and controller, to keep models and views separate, but in sync.

#Components

Components are use for repeating code will create an isolated scope for each instance of our component.

`.component()` is a method of angulars module class

components are in camelCase but kebab-case when refering to in HTML

From the template, we can refer to our controller instance using an alias. This way, the context of evaluation for our expressions is even more clear. By default, components use $ctrl as the controller alias, but we can override it, should the need arise.


Put each entity in its own file.
Organize our code by feature area, instead of by function.
Split our code into modules that other modules can depend on.

`ng-model` data-binding - core feature of angular, when the page loads angular binds the value of the input box and keeps the 2 in sync

in the example that is bound to `$ctrl.query` is imediately available as a filter input in the list perimeter.

when changes to the data model are made this causes the repeaters input to change.

`filter` uses the `$ctrl.query` value to create a new array that contains only those records that match the query


We then chained the filter filter with the orderBy filter to further process the input for the repeater. orderBy is a filter that takes an input array, copies it and reorders the copy which is then returned.

Angular creates a two way data-binding between the select element and the $ctrl.orderProp model. $ctrl.orderProp is then used as the input for the orderBy filter.


#$http

used to get larger datasets from apis

`$http.get` returns a promise object, which has a then method.

Since we are making the assignment of the phones property in a callback function, where the this value is not defined, we also introduce a local variable called self that points back to the controller instance.

`$` prefix is a naming convention for APIs
`$$`prefix are for private

`$httpBackend` used for mocking api services


(`<img src="{{phone.imageUrl}}">`). Using the `ngSrc` directive, prevents the browser from making an HTTP request to an invalid location.


ngRoute lets us associate a controller and a template with a specific URL (or URL pattern). This is pretty close to what we did with ngController and index.html back in step 2.
Since we have already learned that components allow us to combine controllers with templates in a modular, testable way, we are going to use components for routing as well. Each route will be associated with a component and that component will be in charge of providing the view template and the controller.

The $route service is usually used in conjunction with the ngView directive. The role of the ngView directive is to include the view template for the current route into the layout template. This makes it a perfect fit for our index.html template.


Using the .config() method, we request the necessary providers (for example the $routeProvider) to be injected into our configuration function and then use their methods to specify the behavior of the corresponding services. Here, we use the $routeProvider.when() and $routeProvider.otherwise() methods to define our application routes.

We also used $locationProvider.hashPrefix() to set the hash-prefix to !. This prefix will appear in the links to our client-side routes, right after the hash (#) symbol and before the actual path (e.g. index.html#!/some/path).
Setting a prefix is not necessary, but it is considered a good practice (for reasons that are outside the scope of this tutorial). ! is the most commonly used prefix.
