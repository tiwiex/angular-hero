import { Component } from "@angular/core";
import { SELECT_VALUE_ACCESSOR } from "@angular/forms/src/directives/select_control_value_accessor";


@Component({

    selector: 'warning-message',
    //template: `
    //<p>Hello Warning<p>
    //`,
    templateUrl: './messages/success.component.html',

    styles: [
        `
    p { 
        color: red; 
        font-size: 40px;
        background-color: mistyrose;
        border: 3px solid black;
        padding: 20px;
    }
`]
    
})

export class WarningComponent {


}