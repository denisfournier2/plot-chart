import React from 'react'
import './GenChartButton.css'

function Footer(props) {
  return (
    <div className="footer">
      <button onClick={props.onClick}> {/* function trigger */}
        GENERATE CHART
      </button>
    </div>
  );
}

export default Footer;