import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {DataService} from '../../data.service';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'rra-records-form',
  templateUrl: './records-form.component.html',
  styleUrls: ['./records-form.component.css']
})
export class RecordsFormComponent implements OnInit {
  form;
  locations: Array<any>;
  buildings: Array<any>;
  floors: Array<any>;
  rooms: Array<any>;

  constructor(private _dataService: DataService
              //    private formBuilder: FormBuilder
  ) {
    this.buildings = [];
    this.floors = [];
    this.rooms = [];
    this._dataService.getLocations()
      .subscribe(res => this.onRecordsLoaded(res));
  }

  ngOnInit() {

    // TODO
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
    this._dataService.addRecord(item).subscribe();
  }

  onRecordsLoaded(response) {
    this.locations = response;
    this.locations.forEach(building => {
      const tempBuilding = {
          name: building.name,
          uuid: building.uuid
        }
      ;
      this.buildings.push(tempBuilding);
    });
  }

  onBuildingChanged(selectedBuilding) {
    // TODO active Flag
    if (selectedBuilding) {
      this.floors = [];
      this.rooms = [];
      this.form.controls['floor'].setValue((undefined));
      this.form.controls['room'].setValue((undefined));
      const floors = this.locations.find(building => {
        return building.uuid === selectedBuilding.uuid;
      }).floors;
      floors.forEach(floor => {
        const tempFloor = {
          name: floor.name,
          uuid: floor.uuid
        };
        this.floors.push(tempFloor);
      });
    }
  }

  onFloorChanged(selectedFloor) {
    if (selectedFloor) {
      this.form.controls['room'].setValue((undefined));
      this.rooms = [];
      const selectedBuilding = this.form.controls['building'].value;
      const floors = this.locations.find(building => {
        return building.uuid = selectedBuilding.uuid;
      }).floors;
      const rooms = floors.find(floor => {
          return floor.uuid = selectedFloor.uuid;
        }
      ).rooms;
      this.rooms = rooms;
      console.log(rooms);
    }
  }

}
