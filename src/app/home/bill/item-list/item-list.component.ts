import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  @Input() item:string;
  constructor() { }

  ngOnInit() {
  }

  Addtolist(item:string){
    this.item=item;
  }

}
