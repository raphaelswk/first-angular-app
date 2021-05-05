import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, Injector } from "@angular/core";
import { BarBranchConfig, BAR_BRANCH_CONFIG } from "./bar.config";

export function BarFactory(http: HttpClient, injector: Injector) {
    return new BarServices(http, injector.get(BAR_BRANCH_CONFIG));
}

// export function BarFactory(http: HttpClient, config: BarBranchConfig) {
//     return new BarServices(http, config);
// }

@Injectable()
export class BarServices {
    
    constructor(
        private http: HttpClient,
        @Inject(BAR_BRANCH_CONFIG) private config: BarBranchConfig
    ) { }

    getBranch(): string {
        return 'Branch ID' + this.config.branchId + ' Token: ' + this.config.branchToken;
    }

    getDrinks(): string {
        return 'Drinks!!';
    }

    getFingerFoods(): string {
        return 'Finger Foods';
    }

    getMeals(): string {
        return 'Meals';
    }
}

@Injectable()
export class BarServicesMock {
    
    constructor(private http: HttpClient) { }

    getDrinks(): string {
        return 'Mock';
    }

    getFingerFoods(): string {
        return 'Mock';
    }

    getMeals(): string {
        return 'Mock';
    }
}

export abstract class DrinkService {
    getDrinks: () => string
}