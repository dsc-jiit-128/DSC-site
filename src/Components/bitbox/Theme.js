import React from "react";
import { Typography, Container, Box, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    image: {
        maxWidth: "80%"
    },
    para: {
        fontSize: 20,
        maxWidth: "80%"
    },
    centerme: {
        display: "flex",
        justifyContent: "center"
    }
});

export default function Theme() {
    const classes = useStyles();
    return (
        <div>
            <Container className="mt-9">
                <Box className="team-sections">
                    <Typography
                        variant="h3"
                        align="center"
                        component="p"
                        className="dsc-font"
                        data-aos="flip-left"
                    >
                        <span>
                            Our Theme
                        </span>
                    </Typography>
                    <Grid
                        container
                        direction="row"
                        justify="space-around"
                        alignItems="flex-start"
                        spacing={10}
                        className="padupbottom"
                        data-aos= "flip-down"
                    >
                        <Grid xs={12} md={5} className={classes.centerme}>
                            <p className={classes.para}>Our Theme is based on the 17 Sustainable Development Goals (SDGs) agreed upon by all 193 United Nations Member States aim to end poverty, ensure prosperity, and protect the planet.</p>
                        </Grid>
                        <Grid xs={12} md={7} >
                            <a href="https://developers.google.com/community/dsc-solution-challenge/UN-goals" target="_blank" className={classes.centerme}>
                                <img className={classes.image} src={require("../../images/bitbox/theme.png")} alt="Our-Theme"/>    
                            </a>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

        </div>
    );
}