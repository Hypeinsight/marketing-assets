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
    // The action attribute on the form determines where it POSTs.
    // Sub-pages set action="../submit.php" so submissions land in
    // the same PHP handler regardless of which page they came from.
    var SUBMIT_URL = contactForm.getAttribute('action') || 'submit.php';

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
            if (result.ok && result.data && result.data.ok) {
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
                var msg = (result.data && result.data.error)
                    ? result.data.error
                    : 'Sorry, we could not send your message. Please try again in a moment.';
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
