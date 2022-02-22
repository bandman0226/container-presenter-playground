import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Angular Air-demo';
    list: string[] = [];
    list$ = this.dataService.list$ || [];
    cartItems$ = this.dataService.cartItems$ || [];

    constructor(private dataService: DataService) {
        this.dataService.getData();
    }

    add(item: string) {
        this.dataService.addToCart(item);
    }

    remove(index: number) {
        this.dataService.removeFromCart(index);
    }
}
