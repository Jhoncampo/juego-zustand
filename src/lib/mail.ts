import nodemailer from "nodemailer";
import 'dotenv/config';

// Interface para enviar correos
interface SendEmailInterface {
  to: string;
  subject: string;
  html: string;
}

// Función para enviar los correos
const sendEmail = async (values: SendEmailInterface) => {
  try {
    const PASSWORDEMAIL = process.env.PASSWORDEMAIL;
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "morfologia965@gmail.com",
        pass: PASSWORDEMAIL,
      },
    });
    const emailOpciones = {
      from: `Mofología <morfologia965@gmail.com>`,
      ...values,
    };
    await transporter.sendMail(emailOpciones);
  } catch (error) {
    console.error("Error enviando email:", error);
  }
};

// Enviar correo de las respuestas
export const sendAnswersEmail = async () => {
  await sendEmail({
    to: "eduardcamayo13@gmail.com",
    subject: "Answers",
    html: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultados de Morfología Dental</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            padding: 20px;
        }
        .container {
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            margin: 0 auto;
        }
        h1 {
            color: #36a147;
            text-align: center;
        }
        .question {
            margin: 20px 0;
            padding: 15px;
            background-color: #f9f9f9;
            border-left: 5px solid #36a147;
        }
        .correct-answer {
            color: #36a147;
            font-weight: bold;
        }
        .footer {
            text-align: center;
            margin-top: 20px;
            font-size: 12px;
            color: #777;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Resultados de Morfología Dental</h1>
        <div class="question">
            <strong>1. ¿Cuál es la función principal de los incisivos?</strong>
            <p class="correct-answer">✅ Cortar los alimentos</p>
        </div>
        <div class="question">
            <strong>2. ¿Cuántos caninos hay en una dentadura humana completa?</strong>
            <p class="correct-answer">✅ 4</p>
        </div>
        <div class="question">
            <strong>3. ¿Cuál es la función principal de los molares?</strong>
            <p class="correct-answer">✅ Moler los alimentos</p>
        </div>
        <div class="question">
            <strong>4. ¿Cómo se llaman los dientes que aparecen después de los primeros molares en la etapa adulta?</strong>
            <p class="correct-answer">✅ Premolares</p>
        </div>
        <div class="question">
            <strong>5. ¿Qué tipo de dientes se utilizan para desgarrar la comida?</strong>
            <p class="correct-answer">✅ Caninos</p>
        </div>
        <div class="question">
            <strong>6. ¿Cuál de los siguientes dientes tiene una sola raíz?</strong>
            <p class="correct-answer">✅ Incisivo</p>
        </div>
        <div class="question">
            <strong>7. ¿Qué característica distingue a los molares superiores?</strong>
            <p class="correct-answer">✅ Tres raíces</p>
        </div>
        <div class="question">
            <strong>8. ¿Cuántas raíces tienen típicamente los premolares inferiores?</strong>
            <p class="correct-answer">✅ Una</p>
        </div>
        <div class="question">
            <strong>9. ¿Cómo se llaman los últimos dientes en erupcionar, generalmente entre los 17 y 25 años?</strong>
            <p class="correct-answer">✅ Muelas del juicio</p>
        </div>
        <div class="question">
            <strong>10. ¿Cuál es la función principal de los premolares?</strong>
            <p class="correct-answer">✅ Triturar y desgarrar los alimentos</p>
        </div>
        <div class="footer">
            <p>Enviado por Nodemailer</p>
        </div>
    </div>
</body>
</html>
`,
  });
};
