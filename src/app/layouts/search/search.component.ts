import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
@Component({
  selector: 'app-search',
  template: `
    <input type="text" [formControl]="searchControl" placeholder="Search">
    <ul>
      <li *ngFor="let item of filteredItems$ | async">{{ item }}</li>
    </ul>
  `
})
export class SearchComponent {
  searchControl = new FormControl();
  items = ['Apple', 'Banana', 'Orange', 'Mango'];
  filteredItems$ = this.searchControl.valueChanges.pipe(
    startWith(''),
    map(value => this.filterItems(value))
  );

  filterItems(value: string): string[] {
    return this.items.filter(item => item.toLowerCase().includes(value.toLowerCase()));
  }
}
