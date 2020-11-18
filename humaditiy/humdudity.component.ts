import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
   selector: 'app-humdudity',
   templateUrl: './humdudity.component.html'
})
export class HumdudityComponent { 
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
        { data : [11,68,99,86] }]
    };

}