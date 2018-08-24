import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
    selector: "my-list",
    templateUrl: "my-list.component.html"
})
export class MyListComponent {

    @ViewChild('myinput') textboxModel : ElementRef;

    list: string[] = [];

    add(item: string){
        console.log(this.textboxModel);
        this.textboxModel.nativeElement.value = '';

        this.list.push(item);
    }
}