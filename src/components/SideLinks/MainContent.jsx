import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import DragDrop from "./DragDrop"

import "./MainContent.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function MainContent() {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [rows, setRows] = useState([]);
  const [related, setRelated] = useState([]);
  const [ques, setQues] = useState([]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const columns = [
    { field: "0", headerName: "Keyword", width: 200 },
    { field: "", headerName: "Intent", width: 80 },
    { field: "1", headerName: "Volume", width: 100 },
    { field: "7", headerName: "KD%", width: 70 },
    { field: "3", headerName: "CPC", width: 70 },
    { field: "4", headerName: "Competition", width: 70 },
    { field: "5", headerName: "Results", width: 100 },
  ];

  useEffect(() => {
    axios.get("data.json").then((response) => {
      setRows(response.data.raw_broadmatch_data);
    });
  },[]);

  useEffect(() => {
    axios.get("data.json").then((response) => {
      setRelated(response.data.raw_related_data);
    });
  },[]);

  useEffect(() => {
    axios.get("data.json").then((response) => {
      setQues(response.data.raw_question_data);
    });
  },[]);


  return (
    <main className="main">
      <header className="header">
        <span className="first_heading">
          Keyword Explorer &gt; <b>Keyword Overview</b>
        </span>
        <h2 className="main_heading">
          Keyword : <span className="shopping">shopping in barcelona</span>
        </h2>
        <span className="country">
          Database : United States{" "}
          <img
            className="USA_flag"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/125px-Flag_of_the_United_States.svg.png"
            alt="USA Flag"
          />
        </span>
      </header>
      <section className="section">
        <div className="cards">
          <div className="big_card">
            <div className="top">
              <h4 className="head">Volume</h4>
              <span>
                <span className="number">480</span>
                <img
                  className="USA_flag"
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/125px-Flag_of_the_United_States.svg.png"
                  alt="USA Flag"
                />
              </span>
            </div>
            <div className="bottom">
              <h4 className="head">Keyword Difficulty</h4>
              <span className="number">46 %</span>
              <span className="possible">Possible</span>
              <p className="para">
                Slightly more competition. You will need well-structured and
                unique content appropriately optimized for your keywords.
              </p>
            </div>
          </div>
          <div className="small_cards">
            <div className="first_small_card">
              <h5 className="head">Intent</h5>
              <span>Commercial</span>
            </div>
            <div className="second_small_card">
              <h5 className="head">Results</h5>
              <span className="number">313M</span>
            </div>
            <div className="third_small_card">
              <div className="cpc">
                <h5 className="head">CPC</h5>
                <span className="number">$0.12</span>
              </div>
              <div>
                <h5 className="head">Com.</h5>
                <span className="number">0.24</span>
              </div>
            </div>
          </div>
        </div>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Broad Match" {...a11yProps(0)} />
              <Tab label="Related" {...a11yProps(1)} />
              <Tab label="Questions" {...a11yProps(2)} />
              <div>
                <Button onClick={handleOpen} className="right_btn">
                  Add to List
                </Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Drag & Drop
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      <DragDrop />
                    </Typography>
                  </Box>
                </Modal>
              </div>
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <div style={{ height: 800, width: "100%" }}>
              <DataGrid
                getRowId={(item) => item[0]}
                rows={rows}
                columns={columns}
                checkboxSelection
              />
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                getRowId={(item) => item[0]}
                rows={related}
                columns={columns}
                checkboxSelection
              />
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                getRowId={(item) => item[0]}
                rows={ques}
                columns={columns}
                checkboxSelection
              />
            </div>
          </TabPanel>
        </Box>
      </section>
    </main>
  );
}

export default MainContent;
