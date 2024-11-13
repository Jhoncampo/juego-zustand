import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { useState } from "react";
import { TextField, Typography } from "@mui/material";
import { sendAnswers } from "../lib/sendEmail";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 390,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};

export default function ButtonSendAnswers() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState<string>(""); 

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmitAnswers = async (event: React.FormEvent) => {
    event.preventDefault(); 
    setLoading(true);
    setError(""); 
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Por favor ingresa un correo electrónico válido.");
      setLoading(false);
      return;
    }

    try {
      await sendAnswers(email)
      setEmail("")
      setOpen(false);
    } catch (error: any) {
      if (error.response) {
        setError(`Error del servidor: ${error.response.status} - ${error.response.data}`);
      } else if (error.request) {
        setError("No se recibió respuesta del servidor. Intenta nuevamente.");
      } else {
        setError(`Hubo un problema al enviar el correo: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button onClick={handleOpen}>Resultados</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography sx={{ marginBottom: "10px" }}>
              Ingresa tu correo electrónico para enviar las respuestas
            </Typography>

            <form onSubmit={handleSubmitAnswers} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <TextField
                id="outlined-email-input"
                label="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                fullWidth
                required
              />

              {error && (
                <Typography sx={{ color: "red", fontSize: "12px" }}>
                  {error}
                </Typography>
              )}

              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={loading}
                sx={{ marginTop: "10px" }}
              >
                {loading ? "Enviando..." : "Enviar"}
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
