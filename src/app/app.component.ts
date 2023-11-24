import { Component } from '@angular/core';
import { TodoItem } from './todoItem';
import { TodoList } from './todoList';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    private list = new TodoList('Chad', [
        new TodoItem('Buy Flowers'),
        new TodoItem('Get Shoes'),
        new TodoItem('Collect Tickets'),
        new TodoItem('Call Joe', true),
    ]);

    get username(): string {
        return this.list.user;
    }

    get itemCount(): number {
        return this.list.items
            .filter(item => !item.complete).length;
    }

    get items(): readonly TodoItem[] {
        return this.list.items.filter(item => !item.complete);
    }

}
