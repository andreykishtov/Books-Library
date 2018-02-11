angular.module('clientAngularjsApp').factory('BooksService', BooksService);

var booksURL = 'http://localhost:4000';

BooksService.$inject = ['$http'];

function BooksService($http) {
  var service = {
    getData: getData
  };

  return service;

  ////////////////
  function getData() {
    return $http.get(`${booksURL}/books`).then(data => {
      return data.data[0].items;
    });
  }
}
