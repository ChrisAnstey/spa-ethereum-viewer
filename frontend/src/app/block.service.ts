import { Injectable } from '@angular/core';
import { Block } from './block';

@Injectable({
  providedIn: 'root'
})
export class BlockService {

  constructor() { }

  getBlocks(): Block[] {
    // create a mock array of block data
    var blocks: Block[] = [{id: 123, name: "Latest Block"},{id: 122, name: "Previous Block"}];
    return blocks;
  }
}
