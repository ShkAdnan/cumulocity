import { Component} from '@angular/core';
import { MeasurementService , InventoryService , IManagedObject } from '@c8y/client';

@Component({
    selector: 'app-pm10',
    templateUrl:'./pm10.component.html'
})

export class pm10Component {
    id = 2927600;
    device: IManagedObject = null;
    temperature = 0;
    humidity = 0;
    temp ;
    value;
    
constructor(
    private inventory: InventoryService,
    private measurement: MeasurementService,
){
   
    this.getDevice(this.id);
    this.getLastMeasured();
     this.getLastMeasureda();
    
}
async getDevice(id: number){
    const { data } = await this.inventory.detail(id);
    }
    getLastMeasureda() {
        const listBySource$ = this.measurement.listBySource$(this.id, {},{ realtime: true });
        listBySource$.subscribe((data) => {console.log(data[data.length-1]);this.temperature = data[data.length-1].Temperature.Celsius.value;
           
});
    }
    getLastMeasured() {
        const listBySource$ = this.measurement.listBySource$(this.id, {},{ realtime: true });
        listBySource$.subscribe((data) => { console.log(data) , this.temp = data[data.length-1].type;

        console.log(this.temp);
        if(this.temp == "Temperature"){
            console.log("Temperature");
            this.temperature = data[data.length-1].Temperature.Celsius.value;
            localStorage.clear();
            this.value = this.temperature;
            localStorage.setItem( "Humidity" , this.value);
        }
});

}

public canvasWidth = 300
public needleValue = 99;
public centralLabel = ''
public bottomLabel = 99.32;
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