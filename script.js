/* ==========================================================================
   GCPS — Global Clothing Product Services
   Small, dependency-free interactions.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- mobile nav toggle ---------- */
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = siteNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.classList.toggle('is-active', isOpen);
    });

    // Close menu after choosing a link (mobile)
    siteNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        siteNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- scroll-reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => io.observe(el));
  } else {
    // Fallback: just show everything
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  /* ---------- back-to-top ---------- */
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 600);
    }, { passive: true });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- sticky header shadow on scroll (subtle) ---------- */
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.style.boxShadow = window.scrollY > 8 ? '0 2px 12px rgba(0,0,0,0.06)' : 'none';
    }, { passive: true });
  }

  /* ---------- contact form ----------
     This is a static site with no backend, so the form can't send email
     on its own. To keep it fully functional out of the box, submitting
     builds a pre-filled email (via mailto:) so a message always reaches
     the inbox through the visitor's own email client.

     To collect messages directly into a database/inbox instead, wire
     this form up to a form backend (e.g. Formspree, Web3Forms, Getform)
     and swap the code inside the submit handler for a fetch() call —
     see the comment near the bottom of this function.
  ---------------------------------------------------------------------- */
  const form = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');
  const CONTACT_EMAIL = 'info@gcpsco.com'; // TODO: replace with the real inbox to receive messages

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const phone = form.phone.value.trim();
      const message = form.message.value.trim();

      if (!name || !email || !message) {
        formNote.textContent = 'Please fill in your name, email and message.';
        formNote.classList.add('error');
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        formNote.textContent = 'Please enter a valid email address.';
        formNote.classList.add('error');
        return;
      }

      formNote.classList.remove('error');

      const subject = encodeURIComponent(`Inspection enquiry from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone || '—'}\n\nMessage:\n${message}`
      );

      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      formNote.textContent = 'Opening your email app to send this message…';

      /* ---- Swap-in example for a real form backend (e.g. Formspree) ----
      fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      })
      .then(res => {
        if (res.ok) {
          formNote.textContent = 'Thanks — your message has been sent.';
          form.reset();
        } else {
          formNote.textContent = 'Something went wrong. Please try again or WhatsApp us.';
          formNote.classList.add('error');
        }
      })
      .catch(() => {
        formNote.textContent = 'Something went wrong. Please try again or WhatsApp us.';
        formNote.classList.add('error');
      });
      ------------------------------------------------------------------- */
    });
  }

});
