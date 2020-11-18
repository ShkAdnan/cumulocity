import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes ,RouterModule as ngRouterModule } from '@angular/router';
import { CoreModule, BootstrapComponent, RouterModule } from '@c8y/ngx-components';

import { AppComponent } from './app/app.component';
import { ChartComponent } from './charts/charts.component';
import { HumdudityComponent } from './humaditiy/humdudity.component';
import { Pm01Component } from './pm_01/pm_01.component';
import { AqiComponent } from './AQI/aqi.component';
import { Co2Component } from './co2/co2.component';
import { pm10Component } from './pm10/pm10.component';
import { ngxComponent } from './ngx/ngx.component';
import { solidComponent} from './solid_gauge/solid.component';
import { nh3Component } from './nh3/nh3.component';
import { DevicesComponent } from './devices/devices.component';
import { MonitorComponent } from './Monitor/monitor.component';

import { MatButtonModule } from '@angular/material/button';
import { HighchartsChartComponent } from 'highcharts-angular';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GaugeChartModule } from 'angular-gauge-chart';



// import { CircularGaugeModule } from '@syncfusion/ej2-angular-circulargauge';
// import { GradientService } from '@syncfusion/ej2-angular-circulargauge';



const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'devices', component: DevicesComponent },
  { path: 'devices/:id', component: MonitorComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    DevicesComponent,
    HumdudityComponent,
    Pm01Component,
    AqiComponent,
    Co2Component,
    HighchartsChartComponent,
    ngxComponent,
    solidComponent,
    pm10Component,
    MonitorComponent,   
    nh3Component
  ],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    NgxChartsModule,
    GaugeChartModule,
    RouterModule.forRoot(),
    ngRouterModule.forRoot(routes, { enableTracing: false, useHash: true }),
    CoreModule.forRoot()
  ],
  bootstrap: [BootstrapComponent],
})
export class AppModule {}
