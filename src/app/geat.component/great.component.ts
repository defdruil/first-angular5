import { Component } from '@angular/core';

@Component({
    selector: 'app-great',
    templateUrl: './great.component.html',
    styleUrls: ['./great.component.css']
})
export class GreatComponent {
    title: string;

    /**
     * Cay Gaynial
     */
    constructor() {
        this.title = 'Bienvenue sur mon site Angular de test !';
    }
}

