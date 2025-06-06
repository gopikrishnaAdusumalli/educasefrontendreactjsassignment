
import { useNavigate } from 'react-router-dom'

import './index.css'

import {LandingScreenContainer,LandingHeading,LandingParagraph,LandingButtonContainer,CrateAccountButton,AlreadyAccountButton} from './styledComponents'

const LandingScreen = () => {
    const navigate = useNavigate()
    return(
        <LandingScreenContainer>
        <LandingHeading>Welcome to PopX

        </LandingHeading>
        <LandingParagraph>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,</LandingParagraph>
        <LandingButtonContainer>
            <CrateAccountButton type = "button" onClick = {() => navigate("/signup-screen")}>Create Account</CrateAccountButton>
            <AlreadyAccountButton type = "button" onClick= {() => navigate("/login-screen")}>Already Registered? Login</AlreadyAccountButton>

        </LandingButtonContainer>

        </LandingScreenContainer>
        

    )
}

export default LandingScreen