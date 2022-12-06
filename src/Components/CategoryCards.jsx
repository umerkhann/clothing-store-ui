import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from "react-bootstrap"
import './CategoryCards.css'




function Cards(props){
    return(
        <>
        <Card className='mt-4 card-radius '>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle>
        <Card.Text>
          Image will be pasted here later!
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
        </>
    )
}

const CategoryCards = () => {
    return(
        <>
        <Container>
        <Row className='d-flex justify-content-evenly'>
            <Col md={6} lg={4}><Cards title='Men' subtitle='New Arrivals'/></Col>
            <Col md={6} lg={4}><Cards title='Women' subtitle='New Arrivals'/></Col>
            <Col md={6} lg={4}><Cards title='Accessories' subtitle='New Trend'/></Col>
        </Row>
        </Container>
        </>
    );
}

export default CategoryCards;