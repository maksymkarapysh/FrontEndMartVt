import { Component } from "@angular/core";

@Component({
    selector: "class-binding",
    templateUrl: "class-binding.component.html",
    styleUrls: ["class-binding.component.css"]
})
export class ClassBindingComponent {

    allClasses: string = "accent-border error-text highlighted";
    currentClasses: string = "";

    isAccentBorder: boolean = true;
    isErrorText: boolean = false;
    isHighlighted: boolean = true;

    toggleAllClasses() {
        if (this.currentClasses == "") {
            this.currentClasses = this.allClasses;
        }
        else {
            this.currentClasses = "";
        }
    }
}