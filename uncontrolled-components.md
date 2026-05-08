# What is form handeling?

1. from handeling is used to handle form input data via stae and stored that data or save that data or print that data via from i.e called form handeling.

2. form handeling is used to take input from user and print dynamic that informations.

## types of form hamdling in react js

1. Controlled components
    1. Controlled Components handles data and stores data via useState() hooks.

    2. value binds input via state

    3. state is mutable

    4. onChange() updates the state

    5. Reactjs is used controlled componemts almost to form handeling

    ## example:

    ```
    import React, {useState} from 'react'

    //create a function
    function Myfunction()
    {
        //destructing of state
        const[data,setData]=useState({
            name:"",
            email:"",
        });

        //create a form handelChange

        const handelingChangeFrom=(e)=>{
            //prevents the form from refresh 
            e.preventDefault();
            const {name , values} =e.target;

            //update the input data

            setData({
                ...data,
                [name]:values
            })
        }

        //create a form handeling Data

        const addFormData=(e)=>{
            e.preventDefault();
            console.log(data)
        }

        return(
            <>
                <form onSubmit={addFormData}>
                    name : <input type="text" name="name" value={data.name} onChange={handelChangeForm}/>
                    <br/><br/>
                    email : <input type="text" name="email" value={data.email} onChange{handelChangeForm}/>
                </form>
            </>
        )
    }
    ```
2. uncontrolled components