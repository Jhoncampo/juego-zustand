import { Container, Stack, Typography } from "@mui/material";
import JavaScriptLogo from "./JavaScriptLogo";
import Start from "./Start";
import { useQuestionsStore } from "./store/questions";
import Game from "./Game";

function App() {
  const questions = useQuestionsStore(state => state.questions)
  console.log(questions)
  return (
    <main>
      <Container style={{display: "flex", alignItems: "center", flexDirection:"column"}} maxWidth="md">
        <Stack
          direction="row"
          gap={2}
          alignItems="center"
          justifyContent="center"
        >
          <JavaScriptLogo />
          <Typography style={{fontSize: "2rem"}} variant="h2" component="h1">
            Preguntas de Morfología
          </Typography>
        </Stack>
        {questions.length === 0 && <Start/>}
        {questions.length > 0 && <Game/>}

      </Container>
    </main>
  );
}

export default App;
