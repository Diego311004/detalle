(function () {
    const track = document.getElementById('carousel-track');
    const indicators = document.getElementById('carousel-indicators');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    // Configuración: usando tus 15 fotos con frases románticas
    const slidesData = [
        { src: 'assets/foto1.jpg', caption: 'Mi amor, contigo cada día tiene magia.' },
        { src: 'assets/foto2.jpg', caption: 'Mi princesa, mi vida, mi todo.' },
        { src: 'assets/foto3.jpg', caption: 'Mi vida, tus abrazos son mi hogar.' },
        { src: 'assets/foto4.jpg', caption: 'Princesa, eres mi sueño hecho realidad.' },
        { src: 'assets/foto5.jpg', caption: 'Mi amor, cada momento contigo es perfecto.' },
        { src: 'assets/foto6.jpg', caption: 'Mi vida, tu sonrisa ilumina mi mundo.' },
        { src: 'assets/foto7.jpg', caption: 'Princesa, eres mi inspiración constante.' },
        { src: 'assets/foto8.jpg', caption: 'Mi amor, contigo el tiempo se detiene.' },
        { src: 'assets/foto9.jpg', caption: 'Mi vida, cada latido dice tu nombre.' },
        { src: 'assets/foto10.jpg', caption: 'Princesa, eres la razón de mi felicidad.' },
        { src: 'assets/foto11.jpg', caption: 'Mi amor, cada día te amo más que ayer.' },
        { src: 'assets/foto12.jpg', caption: 'Mi vida, contigo todo tiene sentido.' },
        { src: 'assets/foto13.jpg', caption: 'Princesa, eres mi estrella de la mañana.' },
        { src: 'assets/foto14.jpg', caption: 'Mi amor, eres mi refugio y mi hogar.' },
        { src: 'assets/foto15.jpg', caption: 'Mi vida, contigo cada día es una aventura.' }
    ];

    const phrases = [
        'Mi amor, eres el sueño que no quiero despertar.',
        'Princesa, si existes, lo demás es sencillo.',
        'Te elijo hoy, mañana y siempre, mi vida.',
        'Mi amor, mi princesa, mi vida: mi todo.',
        'Tu risa es mi melodía favorita, princesa.',
        'Cada latido dice tu nombre, mi amor.',
        'Mi vida, contigo cada día es una aventura.',
        'Princesa, tu sonrisa ilumina mi mundo.',
        'Mi amor, eres mi refugio y mi hogar.',
        'Mi vida, contigo el tiempo se detiene.',
        'Princesa, eres la razón de mi felicidad.',
        'Mi amor, cada día te amo más que ayer.',
        'Mi vida, eres mi inspiración constante.',
        'Princesa, contigo todo tiene sentido.',
        'Mi amor, eres mi estrella de la mañana.',
        'Mi vida, eres la melodía de mi corazón.',
        'Princesa, cada abrazo tuyo es un paraíso.',
        'Mi amor, contigo el mundo se vuelve mágico.',
        'Mi vida, eres mi rosa favorita que nunca se marchita.',
        'Princesa, tu amor es mi fuerza y mi paz.',
        'Mi amor, eres mi mariposa que revolotea en mi alma.',
        'Mi vida, contigo cada momento es perfecto.',
        'Princesa, eres mi luna que ilumina mis noches.',
        'Mi amor, tu sonrisa es mi sol de cada día.',
        'Mi vida, eres mi universo completo y mi todo.'
    ];

    // Render de slides
    slidesData.forEach(({ src, caption }) => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        const img = document.createElement('img');
        img.src = src;
        img.alt = caption;
        const cap = document.createElement('div');
        cap.className = 'caption';
        cap.textContent = caption;
        slide.appendChild(img);
        slide.appendChild(cap);
        track.appendChild(slide);
    });

    // Indicadores
    slidesData.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.className = 'dot' + (idx === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Ir a la diapositiva ${idx + 1}`);
        dot.addEventListener('click', () => goTo(idx));
        indicators.appendChild(dot);
    });

    // Frases
    const phrasesList = document.getElementById('phrases-list');
    phrases.forEach(text => {
        const li = document.createElement('li');
        li.textContent = text;
        phrasesList.appendChild(li);
    });

    let current = 0;
    let autoplayTimer = null;
    const DURATION = 5000;

    function update() {
        track.style.transform = `translateX(-${current * 100}%)`;
        document.querySelectorAll('.dot').forEach((d, i) => {
            d.classList.toggle('active', i === current);
        });
    }

    function goTo(index) {
        current = (index + slidesData.length) % slidesData.length;
        update();
        restartAutoplay();
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    nextBtn.addEventListener('click', next);
    prevBtn.addEventListener('click', prev);

    // Gestos táctiles
    let startX = 0;
    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    }, { passive: true });
    track.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        if (endX - startX > 40) prev();
        if (startX - endX > 40) next();
    });

    function startAutoplay() {
        autoplayTimer = setInterval(next, DURATION);
    }

    function stopAutoplay() {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
    }

    function restartAutoplay() {
        stopAutoplay();
        startAutoplay();
    }

    // Pausa al pasar el mouse
    track.addEventListener('mouseenter', stopAutoplay);
    track.addEventListener('mouseleave', startAutoplay);

    // Inicio
    update();
    startAutoplay();

    // Crear corazones flotantes
    function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '💕';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
        heart.style.animationDelay = Math.random() * 2 + 's';
        
        document.getElementById('floating-hearts').appendChild(heart);
        
        // Remover el corazón después de la animación
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 8000);
    }

    // Crear corazones cada 2 segundos
    setInterval(createFloatingHeart, 2000);
    
    // Crear algunos corazones iniciales
    for (let i = 0; i < 5; i++) {
        setTimeout(createFloatingHeart, i * 400);
    }
})();


