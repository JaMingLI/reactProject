import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const Gui = ({ value, selctData }) => {
    let num = parseInt(selctData)
    console.log(num);
    const labels = ['共同生活戶', '獨立生活戶'];
    const data = {
        labels: labels,
        datasets: [
            {
                label: "男",
                data: [value[num][0],value[num][3]],
                backgroundColor: 'rgb(73, 60, 255)',
                borderColor: 'rgb(73, 60, 255)',     
                        
            },
            {
                label: "女",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [value[num][1],value[num][2]]
            },
        ]
    };
    const option = {
        responsive:true,
        maintainAspectRatio:false,        
        plugins: {                        
            title: {
                display: true,
                text: " "
            },
            legend: {
                display: true,
                position: "bottom",
                labels: {
                    color: 'rgb(101, 92, 92)',
                    font: {
                        size: 20
                    }
                }
            },           
            
        }
    }
    return (
        <div className='guiContainer'>
            <Bar
                data={data}                
                options={option}               
            />
        </div>
    )
};



export default Gui

