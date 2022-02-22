import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent {
    @Input() list!: string[] | null;
    @Output() removeEvent = new EventEmitter();

    constructor() {
    }

    remove(index: number) {
        this.removeEvent.emit(index);
    }
}
