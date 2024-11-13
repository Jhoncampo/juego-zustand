import {
  Card,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { useQuestionsStore } from "./store/questions";
import { type Question as QuestionType } from "./types";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import Footer from "./Footer";

const getBackgroundColor = (info: QuestionType, index: number) => {
  const { correctAnswer, userSelectedAnswer } = info;

  // Usuario no ha seleccionado nada todavía
  if (userSelectedAnswer == null) return "transparent";
  // Si ya selecciono pero la solución es incorrecta
  if (index !== correctAnswer && index !== userSelectedAnswer)
    return "transparent";
  // Si esta es la solucción correcta
  if (index === correctAnswer) return "green";
  // Si esta es la selección del usuario pero no es correcta
  if (index === userSelectedAnswer) return "red";
  return "transparent";
};

const Question = ({ info }: { info: QuestionType }) => {
  const selectAnswer = useQuestionsStore((state) => state.selectAnswer);

  const createHandleClick = (answerIndex: number) => () => {
    selectAnswer(info.id, answerIndex);
  };

  return (
    <Card
      variant="outlined"
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "start",
        padding: "8px 16px",
        background: "#222",
        width: "100%"
      }}
    >
      <Typography style={{textAlign: "center"}} variant="h5">{info.question}</Typography>
      {/* <SyntaxHighlighter
        customStyle={{ width: "100%" }}
        language="javascript"
        style={gradientDark}
      >
        {info.code}
      </SyntaxHighlighter> */}
      <img style={{maxHeight: "300px", margin: "20px 0", borderRadius: "8px", maxWidth: "70%"}} src={`../public/image/dental/${info.image}`} alt="" />
      <List disablePadding sx={{ bgcolor: "#333", width: "100%" }}>
        {info.answers.map((answer, index) => (
          <ListItem key={index} divider>
            <ListItemButton
              disabled={info.userSelectedAnswer != null}
              sx={{ backgroundColor: getBackgroundColor(info, index) }}
              onClick={createHandleClick(index)}
            >
              <ListItemText primary={answer} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

const Game = () => {
  const questions = useQuestionsStore((state) => state.questions);
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion);
  const goNextQuestion = useQuestionsStore((state) => state.goNextQuestion);
  const goPreviousQuestion = useQuestionsStore(
    (state) => state.goPreviousQuestion
  );
  const questionInfo = questions[currentQuestion];

  return (
    <>
      <Stack
        direction="row"
        gap={2}
        alignItems="center"
        justifyContent="center"
        paddingY={1}
      >
        <IconButton
          onClick={goPreviousQuestion}
          disabled={currentQuestion === 0}
        >
          <ArrowBackIosNew />
        </IconButton>
        {currentQuestion + 1} / {questions.length}
        <IconButton
          onClick={goNextQuestion}
          disabled={currentQuestion >= questions.length - 1}
        >
          <ArrowForwardIos />
        </IconButton>
      </Stack>
      <Question info={questionInfo} />
      <Footer />
    </>
  );
};

export default Game;
