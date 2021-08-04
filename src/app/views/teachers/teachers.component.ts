import { faArrowRight, faCalendar, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {
  textSearch:string = "";
  faPlus = faPlus;
  faArrowRight = faArrowRight;
  faCalendar = faCalendar;
  constructor() { }

  ngOnInit(): void {
  }

}
