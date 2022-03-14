
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
                <option value='0' >松山區</option>  
                <option value='1' >信義區</option> 
                <option value='2' >大安區</option> 
                <option value='3' >中山區</option> 
                <option value='4' >中正區</option> 
                <option value='5' >大同區</option> 
                <option value='6' >萬華區</option> 
                <option value='7' >文山區</option> 
                <option value='8' >南港區</option> 
                <option value='9'>內湖區</option> 
                <option value='10'>士林區</option> 
                <option value='11'>北投區</option> 
            </select>
        </div>
    )
}

export default InputSelect