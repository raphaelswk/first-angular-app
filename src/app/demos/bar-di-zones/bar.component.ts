import { HttpClient } from '@angular/common/http';
import { Component, Inject, Injector, OnInit } from '@angular/core';
import { BarBranchConfig, BAR_BRANCH_CONFIG } from './bar.config';
import { BarFactory, BarServices, BarServicesMock } from './bar.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  providers: [    
    // { provide: BarServices, useClass: BarServicesMock }
    
    // { provide: BarServices, useClass: BarServices },

    { 
      provide: BarServices, 
      useFactory: BarFactory,
      deps: [
        HttpClient,
        // BAR_BRANCH_CONFIG
        Injector
      ]
    }
  ]
})
export class BarComponent implements OnInit {

  configManual: BarBranchConfig;
  config: BarBranchConfig;
  barDrink1: string;
  dataBranch: string;

  constructor(
    private barServices: BarServices,
    @Inject('ConfigManualBranch') private ApiConfigManual: BarBranchConfig,
    @Inject(BAR_BRANCH_CONFIG) private ApiConfig: BarBranchConfig
  ) { }

  ngOnInit(): void {
    this.barDrink1 = this.barServices.getDrinks();
    this.configManual = this.ApiConfigManual;
    this.config = this.ApiConfig;
    this.dataBranch = this.barServices.getBranch();
  }
}
