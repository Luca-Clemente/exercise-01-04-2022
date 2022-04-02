import { Injectable } from '@angular/core';
interface Subject {
  title: string;
}

@Injectable()
export class SubjectsService {
  list: Array<Subject> = [];


  constructor() { }

 
  }


}