import React, { useState } from "react";


function Data ({studentsData , setStudentsData}){

    const removeData = (indexToRemove) => {
        const updatedData = studentsData.filter((_, index) => index !== indexToRemove);
        setStudentsData(updatedData);    
}

    return(
        <div id="data">
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Student Name</th>
                        <th>Father Name</th>
                        <th>Mother Name</th>
                        <th>Adhaar Number</th>
                        <th>Mobile Number</th>
                        <th>Bank Name</th>
                        <th>Account Number</th>
                        <th>IFSC Code</th>
                        <th>College Name</th>
                        <th>Cllege Code</th>
                        <th>Department</th>
                        <th>Student Signature</th>
                        <th>Principal Signature</th>
                        <th>Student Photo</th>
                        <th>Remove Data</th>
                    </tr>
                </thead>
                <tbody >
                    {studentsData.map((element,index)=>{
                        return  <tr 
                                    style={{width:'fit-content'}}
                                    key={index}>
                                    <td>{index+1}</td>
                                    <td>{element.Studentname}</td>
                                    <td>{element.Fathername}</td>
                                    <td>{element.Mothername}</td>
                                    <td>{element.Adhaarnumber}</td>
                                    <td>{element.Mobilenumber}</td>
                                    <td>{element.Bankname}</td>
                                    <td>{element.Accountnumber}</td>
                                    <td>{element.IFSCcode}</td>
                                    <td>{element.Collegename}</td>
                                    <td>{element.Collegecode}</td>
                                    <td>{element.Department}</td>
                                    <td>{element.Studentsign}</td>
                                    <td>{element.Principalsign}</td>
                                    <td>{element.Studentphoto}</td>
                                    <td style={{textAlign:'center'}}><button onClick={()=>{removeData(index)}}>Erase</button></td>
                                </tr>
                            })}
                </tbody>
            </table>
        </div>
    )
}

export default Data

