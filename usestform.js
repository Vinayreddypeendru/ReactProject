import React, {useState}  from "react";

const Vorm = () => {

   
      const[firstName , setfirstName] = useState("");
     const[email , setemail] = useState("");
     const[password , setpassword] = useState("");
     const handleSubmit = (e) => {
        e.preventDefault();
        let userObj = {
          firstName: firstName,
          email: email,
          password: password,
        };
        console.log(userObj);
      };

    return( <div>
        <form onSubmit={handleSubmit}>
            <center> <div>
                 <lable><b>firstName</b></lable>
            <input 
               type="text"
                name="name"
              id="firstName"
               placeholder="firstName"
               value={firstName}
               onChange={(e)=>setfirstName(e.target.value)}
            />
            </div></center>
           <center> <div><div>
               <label><b>email</b></label>
               <input 
                type="email"
                name="email"
               id="email"
               placeholder="enteremail"
               onChange={(e)=>setemail(e.target.value)}/>
                
           </div></div></center>
           <center><div>
                <label><b>password</b></label>
                 <input 
                 type="password"
               name="password"
                id="password"
               placeholder="enterpassword"
               onChange={(e)=>setpassword(e.target.value)}/>
           </div></center>
          <center> <div className="form-button">
          <button type="submit">submit</button>
        </div></center>
         </form>
    </div>
     );
    
};
       
    

export default Vorm;