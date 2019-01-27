
import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';
import { MapService } from './map.service';
import { CamelizePipe } from 'ngx-pipes';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MapComponent
  ],
  exports: [
    MapComponent
  ],
  imports: [
      AgmCoreModule.forRoot({
          apiKey: 'AIzaSyDjTDuAsYVG4qw_pn7dYxJXZaPHEC_MVkU'
      }),
      CommonModule

  ],
  providers: [
      MapService,
      CamelizePipe 
  ],
})
export class MapModule { }
