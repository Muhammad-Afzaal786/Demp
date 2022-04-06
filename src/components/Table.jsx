import React, { useState } from "react";
import Data from "./Data";

export default function BasicTable() {
   const [box, setBox]= useState(Data)
    const remove = (id)=>{
    const removeData = box.filter((item, ind)=>{
        return ind !== id;
    });
    setBox(removeData)
    }
  return (

    <>
   
    <table className="table">
      <thead>
        <tr>
          <th className="TBL" scope="col">
            Folder
          </th>
          <th className="TBL" scope="col">
            Create
          </th>
          <th className="TBL" scope="col">
            Update
          </th>
          <th className="TBL" scope="col">
            Move to Archive
          </th>
        </tr>
      </thead>
      <tbody>
        {box.map((val,idx) => {
          console.log(val, "val");
          return (
            <tr key={idx} id={idx} className="hover_">
              <td className="TBLR">{val.folder}</td>
              <td className="TBLR">{val.created}</td>
              <td className="TBLR">{val.updated}</td>
              <td className="TBLR" onClick={()=>remove(idx)}>{val.move}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </>
  );
}
