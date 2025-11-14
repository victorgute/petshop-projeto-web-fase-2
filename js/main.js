document.addEventListener('DOMContentLoaded', (event) => {
    
    const track = document.querySelector('.carousel-track');
    if (track) {
        const slides = Array.from(track.children);
        const nextButton = document.getElementById('nextButton');
        const prevButton = document.getElementById('prevButton');
        const slideWidth = slides[0].getBoundingClientRect().width;

        let currentIndex = 0;

        const moveToSlide = (targetIndex) => {
            track.style.transform = 'translateX(-' + slideWidth * targetIndex + 'px)';
            currentIndex = targetIndex;
        }

        nextButton.addEventListener('click', e => {
            let nextIndex = currentIndex + 1;
            if (nextIndex > slides.length - 1) {
                nextIndex = 0; 
            }
            moveToSlide(nextIndex);
        });

        prevButton.addEventListener('click', e => {
            let prevIndex = currentIndex - 1;
            if (prevIndex < 0) {
                prevIndex = slides.length - 1; 
            }
            moveToSlide(prevIndex);
        });

        setInterval(() => {
            let nextIndex = currentIndex + 1;
            if (nextIndex > slides.length - 1) {
                nextIndex = 0; 
            }
            moveToSlide(nextIndex);
        }, 5000); 
    }
    const formAgendamento = document.getElementById('formAgendamento');
    
    if (formAgendamento) {
        formAgendamento.addEventListener('submit', (e) => {
            e.preventDefault(); 
            
            const nomeCliente = document.getElementById('nomeCliente').value;
            const nomePet = document.getElementById('nomePet').value;
            
            alert(`Obrigado, ${nomeCliente}!\nSeu agendamento para ${nomePet} foi enviado com sucesso.`);
            
            formAgendamento.reset();
        });
    }

});