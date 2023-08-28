import { Button, Container, Form, ListGroup, Row } from "react-bootstrap"
import '../styles/Footer.css'
import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer>
            <Container>
                <Row className="footerRow">
                    <div className="col-12 col-md-6">
                        <h2>
                            <b className="gitP">WANT TO HEAR FROM US?</b>
                        </h2>
                    </div>
                    <div className="col-12 col-md-6">
                        <h2>
                            <div className="nsl">
                                <b className="subscibeToNews">Subscribe to our newsletter!</b>
                                <Form>
                                    <Form.Control className="text-center" placeholder="Enter email"></Form.Control>
                                    <Button type="submit" variant="success" className="subButton">Subscribe</Button>
                                </Form>
                            </div>
                        </h2>
                    </div>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer