// Write your solution in this file!


const driver = {}

function updateDriverWithKeyAndValue(driverObj, key, value){
    return Object.assign({}, driverObj, { [key]: value });
};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    let mutatedObj = Object.assign(driver, { [key]: value});
    return mutatedObj
};

function deleteFromDriverByKey(driver, key){
    let newDriver = Object.assign({}, driver)
    delete newDriver[key]
    return newDriver

};

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver 

};