import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { RegisterComponent } from "../demos/reactiveForms/register/register.component";

@Injectable()
export class RegisterGuard implements CanDeactivate<RegisterComponent> {

    canDeactivate(component: RegisterComponent) {
        if (component.noSavedChanges) {
            return window.confirm('Are you sure you want to leave unsaved changes?');
        }

        return true;
    }

}