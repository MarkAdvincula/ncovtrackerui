import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { CitiesService } from '../Services/Cities/cities.service';
import { Features } from '../Services/Cities/cities';
import { map } from 'rxjs/operators';
import { MatGridList } from '@angular/material/grid-list';
import * as Chart from 'chart.js';
import 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
  breakpoint: number;
  
  cities = [];


  constructor(private citiesService: CitiesService) { }

  ngOnInit() {
    this.initLoad();
    this.breakpoint = (window.innerWidth <= 1400 ? 5000 : 700);
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 1400) ? 5000 : 700;
  }

  initLoad() {
    this.citiesService.getServices().subscribe(result => {
      console.log(result);

      let cities = result['features'].map(res => res.attributes.residence)
      let confirmedCases = result['features'].map(res => res.attributes.value)
      console.log(cities);
      console.log(confirmedCases);
      
      this.cities.push(new Chart('canvas', {
        type: 'horizontalBar',
        data: {
            labels: cities,
            datasets: [{
                  label:'Confirmed',
                  data: confirmedCases,
                  backgroundColor: 'rgba(255, 99, 132, 0.2)'
              }]
    },
    options: {
      responsive: true,
        plugins: {
          datalabels: {
            align: 'end',
            anchor: 'end',
            font:{
              size: 8
            },  
            backgroundColor: 'rgba(255, 99, 132)',
            borderRadius: 10,
            color: 'white',
            formatter: Math.round
          }
        }
    }
}));
    })

  }































  // @ViewChild ('grid') grid: MatGridList;

  // gridByBreakpoint = {
  //   xl: 8,
  //   lg: 6,
  //   md: 4,
  //   sm: 2,
  //   xs: 1
  // }

  // features: any = []; //this holds the whole data in attribute
  // cities: any = []; //contains the value and residences
  // values: any = []; //only contains the value

  // breakpoint: number;

  // constructor(private citiesService: CitiesService){} 

  // ngOnInit() {
  //   this.breakpoint = (window.innerWidth <= 1357) ? 1 : 6;
  //   this.loadNcovFeatures();
  //   console.log(this.features);
  // }

  // onResize(event) {
  //   this.breakpoint = (event.target.innerWidth <= 1357) ? 1 : 6;
  // }

  // loadNcovFeatures() {
  //   this.citiesService.getServices().pipe(first()).subscribe(att => {
  //     this.features = att.features;
  //     this.features.sort((a, b) => b - a);
  //   })
  // }

}
