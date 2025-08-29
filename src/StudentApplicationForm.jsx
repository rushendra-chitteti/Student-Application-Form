import React, { useState } from "react";
import Data from "./StudentsDataForm";

function StudentDetails ()
{
    let [studentData , setStudentData] = useState(
    {
        Studentname    :" ",
        Fathername     :" ",
        Mothername     :" ",
        Adhaarnumber   :" ",
        Mobilenumber   :" ",
        Bankname       :" ",
        Accountnumber  :" ",
        IFSCcode       :" ",
        Collegename    :" ",
        Collegecode    :" ",
        Department     :" ",
        Studentsign    :" ",
        Principalsign  :" ",
        Studentphoto   :" ",
        Adddata        :" "
    })

    let [studentsData , setStudentsData ] = useState([]);

    const  addData = (e)=>{
        e.preventDefault();
        // studentsData.push(studentData)
        setStudentsData([...studentsData, studentData])
        console.log(studentsData)
        // console.log(studentData)
        // console.log(`overriden with ${Object.keys(studentData)}`)
    }

    const  studentName = (event)=>{
        setStudentData({...studentData , Studentname: event.target.value})
    }
    const  fatherName = (event)=>{
        setStudentData({...studentData , Fathername: event.target.value})

    }
    const  motherName = (event)=>{
        setStudentData({...studentData ,Mothername: event.target.value})

    }
    const  adhaarNumber = (event)=>{
        setStudentData({...studentData ,Adhaarnumber: event.target.value})

    }
    const  mobileNumber = (event)=>{
        setStudentData({...studentData ,Mobilenumber: event.target.value})

    }
    const  bankName = (event)=>{
        setStudentData({...studentData ,Bankname: event.target.value})
    }
    const  accountNumber = (event)=>{
        setStudentData({...studentData ,Accountnumber: event.target.value})
    }
    const  ifscCode = (event)=>{
        setStudentData({...studentData ,IFSCcode: event.target.value})
    }
    const  collegeName = (event)=>{
        setStudentData({...studentData ,Collegename: event.target.value})
    }
    const  collegeCode = (event)=>{
        setStudentData({...studentData ,Collegecode: event.target.value})
    }
    const  department = (event)=>{
        setStudentData({...studentData ,Department: event.target.value})
    }
    const  studentSign = (event)=>{
        setStudentData({...studentData ,Studentsign: event.target.value})
    }
    const  principalSign = (event)=>{
        setStudentData({...studentData ,Principalsign: event.target.value})
    }
    const  studentPhoto = (event)=>{
        setStudentData({...studentData ,Studentphoto: event.target.value})
    }
    
    return(
        <>
            <form id="application">
                <table id="apply">
                    <thead>
                        <tr>
                            <th colSpan={2} id="form" >
                                Scholarship Application Form
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <label>Student Name</label>
                            </td>
                            <td>
                                <input 
                                type="text"
                                onChange={studentName}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Father Name</label>
                            </td>
                            <td>
                                <input 
                                type="text"
                                onChange={fatherName}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Mother Name</label>
                            </td>
                            <td>
                                <input 
                                type="text"
                                onChange={motherName}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Adhaar Number</label>
                            </td>
                            <td>
                                <input 
                                type="tel"
                                placeholder="XXXX XXXX XXXX"
                                onChange={adhaarNumber}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Mobile Number</label>
                            </td>
                            <td>
                                <input 
                                type="tel"
                                onChange={mobileNumber}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Bank Name</label>
                            </td>
                            <td>
                                <input type="text"
                                placeholder="Mother"
                                onChange={bankName}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Account Number</label>
                            </td>
                            <td>
                                <input type="tel"
                                placeholder="Mother "
                                onChange={accountNumber}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>IFSC Code</label>
                            </td>
                            <td>
                                <input type="tel"
                                placeholder="Mother "
                                onChange={ifscCode}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>College Name</label>
                            </td>
                            <td>
                                <input 
                                type="text"
                                onChange={collegeName}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>College Code</label>
                            </td>
                            <td>
                                <input 
                                type="text"
                                onChange={collegeCode}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Department</label>
                            </td>
                            <td>
                                <select
                                onChange={department}
                                >
                                    <option>none</option>
                                    <option>CSE</option>
                                    <option>ECE</option>
                                    <option>EEE</option>
                                    <option>MECH</option>
                                    <option>CIVIL</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Student Signature</label>
                            </td>
                            <td>
                                <input 
                                id="sign"
                                type="file"
                                onChange={studentSign}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Principal Signature</label>
                            </td>
                            <td>
                                <input 
                                id="sign"
                                type="file"
                                onChange={principalSign}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Student Photo</label>
                            </td>
                            <td>
                                <input 
                                id="sign"
                                type="file"
                                onChange={studentPhoto}
                                />
                            </td>
                        </tr>
                        <tr style={{textAlign:'center'}}>
                            <td colSpan={2}>
                                <button
                                onClick={addData}
                                >Add Data</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <Data studentsData={studentsData} setStudentsData={setStudentsData} />

        </>
    )
}

export default StudentDetails