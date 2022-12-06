import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import "./CategoryCards.css";
import CardImage1 from "../Image/banner-02.jpg.webp";
import CardImage2 from "../Image/banner-01.jpg.webp";
import CardImage3 from "../Image/banner-03.jpg.webp";

function Cards(props) {
  return (
    <Card className="card-radius">
      <Card.Img variant="top" src={props.img} />
      <Container style={{background: "#212529"}}>
      <Card.Title className="card-title">{props.title}</Card.Title>
        </Container>
    </Card>
  );
}

const CategoryCards = () => {
  return (
    <>
      <Container>
        <Row className="d-flex justify-content-evenly">
          <Col md={6} lg={4} className='mt-3'>
            <Cards title="Men" subtitle="New Arrivals" img={CardImage1} />
          </Col>
          <Col md={6} lg={4} className='mt-3'>
            <Cards title="Women" subtitle="New Arrivals" img={CardImage2}/>
          </Col>
          <Col md={6} lg={4} className='mt-3'>
            <Cards title="Accessories" subtitle="New Trend" img={CardImage3}/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CategoryCards;
