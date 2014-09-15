module.exports = (function(angular){
    'use strict';
    
    return function($scope, $ionicActionSheet, $timeout ) {
        // Triggered on a button click, or some other target
         $scope.show = function() {
             
           console.log('click')

           // Show the action sheet
           var hideSheet = $ionicActionSheet.show({
             buttons: [
               { text: 'Edit Member' },
               { text: 'Call' }
             ],
             destructiveText: 'Delete',
             titleText: 'Member Actions',
             cancelText: 'Cancel',
             cancel: function() {
                  // add cancel code..
                },
             buttonClicked: function(index) {
               return true;
             },
             destructiveButtonClicked: function(index) {
               return true;
             }
           });

           // For example's sake, hide the sheet after two seconds
           $timeout(function() {
             hideSheet();
           }, 4000);

         };
        
        $scope.members = [];
        for(var i=0;i<3000;i++){
            $scope.members.push({"id":"ID: "+i,"name":"McFly "+i})
        }
        $scope.getItemHeight = function(item, index) {
            //Make evenly indexed items be 10px taller, for the sake of example
            return (index % 2) === 0 ? 50 : 60;
        };
    };
    
})(angular);