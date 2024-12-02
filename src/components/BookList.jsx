import { Component } from 'react';
import SingleBook from './SingleBook';
import { Col, Form, Row } from 'react-bootstrap';
import CommentArea from './CommentArea';

class BookList extends Component {
  state = {
    searchQuery: '',
    selectedAsin: null, 
  };

  handleBookSelect = (asin) => {
    this.setState({ selectedAsin: asin });
  };

  render() {
    return (
      <Row className="mt-5">
        {/* Colonna Sinistra - Griglia dei libri */}
        <Col xs={12} md={8} className="text-center">
          <Form.Group className="mb-3">
            <Form.Control
              type="search"
              placeholder="Cerca un libro"
              value={this.state.searchQuery}
              onChange={(e) => this.setState({ searchQuery: e.target.value })}
            />
          </Form.Group>
          <Row className="g-2">
            {this.props.books
              .filter((b) =>
                b.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
              )
              .map((b) => (
                <Col xs={12} md={4} lg={3} key={b.asin}>
                  <SingleBook book={b} onBookSelect={this.handleBookSelect} />
                </Col>
              ))}
          </Row>
        </Col>

        {/* Colonna Destra - CommentArea */}
        <Col xs={12} md={4}>
          {this.state.selectedAsin ? (
            <CommentArea asin={this.state.selectedAsin} />
          ) : (
            <p>Seleziona un libro se vuoi visualizzare i commenti </p>
          )}
        </Col>
      </Row>
    );
  }
}

export default BookList;

