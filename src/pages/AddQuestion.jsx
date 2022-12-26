import React from "react";
import { Form, Button } from "react-bootstrap";

const AddQuestion = () => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Question</Form.Label>
        <Form.Control type="text" placeholder="Enter Question" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" placeholder="Enter Category" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Status</Form.Label>
        <Form.Control type="text" placeholder="Enter Status" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddQuestion;
