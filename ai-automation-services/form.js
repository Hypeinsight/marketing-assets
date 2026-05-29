/* =================================================================
   Hype Insight - AI & Automation Services
   Shared contact-form handler for the service sub-pages
   ================================================================= */

(function() {
    var contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    var formSuccess = document.getElementById('formSuccess');
    var submitBtn   = document.getElementById('formSubmitBtn');
    var formResetBtn = document.getElementById('formReset');
    var formErrorBox = document.getElementById('formError');

    // ---------- validation ----------
    function validateField(field) {
        var input = field.querySelector('input, textarea');
        if (!input) return true;
        if (!input.hasAttribute('required')) return true;
        var v = (input.value || '').trim();
        if (!v) { field.classList.add('invalid'); return false; }
        if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
            field.classList.add('invalid'); return false;
        }
        field.classList.remove('invalid');
        return true;
    }
    contactForm.querySelectorAll('.field input, .field textarea').forEach(function(inp) {
        inp.addEventListener('blur', function() {
            var field = inp.closest('.field');
            if (field) validateField(field);
        });
        inp.addEventListener('input', function() {
            var field = inp.closest('.field');
            if (field && field.classList.contains('invalid')) validateField(field);
        });
    });

    // ---------- radio is-checked styling ----------
    contactForm.querySelectorAll('.radio-grid input[type=radio]').forEach(function(r) {
        r.addEventListener('change', function() {
            var name = r.name;
            contactForm.querySelectorAll('.radio-grid input[name="' + name + '"]').forEach(function(rr) {
                var lbl = rr.closest('label');
                if (lbl) lbl.classList.toggle('is-checked', rr.checked);
            });
        });
    });

    // ---------- error banner ----------
    function showFormError(msg) {
        if (!formErrorBox) return;
        formErrorBox.textContent = msg;
        formErrorBox.classList.add('show');
    }
    function clearFormError() {
        if (!formErrorBox) return;
        formErrorBox.textContent = '';
        formErrorBox.classList.remove('show');
    }

    // ---------- submit ----------
    // The form's action attribute determines where it POSTs (Formspree
    // endpoint set in the HTML). The JS just reads it and uses it.
    var SUBMIT_URL = contactForm.getAttribute('action');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        clearFormError();

        var allValid = true;
        contactForm.querySelectorAll('.field').forEach(function(f) {
            if (!validateField(f)) allValid = false;
        });
        if (!allValid) {
            var firstInvalid = contactForm.querySelector('.field.invalid input, .field.invalid textarea');
            if (firstInvalid) firstInvalid.focus();
            return;
        }

        submitBtn.disabled = true;
        var originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = 'Sending&hellip;';

        var formData = new FormData(contactForm);

        fetch(SUBMIT_URL, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        })
        .then(function(res) {
            return res.json()
                .then(function(data) { return { status: res.status, ok: res.ok, data: data }; })
                .catch(function() { return { status: res.status, ok: res.ok, data: {} }; });
        })
        .then(function(result) {
            // Formspree returns HTTP 200 + {ok: true} on success.
            // On error, status is 4xx and body has either {error: "..."}
            // or {errors: [{message: "..."}]}.
            if (result.ok) {
                if (window.dataLayer) {
                    window.dataLayer.push({
                        event: 'ai_services_contact_submit',
                        source_page: formData.get('source_page') || 'ai-automation-services',
                        stage: formData.get('stage') || ''
                    });
                }
                contactForm.style.display = 'none';
                if (formSuccess) {
                    formSuccess.classList.add('show');
                    formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            } else {
                var msg = 'Sorry, we could not send your message. Please try again in a moment.';
                if (result.data) {
                    if (result.data.error) {
                        msg = result.data.error;
                    } else if (Array.isArray(result.data.errors) && result.data.errors.length) {
                        msg = result.data.errors.map(function(e) { return e.message || e; }).join(' ');
                    }
                }
                showFormError(msg);
            }
        })
        .catch(function() {
            showFormError('Sorry, we could not reach the server. Please check your connection and try again.');
        })
        .finally(function() {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        });
    });

    // ---------- reset ----------
    if (formResetBtn) {
        formResetBtn.addEventListener('click', function() {
            contactForm.reset();
            contactForm.querySelectorAll('.field.invalid').forEach(function(f) { f.classList.remove('invalid'); });
            contactForm.querySelectorAll('.radio-grid label.is-checked').forEach(function(l) { l.classList.remove('is-checked'); });
            clearFormError();
            if (formSuccess) formSuccess.classList.remove('show');
            contactForm.style.display = '';
            contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }

    // ---------- UTM auto-population ----------
    try {
        var params = new URLSearchParams(window.location.search);
        ['utm_source', 'utm_medium', 'utm_campaign'].forEach(function(p) {
            var hidden = document.getElementById(p.replace('_', '-'));
            if (hidden) hidden.value = params.get(p) || '';
        });
    } catch (e) {}
})();

