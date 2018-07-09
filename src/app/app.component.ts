import { Component,OnInit } from '@angular/core';
//google
import { google } from '@agm/core/services/google-maps-types';
import { MapsAPILoader } from "@agm/core"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'My first AGM project';
  lat: number = 32.07762926680949;
  lng: number = 34.79069709777832;
  zoom: 13;
  closestSupermarket = [] ;
  search = 0;
  displayedColumns = [];
  JSONData=[];
  //get location 

  public handleAddressChange(address) {
    console.log('location :  ' + address);
    console.log(address.geometry.viewport.b.b);
    console.log(address.geometry.viewport.f.b);
   this.lng = address.geometry.viewport.b.b
   this.lat = address.geometry.viewport.f.b
 } 
 searchSuperMarket(){
  // for (const key in this.data){
  //   console.log(key);

  //   }
  }

}

