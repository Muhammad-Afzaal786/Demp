import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Tabse from "../components/Tabse";
import FolderDeleteIcon from "@mui/icons-material/FolderDelete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Select from "../components/select";
import FileUpload from "../components/FileUpload/FileUpload";
function Landing() {
  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <Box p={3}>
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} xs={12} >
            <Item style={{padding:"10"}}>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <BorderColorIcon  style={{color:"#0097e6"}}/>
                <Box>
                  <h6>Certify a document.</h6>
                  <h6>Certify on behalf of your organization.</h6>
                </Box>
              </Box>

              <Box
                
                className='slectiveBox'
              >
                <Box>
                  <Select />
                </Box>
                <Box>
                  <Select />
                </Box>
              </Box>
              <Box mt={4}>
                <FileUpload />
              </Box>

              <Box>
                <h6>Max File Size: 64 MB.</h6>
                <h6>1 Documents costs around 1 credits</h6>
              </Box>
              <div className="d-grid gap-2 col-6 mx-auto my-5">
                <button className="btn btn-primary p-3" type="button">
                  Certify
                </button>
              </div>
            </Item>
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <h3>All Folder</h3>
              </div>
              <div>
                <h6>
                  <FolderDeleteIcon />
                  <span style={{ color: "#40739e" }}>New Folder</span>
                </h6>
              </div>
            </div>
            <Item>
              <Tabse />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Landing;
