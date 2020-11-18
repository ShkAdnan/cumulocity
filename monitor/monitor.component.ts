import { Component } from '@angular/core';
import { MeasurementService , InventoryService , IManagedObject } from '@c8y/client';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-monitor',
    templateUrl: './monitor.component.html'
  })

  export class MonitorComponent {
    id = 0;
    device: IManagedObject = null;
    temperature = 0;
    temp ;

    constructor(
        private inventory: InventoryService,
        private measurement: MeasurementService,
        private activatedRoute: ActivatedRoute
    ){
        this.id = +this.activatedRoute.snapshot.paramMap.get('id');
        this.getDevice(this.id);
        this.getLastMeasured();
        this.getLastMeasureds();
    }
    async getDevice(id: number){
        const { data } = await this.inventory.detail(id);
        console.log("Clicked :", data);
        }
        getLastMeasured() {
        const listBySource$ = this.measurement.listBySource$(this.id, {},{ realtime: true });
        listBySource$.subscribe((data) => {console.log(data[data.length-1]);this.temperature = data[data.length-1].Humidity.Percentage.value;
           
});

        }
        getLastMeasureds() {
            const listBySource$ = this.measurement.listBySource$(this.id, {},{ realtime: true });
            listBySource$.subscribe((data) => {console.log(data[data.length-1]);this.temp = data[data.length-1].type;
              
    });
            }
}