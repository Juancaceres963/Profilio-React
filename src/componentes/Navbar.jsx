import styled from "styled-components"
import { Burguer } from "./Burguer";

export function Navbar() {
    return (
        <NavContainer>
            <h2>Navbar <span>Responsive</span></h2>
            <div>
                <a href="/">Home</a>
                <a href="/">My Services</a>
                <a href="/">About Me</a>
                <a href="/">My Work</a>
                <a href="/">Contact</a>
            </div>
            <div className="burguer">
            <Burguer/>
            </div>
            
        </NavContainer>
    )
}

const NavContainer = styled.nav`
    h2{
        color: white;
        font-weight: 400;
        span{
            font-weight: bold;
        }
    }
    display: flex;
    padding: .4rem;
    background-color: #333;
    align-items: center;
    justify-content: space-between;
    a{
        color: white;
        text-decoration: none;
        margin-right: 1rem;
    }
.burguer{
    @media(min-width: 768px){
        display: none;
    }
}
`