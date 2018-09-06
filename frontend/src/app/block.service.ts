import { Injectable } from '@angular/core';
import { Block } from './block';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlockService {

  // URL to web api
  private blocksUrl = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getBlocks(): Observable<Block[]> {
    return this.http.get<Block[]>(this.blocksUrl);
  }
}
