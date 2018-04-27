import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'rra-records-form',
  templateUrl: './records-form.component.html',
  styleUrls: ['./records-form.component.css']
})
export class RecordsFormComponent implements OnInit {
  form;

  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      businessUnity: new FormControl(),
      documentType: new FormControl(''),
      volume: new FormControl(''),
      description: new FormControl(''),
      dateCreatedFrom: new FormControl(''),
      dateCreatedTo: new FormControl(''),
      building: new FormControl(),
      floor: new FormControl(),
      room: new FormControl(),
      boxDraw: new FormControl(''),
      createdBy: new FormControl('Joe Doe'),
      dateArchived: new FormControl(new Date().toLocaleString())
      });
  }

  onSubmit(item) {
    console.log(item);
  }
}
