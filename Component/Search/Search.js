import React, {useState,useEffect} from "react";
import axios from "axios";
import './Search.css';

const SearchBar=()=>{
    const [search,setSearch]=useState(""); 
    const [data_print,setData]=useState("");
    const [business,setBusiness]=useState("");
    const [btnActive,setBtnActive]=useState("");
    
    var data_list="";
    const onSearch=(e)=>{
        // e.preventDefault();
        // if(search===null||search===''){

        // }
        // else{

        // }
        // setSearch('')
    }
    const onBusiness=(e)=>{
        const{value}=e.target;
        console.log(value);
        // setBusiness((prev)=>{
        //     return e.target.value;
        // });
        // console.log(business);
        if(btnActive==="")
        {
            setBtnActive(e.target.value);
        }
        else{
            setBtnActive("")
        }


        
    }
    const onChangeSearch=event=>{
        event.preventDefault();
        setSearch(event.target.value);
    }
    const onClick=async()=>{
        console.log(search)
        data_list=Content(search);
        setData(data_list);

        
        //search request
        //response 출력

    }

    
    return(
        <>
        <div className='component_checkbox'>

            <div className='button'>
                <button id={"btn"+(btnActive==="음식점" ?"_acitve" :"")} value="음식점" onClick={onBusiness}>음식점</button>
                <button id={"btn"+(btnActive==="슈퍼마켓" ?"_acitve" :"")} value="슈퍼마켓" onClick={onBusiness}>슈퍼마켓</button>
                <button id={"btn"+(btnActive==="학원" ?"_acitve" :"")} value="학원" onClick={onBusiness}>학원</button>
                <button id={"btn"+(btnActive==="카페" ?"_acitve" :"")} value="카페" onClick={onBusiness}>카페</button>
            </div>
            <div className='search'>
                <input id="inputbox"
                type="search"
                value={search}
                placeholder="   원하시는 평수를 입력하세요..."
                onChange={onChangeSearch}
                />
                <button id="search_button" onClick={onClick}>검색</button>
            </div>
            <div className="component_price">
                <hr></hr>
                <div className='price'>지역 별 순위....</div>
                <div id='data'>{data_print}</div>
            </div>
        </div>

        </>
    )
}
export default SearchBar;

const data=[//test값
    {
        area:25,
        value:[
            {id:1,local_name:"강남구 논현동",price:'500'},
            {id:2,local_name:"은평구 응암동",price:'300'},
            {id:3,local_name:"서대문구 홍제동",price:'200'}
        ]
       
    },
    {
        area:30,
        value:[
            {id:1,local_name:"안녕 논현동",price:'500'},
            {id:2,local_name:"은평구 응암동",price:'300'},
            {id:3,local_name:"서대문구 홍제동",price:'200'}
        ]
       
    },
    {
        area:15,
        value:[
            {id:1,local_name:"하하 논현동",price:'500'},
            {id:2,local_name:"은평구 응암동",price:'300'},
            {id:3,local_name:"서대문구 홍제동",price:'200'}
        ]
       
    }

]

function Content(search){
    var data_value="";
    for(var i in data){
        if(data[i]['area']==search)
        {
            data_value=data[i]['value'];
            break;
        }
    }
    if(data_value==="")

    {
        return("Not found data")
    }
    var data_list=data_value.map(local => 
        <Print key={local.id} local_name={local.local_name} price={local.price}></Print>);
    return(
       data_list

    )

}

function Print({local_name,price}){

   return(
    <>
    <div id="content">
        <h3>{local_name}</h3>
        <h4>{price}</h4>
    </div>
    </>
   )
}