import { Container, Nav, Row } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { Link, Outlet } from 'react-router-dom'
import '../styles/NavigationBar.css'
import { useEffect, useState } from 'react';

function NavigationBar() {
    const [screenSize, setScreenSize] = useState("");

    document.body.style = "background-color: rgb(30, 30, 33);"

    useEffect(() => {
        function handleResize() {
            const width = window.innerWidth;
            if (width < 768) {
                setScreenSize("small");
            } else {
                setScreenSize("large");
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    function getXml() {
        if (screenSize === "small") {
            return (
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand className='mainLogoShort' href="#home">
                            <img className='col-3 mainLogo' src='photos/RTECH.png' />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Link className='naviLink col-3 col-lg-3'>
                                    Home
                                </Link>
                                <Link className='naviLink col-6 col-lg-4'>
                                    All Products
                                </Link>
                                <Link className='naviLink col-3 col-lg-3'>
                                    Search
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            )
        } else {
            return (
                <Container>
                    <div className='naviBar'>
                        <Row>
                            <img className='col-3 col-lg-2 mainLogo' src='photos/RTECH.png' />
                            <div className='d-none d-lg-block col-lg-1'/>
                            <div className='col-6'>
                                <center>
                                    <Row>
                                        <Link className='naviLink col-3 col-lg-4 col-xl-3'>
                                            Home
                                        </Link>
                                        <Link className='naviLink col-6 col-lg-4 col-xl-6'>
                                            All Products
                                        </Link>
                                        <Link className='naviLink col-3 col-lg-4 col-xl-3'>
                                            Search
                                        </Link>
                                    </Row>
                                </center>
                            </div>
                            <div className='col-1' />
                            <div className='col-2 col-xl-1 flexBox'>
                                <span class="material-symbols-outlined gIcon">
                                    person
                                </span>
                                <span class="material-symbols-outlined gIcon">
                                    search
                                </span>
                            </div>
                        </Row>
                    </div>
                </Container>
            );
        }
    }
    return <div>{getXml()}</div>
}
export default NavigationBar