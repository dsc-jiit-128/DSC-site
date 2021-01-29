import React from 'react';
import { Typography, Container, Box} from "@material-ui/core";

const Devfolio = ()=>{
    return (
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
                        Apply with Devfolio
                    </span>
                </Typography>
                <Box style={{height:"200px", width:"100%", display:"flex", alignItems:"center", justifyContent:"center"}} data-aos="fade-in">
                    {/* TODO:: change the slug */}
                    <div 
                    class="apply-button" 
                    data-hackathon-slug="YOUR-HACKATHON-SLUG" 
                    data-button-theme= "light"
                    style={{height: "44px", width: "312px"}}
                    ></div>
                </Box>
            </Box>
        </Container>
    );
}

export default Devfolio;