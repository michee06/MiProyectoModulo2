import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../lista/list.model';

@Component({
  selector: 'ns-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  item: Item;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    // En un proyecto real, aquí buscarías el item en un servicio
    this.item = { id, title: `Item ${id}`, description: `Descripción ${id}` };
  }
}