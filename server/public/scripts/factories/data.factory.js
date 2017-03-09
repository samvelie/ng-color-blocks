colorBlocks.factory('DataFactory', [function() {
  console.log("data factory running");
  var colors = ['red', 'blue', 'magenta', 'green', 'pink'];

  function addToColors(aColor){
    colors.push(aColor);
  }

  return {
    colorArray: colors,
    colorAdd: addToColors
  };

}]);
