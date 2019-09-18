import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'fab-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    currentYear: string;
    constructor() { }
    ngOnInit() {
        const tempYear = new Date();
        this.currentYear = tempYear.getFullYear().toString();
    }
}