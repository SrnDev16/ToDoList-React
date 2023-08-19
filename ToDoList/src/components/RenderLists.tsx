import { Box, IconButton, Stack, Typography } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";

type renderProps = {
  data: {
    id: number;
    title: string;
  }[];
  onDelete: any,
  onEdit: any
};

const RenderLists = ({ data, onDelete , onEdit}: renderProps) => {
  return (
    <Box sx={{ width: "100%", p: 2, mt: 2 }}>
      {data.map((val) => {
        return (
          <Box
            sx={{
              width: "auto",
              p: 2,
              mt: 2,
              bgcolor: "whitesmoke",
              borderRadius: 1,
              border: "1px solid #cccccc",
              height: "50px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            key={val.id}
          >
            <Typography variant="body1">{val.title}</Typography>
            <Stack spacing={2} direction={"row"}>
              <IconButton onClick={()=> onEdit(val.id)} color="success">
                <EditNoteIcon />
              </IconButton>
              <IconButton onClick={() => onDelete(val.id)} color="error">
                <DeleteIcon />
              </IconButton>
            </Stack>
          </Box>
        );
      })}
    </Box>
  );
};

export default RenderLists;
