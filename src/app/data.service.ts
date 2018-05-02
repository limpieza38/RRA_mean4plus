import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {mapRecords} from './utils/dtoUtil';

@Injectable()
export class DataService {
  headers = new Headers();

  options: any;
  result: any;

  constructor(private _http: Http) {
    // TODO
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.options = new RequestOptions({ headers: this.headers });
  }

  getRecords() {
    const ret =  this._http.get('http://localhost:3000/api/records', this.options)
      .map(mapRecords);
    return ret;
  }

  addRecord(record){
    const ret = this._http.post('http://localhost:3000/api/records', record, this.options).map(response => {});
    console.log(ret);
    return ret;
  }
}
