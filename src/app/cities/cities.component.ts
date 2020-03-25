import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { CitiesService } from '../Services/Cities/cities.service';
import { Features } from '../Services/Cities/cities';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  features: any = []; //this holds the whole data in attribute
  cities: any = []; //contains the value and residences
  values: any = []; //only contains the value

  constructor(private citiesService: CitiesService) { }

  ngOnInit() {
    this.loadNcovFeatures();
  }

loadNcovFeatures(){
  this.citiesService.getServices().pipe(first()).subscribe(att => {
    this.features = att.features
    this.features.sort((a,b) => b-a);
    
    })
}


}
