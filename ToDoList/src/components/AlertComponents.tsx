import { Box, Typography } from "@mui/material";
import { useEffect } from "react";

type alertProps = {
  alert: {
    show: boolean;
    smg: string;
    color: string;
  };
  data: {}[];
  setAlert: any;
};

const AlertComponents = ({ alert, data, setAlert }: alertProps) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert({ show: false, smg: "", color: "" });
    }, 2000);
    return ()=>clearTimeout(timeOut);
  }, [data]);
  return (
    <Box
      display={alert.show ? "block" : "none"}
      sx={{
        bgcolor:`${alert.color}`,
        padding: "4px 8px",
        mb: 2,
        width: "60%",
        textAlign: "center",
        borderRadius: 1,
      }}
    >
      <Typography variant="body1">{alert.smg}</Typography>
    </Box>
  );
};

export default AlertComponents;
