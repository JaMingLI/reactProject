
const InputSelect = ({select}) =>{       

    function selectdata(e) {
        select(function () {
            return [e.target.value]
        })              
    }    
    return(
        <div className="inputArea">
            <h1>地區</h1>            
            <select className="area" onChange={selectdata}>
                <option value='1' >松山區</option>  
                <option value='2' >信義區</option> 
                <option value='3' >大安區</option> 
                <option value='4' >中山區</option> 
                <option value='5' >中正區</option> 
                <option value='6' >大同區</option> 
                <option value='7' >萬華區</option> 
                <option value='8' >文山區</option> 
                <option value='9' >南港區</option> 
                <option value='10'>內湖區</option> 
                <option value='11'>士林區</option> 
                <option value='12'>北投區</option> 
            </select>
        </div>
    )
}

export default InputSelect