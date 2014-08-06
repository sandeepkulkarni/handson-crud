/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.handsoncrud.utils;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 *
 * @author sandeepk
 */
public class AppUtils {
 
    public static String getStringDate(Date date){        
        DateFormat df = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");        
        return df.format(date);
    }
}
