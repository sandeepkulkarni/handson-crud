/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.handsoncrud.ctrl;

import com.handsoncrud.entity.Employees;
import java.util.List;

/**
 *
 * @author sandeepk
 */
public interface EmployeeCtrl {
    
    public void saveEmployee(Employees employee);
    
    public Employees getEmployee(Integer empId);
    
    public List<Employees> getEmployees();    
    
}
