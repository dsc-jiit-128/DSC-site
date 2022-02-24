import React from "react";
import Prizecard from "./prizecard";
import { Typography, Grid } from "@material-ui/core";

// "25 t shirts to lucky winners in the session of The @ company",
export default function Prizes(props) {
  const prizeArr = [
    {
      image: "2",
      heading: "Runner-up(2nd place)",
      desc: [
        "Best solution developed gets Rs. 15,000/team + 2600$ additional benifits",
        "Wolfram subscription worth $375*4",
        "Leading Learners subscription $100*4",
        "Interview Buddy mock interviews discount vouchers 90% off",
        "Interview Cake worth $169",
        "Axure one year subscription certificates $504",
        "Voiceflow coupon worth $50",
        ".xyz domain registration on Gen .xyz",
        "Hack club stickers",
      ],
    },
    {
      image: "1",
      heading: "Winners(1st Place)",
      desc: [
        "Best solution developed gets Rs. 20,000/team + 3400$ additional benifits",
        "Wolfram subscription worth $375*4",
        "Leading Learners subscription $100*4",
        "Interview Buddy mock interviews discount vouchers 90% off",
        "Interview Cake worth $169",
        "Taskade Lifetime upgrades ",
        "Axure one year subscription certificates $504",
        "Clerky for 1 company lifetime package $799",
        "Voiceflow coupon worth $50",
        ".xyz domain registration on Gen .xyz",
        "Hack club stickers",
      ],
    },
    {
      image: "3",
      heading: "Victory Stand(3rd Place)",
      desc: [
        "Best solution developed gets Rs. 10,000/team + 2600$ additional benifits",
        "Wolfram subscription worth $375",
        "Leading Learners subscription $100",
        "Interview Buddy mock interviews discount vouchers 90% off",
        "Interview Cake worth $169",
        "Axure one year subscription certificates $504",
        "Voiceflow coupon worth $50",
        ".xyz domain registration on Gen .xyz",
        "Hack club stickers",
      ],
    },
    {
      image: "fresher",
      heading: "Fresh Winning(Fresher’s Team Prize)",
      desc: [
        "All team members should be in the first year to be eligible for this prize.",
        "Best solution developed gets Rs. 2,500/team+2100 $ additional benifits",
        "Voice flow coupon code worth $50",
        "25 t shirts to lucky winners in the session of The @ company",
        "Balsamiq 90 day promo code",
        // "10% off coupons",
        "Interview cake 30days $169 coupon",
      ],
    },
    {
      image: "girl",
      heading: "Girls Prize(All Girls Team Prize)",
      desc: [
        // "Best solution developed gets Rs. 2500/team + 2100$ additional benifits",

        "All team members should be girls to be eligible for this prize.",
        "Best solution developed gets Rs. 2,000/team",
        "Voice flow coupon code worth $50",
        "25 t shirts to lucky winners in the session of The @ company",
        "Balsamiq 90 day promo code",
        // "10% off coupons",
        "Interview cake 30days $169 coupon",
      ],
    },
    {
      image: "consolation",
      heading:
        "Consolation (A Special Prize for Top 4 teams other than the top 3 and special prize teams)",
      desc: [
        "Best solution developed gets Rs. 1,000/team + 220$ additional benifits",
        "Voice flow coupon code worth $50",
        "25 t shirts to lucky winners in the session of The @ company",
        "Balsamiq 90 day promo code",
        // "10% off coupons",
        "Interview cake 30days $169 coupon",
      ],
    },
    // {
    //   image: "tezos",
    //   heading: "Tezos",
    //   desc: [
    //     "Best Dapp built on Portis gets Rs. 20,000",
    //     "Continuity Grant opportunity for exceptional builders",
    //     "Resources present on Devfolio hack page, register to know more.",
    //   ],
    // },
    // {
    //   image: "portis",
    //   heading: "Portis By Shapeshift",
    //   desc: [
    //     "Best Dapp built on Portis gets Rs. 15,000",
    //     "We will be looking for DApps that have taken our vision to heart. That has decided to utilize the frictionless experience provided by Portis to build a DApp with the mainstream crowd in mind. (If you're not a winner but we love your Dapp you'll have a chance to be listed amongst world class Dapps in our app store. Apps.portis.io ) Winners automatically get listed when mainnet is ready.",
    //     "Resources present on Devfolio hack page, register to know more.",
    //   ],
    // },
    // {
    //   image: "matic",
    //   heading: "Matic Network",
    //   desc: [
    //     "Best hack built on top of Ethereum during the hackathon gets Rs. 10,000",
    //     "For teams that integrate Matic in their hacks as well the prize money will be higher (Rs.15000) along with eligibility for internship/full-time role interviews and a chance to land seed funding of upto 5000 USD!",
    //     "Resources present on Devfolio hack page, register to know more.",
    //   ],
    // },
    // {
    //   image: "echo",
    //   heading: "echoAR",
    //   desc: [
    //     "50$ Amazon Gift Card (per team).",
    //     "3-month free Business Tier Access (per team member).",
    //     'Selected Project will be featured on the "Inspiration Page" of EchoAR',
    //     "Winners must use the echoAR platform as part of their project to be eligible for a reward.",
    //     "Resources present on Devfolio hack page, register to know more.",
    //   ],
    // },
    {
      image: "idea",
      heading:
        "Spartans(All participants who do a valid submission to the hack)",
      desc: [
        "Voice flow coupon code worth $50",
        "25 t shirts to lucky winners in the session of The @ company",
        "Balsamiq 90 day promo code",
        "10% off coupons",
        "Interview cake 30days $169 coupon",
      ],
    },
  ];
  return (
    <div className="margintop">
      <Typography
        variant="h3"
        align="center"
        component="p"
        className="dsc-font"
        data-aos="flip-left"
      >
        <span>Prizes</span>
      </Typography>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        alignContent="center"
        data-aos="flip-up"
      >
        {prizeArr.map((val) => (
          <Grid
            xs={12}
            md={4}
            direction="row"
            justify="center"
            alignItems="center"
            alignContent="center"
            spacing={10}
            className="margintop flexdisp"
          >
            <Prizecard
              image={val.image}
              head={val.heading}
              desc={val.desc}
              isDark={props.isDark}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

// export default Prizes;