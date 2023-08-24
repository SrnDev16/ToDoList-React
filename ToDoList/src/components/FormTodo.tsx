import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import RenderLists from "./RenderLists";
import { v4 as uuidv4 } from "uuid";
import AlertComponents from "./AlertComponents";
import "./Styles.css"

const FormTodo = () => {
  const [todo, setTodo] = useState<string>("");
  const [list, setLists] = useState<any[]>([]);
  const [alert, setAlert] = useState<any>({ show: false, smg: "", color: "" });
  const [checkEdit, setCheckEdit] = useState<boolean>(false);
  const [editId, setEditId] = useState<string>("");

  const submitTodo = (e: any) => {
    e.preventDefault();
    if (!todo) {
      setAlert({ show: true, smg: "กรุณากรอกข้อมูล", color: "red" });
    } else if (checkEdit && todo) {
      const result = list.map((item) => {
        if (item.id === editId) {
          return { ...item, title: todo };
        }
        return item;
      });
      setLists(result);
      setTodo("");
      setCheckEdit(false);
      setEditId("");
      setAlert({ show: true, smg: "บันทึกข้อมูลเรียบร้อย", color: "orange" });
    } else {
      const newList = {
        id: uuidv4(),
        title: todo,
      };
      setLists([...list, newList]);
      setTodo("");
      setAlert({ show: true, smg: "บันทึกข้อมูลเรียบร้อย", color: "orange" });
    }
  };

  const removeItem = (id: string) => {
    const newLists = list.filter((item) => item.id !== id);
    setLists(newLists);
    setAlert({ show: true, smg: "ลบข้อมูลเรียบร้อย", color: "orange" });
  };

  const editItem = (id: string) => {
    setCheckEdit(true);
    setEditId(id);
    const item = list.find((item) => item.id === id);
    setTodo(item.title);
  };

  return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          height: "100vh",
        }}
        className="container"
      >
        <Box
          sx={{
            p: 4,
            boxShadow: 5,
            width: "500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 3,
          }}
          className="todo-container"
        >
          <Typography variant="h3" sx={{ mb: 2 }}>
            รายการที่ต้องทำ
          </Typography>
          <AlertComponents alert={alert} data={list} setAlert={setAlert} />
          <form onSubmit={submitTodo}>
            <Stack
              direction={"row"}
              spacing={1}
              justifyContent="space-around"
              alignItems="center"
              className="form"
            >
              <TextField
                id="outlined-basic"
                label="รายการ"
                variant="outlined"
                onChange={(e) => {
                  setTodo(e.target.value);
                }}
                value={todo}
                sx={{width: 350, bgcolor:"white"}}
              />
              <Button
                variant="contained"
                type="submit"
                sx={{ height: 50,width: 100}}
              >
                {checkEdit ? "แก้ไขข้อมูล" : "บันทึก"}
              </Button>
            </Stack>
          </form>
          <RenderLists data={list} onDelete={removeItem} onEdit={editItem} />
        </Box>
      </Box>
  );
};

export default FormTodo;
