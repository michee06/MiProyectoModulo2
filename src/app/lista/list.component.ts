import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { Item } from './list.model';
import { Color } from '@nativescript/core';

@Component({
  selector: 'ns-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items: Item[] = [];
  @ViewChild('actionBtn', { static: false }) actionBtn: ElementRef;

  constructor(private router: RouterExtensions) {}

  ngOnInit() {
    this.items = [
      { id: 1, title: 'Item 1', description: 'Descripción 1' },
      { id: 2, title: 'Item 2', description: 'Descripción 2' },
      { id: 3, title: 'Item 3', description: 'Descripción 3' },
    ];
  }

  goToDetail(item: Item) {
    this.router.navigate(['/detail', item.id]);
  }

  refreshList() {
    const id = this.items.length + 1;
    this.items.push({ id, title: `Item ${id}`, description: `Descripción ${id}` });
  }

  showAction(item: Item) {
    item.title = item.title + ' ✅';
    // Toast simple usando alert
    alert(`Se actualizó el item: ${item.title}`);
    // Animación de colo
    if (this.actionBtn) {
      const btn = this.actionBtn.nativeElement;
      btn.animate({ backgroundColor: new Color('yellow'), duration: 300 }).then(() => {
        btn.animate({ backgroundColor: new Color('#3b82f6'), duration: 300 });
      });
    }
  }
}