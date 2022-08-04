const employee = {
    name: "John",
    streetAddress: "27 Membely",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};

    newEmployee[key] = value;

    return newEmployee;
}

const newEmployee = updateEmployeeWithKeyAndValue(
    employee, 
    "Sam",
    "11 Broadway",
);

function destructivelyUpdateEmployeeWithKeyAndValue(newEmployee, key, value) {
    newEmployee[key] = value;

    return newEmployee;
}

const updatedNewEmployee = destructivelyUpdateEmployeeWithKeyAndValue(
    newEmployee,
    "Sam",
    "12 Broadway",
);

function deleteFromEmployeeByKey(employee, key){
    const deleteEmpleoyee = {...employee};
    delete deleteEmpleoyee[key];
    return deleteEmpleoyee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}