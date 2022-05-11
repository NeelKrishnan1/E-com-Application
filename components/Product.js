import React, { useEffect, useState } from 'react';
const Product =()=>{
  
    const[resData,setData]=useState([]);
    const getDataFunction = async()=> {

   // let response = await fetch(apiurl);//fetch datas from resource
   // const jsonResponse= await response.json(); //json format
    //console.log("JSONResponse...",jsonResponse);
    const apiurl="https://fakestoreapi.com/products"; 
   await fetch(apiurl).then((res)=>res.json()).then((data)=>{
        console.log(data);
        setData(data?data:[]);
    });
    //setData(jsonResponse);
    //console.log(resData);
}
useEffect(()=>{
    //getDataFunction();
},[]);
 
const getdata=()=>{ // when call getdata in button is not working //
    

    return(
        resData.map((val,index)=>{
            return (
                <>
                 <h1>{val.id}</h1>  
                 <h1>{val.title}</h1>  
                 <h1>{val.price}</h1>  
                 <h1>{val.category}</h1>  
                 <h1><img src={val.image}/></h1>  
                    </>
                )
            })
    );
            
}

const ShowProducts=()=>{
    return(
        <div className='button d-flex justify-content-center mb-5 pb-5'>
            <button className='btn btn-outline-dark me-2' onClick={()=> getDataFunction()}>All</button>
            <button className='btn btn-outline-dark me-2' >Mens'Colthing</button>
            <button className='btn btn-outline-dark me-2'>Ladies'Colthing</button>
        </div>
    )
}
    return (
        <>
        <div className='container my-5 py-5'>
            <div className='row'>
                <div className='col-12 mb-5'>
                    <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                    <hr></hr>
                    <div className="row justify-content-center">
                        {<ShowProducts/>}
                        {getdata()}
                    </div>
                    <div>
                    </div>
                </div>
            </div>
            
        </div>
                </>
    );
}

export default Product;