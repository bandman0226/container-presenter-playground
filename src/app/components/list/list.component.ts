import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
    @Input() list!: string[] | null;
    @Output() addEvent: EventEmitter<string> = new EventEmitter();

    add(item: any) {
        this.addEvent.emit(item);
    }

}
