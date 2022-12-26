import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectedQuestion } from "../redux/actions/questionAction";
import { Form } from "react-bootstrap";

const ViewQuestion = () => {
  const { id } = useParams();
  const question = useSelector((state) => state.question);
  console.log(question);
  const dispatch = useDispatch();
  const fetchProductDetail = async () => {
    const response = await axios
      .get(`http://localhost:4000/questions/get/${id}`)
      .catch((err) => console.log(err));
    dispatch(selectedQuestion(response.data.data));
  };
  useEffect(() => {
    if (id && id !== "") fetchProductDetail();
  }, [id]);

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Question</Form.Label>
        <Form.Control type="text" value={question.question} readOnly />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" value={question.category} readOnly />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Status</Form.Label>
        <Form.Control type="text" value={question.status} readOnly />
      </Form.Group>
    </Form>
  );
};

export default ViewQuestion;
