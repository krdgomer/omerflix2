import { Box } from "@mui/system";
import "./header.css";
import { Avatar } from "@mui/material";
import { HeaderButton, SearchField } from "../../../util/styles";

function Header() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "10vh",
        backgroundColor: "#2e1e3f",
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ margin: "2vh", display: "flex" }}>
        <img src="src/assets/logo.png" alt="logo" className="headerLogo" />
        <div style={{ display: "flex" }}>
          <HeaderButton variant="text">Filmler</HeaderButton>

          <HeaderButton variant="text">Diziler</HeaderButton>

          <HeaderButton variant="text">Top Rated</HeaderButton>

          <HeaderButton variant="text">Diziler</HeaderButton>
        </div>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", margin: "2vh" }}>
        <SearchField />
        <Avatar src="/broken-image.jpg" />
      </Box>
    </Box>
  );
}

export default Header;
