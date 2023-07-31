const employee = {
    name: "Bob",
    streetAddress: "22 Main St"
}


function updateEmployeeWithKeyAndValue(obj,key,value) {
   return {
    ...obj, 
    [key]: value,
   };
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value) {
    obj[key]= value
    return obj
 }

 function deleteFromEmployeeByKey(obj, key) {
   const newObj = {...obj}
   delete newObj[key]
   return newObj
 }

 function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee 
 }