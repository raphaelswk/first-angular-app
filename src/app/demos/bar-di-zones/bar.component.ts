import { HttpClient } from '@angular/common/http';
import { Component, Inject, Injector, NgZone, OnInit } from '@angular/core';
import { BarBranchConfig, BAR_BRANCH_CONFIG } from './bar.config';
import { BarFactory, BarServices, BarServicesMock, DrinkService } from './bar.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  providers: [    
    // { provide: BarServices, useClass: BarServicesMock }
    
    { provide: BarServices, useClass: BarServices },

    // { 
    //   provide: BarServices, 
    //   useFactory: BarFactory,
    //   deps: [
    //     HttpClient,
    //     // BAR_BRANCH_CONFIG
    //     Injector
    //   ]
    // }

    { provide: DrinkService, useExisting: BarServices }, 
  ]
})
export class BarComponent implements OnInit {

  configManual: BarBranchConfig;
  config: BarBranchConfig;
  barDrink1: string;
  barDrink2: string;
  dataBranch: string;

  constructor(
    private barServices: BarServices,
    @Inject('ConfigManualBranch') private ApiConfigManual: BarBranchConfig,
    @Inject(BAR_BRANCH_CONFIG) private ApiConfig: BarBranchConfig,
    private drinkService: DrinkService,
    private ngZone: NgZone
  ) { }

  ngOnInit(): void {
    this.barDrink1 = this.barServices.getDrinks();
    this.configManual = this.ApiConfigManual;
    this.config = this.ApiConfig;
    this.dataBranch = this.barServices.getBranch();
    this.barDrink2 = this.drinkService.getDrinks();
  }

  public progress: number = 0;
  public label: string;

  processWithinAngularZone() {
    this.label = 'within';
    this.progress = 0;
    this._increaseProgress(() => console.log('Finished Within Angular!'));
  }

  processOutsideAngularZone() {
    this.label = 'outside';
    this.progress = 0;
    this.ngZone.runOutsideAngular(() => {
      this._increaseProgress(() => {
        this.ngZone.run(() => { console.log('Finished Outside Angular!'); });
      })
    })
  }

  _increaseProgress(doneCallback: () => void) {
    this.progress += 1;
    console.log(`Current progress: ${this.progress}%`);

    if (this.progress < 100) {
      window.setTimeout(() => this._increaseProgress(doneCallback), 10);
    } else {
      doneCallback();
    }
  }
}
