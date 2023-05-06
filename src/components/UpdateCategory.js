import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

function UpdateCategory() {
    const [name, setName] = useState('');
   
    const params = useParams();
    const navigate = useNavigate();
    // const[error,setError]=useState(false)


    useEffect(() => {
        getOneCategories();
    }, [])
    const getOneCategories = async () => {
        console.warn(params)
        let result = await fetch(`http://localhost:3001/categories/getOne/${params.id}`);
        result = await result.json();
        setName(result.name);
        
    }

    const updateCategories = async () => {
        console.warn(name)
        let result = await fetch(`http://localhost:3001/categories/update/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify({ name }),
            headers: {
                'Content-Type': 'Application/json',
                'Authorization': localStorage.getItem('token')
            },
        });
        result = await result.json();
      if(result){
         navigate('/')
        
      }
           
    }
    return (
        <div className='product'>
            <h1>Update Categories</h1>
            <input type='text' placeholder='Enter product name' className='inputBox'
                value={name} onChange={(e) => setName(e.target.value)}
            />

           
            <button onClick={updateCategories} className='appButton'>Add Category</button>

        </div>
    )
    
}

export default UpdateCategory;
