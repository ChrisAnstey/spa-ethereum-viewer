import { Component, OnInit } from '@angular/core';
import { Block } from '../block';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css']
})
export class BlocksComponent implements OnInit {

  block: Block = {
    id: 123,
    name: "Latest Block",
  };

  constructor() { }

  ngOnInit() {
  }

}
