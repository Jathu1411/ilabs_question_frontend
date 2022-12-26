import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import DropMenu from "./DropMenu";
const ListTable = () => {
  const questions = useSelector((state) => state.allQuestions.questions);

  const renderList = questions.map((question, index) => {
    return (
      <tr key={question._id}>
        <td>{index + 1}</td>
        <td>{question.question}</td>
        <td>{question.category}</td>
        <td>{question.status}</td>
        <td>{<DropMenu id={question._id} />}</td>
      </tr>
    );
  });

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Question</th>
          <th>Category</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{renderList}</tbody>
    </Table>
  );
};

export default ListTable;
