import React from 'react';
import { Line } from 'react-chartjs-2';
import './Chart.css'

/* react chartjs-2 is a library that allows me to generate charts the way I wanted.
From a map of our properties we will be able to create the dataset to dynamically
generate the graphics. */

function Chart2 (props){
    /* We will create two datasets, in this case, with maximum and minimum response time.
    But we can change this in the first line of the code editor
    */
    const datasetMin = {
        label: props.labelMin,
        dataMinA: props.minA,
        dataMinB:props.minB,
        backgroundColor: props.colorsMin,
    }
    //Mapping the arrays and getting the data for the dataset
    const Min = datasetMin.label.map((label, i) => {
        return{
            label: datasetMin.label[i].replace(/_/g, " "),
            data: [datasetMin.dataMinA[i], datasetMin.dataMinB[i]],
            fill: false,
            backgroundColor: datasetMin.backgroundColor[i],
            yAxisID: 'y-axis-1',
        }
    })

    const datasetMax = {
        label: props.labelMax,
        dataMaxA: props.maxA,
        dataMaxB:props.maxB,
        backgroundColor: props.colorsMax,
    }
    //Mapping the second part
    const Max = datasetMin.label.map((label, i) => {
        return{
            label: datasetMax.label[i].replace(/_/g, " "),
            data: [datasetMax.dataMaxA[i], datasetMax.dataMaxB[i]],
            fill: false,
            backgroundColor: datasetMax.backgroundColor[i],
            yAxisID: 'y-axis-1',
        }
    })

    //Function to convert the timestamp in hour and minutes
    let d = new Date(props.begin);
    let begin = d.getUTCHours() + ':' + d.getUTCMinutes()
    
    let e = new Date(props.end);
    let end = e.getUTCHours() + ':' + e.getUTCMinutes()

    //Joining the two maps to finish the data to generate the graph
    const dataset = Min.concat(Max)

    const data = {
        labels: [begin, end],
        datasets: dataset
    }
    //We declare two variables for the labels
    const labelsMin = datasetMin.label.map((label, i) => {
        return(
            <li key={i} className={datasetMin.backgroundColor[i]}>
                <i className="fas fa-circle"></i> {datasetMin.label[i].replace(/_/g, " ")}
            </li>
        )
    })
    const labelsMax = datasetMax.label.map((label, i) => {
        return(
            <li key={i} className={datasetMax.backgroundColor[i]}>
                <i className="fas fa-circle"></i> {datasetMax.label[i].replace(/_/g, " ")}
            </li>
        )
    })

    return(
        <div className="chart">
            <div className="space"></div>
            <div className="lineChart">
                <Line
                    data={data}
                    width={600}
                    height="190"
                    className="chartt"
                />
            </div>
            <div className="labels">
                <ul>
                    {labelsMin}
                    {labelsMax}
                </ul>
            </div>
        </div>
    )
}

export default Chart2