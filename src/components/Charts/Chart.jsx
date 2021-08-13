import React from 'react'
import './Chart.css'
import Chart2 from './Chart2'

function Chart(props){
    const data = props.data
    let group = []
    let select = []
    let begin = 0
    let end = 0
    let commands = data.length - 1
    let minA = []
    let minB = []
    let maxA = []
    let maxB = []
    let labelMin = []
    let labelMax = []
    let colors = ['green', 'darkgreen', 'purple', 'dark', 'lightblue', 'blue', 'yellow', 'orange']

    // First line - verifying for start the process

    if(data[0].type === 'start'){
        group = data[0].group
        select = data[0].select
    }else{
        console.log('Error, you must start the process with the start type')
    }

    // Second line - verifying span and receive the begin and the end attributes
    if(data[1].type === 'span'){
        begin = data[1].begin
        end = data[1].end
    }else{
        console.log('Error, define the span type and set the interval')
    }

    // Setting and listing datas
    if(data[2].type === 'data'){
        for (var i = 2; i < commands; i++) {
            if((data[i].timestamp === begin)){
                minA[i-2] = data[i].min_response_time
                maxA[i-2] = data[i].max_response_time
                labelMin[i-2] = data[i].os + ' ' + data[i].browser + ' ' + select[0]
            } else if((data[i].timestamp === end)){
                minB[i - minA.length - 2] = data[i].min_response_time
                maxB[i - maxA.length - 2] = data[i].max_response_time
                labelMax[i-labelMax.length - 3] = data[i].os + ' ' + data[i].browser + ' ' + select[1]
            } else{
                console.log('Timestamp error: type data and span not corresponding')
            }
        }
    }else{
        console.log('Error, define some data type to plot a chart')
    }

    //Setting the final line for stop the process
    if(data[commands].type === 'stop'){
        console.log('stop ok')
    }else{
        console.log('Error, define the stop command to stop the process')
    }

    /* const list = labels.map((labels, i) => {

        return(
            <li className={colors[i]} key={i} >
                <i className="fas fa-circle"></i> {labels}
            </li>
        )
    });*/

    return(
        <Chart2
            begin = {begin}
            end = {end}
            labelMin = {labelMin}
            labelMax = {labelMax}
            lengthMax = {labelMax.length}
            lengthMin = {labelMin.length}
            background = {colors}
            group = {group}
            minA = {minA}
            minB = {minB}
            maxA = {maxA}
            maxB = {maxB}
        />
        /*<div className="chart">
            <div className="fields">
                <div className="xy">
                    <div className="chartFields">
                        <i className="fas fa-circle"></i>
                        <div className="line"></div>
                        <i className="fas fa-circle"></i>
                    </div>
                </div>
                <div className="space"></div>
                <div className="interval">
                    <span>00:0{parseInt((begin / (1000 * 60)) % 60)}</span>
                    <span>00:0{parseInt((end / (1000 * 60)) % 60)}</span>
                </div>
            </div>
            <div className="labels">
                <ul>
                    {list}
                    {console.log(labels)}
                    {console.log(group)}
                </ul>
            </div>
        </div>*/
    )
}

export default Chart