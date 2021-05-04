import { InjectionToken } from "@angular/core";

export interface BarBranchConfig {
    branchId: number,
    branchToken: string
}

export const BAR_BRANCH_CONFIG = new InjectionToken<BarBranchConfig>('BAR_BRANCH_CONFIG');