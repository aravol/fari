import Fab from "@material-ui/core/Fab";
import React from "react";

export const AppFab: React.FC<{ onClick: () => void }> = props => {
  return (
    <Fab
      color="secondary"
      style={{
        position: "fixed",
        zIndex: 1,
        bottom: "5rem",
        right: "2rem"
      }}
      {...props}
    />
  );
};
