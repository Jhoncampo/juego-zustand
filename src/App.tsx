import { Container, Stack, Typography } from "@mui/material";
import Start from "./Start";
import { useQuestionsStore } from "./store/questions";
import Game from "./Game";

function App() {
  const questions = useQuestionsStore((state) => state.questions);
  console.log(questions);
  return (
    <main>
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          padding: "20px 12px"
        }}
        maxWidth="md"
      >
        <Stack
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
          }}
        >
          <img
            style={{ height: "60px", borderRadius: "6px" }}
            src="https://dental.empresataxis.online/logo.png"
            alt=""
          />
          <Typography sx={{ fontSize: "1.7rem" }} component="h1">
            Preguntas de Morfología
          </Typography>
        </Stack>
        {questions.length === 0 && <Start />}
        {questions.length > 0 && <Game />}
      </Container>
    </main>
  );
}

export default App;
