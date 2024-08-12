import { Button } from "@mui/material";
import { useQuestionsData } from "./hook/useQuestionsData";
import { useQuestionsStore } from "./store/questions";

const Footer = () => {
  const { correct, incorrect, unanswered } = useQuestionsData();
  const reset = useQuestionsStore((state) => state.reset);
  return (
    <footer style={{ marginTop: "16px" }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <p style={{ textAlign: "center" }}>{`✅ ${correct} Correctas`}</p>
        <p style={{ textAlign: "center" }}>{`❌ ${incorrect} Incorrectas`}</p>
        <p style={{ textAlign: "center" }}>{`❓${unanswered} Sin responder`}</p>
      </div>
      <div
        style={{
          margin: "16px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button onClick={() => reset()}>Resetear juego</Button>
      </div>
    </footer>
  );
};

export default Footer;
