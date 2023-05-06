import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Category() {
    const [data, setCategories] = useState([]);
    const [refresh, setRefresh] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        getCategories();
    }, [refresh]);

    const getCategories = async () => {
        let result = await fetch('http://localhost:3001/categories');
        result = await result.json();
        setCategories(result);
    }
  
    const deleteCategories = async (id)=>{
        console.warn(id);
        let result = await fetch(`http://localhost:3001/categories/delete/${id}`,{
            method: 'DELETE',
            body: JSON.stringify({  }),
            headers: {
                'Content-Type': 'Application/json',
                'Authorization': localStorage.getItem('token')
            }
        });
        result = await result.json();
        if(result){
           navigate('/category')
          
        }
       setRefresh(!refresh)
    }
     

    return (
        <div className='product-list'>
            <h1>Category List</h1>
            <ul>
                <li>S. No</li>
                <li>Name</li>
                <li>DEL. UP.</li>


            </ul>
            {
                data.map((item,index)=>
                <ul key={item.id}>
                <li>{index+1}</li>
                <li>{item.name}</li>
                
                <li>
                    <button onClick={()=>deleteCategories(item.id)}>Delete</button>
                    <Link to={'/updateCategory/'+item.id}>Update</Link>
                    </li>

            </ul>
                )
            }
            
        </div>
    )
}

export default Category