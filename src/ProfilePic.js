import * as React from "react";

const getInitials = (settings) =>
  settings.firstName.charAt(0).toUpperCase() +
  settings.lastName.charAt(0).toUpperCase();

const ProfilePic = ({ settings }) => {
  return (
    <div
      id="bigProfilePic"
      style={{
        width: 150,
        height: 150,
        borderRadius: "100%",
        background: "hsl(193deg 64% 47%)",
        margin: 16,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div
        style={{
          fontSize: 70,
          fontFamily: "Roboto",
          color: "#fff",
          zIndex: 10
        }}
      >
        {settings.showInitials && getInitials(settings)}
      </div>
    </div>
  );
};

export default ProfilePic;
