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
    
