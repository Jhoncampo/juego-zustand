import { Button } from "@mui/material";
import { useQuestionsData } from "./hook/useQuestionsData";
import { useQuestionsStore } from "./store/questions";

const Footer = () => {
  const { correct, incorrect, unanswered } = useQuestionsData();
  const reset = useQuestionsStore(state => state.reset)
  const sentEmail = useQuestionsStore(state => state.sentEmail)
  return (
    <footer style={{ marginTop: "16px" }}>
      <strong>{`✅ ${correct} Correctas - ❌ ${incorrect} Incorrectas -❓${unanswered} Sin responder`}</strong>
      <div style={{marginTop: "16px", display: "flex", alignItems: "center", justifyContent: "center"}}>
      <Button onClick={()  => reset()}>
        Resetear juego
      </Button>
      <Button onClick={()  => sentEmail()}>
        Enviar Respuestas
      </Button>
      </div>
    </footer>
  );
};

export default Footer;
