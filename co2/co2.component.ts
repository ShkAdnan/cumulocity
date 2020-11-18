import { Component} from '@angular/core';

@Component({
    selector: 'app-co2',
    templateUrl:'./co2.component.html'
})
export class Co2Component {
    public canvasWidth = 300
public needleValue = 59
public centralLabel = ''
public bottomLabel = '590 ppm°'
public options = {
    hasNeedle: true,
    needleColor: 'gray',
    needleUpdateSpeed: 1000,
    arcColors: ['rgb(44, 151, 222)', 'lightgray'],
    arcDelimiters: [30],
    rangeLabel: ['0', '1000'],
    needleStartValue: 100,
}
}