// Write your solution in this file!
const employee=
{
name:'Paulina',
streetAddress:' Mirema1stAvenue',
};
function updateEmployeeWithKeyAndValue(employee,key,value)
{
    return Object.assign ({}, employee, { [key]: value })
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
  
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    // Alternate using ES6 Spread operators:
    // const newObj = { ...employee }
    const newObj = Object.assign({}, employee);
  
    delete newObj[key];
  
    return newObj;
  }
  
  function destructivelyDeleteFromEmployeeByKey(driver, key) {
    delete employee[key];
  
    return employee;
  }