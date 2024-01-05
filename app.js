function toggleAnswer(questionId, answerId, imgId) {
    const question = document.getElementById(questionId);
    const answer = document.getElementById(answerId);
    const img = document.getElementById(imgId);
    const cardFloting = document.querySelector('.card-floting');

    question.addEventListener('click', () => {
        // Verifica si hay alguna respuesta activa antes de hacer cambios
        const anyAnswerActive = document.querySelector('.card-floting .card-body .box .answer.active');

        // Remueve la clase 'bottom' si no hay ninguna respuesta activa
        if (!anyAnswerActive) {
            cardFloting.classList.remove('bottom');
        }

        // Cambia la clase y la ruta de la imagen
        answer.classList.toggle('active');
        img.src = answer.classList.contains('active')
            ? './assets/images/icon-minus.svg'
            : './assets/images/icon-plus.svg';

        // Agrega la clase 'bottom' si hay alguna respuesta activa
        if (anyAnswerActive && answer.classList.contains('active')) {
            cardFloting.classList.add('bottom');
        }
    });
}

toggleAnswer('question1', 'answer1', 'img1');
toggleAnswer('question2', 'answer2', 'img2');
toggleAnswer('question3', 'answer3', 'img3');
toggleAnswer('question4', 'answer4', 'img4');
