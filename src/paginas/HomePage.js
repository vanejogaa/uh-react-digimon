import { Container } from "react-bootstrap";
import ImagenDigimon from "../assets/images/digimon.jpg";


export default function HomePage(){

    return (
        <Container>
            <h1></h1>
            <img src={ImagenDigimon} style={{ maxWidth: '150%' }}></img>
        </Container>
    )
}