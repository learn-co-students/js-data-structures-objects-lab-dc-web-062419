// Write your solution in this file!

const driver = {}

function updateDriverWithKeyAndValue(object, key, value) {
  const newObj = {name: 'Sam'};
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value){
  object.address = '12 Broadway';
  return object;
}

function deleteFromDriverByKey(object, key, value){
  const newObj = Object.assign({}, object);
  delete newObj["name"];
  return newObj;
}

function destructivelyDeleteFromDriverByKey(object, key, value){
  delete object.name;
  return object
}