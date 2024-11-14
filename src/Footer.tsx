import { Button, Container } from "@mui/material";
import { useQuestionsData } from "./hook/useQuestionsData";
import { useQuestionsStore } from "./store/questions";
import ButtonSendAnswers from "./components/ButtonSendAnswers";

const Footer = () => {
  const { correct, incorrect, unanswered } = useQuestionsData();
  const reset = useQuestionsStore((state) => state.reset);
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion);
  const questions = useQuestionsStore((state) => state.questions);

  //const sentEmail = useQuestionsStore(state => state.sentEmail)
  return (
    <footer style={{ marginTop: "16px" }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          alignItems: "center"
        }}
      >
        <strong>{`✅ ${correct} Correctas`}</strong>
        <strong>{`❌ ${incorrect} Incorrectas`}</strong>
        <strong>{`❓${unanswered} Sin responder`}</strong>
      </Container>
      <div
        style={{
          marginTop: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button onClick={() => reset()}>Resetear juego</Button>
        {currentQuestion === questions.length - 1 && <ButtonSendAnswers />}
      </div>
    </footer>
  );
};

export default Footer;
