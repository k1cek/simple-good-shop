import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Product from '../../assets/product.jpg';
import Badge from 'react-bootstrap/Badge'

const NewCard = ({activeclass}) => {
    return <Card className="mb-3" style={{ width: '15rem' }}>
    {/* <Card.Img variant="top" src="../.assets/product.jpg cap" /> */}
    <Card.Link href="#">
    <Card.Img src={Product}></Card.Img>
    </Card.Link>
    <Card.Body>
      <Card.Title>Szminka{activeclass==="active" ? <Badge variant="danger">Nowość!</Badge> : ""}</Card.Title>
      <Card.Text>
        Piekna szminka z lusterkiem gratis ;)
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroupItem>Cras justo odio</ListGroupItem>
    </ListGroup>
    <Card.Footer className="text-center">29zł</Card.Footer>
  </Card>
}

export default NewCard;