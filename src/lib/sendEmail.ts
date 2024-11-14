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
        <div class="question">
            <strong>11. ¿Cuántos dientes tiene un adulto?</strong>
            <p class="correct-answer">✅ 32 dientes</p>
        </div>
        <div class="question">
            <strong>12. ¿Qué nombre recibe lo que protege nuestros dientes?</strong>
            <p class="correct-answer">✅ Esmalte dental</p>
        </div>
        <div class="question">
            <strong>13. ¿Dónde se encuentra la pulpa del diente?</strong>
            <p class="correct-answer">✅ En el interior del diente</p>
        </div>
        <div class="question">
            <strong>14. Menciona un material que se utiliza para una impresión dental</strong>
            <p class="correct-answer">✅ Alginatos y siliconas dentales</p>
        </div>
        <div class="question">
            <strong>15. ¿Qué hace un mecánico dental?</strong>
            <p class="correct-answer">✅ Diseña, elabora, fabrica y prepara prótesis dentales</p>
        </div>
        <div class="question">
            <strong>16. ¿Cuántas caras tiene un diente anterior?</strong>
            <p class="correct-answer">✅ Presenta cuatro caras</p>
        </div>
        <div class="question">
            <strong>17. ¿Cuántas caras tiene un diente posterior?</strong>
            <p class="correct-answer">✅ Presenta cinco caras</p>
        </div>
        <div class="question">
            <strong>18. ¿Cómo se llama la reacción del yeso al endurecer?</strong>
            <p class="correct-answer">✅ Fraguado</p>
        </div>
        <div class="question">
            <strong>19. ¿Cuál es la función del diente canino con los alimentos?</strong>
            <p class="correct-answer">✅ Desgarrar</p>
        </div>
        <div class="question">
            <strong>20. ¿Qué material utilizamos como fuente de calor para encerar los dientes?</strong>
            <p class="correct-answer">✅ Mechero</p>
        </div>
        <div class="question">
            <strong>21. ¿Cómo se clasifican los dientes por morfología?</strong>
            <p class="correct-answer">✅ Incisivos, caninos, premolares y molares</p>
        </div>
        <div class="question">
            <strong>22. ¿Cuáles son las divisiones del diente?</strong>
            <p class="correct-answer">✅ Corona, cuello y raíz</p>
        </div>
        <div class="question">
            <strong>23. Mencione los tipos de dentición</strong>
            <p class="correct-answer">✅ Temporal y permanente</p>
        </div>
        <div class="question">
            <strong>24. ¿Qué es la corona anatómica?</strong>
            <p class="correct-answer">✅ Parte del diente que está cubierta por esmalte</p>
        </div>
        <div class="question">
            <strong>25. ¿Qué es una fosa?</strong>
            <p class="correct-answer">✅ Depresión amplia y un poco profunda en la superficie del diente</p>
        </div>
        <div class="question">
            <strong>26. ¿Qué es el surco de desarrollo?</strong>
            <p class="correct-answer">✅ Depresión oclusal que separa cúspides unas de otras</p>
        </div>
        <div class="question">
            <strong>27. ¿Qué es una cúspide?</strong>
            <p class="correct-answer">✅ Elevación de esmalte que tiene su cimiento en la dentina</p>
        </div>
        <div class="question">
            <strong>28. ¿Qué es el borde cervical?</strong>
            <p class="correct-answer">✅ Ligera elevación de esmalte por encima de la línea cervical</p>
        </div>
        <div class="question">
            <strong>29. ¿Qué son los mamelones?</strong>
            <p class="correct-answer">✅ Es la parte terminal del lóbulo</p>
        </div>
        <div class="question">
            <strong>30. ¿Cuáles son las caras proximales?</strong>
            <p class="correct-answer">✅ Distal y mesial</p>
        </div>
        <div class="question">
            <strong>31. ¿Cuál de los siguientes metales se utiliza comúnmente como núcleo para una corona dental debido a su biocompatibilidad y resistencia a la corrosión?</strong>
            <p class="correct-answer">✅ Oro</p>
        </div>
        <div class="question">
            <strong>32. ¿Qué propiedad de una aleación dental es esencial para garantizar un buen ajuste de una prótesis fija?</strong>
            <p class="correct-answer">✅ Expansión térmica</p>
        </div>
        <div class="question">
            <strong>33. ¿Cuál de los siguientes procesos se utiliza para unir dos piezas metálicas en una prótesis dental?</strong>
            <p class="correct-answer">✅ Soldadura</p>
        </div>
        <div class="question">
            <strong>34. ¿Qué tipo de aleación dental se caracteriza por su alta resistencia a la corrosión y su uso en prótesis fijas de larga duración?</strong>
            <p class="correct-answer">✅ Aleaciones base cobalto-cromo</p>
        </div>
        <div class="question">
            <strong>35. ¿Cuál de los siguientes factores puede afectar la resistencia de una aleación dental?</strong>
            <p class="correct-answer">✅ Todas las anteriores</p>
        </div>
        <div class="question">
            <strong>36. ¿Qué tipo de corrosión se produce cuando una aleación dental entra en contacto con saliva y forma una película de óxido?</strong>
            <p class="correct-answer">✅ Corrosión uniforme</p>
        </div>
        <div class="question">
            <strong>37. ¿Cuál es la principal función del revestimiento en el proceso de fundición de una prótesis dental?</strong>
            <p class="correct-answer">✅ Todas las anteriores</p>
        </div>
        <div class="question">
            <strong>38. ¿Qué tipo de aleación dental se utiliza comúnmente para fabricar armazones de prótesis removibles?</strong>
            <p class="correct-answer">✅ Aleaciones base cobalto-cromo</p>
        </div>
        <div class="question">
            <strong>39. ¿Cuál de los siguientes tratamientos térmicos se utiliza para aumentar la dureza de una aleación dental?</strong>
            <p class="correct-answer">✅ Endurecimiento por precipitación</p>
        </div>
        <div class="question">
            <strong>40. ¿Qué propiedad de una aleación dental es importante para garantizar una buena estética de una restauración dental?</strong>
            <p class="correct-answer">✅ Color</p>
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
