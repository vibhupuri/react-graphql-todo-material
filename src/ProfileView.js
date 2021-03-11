import * as React from "react";
import Typography from "@material-ui/core/Typography";
import ProfilePic from "./ProfilePic";

export const ProfileView = ({ settings }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "left"
    }}
  >
    <ProfilePic settings={settings} />
    <Typography style={{ marginLeft: "2%" }} variant="title">
      {settings.firstName} {settings.lastName}
    </Typography>
  </div>
);

export default ProfileView;
