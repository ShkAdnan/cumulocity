import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
   selector: 'app-pm01',
   templateUrl: './pm_01.component.html'
})
export class Pm01Component { 
    highcharts = Highcharts;

    chartOptions = {   
        chart: {
            type: 'area',
            backgroundColor : null,
            borderWidth : 0,
            margin : [2,2,2,2],
            height: 60
        },
        title: {
            text: null
        },
        subtitle: {
            text: null
        },
        tooltip: {
            split: true,
            outside: true
        },
        legend : {
            enabled : false
        },
        credits : {
            enabled : false
        },
        xAxis: {
           labels : {
            enabled: false
           },
            title: {
                enabled: false
            },
            startOnTick: false,
            endOnTick: false,
            tickOptions : []
        },
        series: [
        {data : []} , 
        { data : [] },
        { data : [61,88,19,26] }
    ]
    };

}