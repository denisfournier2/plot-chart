import React, { useState } from 'react'
import Ace from '../CodeEditor/AceEditor'
import Chart from '../Charts/Chart';
import GenChartButton from '../GenChartButton'
import Code from '../../data/Code'
import './Content.css'
import ErrorBoundary from '../Error'

function Content() {
  const string = JSON.stringify(Code)
  const [code, setCode] = useState(string)
  const [data, setData] = useState(Code)

  function generateChart(){
    const PlotChart = JSON.parse(code)
    setData(PlotChart)
  }
  
  let code2 = code.replace(/},{/g, "},\n{")
  
  return (
    <div className="Content">
      <ErrorBoundary>
        <Ace data={code2} onChanged={setCode} />
        <Chart data={data} />
        <GenChartButton onClick={generateChart} />
      </ErrorBoundary>
    </div>
  );
}

export default Content;