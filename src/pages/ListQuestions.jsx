import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setQuestions } from "../redux/actions/questionAction";
import { Button } from "react-bootstrap";
import axios from "axios";
import ListTable from "../components/ListTable";

const ListQuestions = () => {
  const questions = useSelector((state) => state.allQuestions.questions);
  const dispatch = useDispatch();

  const fetchQuestions = async () => {
    const response = await axios
      .get("http://localhost:4000/questions/getAll")
      .catch((err) => console.log(err));
    dispatch(setQuestions(response.data));
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  console.log(questions);

  return (
    <div>
      <Button href="/add">Add Question</Button>
      <ListTable />
    </div>
  );
};

export default ListQuestions;
