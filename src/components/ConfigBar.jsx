import React, { useEffect } from "react";
import { Dropdown } from "semantic-ui-react";
import { save } from 'save-file'

const ConfigBar = (props) => {
  useEffect(() => {
  }, [props.mode,props.code])
  const handleSaveCode= async()=>{
    if(props.modeForile==="cpp"){
      await save(props.code,  "code.cpp" )}
    else if(props.modeForile==="java"){
      await save(props.code,  "code.java" )}
    else if(props.modeForile==="python"){
      await save(props.code,  "code.py" )}
    else if(props.modeForile==="javascript"){
      await save(props.code,  "code.js" )}
    else if(props.modeForile==="c"){
      await save(props.code,  "code.c" )}
    else  
    await save(props.code,  "code.txt" )
  }
  return (
    <div className="bg-purple-200 flex justify-between p-2 ">
      <Dropdown
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        placeholder="Theme"
        selection
        options={props.themes}
        onChange={(e, data) => props.handleOnChange(e, data)}
        defaultValue={props.themes[8].value}
      />
      <Dropdown
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        placeholder="Language"
        selection
        options={props.languages}
        onChange={(e, data) => props.handleOnChange(e, data)}
        value={props.mode}
      />
      <Dropdown
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        placeholder="Font Size"
        selection
        options={props.fontSizes}
        onChange={(e, data) => props.handleOnChange(e, data)}
        defaultValue={props.fontSizes[4].value}
      />

   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={()=>props.handleDownloadCode()}>
        Save
      </button>
      <button className="bg-zinc-700 bg-green-700 text-white font-bold px-4 rounded ml-auto" onClick={() => props.handleRunClick()}>
        <div dangerouslySetInnerHTML={{ __html: props.status }} />
      </button>
    </div>
  );
};

export default ConfigBar;
