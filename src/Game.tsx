import {
  Card,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useQuestionsStore } from "./store/questions";
import SyntaxHighlighter from "react-syntax-highlighter";
import { gradientDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { type Question as QuestionType } from "./types";

const Question = ({ info }: { info: QuestionType }) => {

  const selectAnswer = useQuestionsStore(state => state.selectAnswer)

  const createHandleClick = (answerIndex: number) => () => {
    selectAnswer(info.id, answerIndex)
  }
  
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
      }}
    >
      <Typography variant="h5">{info.question}</Typography>
      <SyntaxHighlighter
        customStyle={{ width: "100%" }}
        language="javascript"
        style={gradientDark}
      >
        {info.code}
      </SyntaxHighlighter>
      <List disablePadding sx={{ bgcolor: "#333", width: "100%" }}>
        {info.answers.map((answer, index) => (
          <ListItem key={index} divider>
            <ListItemButton onClick={createHandleClick(index)}>
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
  const questionInfo = questions[currentQuestion];

  return (
    <>
      <Question info={questionInfo} />
    </>
  );
};

export default Game;
