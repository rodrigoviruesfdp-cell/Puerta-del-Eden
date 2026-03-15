document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. i18n Language Translator --- */
    const translations = {
        es: {
            pageTitle: "Restaurante Puerta del Edén | Alta Cocina Árabe y Halal",
            navMenu: "La Carta", navGallery: "Galería", navReviews: "Reseñas", navReservations: "Reservas",
            scrollDown: "Descubrir",
            menuTitle: "Nuestro Menú Halal",
            tabFrio: "Frío & Suave", tabCaliente: "Calientes & Sabores", tabSoop: "Ensaladas y Sopas", tabBBQ: "Platos Principales BBQ", tabGolfo: "Platos del Golfo y Marroquíes", tabOr: "Platos Orientales", tabMez: "Surtidos Especiales", tabKids: "Para Niños y Extras", tabDrink: "Bebidas", tabDess: "Postres y Cafés",
            itemHummusName: "Hummus", itemHummusDesc: "Crema suave de garbanzos, tahini, limón y un toque de aceite de oliva virgen extra.",
            itemMutabalName: "Mutabal", itemMutabalDesc: "Berenjena asada ahumada mezclada con tahini, ajo y yogur.",
            itemFalafelName: "Falafel Premium", itemFalafelDesc: "Croquetas crujientes de garbanzo especiadas, servidas con salsa tarator.",
            itemShishName: "Shish de Cordero", itemShishDesc: "Brochetas de cordero marinadas al carbón, acompañadas de arroz basmati y verduras asadas.",
            itemKabsaName: "Kabsa Saudí", itemKabsaDesc: "Arroz especiado tradicional con carne de cordero tierna, pasas y almendras tostadas.",
            galleryTitle: "Visualiza el Edén",
            galleryPlate1: "Exquisitez Halal", galleryPlate2: "Aromas del Este", galleryPlate3: "Dulces Cítricos", galleryPlate4: "Asado Tradicional", galleryPlate5: "Cortes de Primera", galleryPlate6: "El Arte de Servir",
            reviewsSub: "Basado en más de 1.490 reseñas reales",
            review1Text: "\"La limonada árabe, la sopa de lentejas y el pollo... todo espectacular. Nos sentimos muy bienvenidos.\"",
            review2Text: "\"John Paul: Buscaba algo diferente... El Falafel me sorprendió gratamente... 100/10 la atención del servicio.\"",
            review3Text: "\"ronny bernal: El local es pequeño, pero muy bien organizado. La comida tiene un toque auténtico inigualable.\"",
            locationTitle: "Encuéntranos", resTitle: "Reserva tu mesa",
            formName: "Nombre completo", formEmail: "Email", formPhone: "Teléfono", formDate: "Fecha", formTime: "Hora", formGuests: "Comensales",
            formLegal: "He leído y acepto la Política de Privacidad y consiento el tratamiento de mis datos para la gestión de esta reserva.",
            formSubmit: "Confirmar Reserva",
            footerLegalNotice: "Aviso Legal", footerPrivacy: "Política de Privacidad", footerCookies: "Política de Cookies",
            footerRights: "Todos los derechos reservados.",
            cookieText: "Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación.",
            cookieAccept: "Aceptar Todas", cookieReject: "Rechazar", cookieConfig: "Configurar"
        },
        en: {
            // Partial mapping for demonstration, should contain all keys
            pageTitle: "Puerta del Edén Restaurant | High-End Arabic & Halal Cuisine",
            navMenu: "Menu", navGallery: "Gallery", navReviews: "Reviews", navReservations: "Reservations",
            scrollDown: "Discover",
            menuTitle: "Our Halal Menu",
            tabFrio: "Cold & Smooth", tabCaliente: "Hot & Flavors", tabBBQ: "BBQ Main Courses", tabGolfo: "Gulf Dishes",
            itemHummusName: "Hummus", itemHummusDesc: "Smooth fluffy chickpea dip with tahini, lemon, and a touch of extra virgin olive oil.",
            itemMutabalName: "Mutabal", itemMutabalDesc: "Smoked roasted eggplant mixed with tahini, garlic, and yogurt.",
            itemFalafelName: "Premium Falafel", itemFalafelDesc: "Crispy spiced chickpea croquettes, served with tarator sauce.",
            itemShishName: "Lamb Shish", itemShishDesc: "Charcoal-marinated lamb skewers, served with basmati rice and roasted vegetables.",
            itemKabsaName: "Saudi Kabsa", itemKabsaDesc: "Traditional spiced rice with tender lamb meat, raisins, and toasted almonds.",
            galleryTitle: "Visualize Eden",
            galleryPlate1: "Halal Delicacy", galleryPlate2: "Eastern Aromas", galleryPlate3: "Citrus Sweets", galleryPlate4: "Traditional Roast", galleryPlate5: "Prime Cuts", galleryPlate6: "The Art of Serving",
            reviewsSub: "Based on more than 1,490 real reviews",
            review1Text: "\"The Arabic lemonade, lentil soup, and chicken... everything spectacular. We felt very welcome.\"",
            review2Text: "\"John Paul: I was looking for something different... The Falafel pleasantly surprised me... 100/10 service.\"",
            review3Text: "\"ronny bernal: The place is small, but very well organized. The food has an unmatched authentic touch.\"",
            locationTitle: "Find Us", resTitle: "Book your table",
            formName: "Full Name", formEmail: "Email", formPhone: "Phone", formDate: "Date", formTime: "Time", formGuests: "Guests",
            formLegal: "I have read and accept the Privacy Policy and consent to the processing of my data for the management of this reservation.",
            formSubmit: "Confirm Reservation",
            footerLegalNotice: "Legal Notice", footerPrivacy: "Privacy Policy", footerCookies: "Cookies Policy",
            footerRights: "All rights reserved.",
            cookieText: "We use our own and third-party cookies to improve our services and show you advertising related to your preferences by analyzing your browsing habits.",
            cookieAccept: "Accept All", cookieReject: "Reject", cookieConfig: "Configure"
        },
        ar: {
            pageTitle: "مطعم بوابة عدن | مأكولات عربية وحلال فاخرة",
            navMenu: "القائمة", navGallery: "المعرض", navReviews: "الآراء", navReservations: "الحجوزات",
            scrollDown: "اكتشف",
            menuTitle: "قائمتنا الحلال",
            tabFrio: "بارد وناعم", tabCaliente: "ساخن ونكهات", tabBBQ: "أطباق رئيسية مشوية", tabGolfo: "أطباق خليجية",
            itemHummusName: "حمص", itemHummusDesc: "غموس حمص ناعم مع طحينة وليمون ولمسة من زيت الزيتون البكر الممتاز.",
            itemMutabalName: "متبل", itemMutabalDesc: "باذنجان مشوي مدخن ممزوج بالطحينة والثوم واللبن.",
            itemFalafelName: "فلافل مميزة", itemFalafelDesc: "كروكيت حمص متبل مقرمش، يقدم مع صلصة الطرطور.",
            itemShishName: "شيش لحم ضأن", itemShishDesc: "أسياخ لحم ضأن متبلة على الفحم، تقدم مع أرز بسمتي وخضروات مشوية.",
            itemKabsaName: "كبسة سعودية", itemKabsaDesc: "أرز تقليدي متبل مع لحم ضأن طري وزبيب ولوز محمص.",
            galleryTitle: "تخيل عدن",
            galleryPlate1: "طعام حلال فاخر", galleryPlate2: "روائح شرقية", galleryPlate3: "حلويات حمضية", galleryPlate4: "شواء تقليدي", galleryPlate5: "قطع فاخرة", galleryPlate6: "فن التقديم",
            reviewsSub: "بناءً على أكثر من 1490 تقييم حقيقي",
            review1Text: "\"عصير الليمون العربي وشوربة العدس والدجاج... كل شيء مذهل. شعرنا بترحيب كبير.\"",
            review2Text: "\"جون بول: كنت أبحث عن شيء مختلف... فاجأتني الفلافل بكل سرور... 100/10 خدمة الرعاية.\"",
            review3Text: "\"روني برنال: المكان صغير، لكنه منظم للغاية. الطعام له لمسة أصلية لا مثيل لها.\"",
            locationTitle: "موقعنا", resTitle: "احجز طاولتك",
            formName: "الاسم الكامل", formEmail: "البريد الإلكتروني", formPhone: "الهاتف", formDate: "تاريخ", formTime: "الوقت", formGuests: "الضيوف",
            formLegal: "لقد قرأت وقبلت سياسة الخصوصية وأوافق على معالجة بياناتي لإدارة هذا الحجز.",
            formSubmit: "تأكيد الحجز",
            footerLegalNotice: "إشعار قانوني", footerPrivacy: "سياسة الخصوصية", footerCookies: "سياسة ملفات تعريف الارتباط",
            footerRights: "كل الحقوق محفوظة.",
            cookieText: "نحن نستخدم ملفات تعريف الارتباط الخاصة بنا وتلك الخاصة بأطراف ثالثة لتحسين خدماتنا وإظهار إعلانات تتعلق بتفضيلاتك.",
            cookieAccept: "قبول الكل", cookieReject: "رفض", cookieConfig: "تكوين"
        }
    };

    // Fill missing translation languages safely from ES
    const langs = ['de', 'fr', 'zh'];
    langs.forEach(l => {
        translations[l] = translations['en']; // fallback to en for demo
    });

    const langDropdownLi = document.querySelectorAll('.lang-dropdown li');
    const flagDisplay = document.getElementById('current-lang-flag');
    const codeDisplay = document.querySelector('.lang-code');
    const toggleInput = document.getElementById('lang-toggle');

    langDropdownLi.forEach(li => {
        li.addEventListener('click', (e) => {
            const selectedLang = e.target.getAttribute('data-lang');
            const flag = e.target.textContent.split(' ')[0];
            const code = e.target.textContent.split(' ')[1];
            
            // update UI selector
            flagDisplay.textContent = flag;
            codeDisplay.textContent = code;
            toggleInput.checked = false;

            // Apply translations
            applyTranslations(selectedLang);
        });
    });

    function applyTranslations(lang) {
        const dict = translations[lang] || translations['es'];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    // Usually we don't translate placeholders here since we use labels, but just in case
                    // el.setAttribute('placeholder', dict[key]);
                } else {
                    el.textContent = dict[key];
                }
            }
        });

        // Toggle RTL/LTR
        if (lang === 'ar') {
            document.documentElement.setAttribute('dir', 'rtl');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
        }
    }


    /* --- 2. Mobile Menu Toggle --- */
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    mobileBtn.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });

    // Close menu on link click
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
        });
    });

    /* --- 3. Interactive Menu Tabs --- */
    const tabBtns = document.querySelectorAll('.tab-btn');
    const menuGrids = document.querySelectorAll('.menu-grid');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active from all
            tabBtns.forEach(b => b.classList.remove('active'));
            menuGrids.forEach(g => g.classList.remove('active'));
            
            // Add active to current
            btn.classList.add('active');
            const target = btn.getAttribute('data-target');
            document.getElementById(target).classList.add('active');

            // Scroll the clicked button into view smoothly 
            btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        });
    });

    /* --- 4. Endless Reviews (Handled completely via CSS animation .marquee-group) --- */

    /* --- 5. Form Submission --- */
    const form = document.getElementById('reservation-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('.btn-primary');
        const originalText = btn.textContent;
        btn.textContent = "Reserva Enviada ✅";
        btn.style.backgroundColor = "var(--accent-gold)";
        btn.style.color = "var(--primary-bg)";
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.backgroundColor = "transparent";
            btn.style.color = "var(--accent-gold)";
            form.reset();
        }, 3000);
    });

    /* --- 6. Cookie Banner Logic --- */
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('cookie-accept');
    const rejectBtn = document.getElementById('cookie-reject');

    // Simple demo logic: show after 2 seconds if not set
    if (!localStorage.getItem('puertaEdenCookies')) {
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 2000);
    }

    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('puertaEdenCookies', 'accepted');
        cookieBanner.classList.remove('show');
    });

    rejectBtn.addEventListener('click', () => {
        localStorage.setItem('puertaEdenCookies', 'rejected');
        cookieBanner.classList.remove('show');
    });

    /* --- 7. Intersection Observer for Global Animations --- */
    const revealElements = document.querySelectorAll('.reveal-hidden');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));



});
