/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.handsoncrud.rest;

import com.handsoncrud.ctrl.EmployeeCtrl;
import com.handsoncrud.ctrl.impl.EmployeeCtrlImpl;
import com.handsoncrud.dto.EmployeeDTO;
import com.handsoncrud.utils.AppUtils;
import java.util.Date;
import javax.ws.rs.FormParam;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.POST;
/**
 * REST Web Service
 *
 * @author sandeepk
 */
@Path("/employee")
public class EmployeeResource {

//    @Context
//    private UriInfo context;

    /**
     * Creates a new instance of EmployeeResource
     */
    public EmployeeResource() {
    }

    /**
     * Retrieves representation of an instance of com.handsoncrud.rest.EmployeeResource
     * @return an instance of com.handsoncrud.dto.EmployeeDTO
     */
    //@GET
    @POST
    @Path("/getEmp")
    @Produces(MediaType.APPLICATION_JSON)
    public EmployeeDTO getEmployee(@FormParam("empID") Integer empID) {
        //TODO return proper representation object
        EmployeeDTO emp = new EmployeeDTO();
        
        emp.setEmpId(1);
        emp.setFname(empID + " Sandeep");
        emp.setLname("Kulkarni");
        emp.setEmail("sandeep.kul88@gmail.com");
        emp.setGender("M");
        emp.setBirthDt(AppUtils.getStringDate(new Date()));
        emp.setJoinDt(AppUtils.getStringDate(new Date()));
        
        //EmployeeCtrl empCtrl = new EmployeeCtrlImpl();
        //empCtrl.saveEmployee(emp);
        
        return emp;
    }
    
    @POST
    @Path("/saveEmp")
    @Produces(MediaType.APPLICATION_JSON)
    public EmployeeDTO saveEmployee(@FormParam("empObj") String employeeDTO) {
        
        System.out.println("******* employeeDTO = "+employeeDTO);
        
        EmployeeDTO emp = new EmployeeDTO();
        
        emp.setEmpId(1);
        emp.setFname(" Sandeep");
        emp.setLname("Kulkarni");
        emp.setEmail("sandeep.kul88@gmail.com");
        emp.setGender("M");
        emp.setBirthDt(AppUtils.getStringDate(new Date()));
        emp.setJoinDt(AppUtils.getStringDate(new Date()));
        
        //EmployeeCtrl empCtrl = new EmployeeCtrlImpl();
        //empCtrl.saveEmployee(emp);
        
        return emp;
    }
}
