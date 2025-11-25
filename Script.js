// Dados das suítes
      const suitesData = {
        luxo: {
          title: "Suíte Luxo",
          image:
            "https://s2-casavogue.glbimg.com/lSailhCYV748Pvn_DE-NAAXYM9I=/0x0:3000x1500/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2022/r/4/ER1FBjRxAJ9IO8QCNHoQ/maior-suite-de-cruzeiro-de-luxo-do-mundo-tem-cama-de-r-1-milhao-spa-e-mais-conheca-2-.jpg",
          description:
            "Desfrute do máximo conforto com nossa Suíte Luxo, que oferece uma vista deslumbrante para as montanhas.",
          features: [
            "Cama Queen Size com lençóis de algodão egípcio",
            "Hidromassagem privativa",
            "Varanda com vista panorâmica",
            "Café da manhã incluso servido no quarto",
            "Banheiro com aquecimento e amenities naturais",
            "TV de tela plana e sistema de som",
          ],
          price: "R$ 450/noite",
        },
        premium: {
          title: "Suíte Premium",
          image:
            "https://finger.ind.br/wp-content/uploads/2022/11/2j4a8163-hdr-1024x683.jpg",
          description:
            "Nossa Suíte Premium combina o charme rústico com o conforto moderno em um ambiente espaçoso.",
          features: [
            "Decoração em madeira maciça e pedra natural",
            "Varanda exclusiva com rede e vista para o jardim",
            "Lareira interna",
            "Área de estar separada",
            "Banheira de imersão com óleos essenciais",
            "Cafeteira e minibar com produtos regionais",
          ],
          price: "R$ 580/noite",
        },
        master: {
          title: "Suíte Master",
          image:
            "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=800&q=60",
          description:
            "A experiência definitiva de luxo e romance em nossa Suíte Master, perfeita para casais.",
          features: [
            "Jacuzzi privativa com vista para o vale",
            "Serviço de quarto 24 horas",
            "Cama King Size com dossel",
            "Varanda com ofurô e área de descanso",
            "Decoração exclusiva com obras de arte locais",
            "Adega privativa com seleção de vinhos",
            "Check-in e check-out VIP",
          ],
          price: "R$ 750/noite",
        },
      };

      // Modal de reserva
      const reservaModal = document.getElementById("reserva-modal");
      const openReservaBtn = document.getElementById("open-reserva");
      const openReservaHeroBtn = document.getElementById("open-reserva-hero");
      const closeModalBtn = document.getElementById("close-modal");

      function openModal() {
        reservaModal.classList.add("active");
      }

      function closeModal() {
        reservaModal.classList.remove("active");
      }

      openReservaBtn.addEventListener("click", openModal);
      openReservaHeroBtn.addEventListener("click", openModal);
      closeModalBtn.addEventListener("click", closeModal);

      // Close modal on outside click
      window.addEventListener("click", (e) => {
        if (e.target === reservaModal) {
          closeModal();
        }
      });

      // Handle form submission
      const reservaForm = document.getElementById("reserva-form");
      reservaForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Reserva enviada com sucesso! Entraremos em contato em breve.");
        closeModal();
        reservaForm.reset();
      });

      // Suite Details Modal
      const suiteDetailsModal = document.getElementById("suite-details-modal");
      const closeSuiteDetailsModalBtn = document.getElementById(
        "close-suite-details-modal"
      );
      const suiteDetailsContent = document.getElementById(
        "suite-details-content"
      );

      function showDetails(suiteKey) {
        const suite = suitesData[suiteKey];
        if (suite) {
          suiteDetailsContent.innerHTML = `
                    <img src="${suite.image}" alt="${suite.title}">
                    <h2>${suite.title}</h2>
                    <p>${suite.description}</p>
                    <ul>
                        ${suite.features
                          .map((feature) => `<li>${feature}</li>`)
                          .join("")}
                    </ul>
                    <div class="suite-details-price">${suite.price}</div>
                `;
          suiteDetailsModal.classList.add("active");
        }
      }

      function closeSuiteDetailsModal() {
        suiteDetailsModal.classList.remove("active");
      }

      closeSuiteDetailsModalBtn.addEventListener(
        "click",
        closeSuiteDetailsModal
      );

      // Close modal on outside click
      window.addEventListener("click", (e) => {
        if (e.target === suiteDetailsModal) {
          closeSuiteDetailsModal();
        }
      });

      // Theme switcher
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.querySelector('body');

        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-theme');
        });

        // Language switcher
        const languageToggle = document.getElementById('language-toggle');
        let currentLanguage = 'pt';

        async function loadLanguage(language) {
            const response = await fetch(`${language}.json`);
            const translations = await response.json();
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (translations[key]) {
                    element.innerHTML = translations[key];
                }
            });
        }

        languageToggle.addEventListener('click', () => {
            currentLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
            loadLanguage(currentLanguage);
        });

        // Initial load
        loadLanguage(currentLanguage);

        // Image switcher
        const imageToggle = document.getElementById('image-toggle');
        const hero = document.querySelector('.hero');
        const images = [
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80',
          'https://images.unsplash.com/photo-1542314831-068cd1dbb5eb?auto=format&fit=crop&w=1600&q=80',
          'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=80'
        ];
        let currentImageIndex = 0;

        imageToggle.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            hero.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${images[currentImageIndex]}')`;
        });