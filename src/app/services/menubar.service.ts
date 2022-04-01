import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenubarService {
  constructor() {}

  public toggleMenuBar: BehaviorSubject<any> = new BehaviorSubject<any>(null);
}
