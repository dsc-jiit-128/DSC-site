import { Container } from '@material-ui/core'
import React from 'react'
import Section4 from '../landing-page/Section4'
import FAQ from './FAQ'
import Hero from './Hero'
import Schedule from './Schedule'
import Sponsor from './Sponsor'
import Speakers from './Speakers'
import Prizes from './prizes'
import Theme from './Theme'
import SponsorUs from './SponsorUs';
import CommunityPartners from './CommunityPartners';
import './bitbox.scss'

export default function BitBox({isDark}) {
    return (
        <div>
            <Hero isDark={isDark}/>
            <Speakers dark={isDark} />
            <Schedule isDark={isDark}/>
            <Prizes/>
            <Theme />
            <Sponsor/>
            <FAQ/>
            <CommunityPartners />
            <SponsorUs />
            <Container id="contact">
            <Section4 isDark={isDark}/>
            </Container>
        </div>
    )
}
