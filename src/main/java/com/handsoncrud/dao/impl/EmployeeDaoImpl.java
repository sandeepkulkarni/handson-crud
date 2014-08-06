/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.handsoncrud.dao.impl;

import com.handsoncrud.dao.EmployeeDao;
import com.handsoncrud.entity.Employees;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.Persistence;

/**
 *
 * @author sandeepk
 */
public class EmployeeDaoImpl implements EmployeeDao {

    @Override
    public void saveEmployee(Employees employee) {

        EntityManager entityManager = Persistence.createEntityManagerFactory("crudPU").createEntityManager();
        entityManager.getTransaction().begin();

        //Insert employee
        entityManager.persist(employee);

        entityManager.getTransaction().commit();
        entityManager.close();

    }

    @Override
    public Employees getEmployee(Integer empId) {
        return null;
    }

    @Override
    public List<Employees> getEmployees() {
        return null;
    }

}
