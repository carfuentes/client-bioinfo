import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SharedFilteringService {
  pattern;
  patternChanging: EventEmitter<boolean>= new EventEmitter();

  constructor() { }

  insertPattern(newPattern) {
    this.pattern=newPattern;
    this.patternChanging.emit(this.pattern);
  }
}
