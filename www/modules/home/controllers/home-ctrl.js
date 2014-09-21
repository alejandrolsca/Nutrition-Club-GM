module.exports = function ($scope) {
        
        var onSeriesHover = function(e) {
            kendoConsole.log(kendo.format("event :: seriesHover ({0} : {1})", e.series.name, e.value));
        };
        
        $scope.chartOptions = {
            theme: "black",
            title: {
                    text: "SP/SR STATS"
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
                { field: 'monday', name: 'Monday' },
                { field: 'tuesday', name: 'Tuesday' },
                { field: 'wednesday', name: 'Wednesday' },
                { field: 'thursday', name: 'Thursday' },
                { field: 'friday', name: 'Friday' },
                { field: 'saturday', name: 'Saturday' }
            ],
            seriesHover: onSeriesHover,
            chartArea: {
                background: "transparent",
                width: 300,
                height: 300
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
    
