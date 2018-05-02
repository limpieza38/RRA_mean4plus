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
      documentType: record.documentType,
      retentionPeriod: record.retentionPeriod
    };
    ret.push(tempRecord);
  });
  return ret;
}

export function mapLocations(res: Response) {
  const locations = extractData(res);
  const ret = [];

  locations.forEach((location) => {
    const tempFloors = [];
    location.floors.forEach((floor) => {
      const tempRooms = [];
      floor.rooms.forEach((room) => {
        const tempRoom = {
          uuid: room.uuid,
          name: room.name
        };
        tempRooms.push(tempRoom);
      });
      const tempFloor = {
        uuid: floor.uuid,
        name: floor.name,
        rooms: tempRooms
      };
      tempFloors.push(tempFloor);
    });
    const tempRecord = {
      uuid: location.uuid,
      name: location.name,
      isActive: location.isActive,
      floors: tempFloors
    };
    ret.push(tempRecord);
  });
  return ret;
}


function extractData(res: Response) {
  const body = res.json();
  if (body) {
    return body;
  } else {
    return [];
  }
}

