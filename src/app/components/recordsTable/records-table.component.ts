import {Component} from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'rra-record-table',
  templateUrl: './recordTable.component.html',
  styleUrls: ['./recordTable.component.css']
})
export class RecordsTableComponent {
  records: Array<any>;

  constructor(private _dataService: DataService) {
    this._dataService.getRecords()
      .subscribe(res => this.records = res);
  }
}
