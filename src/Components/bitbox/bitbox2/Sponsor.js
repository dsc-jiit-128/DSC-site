import React from "react";
import { Typography, Grid } from "@material-ui/core";
import SponsorCard from "../SponsorCard";

export default function Sponsor({ isDark }) {
  return (
    <div className="sponsors">
      <Typography
        data-aos="flip-down"
        variant="h3"
        component="p"
        className="dsc-font"
        align="center"
      >
        Our Proud Sponsors
      </Typography>
      <Typography
        data-aos="flip-down"
        variant="h4"
        component="p"
        className="dsc-font margintop"
        align="center"
      >
        Associate Sponsors
      </Typography>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        variant="h5"
      >
        <SponsorCard
          key="0"
          src={require(!isDark
            ? "../../../images/sponsors/bitbox2/devfolio-light.svg"
            : "../../../images/sponsors/bitbox2/devfolio-dark.svg")}
          link="https://devfolio.co"
        />
        <SponsorCard
          key="1"
          src={require(!isDark
            ? "../../../images/sponsors/bitbox2/Roke-light.png"
            : "../../../images/sponsors/bitbox2/Roke-dark.png")}
          link="https://www.roke.co.uk/"
        />

        <SponsorCard
          key="2"
          src={require(!isDark
            ? "../../../images/sponsors/bitbox2/polygon_light.svg"
            : "../../../images/sponsors/bitbox2/polygon_dark.svg")}
          link="https://polygon.technology/"
        />
        <SponsorCard
          key="3"
          src={require("../../../images/sponsors/bitbox2/leading-learner.svg")}
          link="https://www.leadlearners.ca/"
        />
        <SponsorCard
          key="4"
          src={require("../../../images/sponsors/wolfram2.png")}
          link="http://wolfram.com/"
        />
        <SponsorCard
          key="5"
          src={
            !isDark
              ? "https://www.roostoo.com/assets/img/roostoo_brand.svg "
              : require("../../../images/sponsors/bitbox2/roostoo.jpeg")
          }
          link="https://www.roostoo.com/"
        />
      </Grid>
      <Typography
        data-aos="flip-down"
        variant="h4"
        component="p"
        className="dsc-font margintop"
        align="center"
      >
        Co-Sponsors
      </Typography>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <SponsorCard
          key="0"
          src={require(!isDark
            ? "../../../images/sponsors/bitbox2/tezos_light.svg"
            : "../../../images/sponsors/bitbox2/tezos_dark.svg")}
          link="https://tezos.com/"
        />
        <SponsorCard
          key="1"
          src={require(!isDark
            ? "../../../images/sponsors/bitbox2/celo_light.svg"
            : "../../../images/sponsors/bitbox2/celo_dark.svg")}
          link="https://celo.org/"
        />
        <SponsorCard
          key="2"
          src={require(!isDark
            ? "../../../images/sponsors/bitbox2/filecoin_light.svg"
            : "../../../images/sponsors/bitbox2/filecoin_dark.svg")}
          link="https://filecoin.io/"
        />
        <SponsorCard
          key="3"
          src={require("../../../images/sponsors/GMC_logo.png")}
          link="http://givemycertificate.com/"
        />
        <SponsorCard
          key="4"
          src={require("../../../images/sponsors/StreamYard - Horz.png")}
          link="https://streamyard.com/"
        />
        <SponsorCard
          key="5"
          src={require("../../../images/sponsors/bitbox2/Inter_cake.svg")}
          link="https://www.interviewcake.com/"
        />
        <SponsorCard
          key="4"
          src={require("../../../images/sponsors/bitbox2/IBlogo.svg")}
          link="https://interviewbuddy.in/"
        />
        <SponsorCard
          key="5"
          src={require("../../../images/sponsors/bitbox2/axure.svg")}
          link="https://www.axure.com/"
        />
        <SponsorCard
          key="6"
          src={require("../../../images/sponsors/aops.jpeg")}
          link="https://artofproblemsolving.com/"
        />
        <SponsorCard
          key="7"
          src={require("../../../images/sponsors/bitbox2/xyz-logo-color.png")}
          link="https://gen.xyz/"
        />
        <SponsorCard
          key="8"
          src="https://balsamiq.com/assets/company/brandassets/balsamiq-logo-screen-1000x500.png"
          link="https://balsamiq.com/"
        />
        <SponsorCard
          key="9"
          src={require("../../../images/sponsors/taskade-meta.png")}
          link="https://www.taskade.com/"
        />
        <SponsorCard
          key="10"
          src={require("../../../images/sponsors/clerky.jpeg")}
          link=""
        />
        <SponsorCard
          key="11"
          src={require(!isDark
            ? "../../../images/sponsors/bitbox2/Voiceflow-Black.svg"
            : "../../../images/sponsors/bitbox2/Voiceflow-White.png")}
          link="https://www.voiceflow.com/"
        />
        <SponsorCard
          key="12"
          src={require(!isDark
            ? "../../../images/sponsors/bitbox2/The-Company-Black.svg"
            : "../../../images/sponsors/bitbox2/The-Company-White.png")}
          link="https://atsign.com/"
        />
      </Grid>
      <Typography
        data-aos="flip-down"
        variant="h4"
        component="p"
        className="dsc-font margintop"
        align="center"
      >
        Internship Partner
      </Typography>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <SponsorCard
          key="0"
          src={require("../../../images/sponsors/bitbox2/heiphen.svg")}
          link="https://heiphen.com/"
        />
      </Grid>
      <Typography
        data-aos="flip-down"
        variant="h4"
        component="p"
        className="dsc-font margintop"
        align="center"
      >
        Knowledge Partner
      </Typography>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <SponsorCard
          key="0"
          src={require(!isDark
            ? "../../../images/sponsors/bitbox2/Seekho-Black.webp"
            : "../../../images/sponsors/bitbox2/Seekho-White.png")}
          link="https://seekho.ai/"
        />
      </Grid>
    </div>
  );
}
