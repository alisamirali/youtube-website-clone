import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";

import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: "0",
      justifyContent: "space-between",
    }}
  >
    <Link
      to="/"
      style={{ display: "flex", alignItem: "center", color: "#fff" }}
    >
      <img src="/youtube.png" alt="Logo" style={{ width: "3rem" }} />
    </Link>

    <SearchBar />
  </Stack>
);

export default Navbar;
