const employee = {
    id: 1234,
    name: 'John Doe',
    department: 'Sales',
    salary: 90000
  };
  

    const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'name', 'Jane Doe');
    
  
    expect(updatedEmployee).toEqual({
      id: 1234,
      name: 'Jane Doe',
      department: 'Sales',
      salary: 90000
    });


    function updateEmployeeWithKeyAndValue(employee, key, value) {
        const updatedEmployee = { ...employee };
        updatedEmployee[key] = value;
        return updatedEmployee;
      }
      function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
        employee[key] = value;
        return employee;
      }
      function deleteFromEmployeeByKey(employee, key) {
        const updatedEmployee = { ...employee };
        delete updatedEmployee[key];
        return updatedEmployee;
      }
      
      function destructivelyDeleteFromEmployeeByKey(employee, key) {
        delete employee[key];
        return employee;
      }
      