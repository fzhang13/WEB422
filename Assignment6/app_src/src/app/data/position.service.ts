import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

import { Position } from './position';

@Injectable()
export class PositionService {

  private url = "https://immense-dusk-84099.herokuapp.com"

  constructor(private http: HttpClient) { }

  getPositions(): Observable<Position[]>{
    return this.http.get<Position[]>(`${this.url}/positions`);
  }

  savePosition(position:Position): Observable<any>{
    return this.http.put<any>(`${this.url}/position/${position._id}`, position);
  }

  getPosition(id): Observable<Position[]>{
    return this.http.get<Position[]>(`${this.url}/position/${id}`);
  }
}
