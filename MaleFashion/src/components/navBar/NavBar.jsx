import { Box, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LinkButton from "../Button/LinkButton";

const NavBar = () => {
  return (
    <Stack
      sx={{
        p: "25px",
        backgroundColor: "#fff",
        position: "sticky",
        top: "0",
        height: "80px",
        width: "100%",
        zIndex: "1",
      }}
      className=" shadow-1xl"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img
          src="/logo.png"
          alt=""
          style={{ width: "160px", height: "20px" }}
        />

        <Box
          sx={{
            display: "flex",
            gap: "30px",
            fontSize: "18",
            fontWeight: "700",
            color: "#111111",
          }}
        >
          <LinkButton to="/" name="Home" />
          <LinkButton to="/Shop" name="Shop" />
          <LinkButton to="/Blog" name="Blog" />
          <LinkButton to="/Contacts" name="Contacts" />
          <LinkButton to="/Pages" name="Pages" />
        </Box>

        <Box sx={{ display: "flex", gap: "10px" }}>
          <LinkButton icon=<SearchIcon /> />
          <LinkButton icon=<FavoriteIcon /> />
          <LinkButton to="/Cart" icon=<ShoppingBagIcon /> />
        </Box>
      </Box>
    </Stack>
  );
};

export default NavBar;
