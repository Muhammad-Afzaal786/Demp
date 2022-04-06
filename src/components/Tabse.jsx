import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import BasicTable from "./Table";
//import Box from "@mui/material/Box";
export default function Tabse() {
  const [value, setValue] = useState(0);
  const handleTabs = (e, val) => {
    console.log(val);
    setValue(val);
  };
  return (
    <>
      <AppBar position="static">
        <Tabs
          indicatorColor="primary"
          aria-label="primary tabs example"
          value={value}
          onChange={handleTabs}
          textColor="secondary"
          style={{ display: "flex", backgroundColor: "#2980b9" }}
        >
          <Tab
            
            style={{ color: "black", flex: "1" }}
            label="item 1"
          />
          <Tab
            
            style={{ color: "black", flex: "1" }}
            label="item 2"
          />
          <Tab
            
            style={{ color: "black", flex: "1" }}
            label="item 3 "
          />
          <Tab
            
            style={{ color: "black", flex: "1" }}
            label="item 4 "
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <BasicTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Tab Panel 2
      </TabPanel>
      <TabPanel value={value} index={2}>
        Tab Panel 3
      </TabPanel>
    </>
  );
}

function TabPanel(props) {
  const { children, value, index } = props;
  return <div>{value == index && <h2>{children}</h2>}</div>;
}
