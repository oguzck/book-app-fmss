import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function Details(props) {
  const { show, handleClose, book } = props;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{book.volumeInfo.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>Author:</strong> {book.volumeInfo.authors}</p>
        <p><strong>Publisher:</strong> {book.volumeInfo.publisher}</p>
        <p><strong>Published Date:</strong> {book.volumeInfo.publishedDate}</p>
        <p><strong>Language:</strong> {book.volumeInfo.language}</p>
        <p><strong>Page Count:</strong> {book.volumeInfo.pageCount}</p>
        <p><strong>Categories:</strong> {book.volumeInfo.categories}</p>
        <p><strong>Description:</strong> {book.volumeInfo.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Details;
