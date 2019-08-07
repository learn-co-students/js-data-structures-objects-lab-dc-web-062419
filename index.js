// Write your solution in this file!


let driver = {};


function updateDriverWithKeyAndValue(driver, key, value){

    return Object.assign({}, driver, { [key]: value })

}


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {


    return Object.assign(driver, { [key]: value })


}



function deleteFromDriverByKey(driver, key){

    let driverClone = Object.assign({}, driver)
    delete driverClone[key]
    return driverClone
}


function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]
    return driver
}