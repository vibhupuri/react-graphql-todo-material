import React from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const deleteTodo = ((id) => gql`
 mutation{
  deleteTodo(id:${id})
  }
`)();
const deleteConfirm = (props) => <div>{console.log(props.result)}</div>;
export default graphql(deleteTodo)(deleteConfirm);
