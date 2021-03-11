import React from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { List, ListItem } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const getUsers = gql`
  {
    users {
      data {
        name
        username
        id
        website
        phone
        email
        address {
          street
          suite
          city
          zipcode
        }
        todos {
          data {
            id
            title
            completed
          }
        }
      }
    }
  }
`;

const UserListContainer = (props) => (
  <div>
    {props.data.users
      ? props.data.users.data.map((item) => (
          <List>
            <ListItem>
              <Grid container>
                <Grid item xs={4}>
                  <p></p>
                </Grid>
                <Grid item xs={4}>
                  <Card
                    onClick={() => {
                      props.pageState({
                        page: "user",
                        firstname: item.name.split(" ")[0],
                        lastname: item.name.split(" ")[1],
                        username: item.username,
                        id: item.id,
                        website: item.website,
                        phone: item.phone,
                        email: item.email,
                        address: {
                          street: item.address.street,
                          suite: item.address.suite,
                          city: item.address.city,
                          zipcode: item.address.zipcode
                        },
                        todos: item.todos.data
                      });
                    }}
                  >
                    <CardContent>
                      <Typography noWrap variant="title">
                        {item.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <p></p>
                </Grid>
              </Grid>
            </ListItem>
          </List>
        ))
      : null}
  </div>
);
export default graphql(getUsers)(UserListContainer);
