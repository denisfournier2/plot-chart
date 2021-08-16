import React, { useState } from 'react'
import Ace from '../CodeEditor/AceEditor' //The code editor component
import Chart from '../Charts/Chart'; //The chart component
import GenChartButton from '../GenChartButton' //The button that triggers the function of plot-chart
import Code from '../../data/Code' //A initial state, received from this JSON file
import './Content.css'
import ErrorBoundary from '../Error'

/*
  Here, we can use Context or Redux to manage application states.
  But I choose indirect communication, for being an application with few states to manage.
*/

function Content() {
  const string = JSON.stringify(Code) //First, we convert the JSON to string variable to edit in the code editor
  const [code, setCode] = useState(string) //Here, we create a state starting with the string value
  const [data, setData] = useState(Code) //This state will create a JSON to generate the chart

  function generateChart(){ //This function will convert the string on the code editor into a object
    const PlotChart = JSON.parse(code) 
    setData(PlotChart)
  }
  
  let code2 = code.replace(/},{/g, "},\n{") //Format the string in the code editor
  
  return (
    <div className="Content">
      <ErrorBoundary> {/* Display a error message */}
        <Ace data={code2} onChanged={setCode} /> {/* The code editor component */}
        <Chart data={data} /> {/* The chart component */}
        <GenChartButton onClick={generateChart} /> {/* Trigger the function */}
      </ErrorBoundary>
    </div>
  );
}

export default Content;