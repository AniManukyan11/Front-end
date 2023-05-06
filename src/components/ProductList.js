import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function ProductList() {
    const [data, setAllProducts] = useState([]);
    const [refresh, setRefresh] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        getAllProducts();
    }, [refresh]);

    const getAllProducts = async () => {
        let result = await fetch('http://localhost:3001/products/getAll');
        result = await result.json();
        setAllProducts(result);
    }
  
    const deleteProducts = async (id)=>{
        console.warn(id);
        let result = await fetch(`http://localhost:3001/products/delete/${id}`,{
            method: 'DELETE',
            body: JSON.stringify({  }),
            headers: {
                'Content-Type': 'Application/json',
                'Authorization': localStorage.getItem('token')
            }
        });
        result = await result.json();
        if(result){
           navigate('/')
          
        }
       setRefresh(!refresh)
    }
     

    return (
        <div className='product-list'>
            <h1>ProductList</h1>
            <ul>
                <li>S. No</li>
                <li>Name</li>
                <li>Img</li>
                <li>Price</li>
                <li>Quantity</li>
                <li>Category</li>
                <li>DEL. UP.</li>


            </ul>
            {
                data.map((item,index)=>
                <ul key={item.id}>
                <li>{index+1}</li>
                <li>{item.name }</li>
                <li>{<img className='img-li' alt="Eco cup..." src={item.img} />}</li>
                <li>{item.price}</li>
                <li>{item.quantity}</li>
                <li>{item.CategorySchemaId}</li>
                <li>
                    <button onClick={()=>deleteProducts(item.id)}>Delete</button>
                    <Link to={'/update/'+item.id}>Update</Link>
                    </li>

            </ul>
                )
            }
            
        </div>
    )
}

export default ProductList