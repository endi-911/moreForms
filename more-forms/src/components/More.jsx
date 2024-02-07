import React, { useState } from 'react';
    
const MoreForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confpsw, setConfpsw] = useState("");
    const [firstnameerror, setFirstnameerror] = useState("");
    const [lnerror, setLnerror] = useState("");
    const [emailerror, setEmailerror] = useState("");
    const [pswerror, setPswerror] = useState("");
    const [confpswerror, setConfpswerror] = useState("");
    
    const createUser = (e) => {

        e.preventDefault();
    

        const newUser = { firstnamename, lastname, email, password, confpsw };
    	setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setConfpsw("");
        
    };

    const hadleFirstname = (e) => {
        setFirstname(e.target.value)
        if(e.target.value.length < 3) {
            setFirstnameerror("Your frist name should be more than 2 characters")
        } else {
            setFirstnameerror("");
        }
    }

    const hadleLastname = (e) => {

        setLastname(e.target.value)
        if(e.target.value.length < 3){
            setLnerror("Last name must be more than 2 characters")
        } else {
            setLnerror("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
        if(e.target.value.length <= 5) {
            setEmailerror("Email must be more than 5 characters");
        } else {
            setEmailerror("");
        }
    }

    const handlePsw = (e) => {
        setPassword(e.target.value)
        if(e.target.value.length <= 8) {
            setPswerror("Password must be at least 8 characters");
        } else{
            setPswerror("");
        }
    }

    const handleConfpsw = (e) => {
        setConfpsw(e.target.value)
        if(e.target.value.length <= 8) {
            setConfpswerror("Password must be at least 8 characters")
        } else {
            setConfpswerror("")
        }
    }


    
    return(
        <div>
        <form onSubmit={ createUser }>
            <div>
                <label>First name</label> 
                <input type="text" value={firstname} onChange={hadleFirstname } />
                
                {
                    firstnameerror ?
                    <p>
                        {firstnameerror}
                    </p>
                    :
                    ""
                }
            </div>
            <div>
                <label>Last Name</label> 
                <input type="text" value={lastname} onChange={hadleLastname} />
                {
                    lnerror ?
                    <p>
                        {lnerror}
                    </p>
                    :
                    ""
                }
            </div>
            <div>
                <label>Email</label>
                <input type="text" value={email} onChange={handleEmail} />
                {
                    emailerror ?
                    <p>
                        {emailerror}
                    </p>
                    :
                    ""
                }
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={password} onChange={handlePsw} />
                {
                    pswerror ?
                    <p>
                        {pswerror}
                    </p>
                    :
                    ""
                }
            </div>
            <div>
                <label>Confirm Password</label>
                <input type="password" value={confpsw} onChange={handleConfpsw} />
                {
                    confpswerror ?
                    <p>
                        {confpswerror}
                    </p>
                    :
                    ""
                }
            </div>
        </form>
    
    </div>

    );
};
    
export default MoreForm;