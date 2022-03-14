import Gui from "./dataComponent/Gui";
import InputSelect from "./dataComponent/Input";

import { useState , useEffect} from 'react'

const API_URL = "https://od.moi.gov.tw/api/v1/rest/datastore/301000000A-000082-045"
let totalArr =[]
let resData

function downLoad(setData) {    
    function ajax(url) {
        return new Promise((resolve, reject) => {
            const xhttp = new XMLHttpRequest()            
            xhttp.onload = function () {
                if (this.status == 200) {                    
                    resolve(resData = JSON.parse(this.response))                    
                } else {                    
                    reject(console.log('載入失敗'))
                }
            }
            xhttp.open('GET', url, true)
            xhttp.send()
        })
    }
    ajax(API_URL)
    .then((val)=>{
        function count(address) {
            let sumA = 0
            let sumB = 0
            let sumC = 0
            let sumD = 0
            let arr = []
            val.result.records.forEach((element) => {
                if (element.site_id == address) {
                    let counter_A = parseInt(element.household_ordinary_m)
                    sumA += counter_A
                    let counter_B = parseInt(element.household_ordinary_f)
                    sumB += counter_B
                    let counter_C = parseInt(element.household_single_m)
                    sumC += counter_C
                    let counter_D = parseInt(element.household_single_f)
                    sumD += counter_D                
                }
            });
            arr.push(sumA, sumB, sumC, sumD)
            return arr
        }
        const block_1 = count('臺北市松山區')
        const block_2 = count('臺北市信義區')
        const block_3 = count('臺北市大安區')
        const block_4 = count('臺北市中山區')
        const block_5 = count('臺北市中正區')
        const block_6 = count('臺北市大同區')
        const block_7 = count('臺北市萬華區')
        const block_8 = count('臺北市文山區')
        const block_9 = count('臺北市南港區')
        const block_10 = count('臺北市內湖區')
        const block_11 = count('臺北市士林區')
        const block_12 = count('臺北市北投區')
        totalArr.push(block_1, block_2, block_3, block_4, block_5, block_6, block_7, block_8, block_9, block_10, block_11, block_12) 
        setData(totalArr)
    })
    .catch((err)=>{        
        console.log(err);
    })     
}

const Data = () => {    
    const [data ,setData] = useState()
    const [select,setSelect] = useState(0)
    useEffect(() =>{       
        downLoad(setData)       
    }, [])    
    // 效果類似 onload 
    
    // useEffect(() =>{
    //     let interval = setInterval(()=>{
    //         downLoad(setData)     
    //     },5000);
    //     return ()=> clearInterval(interval);
    // }, [])    

    useEffect(() => {
        if(data){
            console.info("loaded !");
        }else{
            console.info("loading !");
        }
    },[data])
    // data  這件事情之後 發生 undefine and loading ok

    return (
        <div className="dataComtainer">     
            <InputSelect select = {setSelect}></InputSelect>
            {data ? <Gui value = {data} selctData = {select} ></Gui> : <h2>Loading</h2>}            
        </div>        
    );
}






export default Data