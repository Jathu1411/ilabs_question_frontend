import { Dropdown } from "react-bootstrap";
import axios from "axios";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteQuestion } from "../redux/actions/questionAction";
import { useEffect } from "react";
const DropMenu = (props) => {
  const dispatch = useDispatch();
  const deleteQuestionAPI = async (id) => {
    await axios
      .delete(`http://localhost:4000/questions/delete/${id}`)
      .then((res) => {
        console.log(res);
        dispatch(deleteQuestion(id));
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Actions
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href={`/question/${props.id}`}>View</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Deactivate</Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            deleteQuestionAPI(props.id);
          }}
        >
          Delete
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropMenu;
