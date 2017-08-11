import { Injectable, EventEmitter } from '@angular/core';
import { Subject} from "rxjs/Subject"

@Injectable()
export class SharedFilteringService {
  pattern;
  patternChanging: EventEmitter<boolean>= new EventEmitter();

  constructor() { }

  public _subject = new Subject<Object>();
  public event = this._subject.asObservable();

  public publish(data: any) {
   this._subject.next(data);
  }

  insertPattern(newPattern) {
    this.pattern=newPattern;
    this.patternChanging.emit(this.pattern);
  }
}
