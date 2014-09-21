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
                { field: 'sample1', name: 'Sample 1' },
                { field: 'sample2', name: 'Sample 2' },
                { field: 'sample3', name: 'Sample 3' },
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
    
