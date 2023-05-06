import React, {useState} from 'react'


function AddCategory() {
    const[name, setName] = useState(''); 
   

    const[error,setError]=useState(false)
   
    const addCategory =async() =>{
        if (!name  ){
           setError(true);
            return false    
        }

      console.warn(  name);
    
      let result =await fetch('http://localhost:3001/categories/add',{
        method:'POST',
        body: JSON.stringify({  name }),
        headers: {
            'Content-Type': 'application/json', 
            'Authorization': localStorage.getItem('token')
        },
    });
    result = await  result.json();
    console.warn(result);
    }
    return (
        <div className='product'>
            <h1>AddProduct</h1>
            <input type='text' placeholder='Enter product name' className='inputBox'
           value={name} onChange={(e)=>setName(e.target.value)} 
            /> 
             {error && !name && <span className='invalid-input'> Enter valid name</span>}
            
            <button onClick={addCategory} className='appButton'>Add Product</button>       
    
        </div>
    )
}

export default AddCategory