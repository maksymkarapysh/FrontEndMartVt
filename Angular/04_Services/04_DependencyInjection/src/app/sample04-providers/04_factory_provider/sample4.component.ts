import { Component } from "@angular/core";

import { Logger } from "./../logger.service";
import { Logger3 } from "./../logger3.service";

@Component({
    selector: "my-sample4",
    templateUrl: "sample4.component.html",
    providers: [{
        provide: Logger,
        useFactory: () => {
            return new Logger3("test");
        }
    }]
})
export class Sample4Component {
    private message: string;

    constructor(private logger: Logger) { }

    logMessage() {
        this.logger.log(this.message);
    }
}