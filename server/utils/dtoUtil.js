function recordsDTO(data) {
  return {
    "businessUnity" : businessUnityNameDTO(data.businessUnity),
    "boxDraw" : data.boxDraw,
    "dateCreatedFrom": data.dateCreatedFrom,
    "dateCreatedTo": data.dateCreatedTo,
    "dateArchived": data.dateArchived,
    "contentDescription" : data.contentDescription,
    "volume": data.volume,
    "documentType": data.documentType,
    "retentionPeriod": data.retentionPeriod,
    "building": {
      "uuid" : data.building.uuid,
      "name" : data.building.name
    },
    "floor": {
      "uuid" : data.floor.uuid,
      "name" : data.floor.name
    },
    "room": {
      "uuid" : data.room.uuid,
      "name" : data.room.name
    },
    "createdBy": createdByDTO(data.createdBy)
  }
}

function businessUnityNameDTO(data) {
  return {
    "businessUnityId" : data.businessUnityId,
    "businessUnityName" : data.businessUnityName
  }
}

function locationDTO(data) {
  return {
    "roomId" : data.id,
    "roomName" : data.name,
    "floor" : data.floor,
    "building" : data.building
  }
}

function createdByDTO(data){
  return {
    "firstname" : data.firstname,
    "lastname" : data.lastname,
    "email" : data.email
  }
}

module.exports = { recordsDTO, businessUnityNameDTO, locationDTO, createdByDTO };
