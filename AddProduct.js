import React, {useState} from 'react'


function AddProduct() {
    const[name, setName] = useState(''); 
    const[img, setImg] = useState('');
    const[price, setPrice] = useState('');
    const[quantity, setQuantity] = useState('');
    const[error,setError]=useState(false)
   
    const addProduct =async() =>{
        if (!name || !img || !price || !quantity){
           setError(true);
            return false    
        }

      console.warn(  name, img, price, quantity);
     const CategorySchemaId  = (localStorage.getItem('token'))._id;
      console.warn(CategorySchemaId );
      let result =await fetch('http://localhost:3001/products/add',{
        method:'POST',
        body: JSON.stringify({  name, img, price, quantity, CategorySchemaId }),
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
            <input type='text' placeholder='Enter product img' className='inputBox'
            value={img} onChange={(e)=>setImg(e.target.value)}
            />
             {error && !img && <span className='invalid-input'> Enter valid img</span>}
            <input type='text' placeholder='Enter product price' className='inputBox'
            value={price} onChange={(e)=>setPrice(e.target.value)}
            />
             {error && !price && <span className='invalid-input'> Enter valid price</span>}
            <input type='text' placeholder='Enter product quantity' className='inputBox'
            value={quantity} onChange={(e)=>setQuantity(e.target.value)}
            />
             {error && !quantity && <span className='invalid-input'> Enter valid quantity</span>}
            {/* <input type='text' placeholder='Enter product category' className='inputBox'
            value={category} onChange={(e)=>setCategory(e.target.value)}
            /> */}
            <button onClick={addProduct} className='appButton'>Add Product</button>       
    
        </div>
    )
}

export default AddProduct