/* =================================================================
   Testimonials: promote cards whose data-cat matches the section's
   data-feature attribute. Promoted cards get a gold border and
   order:-1 so they appear first in the grid.
   ================================================================= */
(function() {
    var section = document.getElementById('testimonials');
    if (!section) return;
    var feature = (section.getAttribute('data-feature') || '').trim();
    if (!feature) return;
    var cards = section.querySelectorAll('.ai-tcard[data-cat]');
    cards.forEach(function(card) {
        if (card.getAttribute('data-cat') === feature) {
            card.setAttribute('data-promoted', 'true');
        }
    });
})();

/* =================================================================
   Video testimonial lightbox: clicking any .ai-vcard opens a modal
   with a shared player that swaps source. Arrow keys + prev/next
   navigate between videos; ESC and backdrop click close.
   ================================================================= */
(function() {
    var strip  = document.getElementById('aiVideoStrip');
    var modal  = document.getElementById('aiVideoModal');
    var player = document.getElementById('aiVideoModalPlayer');
    if (!strip || !modal || !player) return;

    var closeBtn = modal.querySelector('[data-vmodal-close]');
    var prevBtn  = modal.querySelector('[data-vmodal-prev]');
    var nextBtn  = modal.querySelector('[data-vmodal-next]');
    var counter  = modal.querySelector('[data-vmodal-counter]');

    // Build the master list of unique video sources from the strip
    var cards = strip.querySelectorAll('.ai-vcard');
    var sources = [];
    cards.forEach(function(c) {
        var s = c.querySelector('video source');
        sources.push({
            src:  s ? s.getAttribute('src')  : '',
            type: s ? s.getAttribute('type') : 'video/mp4'
        });
    });
    var currentIdx = 0;

    function openModal(idx) {
        currentIdx = (idx + sources.length) % sources.length;
        var s = sources[currentIdx];
        player.innerHTML = '<source src="' + s.src + '" type="' + s.type + '">';
        player.load();
        modal.removeAttribute('hidden');
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        if (counter) counter.textContent = (currentIdx + 1) + ' of ' + sources.length;
        player.play().catch(function() { /* autoplay blocked, ok */ });
    }
    function closeModal() {
        modal.classList.remove('show');
        modal.setAttribute('hidden', '');
        document.body.style.overflow = '';
        player.pause();
        player.removeAttribute('src');
        player.load();
    }

    cards.forEach(function(c) {
        c.addEventListener('click', function() {
            openModal(parseInt(c.dataset.videoIdx || '0', 10));
        });
    });
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (prevBtn)  prevBtn.addEventListener('click',  function() { openModal(currentIdx - 1); });
    if (nextBtn)  nextBtn.addEventListener('click',  function() { openModal(currentIdx + 1); });
    modal.addEventListener('click', function(e) { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', function(e) {
        if (!modal.classList.contains('show')) return;
        if (e.key === 'Escape')     closeModal();
        if (e.key === 'ArrowLeft')  openModal(currentIdx - 1);
        if (e.key === 'ArrowRight') openModal(currentIdx + 1);
    });
})();

/* =================================================================
   Video preview performance: the testimonial cards autoplay muted
   on loop so they're always "alive" instead of hoping for a frame
   to render. To keep bandwidth and CPU sane, an IntersectionObserver
   pauses each video when it scrolls off-screen and resumes when
   it comes back into view.
   ================================================================= */
(function() {
    var vids = document.querySelectorAll('.ai-vcard video');
    if (!vids.length || !('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            var v = entry.target;
            if (entry.isIntersecting) {
                if (v.paused) v.play().catch(function() {});
            } else {
                if (!v.paused) v.pause();
            }
        });
    }, { threshold: 0.15 });
    vids.forEach(function(v) { io.observe(v); });
})();
