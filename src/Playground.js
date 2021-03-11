import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Settings from "./Settings";
import ProfileView from "./ProfileView";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import Grid from "@material-ui/core/Grid/Grid";
import { IconButton, List, ListItem } from "@material-ui/core";
import CreateConfirm from "./createQuery";
import deleteConfirm from "./deleteQuery";

export class Playground extends React.Component {
  constructor(props) {
    super(props);
    this.removeTask.bind(this);
  }

  getListItem = (title, complete) => (
    <ListItem itemRef={this.state.taskList.length}>
      <Grid container>
        <Grid item xs={7} direction="column">
          {title === "New Task" ? (
            <CreateConfirm></CreateConfirm>
          ) : (
            <Typography noWrap variant="subtitle1">
              {complete ? <s>{title}</s> : title}
            </Typography>
          )}
        </Grid>
        <Grid item xs={3} direction="column">
          <Typography noWrap variant="subtitle1">
            <IconButton
              onClick={(e) => {
                this.completeTask(e);
                this.setState({});
              }}
            >
              <DoneIcon />
            </IconButton>
          </Typography>
        </Grid>
        <Grid item xs={2} direction="column">
          <Typography noWrap variant="subtitle1">
            <IconButton
              onClick={(e) => {
                e.persist();
                this.removeTask(e);
                this.setState({});
              }}
            >
              <ClearIcon />
            </IconButton>
          </Typography>
        </Grid>
      </Grid>
    </ListItem>
  );
  state = {
    firstName: this.props.pageState.firstname,
    lastName: this.props.pageState.lastname,
    username: this.props.pageState.username,
    showInitials: true,
    backgroundStyle: "gradient",
    id: this.props.pageState.id,
    website: this.props.pageState.website,
    phone: this.props.pageState.phone,
    email: this.props.pageState.email,
    address: {
      street: this.props.pageState.address.street,
      suite: this.props.pageState.address.suite,
      city: this.props.pageState.address.city,
      zipcode: this.props.pageState.address.zipcode
    },
    todos: this.props.pageState.todos,
    taskList: []
  };

  setField = (name, value) => {
    this.setState(() => ({ [name]: value }));
  };
  addTask = (title, complete) => {
    this.state.taskList.push(this.getListItem(title, complete));
  };
  completeTask = (e) => {
    e.persist();
    e.target.closest("li").querySelector("h6").style.textDecoration =
      "line-through";
  };
  removeTask = (e) => {
    let index1 = e.target.closest("li").getAttribute("itemref");
    e.target.closest("li").querySelector("h6").style.textDecoration = "";
    this.setState({
      taskList: this.state.taskList.filter(
        (item) => item.props.itemRef != index1
      )
    });
  };
  render() {
    return (
      <div style={{ display: "flex", flexWrap: "wrap-reverse" }}>
        <div style={{ flex: "1 1 auto", margin: 20, minWidth: 300 }}>
          <Card>
            <CardContent>
              <ProfileView settings={this.state} />

              <Settings settings={this.state} setField={this.setField} />
            </CardContent>
          </Card>
        </div>
        <div style={{ flex: "1 1 auto", margin: 20, minWidth: 300 }}>
          <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={11} direction="column">
                  <Typography variant="title">To-Do's </Typography>
                </Grid>
                <Grid item xs={1} direction="column">
                  <IconButton
                    onClick={() => {
                      this.addTask("New Task", false);
                      this.setState({});
                    }}
                    color="secondary"
                  >
                    <AddCircleOutlineIcon></AddCircleOutlineIcon>
                  </IconButton>
                </Grid>
              </Grid>
              <List>
                {this.state.taskList.length == 0
                  ? (() => {
                      this.state.todos.map((item) =>
                        this.addTask(item.title, item.completed)
                      );
                      return this.state.taskList.map((item) => item);
                    })()
                  : this.state.taskList.map((item) => item)}
              </List>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}
