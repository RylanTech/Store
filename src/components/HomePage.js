import { Card, Carousel, Container, Row } from "react-bootstrap"
import '../styles/HomePage.css'
import Recommended from "./Recommended"
import BestSellers from "./BestSellers"
import Footer from "./Footer"

function HomePage() {
    return (
        <>
            <Container>
                <Row>
                    <Carousel fade className="fpCaro">
                        <Carousel.Item>
                            <img src="https://images.unsplash.com/photo-1503437313881-503a91226402?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img src="https://images.unsplash.com/photo-1597733336794-12d05021d510?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" />
                        </Carousel.Item>
                    </Carousel>
                </Row>
                <Row>
                    <center>
                        <h1 className="rec">Recommended</h1>
                    </center>
                </Row>
                <Row>
                    <Recommended />
                </Row>
                <Row>
                    <center>
                        <h1 className="rec">Best Sellers</h1>
                    </center>
                </Row>
                <Row>
                    <BestSellers />
                </Row>
            </Container>
            <div className="ftr">
                <Container>
                <Row>
                    <Footer />
                </Row>
                </Container>
                <br />
                <br />
            </div>
        </>
    )
}
export default HomePage