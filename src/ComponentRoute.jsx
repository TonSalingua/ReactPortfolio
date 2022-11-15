import React from "react";
import { Route } from "@mui/icons-material";

const ComponentRoute = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default ComponentRoute;
