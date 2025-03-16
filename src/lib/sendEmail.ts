import axios from "axios";

export const sendAnswers = async (email: string) => {
  try {
    await axios.post("https://api-preguntas-ia.vercel.app/api/send-email", {
      to: email,
      subject: "Respuestas",
      html: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultados de Inteligencia Artificial</title>
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
            color: #007bff;
            text-align: center;
        }
        .question {
            margin: 20px 0;
            padding: 15px;
            background-color: #f9f9f9;
            border-left: 5px solid #007bff;
        }
        .correct-answer {
            color: #007bff;
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
        <h1>Resultados de Inteligencia Artificial</h1>

        <div class="question">
            <strong>1. ¿Qué es la Inteligencia Artificial (IA)?</strong>
            <p class="correct-answer">✅ Una rama de la informática que busca crear máquinas inteligentes</p>
        </div>

        <div class="question">
            <strong>2. ¿Cuál de los siguientes es un ejemplo de IA en la vida diaria?</strong>
            <p class="correct-answer">✅ Asistentes virtuales como Siri o Alexa</p>
        </div>

        <div class="question">
            <strong>3. ¿Qué es el aprendizaje automático (Machine Learning)?</strong>
            <p class="correct-answer">✅ Un subcampo de la IA que permite a las máquinas aprender de los datos</p>
        </div>

        <div class="question">
            <strong>4. ¿Qué es un chatbot?</strong>
            <p class="correct-answer">✅ Un programa que simula conversaciones humanas</p>
        </div>

        <div class="question">
            <strong>5. ¿Qué empresa desarrolló el modelo de lenguaje ChatGPT?</strong>
            <p class="correct-answer">✅ OpenAI</p>
        </div>

        <div class="question">
            <strong>6. ¿Cómo se entrena una IA?</strong>
            <p class="correct-answer">✅ Con grandes volúmenes de datos</p>
        </div>

        <div class="question">
            <strong>7. ¿Qué es la ética en la IA?</strong>
            <p class="correct-answer">✅ El estudio de los impactos morales y sociales de la IA</p>
        </div>

        <div class="question">
            <strong>8. ¿Qué es la robótica en IA?</strong>
            <p class="correct-answer">✅ La combinación de inteligencia artificial con robots físicos</p>
        </div>

        <div class="question">
            <strong>9. ¿Cuál es una ventaja de la IA en la educación?</strong>
            <p class="correct-answer">✅ Personalización del aprendizaje</p>
        </div>

        <div class="question">
            <strong>10. ¿Cuál es un ejemplo de IA en la medicina?</strong>
            <p class="correct-answer">✅ Diagnóstico asistido por IA</p>
        </div>

        <div class="footer">
            <p>Enviado por AI Learning</p>
        </div>
    </div>
</body>
</html>



`,
    });


    // Cerrar modal después de enviar
  } catch (error: any) {
    console.log(error);
  }
};
