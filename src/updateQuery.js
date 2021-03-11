import React from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const updateConfirm = (props) => <div result={props}></div>;

const updateTodo = (id, title, completed) => gql`
mutation{
updateTodo(id:${id},input:{title:${title},completed:${completed}}){id}
}
`;
export default graphql(updateTodo)(updateConfirm);
