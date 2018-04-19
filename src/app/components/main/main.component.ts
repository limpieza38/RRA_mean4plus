import {Component} from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'rra-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private _dataService: DataService) {
  }
}
