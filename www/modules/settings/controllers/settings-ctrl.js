module.exports = (function(angular){
    'use strict';
    
    return function($scope, $i18n) {
        $scope.setLang = function(langKey){
            $i18n.setLang(langKey);
        }
    };
    
})(angular);