import { Drawer, styled } from "@mui/material";
import SideContent from "./SideContent";

const StyledDrawer = styled(Drawer)`
  margin-top: 70px;
`;

const SideBar = ({ openDrawer }) => {
  return (
    <StyledDrawer
      anchor="left"
      open={openDrawer}
      hideBackdrop={true}
      ModalProps={{
        keepMounted: true,
      }}
      variant="persistent"
      sx={{
        "& .MuiDrawer-paper": {
          width: 200,
          borderRight: "none",
          background: "#F8FCFF",
          marginTop: "5vw",
          height: "calc(100vh - 64px)",
        },
      }}
    >
      <SideContent />
    </StyledDrawer>
  );
};

export default SideBar;