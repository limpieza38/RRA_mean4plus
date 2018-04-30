import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';


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
      businessUnity: new FormControl(Validators.required),
      documentType: new FormControl(''),
      volume: new FormControl(''),
      description: new FormControl('', Validators.required),
      dateCreatedFrom: new FormControl(Validators.required),
      dateCreatedTo: new FormControl(Validators.required),
      building: new FormControl(Validators.required),
      floor: new FormControl(Validators.required),
      room: new FormControl(Validators.required),
      boxDraw: new FormControl('', Validators.required),
      createdBy: new FormControl('Joe Doe'),
      dateArchived: new FormControl(new Date().toLocaleString())
      });
  }

  onSubmit(item) {
    console.log(item);
  }
}
