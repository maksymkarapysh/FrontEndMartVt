import { Component } from "@angular/core";

@Component({
    selector: "event-binding",
    templateUrl: "event-binding.component.html"
})
export class EventBindingComponent {
    onSave() {
        alert("saved.");
    }

    testEvent(event) {
        console.dir(event)
    }
}