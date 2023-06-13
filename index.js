// Write your solution in this file!
let employee = {
  name: "Sam",
  streetAddress : "5",
}
function updateEmployeeWithKeyAndValue(emp, key, value) {
  const newEmp = {...emp};
  newEmp[key] = value;
  return newEmp;
}

function destructivelyUpdateEmployeeWithKeyAndValue(emp, key, value) {
  employee = emp;
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(emp, key) {
  const newEmp = {...emp}
  delete newEmp[key];
  return newEmp;
}

function destructivelyDeleteFromEmployeeByKey(emp, key) {
  delete emp[key];
  return emp;
}