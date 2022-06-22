// Write your solution in this file!
const employee ={
    name:"Kelvin",
    streetAddress:"11 Broadway",
};
function updateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign({},employee,{[key]:value});
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key]=value;
    return employee;
}
function DeleteFromEmployeeByKey(employee,key){
    const newObj = object.assign({},employee);
    delete newObj[key];
    return newObj;
}
// function destructivelyDeleteFromEmployeeByKey(employee,key){
//     delete employee[key];
//     return employee;
// }
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    let newEmployee = employee;
    delete newEmployee.name;
    delete newEmployee.streetAddress;

    return employee
    
}
destructivelyDeleteFromEmployeeByKey(employee, 'name')