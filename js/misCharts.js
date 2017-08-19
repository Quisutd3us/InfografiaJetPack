$(function () {

    $('.containerPrincipal').highcharts({
        title: {
            text: 'Generador de Ondas',
            x: 0,
            y: 20,
        },
        xAxis: {
            title: {
                text: 'Potencial'
            },
            categories: []
        },
        yAxis: {
            title: {
                text: 'Tiempo'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            enabled: 'false',
            valueSuffix: 'v'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        series: [{
            name: 'Caso 1',
            data: [20, 30, 50]
        }, {
            name: 'Caso 2',
            data: [10, 45, 85]
        }]
    })
})