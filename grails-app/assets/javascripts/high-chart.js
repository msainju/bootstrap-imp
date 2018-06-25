$(function(){
    Highcharts.chart('high-chart-block', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Plan Paid Amount by Service Category'
        },
        xAxis: {
            categories: [
                'Pharmacy',
                'Inpatient',
                'Outpatient',
                'Office Visit'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: '$PMPM'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>${point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            },
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: [{
            name: 'Jun-17 to May-18',
            data: [49, 71, 108, 54]

        }, {
            name: 'June-16 to May-18',
            data: [47, 81, 117, 93.57]

        }]
    });
});