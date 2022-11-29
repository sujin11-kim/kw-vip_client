import React, {useState,useEffect} from "react";
import './Search.css';
import Map from "../../map";
const SearchBar=()=>{
    const [search,setSearch]=useState(""); 
    const [data_print,setData]=useState("");
    const [business,setBusiness]=useState("");
    const [floor,setFloor]=useState("");
    const [paint,setPaint]=useState("");
    
    var data_value="";

    const onBusiness=(e)=>{
        const{value}=e.target;
        console.log(value);
        if(business!==e.target.value)
        {
            setBusiness(e.target.value);
        }
        else{
            setBusiness("")
        }        
    }
    const onFloor=(e)=>{
        const{value}=e.target;
        console.log(value);
        if(floor!==e.target.value)
        {
            setFloor(e.target.value);
        }
        else{
            setFloor("")
        }        
    }
    const onChangeSearch=event=>{
        event.preventDefault();
        setSearch(event.target.value);
    }
    const onClick=async()=>{
        data_value=Content(search);
        var data_list=data_value.map((local) => 
        <Print key={local.id} ranking={local.ranking} local_name={local.local_name} price={local.price}></Print>);
        
        setData(data_list);
        setPaint(data_value);
    }

    
    return(
        <>
        <Map local_to_paint={paint}></Map>
        <div id='window'>
            <div className='title'>상권분석</div>
            <div className='component_checkbox'>
                <div className='button'>
                    <button id={"btn"+(floor==="1F" ?"_acitve" :"")} value="1F" onClick={onFloor}>1F</button>
                    <button id={"btn"+(floor==="2F" ?"_acitve" :"")} value="2F" onClick={onFloor}>2F</button>
                </div>
                <div className='button'>
                    <button id={"btn"+(business==="음식점" ?"_acitve" :"")} value="음식점" onClick={onBusiness}>음식점</button>
                    <button id={"btn"+(business==="슈퍼마켓" ?"_acitve" :"")} value="슈퍼마켓" onClick={onBusiness}>슈퍼마켓</button>
                    <button id={"btn"+(business==="학원" ?"_acitve" :"")} value="학원" onClick={onBusiness}>학원</button>
                    <button id={"btn"+(business==="카페" ?"_acitve" :"")} value="카페" onClick={onBusiness}>카페</button>
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
        </div>

        </>
    )
}
export default SearchBar;

const data=[//test값
    {
        area:25,
        value:[
            {id:1,ranking:1,local_name:"강남구 논현1동",price:'500'},
            {id:2,ranking:2,local_name:"은평구 응암1동",price:'300'},
            {id:3,ranking:3,local_name:"서대문구 홍제1동",price:'200'},
            {id:4,ranking:4,local_name:"중구 명동",price:'500'},
            {id:5,ranking:5,local_name:"용산구 남영동",price:'300'}
        ]
       
    },
    {
        area:30,
        value:[
            {id:1,ranking:1,local_name:"중구 명동",price:'500'},
            {id:2,ranking:2,local_name:"용산구 남영동",price:'300'},
            {id:3,ranking:3,local_name:"종로구 무악동",price:'200'},
            {id:4,ranking:4,local_name:"성북구 안암동",price:'500'},
            {id:5,ranking:5,local_name:"노원구 상계1동",price:'300'}
        ]
       
    },
    {
        area:15,
        value:[
            {id:1,ranking:'1',local_name:"성북구 안암동",price:'500'},
            {id:2,ranking:'2',local_name:"노원구 상계1동",price:'300'},
            {id:3,ranking:'3',local_name:"중랑구 상봉1동",price:'200'},
            {id:4,ranking:'4',local_name:"강남구 논현1동",price:'500'},
            {id:5,ranking:'5',local_name:"은평구 응암1동",price:'300'}
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

    if(data_value===""){return("Not found data")}
    
    return(
       data_value

    )

}

function Print({ranking,local_name,price}){
    let local_price=ranking+"위 "+local_name+" "+price
    const [showPopup,setShowPopup]=useState("");
    const onGetdata=(e)=>{
        const {value}=e.target;
        console.log(typeof(value));
        if(showPopup!=e.target.value)
        {
            
            setShowPopup(e.target.value);
        }
        else{
            setShowPopup("");
        }
        console.log(showPopup);
        // console.log(typeof(showPopup));
    }
   return(
    <>
        <div id="local_check" onClick={onGetdata} value='false'>{local_price}</div>
        {showPopup?(
            <div className="sub_window">hi</div>
        ):null}
    </>
   )
}

