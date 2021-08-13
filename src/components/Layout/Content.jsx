import React, { useState } from 'react'
import Ace from '../CodeEditor/AceEditor'
import Chart from '../Charts/Chart';
import GenChartButton from '../GenChartButton'
import Code from '../../data/Code'

function Content() {
  const string = JSON.stringify(Code)
  const [code, setCode] = useState(string)
  const [data, setData] = useState(Code)

  function generateChart(){
    const PlotChart = JSON.parse(code)
    setData(PlotChart)
  }

  return (
    <div className="Content">
      <Ace data={code} onChanged={setCode} />
      <Chart data={data} />
      <GenChartButton onClick={generateChart} />
    </div>
  );
}

export default Content;