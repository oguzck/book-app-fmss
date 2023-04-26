import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Details from './Details';

export default function BookList({ bookList }) {
  const [showModal, setShowModal] = useState(false); // Modal bileşeninin açık veya kapalı olduğunu belirleyen durum değişkeni
  const [selectedBook, setSelectedBook] = useState(null);
  const handleModalClose = () => setShowModal(false);
  const handleDetailsClick = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  }; // Details butonuna tıklandığında yapılacak işlemler
  return (
    <Container className="my-5">
      <Row >
        <Col></Col>
        <Col md={8}>
          <Row>
            {bookList?.items?.map((book) => (
              <Col md={3} key={book.id} className="mb-4">
                <Card style={{ height: '400px', position: 'relative' }}>
                  {book.volumeInfo.imageLinks ? (
                    <Card.Img
                      variant="top"
                      src={book.volumeInfo.imageLinks.smallThumbnail}
                      alt={book.volumeInfo.title}
                      style={{ objectFit: 'contain' }}
                    />
                  ) : (
                    <Card.Img
                      variant="top"
                      src="https://storiavoce.com/wp-content/plugins/lightbox/images/No-image-found.jpg"
                      style={{ objectFit: 'contain' }}
                    />
                  )}
                  <Card.Body style={{ position: 'absolute', bottom: '0', width: '100%', backgroundColor: 'white', padding: '1rem' }}>
                    <Card.Title className='fs-6'>{book.volumeInfo.title}</Card.Title>
                    <Button onClick={() => handleDetailsClick(book)}>Details</Button>{' '}
                    <Button href={book.volumeInfo.previewLink} target="_blank">Preview</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        <Col></Col>
      </Row>
      {selectedBook && (
        <Details show={showModal} handleClose={handleModalClose} book={selectedBook} />
      )}
    </Container>
  );
}
