/* Your Code Here */
  const createEmployeeRecord = function (recordArray) {
    let testEmployee = {
     firstName: recordArray[0],
     familyName: recordArray[1],
     title: recordArray[2],
     payPerHour: recordArray[3],
     timeInEvents: [],
     timeOutEvents: [],
   };
   return testEmployee;
 };


 const createEmployeeRecords = function (employeeRecordsArray){
 return employeeRecordsArray.map(element=> {
   return  createEmployeeRecord(element);
 })
 }

 const createTimeInEvent = function(date){
   let Date = date.split(" ");
   let commingIn = {
     type: "TimeIn",
     hour: parseInt(Date[1]),
     date: Date[0],
   };
 this.timeInEvents = [...this.timeInEvents, commingIn];
 return this;
 }


 const createTimeOutEvent = function(date){
   let Date = date.split(" ");
   let goingOut = {
     type: "TimeOut",
     hour: parseInt(Date[1]),
     date: Date[0],
   };

   this.timeOutEvents = [...this.timeOutEvents, goingOut];
   return this;
 }


 const hoursWorkedOnDate = function(date){
 for (let i = 0; i < this.timeInEvents.length; i++) {
   if (date === this.timeInEvents[i].date) {
     let arrivingTime= this.timeInEvents[i].hour;
     let departureTime = this.timeOutEvents[i].hour;
     let timeTaken = departureTime - arrivingTime;
     return timeTaken / 100;
   }
 }
 }


 const wagesEarnedOnDate = function(date){
   let timeTaken = hoursWorkedOnDate.call(this, date);
   return timeTaken * this.payPerHour;
 }


 const findEmployeeByFirstName = function(srcArray,firstName){
 let chosenArray= srcArray.find((element)=>{
 return element.firstName === firstName;
 })
 return chosenArray;
}

const calculatePayroll = function(records){
    let employeeSum = records.map((employee) => {
      return allWagesFor.call(employee)
  });

  let payroll = employeeSum.reduce((total, currentValue) => {
    return total + currentValue;
  }, 0);
  return payroll;
  }



/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

