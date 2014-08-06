/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.handsoncrud.ctrl;

import com.handsoncrud.dto.EmployeeDTO;
import java.util.List;

/**
 *
 * @author sandeepk
 */
public interface EmployeeCtrl {
    
    public void saveEmployee(EmployeeDTO employee);
    
    public EmployeeDTO getEmployee(Integer empId);
    
    public List<EmployeeDTO> getEmployees();    
    
}
