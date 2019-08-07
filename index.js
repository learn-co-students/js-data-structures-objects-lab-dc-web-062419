let driver = {};

// This function should not mutate the driver and should return a new driver
// that has an updated value for the key passed in.
function updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({}, driver, {[key]: value });
};

// same as above but but it should mutate the driver parameter passed in.
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  return Object.assign(driver, {[key]: value });
};

// It should delete the key/value pair for the key that was passed in from the
// driver Object. This should all not actually mutate the driver passed in.
function deleteFromDriverByKey(driver, key){
  const newObject = Object.assign({}, driver);
  delete newObject[key];
  return newObject;
};

// same as above but but it should mutate the driver parameter passed in.
function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
};
