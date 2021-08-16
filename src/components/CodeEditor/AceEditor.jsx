import React from "react";
import AceEditor from "react-ace";
import './AceEditor.css'

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ace"
import "ace-builds/webpack-resolver"

function Ace(props) {
  function onChange(newValue) {
    props.onChanged(newValue)
  }

    return (
      <div className="Ace">
        <AceEditor
            placeholder="Placeholder Text"
            mode="java"
            name="blah2"
            width="100%"
            height="calc(100%)"
            className="AceEditor"
            theme="monokai"
            fontSize={14}
            showPrintMargin={false}
            showGutter={true}
            highlightActiveLine={true}
            value={props.data}
            onChange={onChange}
            setOptions={{
            showLineNumbers: true,
            tabSize: 2,
            }}/>
      </div>
    );
  }
  
  export default Ace;