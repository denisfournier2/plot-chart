import React from 'react'
import './GenChartButton.css'

function Footer(props) {
  return (
      <button onClick={props.onClick}>
        GENERATE CHART
      </button>
  );
}

export default Footer;