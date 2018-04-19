import {getDateString} from './dateUtil';
import {Response} from '@angular/http';



  export function mapRecords(res: Response) {
    const records = extractData(res);
    const ret = [];
    records.forEach((record) => {
      const tempRecord = {
        id: record._id,
        businessUnityName: record.businessUnity.businessUnityName,
        boxDraw: record.boxDraw,
        dateCreatedFrom: getDateString(record.dateCreatedFrom),
        dateCreatedTo: getDateString(record.dateCreatedTo),
        dateArchived: getDateString(record.dateArchived),
        volume: record.volume,
        documentType:  record.documentType,
        retentionPeriod: record.retentionPeriod
      };
      ret.push(tempRecord);
    });
    return ret;
  }

function extractData(res: Response) {
  const body = res.json();
  console.log(body);
  if (body) {
    return body;
  } else {
    return [];
  }
}

