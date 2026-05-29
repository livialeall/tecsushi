    // Seleciona os itens do menu e as seções
    const menuItems = document.querySelectorAll('nav li');
    const sections = document.querySelectorAll('main section');

    menuItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            if (index === 0 && sections[0]) {
                scrollToAndAnimate(sections[0]);
            } else if (index === 1) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (index === 2) {
                const footer = document.querySelector('footer');
                window.scrollTo({ top: footer.offsetTop, behavior: 'smooth' });
            }
        });
    });

    const toast = document.createElement('div');
    toast.className = 'toast-container';
    toast.innerText = 'Pedido feito!';
    document.body.appendChild(toast);

    const btnPecaJa = document.getElementsByClassName('pecaja_button')[0];
    if (btnPecaJa) {
        btnPecaJa.addEventListener('click', () => {
            console.log('Pedido feito!');
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        });
    }    
    function scrollToAndAnimate(targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
        });

        sections.forEach(sec => sec.classList.remove('section-active'));
        targetSection.classList.add('section-active');
        
        setTimeout(() => {
            targetSection.classList.remove('section-active');
        }, 600);
    }