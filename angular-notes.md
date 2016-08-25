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
