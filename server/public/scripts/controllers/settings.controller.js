colorBlocks.controller('SettingsController', ['DataFactory', function(DataFactory) {
  console.log("settings controller running");

  var self = this;

  self.newColor= '';

  self.colorList = DataFactory.colorArray;

  self.addColor = function (){
    DataFactory.colorAdd(angular.copy(self.newColor));
    self.newColor = '';
  };


}]);
