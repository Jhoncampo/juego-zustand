import axios from "axios";

export const sendAnswers = async (email: string) => {
  try {
    const res = await axios.post(
      "https://api-preguntas-morfologia.vercel.app/api/send-email",
      {
        to: email,
        subject: "Respuestas",
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
            <strong>1. ¿La morfología dental es una parte de la anatomía humana, que estudia los dientes, los tejidos de sostén y los elementos anatómicos circundantes?</strong>
            <p class="correct-answer">✅ Verdadero</p>
        </div>

        <div class="question">
            <strong>2. ¿A cuántos grados comienza la acción de la temperatura a manifestarse sobre el diente produciendo grietas en el esmalte?</strong>
            <p class="correct-answer">✅ 400 C°</p>
        </div>

        <div class="question">
            <strong>3. ¿La ortodoncia es la que trata de reestablecer la anatomía dentaria a través de restauraciones de piezas careadas?</strong>
            <p class="correct-answer">✅ Falso</p>
        </div>

        <div class="question">
            <strong>4. ¿El esmalte del diente es de origen?</strong>
            <p class="correct-answer">✅ Ectodérmico</p>
        </div>

        <div class="question">
            <strong>5. ¿La dentición temporaria por cuántos dientes se encuentra conformada?</strong>
            <p class="correct-answer">✅ 20</p>
        </div>

        <div class="question">
            <strong>6. ¿El cemento del diente se encuentra en la?</strong>
            <p class="correct-answer">✅ Raíz</p>
        </div>

        <div class="question">
            <strong>7. ¿Cuál es el tejido más duro del diente?</strong>
            <p class="correct-answer">✅ Esmalte</p>
        </div>

        <div class="question">
            <strong>8. ¿Los dientes temporales también se les conoce como dientes caducos?</strong>
            <p class="correct-answer">✅ Verdadero</p>
        </div>

        <div class="question">
            <strong>9. ¿Cuáles son los dientes que tienen la función de desgarrar los alimentos fibrosos?</strong>
            <p class="correct-answer">✅ Caninos</p>
        </div>

        <div class="question">
            <strong>10. ¿Los molares superiores de acuerdo a su número de cúspides son?</strong>
            <p class="correct-answer">✅ Multicuspídeos</p>
        </div>

        <div class="footer">
            <p>Enviado por Dental Cali</p>
        </div>
    </div>
</body>
</html>

`,
      }
    );

    console.log("Correo enviado exitosamente:", res.data);

    // Cerrar modal después de enviar
  } catch (error: any) {
    console.log(error);
  }
};
