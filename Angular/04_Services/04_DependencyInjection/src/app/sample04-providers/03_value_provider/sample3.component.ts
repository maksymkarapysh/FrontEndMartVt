import { Component } from "@angular/core";

import { Logger } from "./../logger.service";

let simpleLogger = {
    log: (m) => {
        console.log("simple logger - " + m);
    }
}

@Component({
    selector: "my-sample3",
    templateUrl: "sample3.component.html",
    providers: [{provide: Logger, useValue: simpleLogger}]
})
export class Sample3Component {
    private message: string;

    constructor(private logger: Logger) { }

    logMessage() {
        this.logger.log(this.message);
    }
}