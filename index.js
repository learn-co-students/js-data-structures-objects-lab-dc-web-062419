const driver = {};

const updateDriverWithKeyAndValue = (driver, key, value) => ({
  ...driver,
  ...{ [key]: value },
});

const destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
  driver[key] = value;
  return driver;
};

const deleteFromDriverByKey = (driver, key, value) => {
  const newDriver = { ...driver };
  delete newDriver[key];
  return newDriver;
};

const destructivelyDeleteFromDriverByKey = (driver, key, value) => {
  delete driver[key];
  return driver;
};
