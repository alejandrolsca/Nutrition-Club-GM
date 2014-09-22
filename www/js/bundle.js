(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./www/modules/index.js":[function(require,module,exports){
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
(function(angular){
    'use strict';

    angular.module('app', [
        'ionic',
        'i18n',
        'kendo.directives', 
        require('./tabs').name,
        require('./home').name,
        require('./daily-activity').name,   
        require('./daily-consumption').name,
        //require('./reports').name,
        require('./goals').name,
        require('./more').name,
        require('./settings').name
        //require('./login').name,
        //require('./logout').name
    ])
//
    .run(function($ionicPlatform,$i18n) {
      $i18n
        .addTranslation('en-US',require('./translations/en-US'))
        .addTranslation('zh-CHS',require('./translations/zh-CHS'))
        .setLang('en-US');
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
      });
    })

})(angular);


},{"./daily-activity":"/Applications/MAMP/htdocs/Nutrition-Club-GM/www/modules/daily-activity/index.js","./daily-consumption":"/Applications/MAMP/htdocs/Nutrition-Club-GM/www/modules/daily-consumption/index.js","./goals":"/Applications/MAMP/htdocs/Nutrition-Club-GM/www/modules/goals/index.js","./home":"/Applications/MAMP/htdocs/Nutrition-Club-GM/www/modules/home/index.js","./more":"/Applications/MAMP/htdocs/Nutrition-Club-GM/www/modules/more/index.js","./settings":"/Applications/MAMP/htdocs/Nutrition-Club-GM/www/modules/settings/index.js","./tabs":"/Applications/MAMP/htdocs/Nutrition-Club-GM/www/modules/tabs/index.js","./translations/en-US":"/Applications/MAMP/htdocs/Nutrition-Club-GM/www/modules/translations/en-US.js","./translations/zh-CHS":"/Applications/MAMP/htdocs/Nutrition-Club-GM/www/modules/translations/zh-CHS.js"}],"/Applications/MAMP/htdocs/Nutrition-Club-GM/www/modules/daily-activity/controllers/daily-activity-ctrl.js":[function(require,module,exports){
module.exports = (function(angular){
    'use strict';
    
    return function ($scope, $ionicPopup, $timeout) {
        $scope.showAlert = function() {
           var alertPopup = $ionicPopup.alert({
             title: 'Activity',
             template: 'Your activity was saved successfully',
             buttons: [{ //Array[Object] (optional). Buttons to place in the popup footer.
                text: 'Aceptar',
                type: 'button-assertive',
                onTap: function(e) {
                  // e.preventDefault() will stop the popup from closing when tapped.
                  //e.preventDefault();
                }
              }]
           });
           alertPopup.then(function(res) {
             console.log('Thank you for not eating my delicious ice cream cone');
           });
         };
    };
    
})(angular);
},{}],"/Applications/MAMP/htdocs/Nutrition-Club-GM/www/modules/daily-activity/index.js":[function(require,module,exports){
module.exports = (function(angular){
    'use strict';
    
    return angular.module('app.daily-activity',[])

    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('tab.daily-activity', {
          url: "/daily-activity",
            views:{
                "tab-daily-activity":{
                  templateUrl: "modules/daily-activity/views/daily-activity-view.html",
                  controller: 'DailyActivityCtrl'
                }
            }
        })
    })

    .controller('DailyActivityCtrl',require('./controllers/daily-activity-ctrl'))
    
})(angular);
},{"./controllers/daily-activity-ctrl":"/Applications/MAMP/htdocs/Nutrition-Club-GM/www/modules/daily-activity/controllers/daily-activity-ctrl.js"}],"/Applications/MAMP/htdocs/Nutrition-Club-GM/www/modules/daily-consumption/controllers/daily-consumption-ctrl.js":[function(require,module,exports){
module.exports = (function(angular){
    'use strict';
    
    return function ($scope, $ionicPopup, $timeout) {
        $scope.showAlert = function() {
           var alertPopup = $ionicPopup.alert({
             title: 'Consumption',
             template: '<center>Your consumption was saved successfully</center>',
             buttons: [{ //Array[Object] (optional). Buttons to place in the popup footer.
                text: 'Aceptar',
                type: 'button-assertive',
                onTap: function(e) {
                  // e.preventDefault() will stop the popup from closing when tapped.
                  //e.preventDefault();
                }
              }]
           });
           alertPopup.then(function(res) {
             console.log('Thank you for not eating my delicious ice cream cone');
           });
         };
    };
    
})(angular);
},{}],"/Applications/MAMP/htdocs/Nutrition-Club-GM/www/modules/daily-consumption/index.js":[function(require,module,exports){
module.exports = (function(angular){
    'use strict';
    
    return angular.module('app.daily-consumption',[])

    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('tab.daily-consumption', {
          url: "/daily-consumption",
            views:{
                "tab-daily-consumption":{
                  templateUrl: "modules/daily-consumption/views/daily-consumption-view.html",
                  controller: 'DailyConsumptionCtrl'
                }
            }
        })
    })

    .controller('DailyConsumptionCtrl',require('./controllers/daily-consumption-ctrl'))
    
})(angular);
},{"./controllers/daily-consumption-ctrl":"/Applications/MAMP/htdocs/Nutrition-Club-GM/www/modules/daily-consumption/controllers/daily-consumption-ctrl.js"}],"/Applications/MAMP/htdocs/Nutrition-Club-GM/www/modules/goals/controllers/goals-ctrl.js":[function(require,module,exports){
module.exports = (function(angular){
    'use strict';
    
    return function ($scope, $ionicModal, $timeout) {
    
    };
    
})(angular);
},{}],"/Applications/MAMP/htdocs/Nutrition-Club-GM/www/modules/goals/index.js":[function(require,module,exports){
module.exports = (function(angular){
    'use strict';
    
    return angular.module('tab.goals',[])

    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('tab.goals', {
          url: "/goals",
          views: {
            'tab-goals' :{
              templateUrl: "modules/goals/views/goals-view.html",
              controller: 'GoalsCtrl'
            }
          }
        })
    })

    .controller('GoalsCtrl',require('./controllers/goals-ctrl'))
    
})(angular);
},{"./controllers/goals-ctrl":"/Applications/MAMP/htdocs/Nutrition-Club-GM/www/modules/goals/controllers/goals-ctrl.js"}],"/Applications/MAMP/htdocs/Nutrition-Club-GM/www/modules/home/controllers/home-ctrl.js":[function(require,module,exports){
module.exports = function ($scope, i18nFilter) {      
        
        $scope.chartOptions = {
            theme: "Silver",
            title: {
                    text: "SP/SR "+i18nFilter('home.stats')
            },
            legend: {
                    visible: true,
                    position: "bottom"
            },
            seriesDefaults: {
                    type: "column",
                    //stack: true
            },
            dataSource:{
                data: $scope.electricity
            },
            series:[
                { field: 'sample1', name: i18nFilter('home.sample','1') },
                { field: 'sample2', name: i18nFilter('home.sample','2') },
                { field: 'sample3', name: i18nFilter('home.sample','3') }
            ],
            chartArea: {
                background: "transparent",
                width: 300,
                height: 280
            },
            tooltip: {
                visible: true,
                format: "{0}"
            },
            transitions: false
        };

        $scope.electricity = new kendo.data.DataSource({
            transport: {
                read: {
                    url: "modules/home/data/spain-electricity.json",
                    dataType: "json"
                }
            },
            sort: {
                field: "year",
                dir: "asc"
            }
        });
    };
    

},{}],"/Applications/MAMP/htdocs/Nutrition-Club-GM/www/modules/home/index.js":[function(require,module,exports){
module.exports = (function(angular){
    'use strict';
    
    return angular.module('app.home',[
        require('./modules/members').name
    ])

    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('tab.home', {
          url: "/home",
            views:{
                "tab-home":{
                templateUrl: "modules/home/views/home-view.html",
                controller: 'HomeCtrl'
                }
            }
        })
    })

    .controller('HomeCtrl',require('./controllers/home-ctrl'))
    
})(angular)
},{"./controllers/home-ctrl":"/Applications/MAMP/htdocs/Nutrition-Club-GM/www/modules/home/controllers/home-ctrl.js","./modules/members":"/Applications/MAMP/htdocs/Nutrition-Club-GM/www/modules/home/modules/members/index.js"}],"/Applications/MAMP/htdocs/Nutrition-Club-GM/www/modules/home/modules/members/controllers/members-ctrl.js":[function(require,module,exports){
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
        for(var i=0;i<100;i++){
            $scope.members.push({"id":"ID: "+i,"name":"McFly "+i})
        }
        $scope.getItemHeight = function(item, index) {
            //Make evenly indexed items be 10px taller, for the sake of example
            return (index % 2) === 0 ? 50 : 60;
        };
    };
    
})(angular);
},{}],"/Applications/MAMP/htdocs/Nutrition-Club-GM/www/modules/home/modules/members/index.js":[function(require,module,exports){
module.exports = (function(angular){
    'use strict';
    
    return angular.module('tab.members',[])

    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('tab.members', {
          url: "/home/members",
          views: {
            'tab-home' :{
              templateUrl: "modules/home/modules/members/views/members-view.html",
              controller: 'MembersCtrl'
            }
          }
        })
    })

    .controller('MembersCtrl',require('./controllers/members-ctrl'))
    
})(angular);
},{"./controllers/members-ctrl":"/Applications/MAMP/htdocs/Nutrition-Club-GM/www/modules/home/modules/members/controllers/members-ctrl.js"}],"/Applications/MAMP/htdocs/Nutrition-Club-GM/www/modules/more/controllers/more-ctrl.js":[function(require,module,exports){
module.exports = (function(angular){
    'use strict';
    
    return function ($scope, $ionicModal, $timeout) {
    
    };
    
})(angular);
},{}],"/Applications/MAMP/htdocs/Nutrition-Club-GM/www/modules/more/index.js":[function(require,module,exports){
module.exports = (function(angular){
    'use strict';
    
    return angular.module('app.more',[])

    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('tab.more', {
          url: "/more",
            views:{
                "tab-more":{
                  templateUrl: "modules/more/views/more-view.html",
                  controller: 'MoreCtrl'
                }
            }
        })
    })

    .controller('MoreCtrl',require('./controllers/more-ctrl'))
    
})(angular);
},{"./controllers/more-ctrl":"/Applications/MAMP/htdocs/Nutrition-Club-GM/www/modules/more/controllers/more-ctrl.js"}],"/Applications/MAMP/htdocs/Nutrition-Club-GM/www/modules/settings/controllers/settings-ctrl.js":[function(require,module,exports){
module.exports = (function(angular){
    'use strict';
    
    return function($scope, $i18n) {
        $scope.setLang = function(langKey){
            $i18n.setLang(langKey);
        }
    };
    
})(angular);
},{}],"/Applications/MAMP/htdocs/Nutrition-Club-GM/www/modules/settings/index.js":[function(require,module,exports){
module.exports = (function(angular){
    'use strict';
    
    return angular.module('tab.settings',[])

    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('tab.settings', {
          url: "/settings",
          views: {
            'tab-home' :{
              templateUrl: "modules/settings/views/settings-view.html",
              controller: 'SettingsCtrl'
            }
          }
        })
    })

    .controller('SettingsCtrl',require('./controllers/settings-ctrl'))
    
})(angular);
},{"./controllers/settings-ctrl":"/Applications/MAMP/htdocs/Nutrition-Club-GM/www/modules/settings/controllers/settings-ctrl.js"}],"/Applications/MAMP/htdocs/Nutrition-Club-GM/www/modules/tabs/controllers/tabs-ctrl.js":[function(require,module,exports){
module.exports = (function(angular){
    'use strict';
    
    return function($scope, $ionicModal, $ionicActionSheet, $timeout, i18nFilter) {
        $scope.badge1 = Math.floor((Math.random() * 10) + 1);
        $scope.badge2 = Math.floor((Math.random() * 10) + 1);
        $scope.badge3 = Math.floor((Math.random() * 10) + 1);
        $scope.badge4 = Math.floor((Math.random() * 10) + 1);
          // Triggered on a button click, or some other target
         $scope.show = function() {
             
           console.log('click')

           // Show the action sheet
           var hideSheet = $ionicActionSheet.show({
             buttons: [
               { text: '<i class="icon fa fa-bar-chart"></i> ' + i18nFilter('more.option1')},
               { text: '<i class="icon fa fa-area-chart"></i> ' + i18nFilter('more.option2')},
               { text: '<i class="icon fa fa-pie-chart"></i> '  + i18nFilter('more.option3')},
               { text: '<i class="icon ion-ios7-bell"></i> '  + i18nFilter('more.option4')},
               { text: '<i class="icon ion-speakerphone"></i> '  + i18nFilter('more.option5')},
               { text: '<i class="icon ion-android-star"></i> '  + i18nFilter('more.option6')},
               { text: '<i class="icon ion-power"></i> '  + i18nFilter('more.option7')}
             ],
             //destructiveText: 'Delete',
             titleText: i18nFilter('optionstitle'),
             cancelText: i18nFilter('common.cancel'),
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

           // For example's sake, hide the sheet after 4 seconds
           $timeout(function() {
             hideSheet();
           }, 4000);

         };
           // Form data for the login modal
          $scope.loginData = {};

          // Create the login modal that we will use later
          $ionicModal.fromTemplateUrl('modules/tabs/views/login.html', {
            scope: $scope
          }).then(function(modal) {
            $scope.modal = modal;
          });

          // Triggered in the login modal to close it
          $scope.closeLogin = function() {
            $scope.modal.hide();
          };

          // Open the login modal
          $scope.login = function() {
            $scope.modal.show();
          };

          // Perform the login action when the user submits the login form
          $scope.doLogin = function() {
            console.log('Doing login', $scope.loginData);

            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            $timeout(function() {
              $scope.closeLogin();
            }, 1000);
          };
          $timeout(function() {
              $scope.login();
          }, 500);
    }
    
})(angular);
},{}],"/Applications/MAMP/htdocs/Nutrition-Club-GM/www/modules/tabs/index.js":[function(require,module,exports){
module.exports = (function(angular){
    'use strict';
    
    return angular.module('app.tab',[])

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

        .state('tab', {
          url: "/tab",
          abstract: true,
          templateUrl: "modules/tabs/views/tabs-view.html",
          controller: 'TabsCtrl'
        })
        
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/home');
    })
    
    .controller('TabsCtrl',require('./controllers/tabs-ctrl'));

})(angular);
},{"./controllers/tabs-ctrl":"/Applications/MAMP/htdocs/Nutrition-Club-GM/www/modules/tabs/controllers/tabs-ctrl.js"}],"/Applications/MAMP/htdocs/Nutrition-Club-GM/www/modules/translations/en-US.js":[function(require,module,exports){
module.exports = {
    "tabs": {
        "tab1": "Home",
        "tab2": "Activity",
        "tab3": "Consumption",
        "tab4": "Goals",
        "tab5": "More"
    },
    "home": {
        "rating": "Rating",
        "stats": "Stats",
        "location": "Location",
        "sample": "Sample @@",
        "settings": {
            "setting1":"Notifications",
            "setting2":"Sounds",
            "setting3":"Automatic Backups",
            "setting4":"Push Notifications"
        }
    },
    "activity":{
        "title": "Daily Activity",
        "field1":{
            "label":"Date",
            "placeholder":"dd/mm/yyyy"
        },
        "field2":{
            "label":"Name",
            "placeholder":"Customer's name"
        },
        "field3":{
            "label":"Phone number",
            "placeholder":"Customer's phone"
        },
        "field4":{
            "label":"Way of inviting",
            "placeholder":"",
            "options":{
                "option1":"Flyer",
                "option2":"Walk in",
                "option3":"We chat",
                "option4":"Recommendation"
            }
        },
        "field5":{
            "label":"Interested in",
            "placeholder":"",
            "options":{
                "option1":"Weight management",
                "option2":"Career",
                "option3":"Others"
            }
        },
        "field6":{
            "label":"Meeting attended",
            "placeholder":"",
            "options":{
                "option1":"1st",
                "option2":"2nd",
                "option3":"3rd",
                "option4":"No"
            }
        },
        "field7":{
            "label":"Invite again",
            "placeholder":"",
            "options":{
                "option1":"Yes",
                "option2":"No"
            }
        },
        "field8":{
            "label":"Follow-up result",
            "placeholder":"",
            "options":{
                "option1":"Following up",
                "option2":"Purchase",
                "option3":"SR",
            }
        },
        "field9":{
            "label":"Lose reason",
            "placeholder":"",
            "options":{
                "option1":"N/A",
                "option2":"Price",
                "option3":"Long Distance",
                "option4":"Busy schedule",
                "option5":"Don't know"
            }
        },
        "field10":{
            "label":"notes",
            "placeholder":"Important notes here!"
        }
    },
    "consumption":{
        "title": "Daily Consumption",
        "field1":{
            "label":"Date",
            "placeholder":"dd/mm/yyyy"
        },
        "field2":{
            "label":"Personal VP",
            "placeholder":"SP/SR Personal VP"
        },
        "field3":{
            "label":"Name",
            "placeholder":"Customer's name"
        },
        "field4":{
            "label":"Consumer's Type",
            "placeholder":"",
            "options":{
                "option1":"New",
                "option2":"Recommended",
                "option3":"Existing"
            }
        },
        "field5":{
            "label":"Consumer's VP",
            "placeholder":"Volumen points",
        },
        "field6":{
            "label":"Consumption Type",
            "placeholder":"",
            "options":{
                "option1":"7 day card",
                "option2":"Long term",
                "option3":"others"
            }
        },
        "field7":{
            "label":"Total consumption",
            "placeholder":"Volume points"
        }
    },
    "goals":{
        "title":"Goals",
        "option1":"View",
        "option2":"Set/Edit",
        "option3":"Activity (Set Goal)",
        "option4":"Consumption (Set Goal)"
    },
    "more":{
        "title":"More",
        "optionstitle":"Select an option",
        "option1":"Reportes",
        "option2":"KPI's (Summary)",
        "option3":"Trends",
        "option4":"Notifications",
        "option5":"Alerts",
        "option6":"Favourites",
        "option7":"Logout"
    },
    "common": {
        "search":"Seach",
        "save":"Save",
        "cancel":"Cancel",
        "submit":"Submit",
        "back":"Back"
    }
};
},{}],"/Applications/MAMP/htdocs/Nutrition-Club-GM/www/modules/translations/zh-CHS.js":[function(require,module,exports){
module.exports = {
    "tabs": {
        "tab1": "首页",
        "tab2": "活动",
        "tab3": "消费",
        "tab4": "目标",
        "tab5": "更多"
    },
    "home": {
        "rating": "评级",
        "stats": "统计",
        "location": "地点",
        "sample": "样品 @@",
        "settings": {
            "setting1":"通知",
            "setting2":"声音",
            "setting3":"自动备份",
            "setting4":"推送通知"
        }
    },
    "activity":{
        "title": "每日活动",
        "field1":{
            "label":"日期",
            "placeholder":"dd/mm/yyyy"
        },
        "field2":{
            "label":"名称",
            "placeholder":"客户的姓名"
        },
        "field3":{
            "label":"电话号码",
            "placeholder":"客户的电话"
        },
        "field4":{
            "label":"邀请方式",
            "placeholder":"",
            "options":{
                "option1":"传单",
                "option2":"走在",
                "option3":"我们聊天",
                "option4":"建议"
            }
        },
        "field5":{
            "label":"有兴趣",
            "placeholder":"",
            "options":{
                "option1":"体重管理",
                "option2":"职业生涯",
                "option3":"其他"
            }
        },
        "field6":{
            "label":"出席会议",
            "placeholder":"",
            "options":{
                "option1":"第一",
                "option2":"第二",
                "option3":"第三",
                "option4":"无"
            }
        },
        "field7":{
            "label":"再次邀请",
            "placeholder":"",
            "options":{
                "option1":"是的",
                "option2":"无"
            }
        },
        "field8":{
            "label":"随访结果",
            "placeholder":"",
            "options":{
                "option1":"跟进",
                "option2":"购买",
                "option3":"SR",
            }
        },
        "field9":{
            "label":"失去理智",
            "placeholder":"",
            "options":{
                "option1":"不适用",
                "option2":"价格",
                "option3":"长途",
                "option4":"繁忙的日程",
                "option5":"不知道"
            }
        },
        "field10":{
            "label":"注意事项",
            "placeholder":"重要注意事项在这里!"
        }
    },
    "consumption":{
        "title": "日常消费",
        "field1":{
            "label":"日期",
            "placeholder":"dd/mm/yyyy"
        },
        "field2":{
            "label":"个人VP",
            "placeholder":"SP/SR 个人 VP"
        },
        "field3":{
            "label":"名称",
            "placeholder":"客户的姓名"
        },
        "field4":{
            "label":"消费者的类型",
            "placeholder":"",
            "options":{
                "option1":"新",
                "option2":"推荐",
                "option3":"现有"
            }
        },
        "field5":{
            "label":"消费者的VP",
            "placeholder":"点卷",
        },
        "field6":{
            "label":"消耗 类型",
            "placeholder":"",
            "options":{
                "option1":"7天卡",
                "option2":"长期",
                "option3":"别人"
            }
        },
        "field7":{
            "label":"总消费量",
            "placeholder":"点卷"
        }
    },
    "goals":{
        "title":"进球",
        "option1":"观点",
        "option2":"设置/编辑",
        "option3":"活性（设目标)",
        "option4":"消耗（设目标)"
    },
    "more":{
        "title":"更多",
        "optionstitle":"选择一个选项",
        "option1":"报告",
        "option2":"KPI's (汇总)",
        "option3":"趋势",
        "option4":"的通知",
        "option5":"警报",
        "option6":"的最爱",
        "option7":"的注销"
    },
    "common": {
        "search":"搜索",
        "save":"保存",
        "cancel":"取消",
        "submit":"提交",
        "back":"返回"
    }
};
},{}]},{},["./www/modules/index.js"]);
