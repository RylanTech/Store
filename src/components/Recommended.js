import { Card, Carousel } from "react-bootstrap"
import { Link } from "react-router-dom"
import '../styles/Recommended.css'

function Recommended() {
    let products = [
        {
            "title": "Headphones",
            "price": "$59.99",
            "url": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },
        {
            "title": "Pi",
            "price": "$39.99",
            "url": "https://plus.unsplash.com/premium_photo-1672243970579-8cd2d0e9e0b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        },
        {
            "title": "iPhone 14",
            "price": "$1199.99",
            "url": "https://images.unsplash.com/photo-1609177393985-804cd5f98670?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        },
        {
            "title": "Pixel 7",
            "price": "$799.99",
            "url": "https://media.cnn.com/api/v1/images/stellar/prod/220721123138-google-pixel-6a-17.jpg?c=16x9&q=h_720,w_1280,c_fill"
        },
        {
            "title": "Headphones",
            "price": "$59.99",
            "url": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },
        {
            "title": "Pi",
            "price": "$39.99",
            "url": "https://plus.unsplash.com/premium_photo-1672243970579-8cd2d0e9e0b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        },
        {
            "title": "iPhone 14",
            "price": "$1199.99",
            "url": "https://images.unsplash.com/photo-1609177393985-804cd5f98670?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        },
        {
            "title": "Pixel 7",
            "price": "$799.99",
            "url": "https://media.cnn.com/api/v1/images/stellar/prod/220721123138-google-pixel-6a-17.jpg?c=16x9&q=h_720,w_1280,c_fill"
        }
    ]

    function listProducts() {
        const cardGroups = []
        for (let i = 0; i < products.length; i += 4) {
            cardGroups.push(products.slice(i, i + 4))
        }
        return cardGroups.map((group, index) => (
            <Carousel.Item key={index}>
                <div className="row">
                    {group.map((pro, cardIndex) => (
                        <div key={cardIndex} className="col-12 col-md-3">
                            <Link className="productLink">
                                <Card className="productCard">
                                    <Card.Body>
                                        <Card.Img className="productCardImg" src={pro.url} />
                                        <div className="shortProductDes">
                                            <Card.Title>{pro.title}</Card.Title>
                                            <Card.Subtitle className="priceText">from {pro.price}</Card.Subtitle>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
            </Carousel.Item>
        ))
    }

    return (
        <Carousel slide={4} className="recProductCaro" wrap={false}>
            {listProducts()}
        </Carousel>
    )
}

export default Recommended
