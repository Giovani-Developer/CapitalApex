document.addEventListener('DOMContentLoaded', function() {
    const link1 = document.getElementById("link1"); //Home
    const link2 = document.getElementById("link2"); //caracteristicas
    const link3 = document.getElementById("link3"); //Planos
    const link4 = document.getElementById("link4"); //Sobre

    // Configurar os eventos de clique para os links
    if (link1) {
        link1.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    if (link2) {
        link2.addEventListener('click', (e) => {
            e.preventDefault();
            const header = document.querySelector('.header');  
            if (header){  
            header.scrollIntoView({ behavior: 'smooth'});
            }
        });
    }
    
    if (link3) {
        link3.addEventListener('click', (e) => {
            e.preventDefault();
            const pricing = document.querySelector('.pricing');
            if (pricing) {
                pricing.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    if (link4) {
        link4.addEventListener('click', (e) => {
            e.preventDefault();
            const footer = document.querySelector('footer');
            if (footer) {
                footer.scrollIntoView({ behavior: 'smooth'});
            }
        });
    }

    if (Telegram) {
        Telegram.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('https://mail.google.com/mail/u/0/?tab=rm&ogbl#search/support%40bull-ex.com', '_blank');
        });
    }

    if (bullex) {
        bullex.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('https://trade.bull-ex.com/pt/register?aff=746737&aff_model=revenue&afftrack=', '_blank');
        });
    }

    if (youtube) {
        youtube.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('https://www.youtube.com/@CapitalApexob', '_blank');
    });
}

    if (instagram) {
        instagram.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('https://www.instagram.com/capitalapexob/?utm_source=ig_web_button_share_sheet', '_blank');
        })
    }

    if (suporte) {
        suporte.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('', '_blank');
        })
    }
    // Função para rolar até o elemento
    function scrollToElement(elementSelector, instance = 0) {
        const elements = document.querySelectorAll(elementSelector);
        if (elements.length > instance) {
            elements[instance].scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Scroll trigger para adicionar a classe "visible"
    const sections = document.querySelectorAll('.section');
    const scrollTrigger = () => {
        sections.forEach(section => {
            if (section.getBoundingClientRect().top < window.innerHeight * 0.85) {
                section.classList.add('visible');
            }
        });
    };

    // Configurar o menu mobile
    const menuBtn = document.getElementById("menubtn");
    const menuLinks = document.getElementById("menu-link");
    
    if (menuBtn && menuLinks) {
        menuBtn.addEventListener("click", function() {
            menuLinks.classList.toggle("active");
           
            
    
    });};
    
    // Executar scrollTrigger ao carregar e durante a rolagem
    window.addEventListener('scroll', scrollTrigger);
    scrollTrigger();
});