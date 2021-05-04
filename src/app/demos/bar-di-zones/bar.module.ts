import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { BarComponent } from './bar.component';
import { BarBranchConfig, BAR_BRANCH_CONFIG } from "./bar.config";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        BarComponent
    ],
    exports: [
        BarComponent
    ]
})
export class BarModule {
    static forRoot(config: BarBranchConfig) : ModuleWithProviders<{}> {
        return {
            ngModule: BarModule,
            providers: [
                { provide: 'ConfigManualBranch', useValue: config },
                { provide: BAR_BRANCH_CONFIG, useValue: config }
            ]
        }
    }

    static forChild() {
        
    }
 }