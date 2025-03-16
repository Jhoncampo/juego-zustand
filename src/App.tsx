import { Container, Stack, Typography } from "@mui/material";
import Start from "./Start";
import { useQuestionsStore } from "./store/questions";
import Game from "./Game";

function App() {
  const questions = useQuestionsStore((state) => state.questions);
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
            src="https://cd.empresataxis.online/logo-ia.webp"
            alt=""
          />
          <Typography sx={{ fontSize: "1.7rem" }} component="h1">
            Preguntas sobre la inteligencia artificial (IA)
          </Typography>
        </Stack>
        {questions.length === 0 && <Start />}
        {questions.length > 0 && <Game />}
      </Container>
    </main>
  );
}

export default App;
