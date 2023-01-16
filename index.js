// Write your solution in this file!
const employee = {}

employee["name"] = "Sam";

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let copyEmp = { ...employee };
    copyEmp[key] = value;
    return copyEmp;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    let copyEmp = { ...employee };
    delete copyEmp[key];
    return copyEmp;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

