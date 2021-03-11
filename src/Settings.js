import * as React from "react";
import Typography from "@material-ui/core/Typography/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid/Grid";

export const Settings = ({ settings, setField }) => (
  <div
    style={{ display: "flex", flexDirection: "column", alignItems: "stretch" }}
  >
    <div style={{ marginTop: 76 }}>
      <Divider />
      <Grid container spacing={1} justify="center">
        <Grid item xs={4} direction="column">
          <Typography noWrap variant="h6">
            Username
          </Typography>
          <Typography noWrap variant="subtitle1">
            {settings.username}
          </Typography>
        </Grid>
        <Grid item xs={4} direction="column">
          <Typography style={{ marginLeft: "25%" }} noWrap variant="h6">
            ID
          </Typography>
          <Typography style={{ marginLeft: "25%" }} noWrap variant="subtitle1">
            {settings.id}
          </Typography>
        </Grid>
        <Grid item xs={4} direction="column">
          <Typography noWrap variant="h6">
            Website
          </Typography>
          <Typography noWrap variant="subtitle1">
            {settings.website}
          </Typography>
        </Grid>
      </Grid>
    </div>
    <div style={{ marginTop: 16 }}></div>
    <Grid container spacing={1} justify="center">
      <Grid item xs={4} direction="column">
        <Typography noWrap variant="h6">
          Phone
        </Typography>
        <Typography noWrap variant="subtitle1">
          {settings.phone}
        </Typography>
      </Grid>
      <Grid item xs={4} direction="column">
        <Typography style={{ marginLeft: "25%" }} noWrap variant="h6">
          Phone
        </Typography>
        <Typography noWrap variant="subtitle1">
          {settings.phone}
        </Typography>
      </Grid>
      <Grid item xs={4} direction="column">
        <Typography noWrap variant="h6">
          Email
        </Typography>
        <Typography noWrap variant="subtitle1">
          {settings.email}
        </Typography>
      </Grid>
    </Grid>
    <div style={{ marginTop: 16 }}>
      <Divider />
    </div>

    <div style={{ marginTop: 16 }}>
      <Typography noWrap variant="h6">
        Address
      </Typography>
    </div>

    <div style={{ marginTop: 16 }}>
      <Grid container spacing={1} justify="center">
        <Grid item xs={3} direction="column">
          <Typography noWrap variant="h6">
            Street
          </Typography>
          <Typography noWrap variant="subtitle1">
            {settings.address.street}
          </Typography>
        </Grid>
        <Grid item xs={3} direction="column">
          <Typography noWrap variant="h6">
            Suite
          </Typography>
          <Typography noWrap variant="subtitle1">
            {settings.address.suite}
          </Typography>
        </Grid>
        <Grid item xs={3} direction="column">
          <Typography noWrap variant="h6">
            City
          </Typography>
          <Typography noWrap variant="subtitle1">
            {settings.address.city}
          </Typography>
        </Grid>
        <Grid item xs={3} direction="column">
          <Typography noWrap variant="h6">
            Zip Code
          </Typography>
          <Typography noWrap variant="subtitle1">
            {settings.address.zipcode}
          </Typography>
        </Grid>
      </Grid>
    </div>
  </div>
);

export default Settings;
