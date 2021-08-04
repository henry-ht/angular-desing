import { Component, OnInit } from '@angular/core';
import { faPlus, faArrowRight, faSort, faTrash, faEdit, faCalendar, faBan, faUser, faSearch, faCashRegister, faSync } from '@fortawesome/free-solid-svg-icons';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {
  faPlus = faPlus;
  faArrowRight = faArrowRight;
  faCalendar = faCalendar;
  faSort = faSort;
  faTrash = faTrash;
  faEdit = faEdit;
  faBan = faBan;
  faUser = faUser;
  faSearch = faSearch;
  faSync = faSync;
  faCashRegister = faCashRegister;
  bounce: any;
  textSearch:string = "";
  closeResult = '';
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(content:any, by:string, size?:string) {
    let param:any = {ariaLabelledBy: by};
    if(size){
      param['size'] = size;
    }
    this.modalService.open(content, param).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
