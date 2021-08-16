import React from 'react'
import './Chart.css'
import GenChart from './GenChart'

function Chart(props){
    /* These variables will receive as properties to generate the chart dataset */
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
    let colorsMin = ['green', 'darkgreen', 'purple', 'dark']
    let colorsMax = ['lightblue', 'blue', 'yellow', 'orange']

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
                labelMax[i - maxA.length - 2] = data[i].os + ' ' + data[i].browser + ' ' + select[1]
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

    /* The dataset will be assembled from two factors, point A (start) and point B (end).
    The select attribute given in "start", will give us two data for the selection, which
    in this case is the minimum response time and the maximum response time.
    Also, we'll pass in some colors to be used to generate the graph. */

    return(
        <GenChart
            begin = {begin}
            end = {end}
            labelMin = {labelMin}
            labelMax = {labelMax}
            lengthMax = {labelMax.length}
            lengthMin = {labelMin.length}
            colorsMin = {colorsMin}
            colorsMax = {colorsMax}
            group = {group}
            minA = {minA}
            minB = {minB}
            maxA = {maxA}
            maxB = {maxB}
        />
    )
}

export default Chart