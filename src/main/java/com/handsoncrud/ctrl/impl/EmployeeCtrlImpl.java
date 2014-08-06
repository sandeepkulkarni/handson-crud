/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.handsoncrud.ctrl.impl;

import com.handsoncrud.ctrl.EmployeeCtrl;
import com.handsoncrud.dao.EmployeeDao;
import com.handsoncrud.dao.impl.EmployeeDaoImpl;
import com.handsoncrud.dto.EmployeeDTO;
import com.handsoncrud.entity.Employees;
import java.util.List;

/**
 *
 * @author sandeepk
 */
public class EmployeeCtrlImpl implements EmployeeCtrl {
    
    EmployeeDao employeeDao = new EmployeeDaoImpl();
    
    @Override
    public void saveEmployee(EmployeeDTO employeeDTO) {
        Employees employee = mapEmployeeDtoToEntity(employeeDTO);
        employeeDao.saveEmployee(employee);
    }

    @Override
    public EmployeeDTO getEmployee(Integer empId) {
        return null;//employeeDao.getEmployee(empId);
    }

    @Override
    public List<EmployeeDTO> getEmployees() {
        return null;//employeeDao.getEmployees();
    }
    
    /**
     * Private methods specific to Employee Controller
     */
    private Employees mapEmployeeDtoToEntity(EmployeeDTO employeeDTO){
        Employees employee = new Employees();
        
//        employee.set
        return null;
    }
    
}
