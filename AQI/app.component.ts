import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
   highcharts = Highcharts;

   chartOptions = {   
      chart: {
         type: "spline"
      },
      title: {
         text: "Monthly Average Values"
      },
      subtitle: {
         text: "Source: AERAS-001 Location: Faisalabad"
      },
      xAxis:{
         categories:["00:00-2:00", "2:00-4:00", "4:00-6:00", "6:00-8:00", "8:00-10:00", "10:00-12:00",
            "12:00-14:00", "14:00-16:00", "16:00-18:00", "18:00-20:00", "20:00-22:00", "22:00-24:00"]
      },
      yAxis: {          
         title:{
            text:"Values"
         },
         labels: {
          formatter: function () {
             return this.value + '\xB0';
          }
       },
       lineWidth: 2 
      },
      tooltip: {
        crosshairs: true,
        shared: true
      },
      plotOptions : {
        spline: {
           marker: {
               radius: 4,
               lineColor: '#666666',
               lineWidth: 1
            }
         }
      },
      series: [{
         name: 'Temperature',
         marker: {
            symbol: 'square'
         },
         data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
               y: 26.5,
               marker: {
                  symbol: 'url(http://www.highcharts.com/demo/gfx/sun.png)'
               }
            }, 23.3, 18.3, 13.9, 9.6]
         },
         {
            name: 'AQI',
            marker: {
               symbol: 'diamond'
            },
            data: [{
               y: 3.9,
               marker: {
                  symbol: 'url(http://www.highcharts.com/demo/gfx/snow.png)'
               }
            }, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
         },
         {
            name: 'Humidity',
            marker: {
               symbol: 'diamond'
            },
            data: [{
               y: 3.9,
               marker: {
                  symbol: 'url(http://www.highcharts.com/demo/gfx/snow.png)'
               }
            }, 6.2, 7.7, 8.5, 10.9, 11.2, 11.0, 19.6, 24.2, 0.3, 3.6, 6.8]
         },
         {
            name: 'PM 2.5',
            marker: {
               symbol: 'square'
            },
            data: [{
               y: 3.9,
               marker: {
                  symbol: 'url(http://www.highcharts.com/demo/gfx/snow.png)'
               }
            }, 1.2, 2.7, 3.5, 4.9, 5.2, 6.0, 7.6, 8.2, 9.3, 10.6, 11.8]
         },
          {
            name: 'PM 10',
            marker: {
               symbol: 'square'
            },
            data: [{
               y: 3.9,
               marker: {
                  symbol: 'url(http://www.highcharts.com/demo/gfx/snow.png)'
               }
            }, 1.2, 2.7, 3.5, 4.9, 5.2, 6.0, 7.6, 8.2, 9.3, 10.6, 11.8]
         }
      ]
   };
}