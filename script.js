document.addEventListener('DOMContentLoaded', () => {
  // 1. Sombra na Navbar ao rolar
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

  // 2. Menu Hambúrguer (Mobile)
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // 3. Envio do Formulário para o WhatsApp
  const contatoForm = document.getElementById('contatoForm');
  if (contatoForm) {
    contatoForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const nomeInput = document.getElementById('nome');
      const emailInput = document.getElementById('email');
      const servicoInput = document.getElementById('servico');
      const mensagemInput = document.getElementById('mensagem');

      const nome = nomeInput ? nomeInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const servico = servicoInput ? servicoInput.value : '';
      const mensagem = mensagemInput ? mensagemInput.value.trim() : '';

      let texto = `Olá! Me chamo *${nome}*.\n`;
      if (email) texto += `E-mail: ${email}\n`;
      if (servico) texto += `Serviço de interesse: *${servico}*\n`;
      texto += `Detalhes/Aparelho: ${mensagem}`;

      const url = `https://wa.me/5535987025719?text=${encodeURIComponent(texto)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  }

  // 4. Animação suave ao rolar a página
  const animatedElements = document.querySelectorAll('.service-card, .diff-card, .visual-card, .contato-item');
  if (animatedElements.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity .45s ease, transform .45s ease';
      observer.observe(el);
    });
  }
});