import { Component, OnInit } from '@angular/core';
import { Block } from '../block';
import { BlockService } from '../block.service';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css']
})
export class BlocksComponent implements OnInit {

  blocks: Block [];
  selectedBlock: Block;

  constructor(private blockService: BlockService) { }

  ngOnInit() {
    this.getBlocks();
  }

  getBlocks(): void {
    this.blockService.getBlocks().subscribe(blocks => this.blocks = blocks);
  }

  onSelect(block: Block): void {
    this.blockService.getBlock(block.id).subscribe(selectedBlock => this.selectedBlock = selectedBlock);
  }
}
