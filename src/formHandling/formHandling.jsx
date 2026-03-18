import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

function Form(){
   
    var stud=useFormik({
        initialValues:{
            fn:"",
            ln:"",
            age:"",
            gender:""
        },
        validationSchema:Yup.object({
            fn:Yup.string().required("broo chudu"),
            ln:Yup.string(),
            age:Yup.number().required("Age is manidatory").test({
                
            }) ,
            gender:Yup
            
        }
            
        ),
        onSubmit:()=>{           
           alert("Submitted successfully")
        }
    })
    
 return <div>
    <form onSubmit={stud.handleSubmit} >
        <p>{JSON.stringify(stud)}</p>
        <input type="text" {...stud.getFieldProps("fn")} />     
        <b>{ stud.errors.fn?stud.errors.fn:"" } </b><br/>
    <input type="text" {...stud.getFieldProps("ln")} /><br/>
        <input type="text" {...stud.getFieldProps("age")} />
        <b> {stud.errors.age? stud.errors.age:""} </b>
        <br/>
        <input type="radio"  value="male" {...stud.getFieldProps("male")} />Male 
        <input type="radio"  value="female" {...stud.getFieldProps("female")} />Female<br/>
        
        <button>submit</button>
    </form>
 </div>
}
export default Form