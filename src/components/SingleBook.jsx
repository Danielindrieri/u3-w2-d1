import { Component } from 'react';
import { Card } from 'react-bootstrap';

class SingleBook extends Component {
  render() {
    return (
      <Card
        onClick={() => this.props.onBookSelect(this.props.book.asin)}
        style={{
          border: '2px solid',
          borderColor: this.props.selected ? 'red' : 'transparent',
          cursor: 'pointer',
        }}
      >
        <Card.Img variant="top" src={this.props.book.img} style={{ width: '100%', height: '240px' }} />
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>{this.props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
