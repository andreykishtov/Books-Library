angular.module('clientAngularjsApp').component('main', {
  templateUrl: 'scripts/components/main.html',
  controller: mainController,
  controllerAs: '$ctrl',
  bindings: {
    Binding: '='
  }
});

mainController.$inject = ['BooksService'];
function mainController(BooksService) {
  var $ctrl = this;
  ////////////////
  BooksService.getData().then(data => ($ctrl.books = data));

  $ctrl.$onInit = function() {};
  $ctrl.$onChanges = function(changesObj) {};
  $ctrl.$onDestroy = function() {};
}
