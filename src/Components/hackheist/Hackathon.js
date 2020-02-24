import React from "react";
import Navbar from "../common/Navbar";
import Container from "@material-ui/core/Container";
import { withRouter } from "react-router-dom";
import {
  Box,
  Typography,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Hackheist_img from "../../images/hackheist/hackheist.png";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import AttachMoneyOutlinedIcon from "@material-ui/icons/AttachMoneyOutlined";
import LaptopChromebookOutlinedIcon from "@material-ui/icons/LaptopChromebookOutlined";
import AdbOutlinedIcon from "@material-ui/icons/AdbOutlined";

const Hackathon = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <p>
          <AdbOutlinedIcon />
        </p>
        <Box className="mt-9 hackheist">
          <img src={Hackheist_img} alt="" />
        </Box>
      </div>

      <div>apply section</div>

      <div>discipline section</div>

      <div>sponsors</div>

      <div>our partners</div>

      <Container>
        <div className="faq-section">
          <Typography
            variant="h3"
            component="p"
            className="dsc-font"
            align="center"
          >
            <span>FAQ</span>
          </Typography>
          <Container>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>What's the maximum team size?</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Lorem ipsum dolor sit</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default withRouter(Hackathon);
