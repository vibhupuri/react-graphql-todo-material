import React from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import Typography from "@material-ui/core/Typography";
const createTodo = gql`
  mutation {
    createTodo(input: { title: "New Task", completed: true }) {
      id
    }
  }
`;
const CreateConfirm = (props) => (
  <Typography noWrap variant="subtitle1">
    {props.result ? "createMutation called Successfully" : "mutation failed!"}
  </Typography>
);

export default graphql(createTodo)(CreateConfirm);
