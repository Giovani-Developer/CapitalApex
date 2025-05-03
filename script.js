document.addEventListener('DOMContentLoaded', function() {
    const link1 = document.getElementById("link1"); //Home
    const link2 = document.getElementById("link2"); //caracteristicas
    const link3 = document.getElementById("link3"); //Planos
    const link4 = document.getElementById("link4"); //Sobre
    const Telegram = document.getElementById("Telegram");
    const bullex = document.getElementById("bullex");
    const youtube = document.getElementById("youtube");
    const instagram = document.getElementById("instagram");
    const suporte = document.getElementById("suporte");
    
    // Função para fechar o menu mobile
    function closeMenu() {
        const menuLinks = document.getElementById("menu-link");
        if (menuLinks && menuLinks.classList.contains("active")) {
            menuLinks.classList.remove("active");
        }
    }

    // Configurar os eventos de clique para os links
    if (link1) {
        link1.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            closeMenu(); // Fecha o menu após clicar
        });
    }
    
    if (link2) {
        link2.addEventListener('click', (e) => {
            e.preventDefault();
            const header = document.querySelector('.header');  
            if (header){  
                header.scrollIntoView({ behavior: 'smooth'});
            }
            closeMenu(); // Fecha o menu após clicar
        });
    }
    
    if (link3) {
        link3.addEventListener('click', (e) => {
            e.preventDefault();
            const pricing = document.querySelector('.pricing');
            if (pricing) {
                pricing.scrollIntoView({ behavior: 'smooth' });
            }
            closeMenu(); // Fecha o menu após clicar
        });
    }

    if (link4) {
        link4.addEventListener('click', (e) => {
            e.preventDefault();
            const footer = document.querySelector('footer');
            if (footer) {
                footer.scrollIntoView({ behavior: 'smooth'});
            }
            closeMenu(); // Fecha o menu após clicar
        });
    }

    if (Telegram) {
        Telegram.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('https://t.me/+WIttYMMfJEVmMWMx', '_blank');
            closeMenu(); // Fecha o menu após clicar
        });
    }

    if (bullex) {
        bullex.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('https://trade.bull-ex.com/pt/register?aff=746737&aff_model=revenue&afftrack=', '_blank');
            closeMenu(); // Fecha o menu após clicar
        });
    }

    if (youtube) {
        youtube.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('https://www.youtube.com/@CapitalApexob', '_blank');
            closeMenu(); // Fecha o menu após clicar
        });
    }

    if (instagram) {
        instagram.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('https://www.instagram.com/capitalapexob/?utm_source=ig_web_button_share_sheet', '_blank');
            closeMenu(); // Fecha o menu após clicar
        });
    }

    if (suporte) {
        suporte.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('https://mail.google.com/mail/u/0/?tab=rm&ogbl#search/support%40bull-ex.com', '_blank');
            closeMenu(); // Fecha o menu após clicar
        });
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
        });
        
        // Opcional: Fechar o menu ao clicar fora dele
        document.addEventListener('click', function(e) {
            if (menuLinks.classList.contains('active') && 
                !menuLinks.contains(e.target) && 
                e.target !== menuBtn && 
                !menuBtn.contains(e.target)) {
                menuLinks.classList.remove('active');
            }
        });
    }
    
    // Executar scrollTrigger ao carregar e durante a rolagem
    window.addEventListener('scroll', scrollTrigger);
    scrollTrigger();

    const toggleBtn = document.getElementById('toggle-theme');
    const isDark = localStorage.getItem('theme') === 'dark';

    if (isDark) document.body.classList.add('dark');

    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const current = document.body.classList.contains('dark') ? 'dark' : 'light';
        localStorage.setItem('theme' , current);
    })


    
    const toggleBtnMenu = document.getElementById('toggle-theme-menu');
    const isDarkMenu = localStorage.getItem('theme') === 'dark';

    if (isDarkMenu) document.body.classList.add('dark');

    toggleBtnMenu.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const current = document.body.classList.contains('dark') ? 'dark' : 'light';
        localStorage.setItem('theme' , current);
    })


});