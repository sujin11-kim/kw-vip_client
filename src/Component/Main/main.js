import React, {useState,useEffect} from "react";
import styled from 'styled-components';
import './main.css';
import Map from "../Map/map";
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import ApexChart from "../Chart/chart";

const Main=()=>{

  const [searchText, setSearchText] = useState([])
  
  const getDataFromAPI = () => {
    console.log("Options Fetched from API")
  
    fetch('http://dummy.restapiexample.com/api/v1/employees').then((response) => {
      return response.json()
    }).then((res) => {
      console.log(res.data)
      for (var i = 0; i < res.data.length; i++) {
        searchText.push(res.data[i].employee_name)
      }
      setSearchText(searchText)
    })
  }
  
    const data = [
        {id: 0, title: '동'},
        {id: 1, title: '층'},
        {id: 2, title: '건축년도'},
        {id: 4, title: '소비자 물가 지수'},
        {id: 5, title: '회사채'},
        {id: 6, title: '전세가율'},
        {id: 7, title: '용적율'},
        {id: 8, title: '건폐율'},
        {id: 9, title: '인구지표'},
        {id: 10, title: '지하철 수'}
    ];
    
    // 체크된 아이템을 담을 배열
    const [checkItems, setCheckItems] = useState([]);
    const [area, setArea] = useState();
    
    // 체크박스 단일 선택
    const handleSingleCheck = (checked, id) => {
        if (checked) {
        // 단일 선택 시 체크된 아이템을 배열에 추가
        setCheckItems(prev => [...prev, id]);
        console.log(area)
        } else {
        // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
        setCheckItems(checkItems.filter((el) => el !== id));
        }
    };
    // 체크박스 전체 선택
    const handleAllCheck = (checked) => {
        if(checked) {
        // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
        const idArray = [];
        data.forEach((el) => idArray.push(el.id));
        setCheckItems(idArray);
        }
        else {
        // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
        setCheckItems([]);
        }
    }

    const filterOptions = createFilterOptions({
        matchFrom: 'start',
        stringify: option => option,
    });

    // Sample options for search box
    const myOptions = ['송파구', '강남구', '서초구','관악구','동작구','영등포구','금천구','구로구','강서구','양천구','마포구','서대문구','은평구','노원구','도봉구','성북구','중랑구','동대문구','광진구','성동구','용산구','중구','종로구'];
 

    return(
        <>
        <Map></Map>
        <div id='facor_window'>
            <div className='title' style={{ marginLeft: '10%'}}>요인분석</div>
            <div className='checkbox' style={{ marginLeft: '10%', marginTop: '30px' }}>
                <StyledTable>
                    <thead>
                        <tr>
                        <th>
                            <input type='checkbox' name='select-all'
                            onChange={(e) => handleAllCheck(e.target.checked)}
                            // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
                            checked={checkItems.length === data.length ? true : false} />
                        </th>
                        <th className='second-row'>분석 요인</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((data, key) => (
                        <tr key={key}>
                            <td>
                            <input type='checkbox' name={`select-${data.id}`}
                                onChange={(e) => handleSingleCheck(e.target.checked, data.id)}
                                // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                                checked={checkItems.includes(data.id) ? true : false} />
                            </td>
                            <td className='second-row'>{data.title}</td>
                        </tr>
                        ))}
                    </tbody>
                </StyledTable>
                <div style={{marginTop: '20px' }}>
                    <h3>구를 검색해 주세요</h3>
                    <Autocomplete
                        style={{ width: 500 }}
                        freeSolo
                        autoComplete
                        autoHighlight
                        //filterOptions={filterOptions}
                        options={myOptions}
                        renderInput={(params) => (
                        <TextField {...params}
                            onChange={getDataFromAPI}
                            variant="outlined"
                            label="구를 입력해 주세요"
                        />
                        )}
                    />
                </div>
                <div style={{ width: 500, marginTop: '20px' }}>
                <ApexChart></ApexChart>
                </div>
        </div>
        </div>
                          
        </>
    )
}
export default Main;

const StyledTable = styled.table`
  text-align: center;
  border-collapse: collapse;
  thead{
    tr{
      th{
        padding: 10px 15px;
        background-color: #888;
        color: #fff;
        font-weight: 700;
      }
    }
  }
  tbody{
    tr{
      td{
        padding: 7px 15px;
        border-bottom: 1px solid #eee;
      }
    }
  }
  .second-row{
    width: 420px;
  }
`;
