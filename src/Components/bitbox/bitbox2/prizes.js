import React from "react";
import Prizecard from "./prizecard";
import { Typography, Grid } from "@material-ui/core";

// "25 t shirts to lucky winners in the session of The @ company",
export default function Prizes(props) {
  const prizeArr = [
    {
      image: "1.jpg",
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
      image: "2.jpg",
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
      image: "3.jpg",
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
      image: "fresher.jpg",
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
      image: "girl.jpg",
      heading: "Girls Prize(All Girls Team Prize)",
      desc: [
        // "Best solution developed gets Rs. 2500/team + 2100$ additional benifits",

        "All team members should be girls to be eligible for this prize.",
        "Best solution developed gets Rs. 2,500/team + 2100$ if additional benefits",
        "Voice flow coupon code worth $50",
        "25 t shirts to lucky winners in the session of The @ company",
        "Balsamiq 90 day promo code",
        // "10% off coupons",
        "Interview cake 30 days $169 coupon",
      ],
    },
    {
      image: "Roke-light.png",
      heading: "Roke.to (Special Track)",
      desc: [
        "Interview Cake worth $169",
        "Interview Buddy discount vouchers 90% off",
        "Taskade 5 year upgrades",
        "Seekho 50% discount coupons",
        "Balsamiq 90 day trial promo code",
        "Voiceflow coupon worth $50",
      ],
    },
    {
      image: "consolation.jpg",
      heading:
        "Consolation (A Special Prize for Top 4 teams other than the top 3 and special prize teams)",
      desc: [
        "Interview Cake worth $169",
        "Interview Buddy discount vouchers 90% off",
        "Taskade 5 year upgrades",
        "Seekho 50% discount coupons",
        "Balsamiq 90 day trial promo code",
        "Voiceflow coupon worth $50",
      ],
    },
    {
      image: "tezos.jpg",
      heading: "Tezos",
      desc: [
        "Best Dapp built on Portis gets Rs. 20,000",
        "Continuity grant opportunity up to 5,000 USD for an outstanding project.",
        "Every valid submission made in the Tezos track will be rewarded with exclusive Schwag Kits.",
      ],
    },
   
    {
      image: "polygon1.jpg",
      heading: "Polygon (Special Track)",
      desc: [
        "Best hack built on top of Ethereum during the hackathon gets Rs. 10,000",
        "For teams that integrate Matic in their hacks as well the prize money will be higher (Rs.15000) along with eligibility for internship/full-time role interviews and a chance to land seed funding of upto 5000 USD!",
        "Resources present on Devfolio hack page, register to know more.",
      ],
    },
    
    {
      image: "idea.jpg",
      heading:
        "Spartans(All participants who do a valid submission to the hack)",
      desc: [
        "Interview Cake worth $169",
        "Interview Buddy discount vouchers 90% off",
        "Taskade 5 year upgrades ",
        "Seekho 10% discount coupons",
        "Balsamiq 90 day trial promo code",
        "Voiceflow coupon worth $50",
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
