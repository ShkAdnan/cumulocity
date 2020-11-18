import { Component} from '@angular/core';

@Component({
    selector: 'app-nh3',
    templateUrl:'./nh3.component.html'
})
export class nh3Component {
    public canvasWidth = 300
public needleValue = 3.1
public centralLabel = ''
public bottomLabel = '3.1 ppm°'
public options = {
    hasNeedle: true,
    needleColor: 'gray',
    needleUpdateSpeed: 100,
    arcColors: ['rgb(44, 151, 222)', 'lightgray'],
    arcDelimiters: [30],
    rangeLabel: ['0', '100'],
    needleStartValue: 100,
}
}