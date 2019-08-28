import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(
    private http: HttpClient
  ) { }

  private playerUrl = '/player/';

  getPlayer(name: string): Observable<Player> {
    return this.http.get<Player>(this.playerUrl + name);
  }
}
