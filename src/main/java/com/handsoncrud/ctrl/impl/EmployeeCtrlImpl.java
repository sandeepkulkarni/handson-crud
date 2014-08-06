/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.handsoncrud.ctrl.impl;

import com.handsoncrud.ctrl.EmployeeCtrl;
import com.handsoncrud.dao.EmployeeDao;
import com.handsoncrud.dao.impl.EmployeeDaoImpl;
import com.handsoncrud.entity.Employees;
import java.util.List;

/**
 *
 * @author sandeepk
 */
public class EmployeeCtrlImpl implements EmployeeCtrl {
    
    EmployeeDao employeeDao = new EmployeeDaoImpl();
    
    @Override
    public void saveEmployee(Employees employee) {
        employeeDao.saveEmployee(employee);
    }

    @Override
    public Employees getEmployee(Integer empId) {
        return employeeDao.getEmployee(empId);
    }

    @Override
    public List<Employees> getEmployees() {
        return employeeDao.getEmployees();
    }
    
}
