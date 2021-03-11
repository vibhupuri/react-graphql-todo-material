import React from "react";
import { render } from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton/IconButton";
import ArrowBackIOS from "@material-ui/icons/ArrowBackIos";
import blue from "@material-ui/core/colors/blue";

import { List } from "@material-ui/core";
import "./app.css";
import UserListContainer from "./queries";
import { Playground } from "./Playground";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#c3ced4" },
    secondary: blue
  }
});

const client = new ApolloClient({
  uri: "https://graphqlzero.almansi.me/api"
});
const App = () => {
  const [pageState, setPageState] = React.useState({
    page: "default",
    firstname: "",
    username: "",
    lastname: "",
    id: "",
    website: "",
    phone: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: ""
    },
    todos: []
  });
  return (
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}>
        <div>
          <AppBar position="static">
            <Toolbar>
              <p></p>

              {pageState.page !== "default" ? (
                <IconButton
                  onClick={() => {
                    setPageState({ page: "default" });
                  }}
                  edge="start"
                  color="inherit"
                  aria-label="arrowback"
                >
                  <ArrowBackIOS fontSize="small" />
                </IconButton>
              ) : null}
              <Typography
                style={{ fontWeight: 590 }}
                variant="subheading"
                color="inherit"
              >
                {pageState.page !== "default" ? "Back to Users" : "Users List"}
              </Typography>
            </Toolbar>
          </AppBar>
          {pageState.page !== "default" ? (
            <Playground pageState={pageState} />
          ) : (
            <List>
              <UserListContainer pageState={setPageState}></UserListContainer>
            </List>
          )}
        </div>
      </MuiThemeProvider>
    </ApolloProvider>
  );
};

render(<App />, document.getElementById("root"));
