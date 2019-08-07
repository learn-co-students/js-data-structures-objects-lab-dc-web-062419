// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
   // return a new driver that has an updated value for the key passed in.
    return Object.assign({}, driver, { [key]: value} )
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    // same as above, but mutate original
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key) {
   // It should delete the key/value pair for the key that was passed in from the driver Object. This should all not actually mutate the driver passed in.
    // Think about how we learned to use Object.assign(). What happens if we do this:
    const newDriver = Object.assign({}, driver);
    delete newDriver[key];
    return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    //destructivelyDeleteFromDriverByKey() - this function should work the same as deleteFromDriverByKey() but it should mutate the driver passed in. Be sure and consider whether dot-notation or bracket-notation might affect your solution.
    delete driver[key];
    return driver;
}