angular.module('CriminalsApp', [])
  .controller('CriminalsController', CriminalsController);

  CriminalsController.$inject = ['$http'];

  function CriminalsController($http){
    var self = this;
    self.all = [];
    self.addCriminal = addCriminal;
    self.newCriminal = {};
    self.getCriminals = getCriminals;

    function addCriminal(){
      $http.post('http://localhost:3000/criminals', self.newCriminal)
        .then(function(response){
          getCriminals(response);
          self.newCriminal = {};
        });
    }
    function getCriminals(){
      $http.get('http://localhost:3000/criminals')
        .then(function(response){
          self.all = response.data.criminals;
        });
    };
    getCriminals();
  };
