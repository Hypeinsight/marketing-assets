/* =================================================================
   Ari profile page: query string personalisation + form + reveals
   ================================================================= */

(function() {

    /* ============ Service map ============ */
    var SERVICES = {
        'google-ads': {
            label: 'Google Ads',
            tagline: 'Google Ads',
            heroAccent: 'Performance media that earns its keep from week one. Two decades running paid search and shopping for brands that need every click to pay back. Available for direct work on Google Ads, Performance Max, and full multi-platform programs.',
            workEyebrow: 'Selected Google Ads work',
            workHeadline: 'Google Ads case studies, <em>verified outcomes.</em>',
            workLead: 'A selection of paid search engagements spanning healthcare, finance, construction, retail, and mortgage broking. Featured cards highlight Google Ads work first.',
            featuredCases: ['google-ads'],
            contactHeadline: 'Talk to Ari about <em>Google Ads</em>',
            contactLead: 'A 30-minute conversation, no pitch. Tell Ari about the account, the budget, and the outcome you need; you will get an honest read on whether he is the right person for it.',
            formHeading: 'Send Ari a note about Google Ads'
        },
        'hubspot': {
            label: 'HubSpot',
            tagline: 'HubSpot &amp; marketing automation',
            heroAccent: 'CRM, automation, and lead routing that actually moves people through the funnel. HubSpot plus the rest of the stack (MailChimp, ActiveCampaign, Klaviyo) wired together pragmatically, no platform lock-in for its own sake.',
            workEyebrow: 'Selected automation work',
            workHeadline: 'HubSpot &amp; automation, <em>shipped end to end.</em>',
            workLead: 'A pragmatic approach to the marketing automation stack. Form tagging, lead routing, sequence design, and CRM hygiene that compounds.',
            featuredCases: ['hubspot'],
            contactHeadline: 'Talk to Ari about <em>HubSpot &amp; automation</em>',
            contactLead: 'A 30-minute conversation about your current stack, where leads are leaking, and what the smallest meaningful first move looks like.',
            formHeading: 'Send Ari a note about HubSpot'
        },
        'ai-agents': {
            label: 'AI Agents',
            tagline: 'AI agent design &amp; deployment',
            heroAccent: 'Specialist agents that ship work, not slide decks. Ari authored the AI Agent Playbook for Businesses, a 32-page interactive guide used by SMBs and enterprise teams alike. Available for design, build, and deployment of agentic systems.',
            workEyebrow: 'AI &amp; agentic AI',
            workHeadline: 'Agentic work, <em>made operational.</em>',
            workLead: 'Read the playbook below for the full method. The case studies show the marketing and tech foundations that agentic deployments build on.',
            featuredCases: [],
            contactHeadline: 'Talk to Ari about <em>AI agents</em>',
            contactLead: 'A 30-minute conversation about your readiness, the use case you have in mind, and the smallest agent that could ship this quarter.',
            formHeading: 'Send Ari a note about AI agents'
        },
        'seo': {
            label: 'SEO',
            tagline: 'SEO &amp; organic dominance',
            heroAccent: 'Organic visibility that compounds, quarter after quarter. Content strategy, technical foundations, and link building that earn page-one positions in crowded categories. From cybersecurity training to B2B SaaS to mortgage broking.',
            workEyebrow: 'Selected SEO work',
            workHeadline: 'SEO case studies, <em>verified outcomes.</em>',
            workLead: 'Organic search engagements across cybersecurity, B2B SaaS, analytics, and financial services. Featured cards highlight SEO work first.',
            featuredCases: ['seo'],
            contactHeadline: 'Talk to Ari about <em>SEO</em>',
            contactLead: 'A 30-minute conversation about your category, your existing visibility, and where the biggest organic opportunity actually lives.',
            formHeading: 'Send Ari a note about SEO'
        },
        'geo': {
            label: 'GEO',
            tagline: 'generative engine optimisation',
            heroAccent: 'Visibility inside ChatGPT, Perplexity, Claude, and Google AI Overviews. The next layer of search optimisation, built on the same foundations as classical SEO but tuned for how large language models cite and surface content.',
            workEyebrow: 'GEO &amp; AI search visibility',
            workHeadline: 'Generative search, <em>built on classical foundations.</em>',
            workLead: 'GEO sits on top of strong SEO. The case studies below show the technical and content foundations every GEO program builds on.',
            featuredCases: ['seo'],
            contactHeadline: 'Talk to Ari about <em>GEO</em>',
            contactLead: 'A 30-minute conversation about your category, your current visibility in classical search, and what the right first move on AI search looks like.',
            formHeading: 'Send Ari a note about GEO'
        },
        'website': {
            label: 'Website Design',
            tagline: 'website design &amp; build',
            heroAccent: 'Sites that turn the same traffic into more revenue. Forty plus designs shipped over the past few years, from SaaS products to e-commerce stores to industrial brands. Strategy, wireframe, design, build, and conversion-focused launch.',
            workEyebrow: 'Selected website work',
            workHeadline: 'Forty plus builds, <em>wireframe to launch.</em>',
            workLead: 'The case studies below show the conversion side; the website portfolio further down has the design work. Both share the same operating principle: business outcomes drive the design.',
            featuredCases: ['website'],
            contactHeadline: 'Talk to Ari about <em>website design</em>',
            contactLead: 'A 30-minute conversation about the site you have today, the outcome you need it to produce, and what a sensible rebuild or redesign actually looks like.',
            formHeading: 'Send Ari a note about website design'
        }
    };

    /* ============ Detect query string ============ */
    function detectService() {
        var qs = window.location.search.replace(/^\?/, '').toLowerCase();
        if (!qs) return null;
        // First segment before & is the service
        var key = qs.split('&')[0].split('=')[0];
        // Normalise common aliases
        var aliases = {
            'googleads':  'google-ads',
            'ads':        'google-ads',
            'ppc':        'google-ads',
            'ai':         'ai-agents',
            'agents':     'ai-agents',
            'web':        'website',
            'design':     'website',
            'webdesign':  'website'
        };
        key = aliases[key] || key;
        return SERVICES[key] ? key : null;
    }

    /* ============ Apply service personalisation ============ */
    function applyService(serviceKey) {
        var body = document.body;
        if (!serviceKey || !SERVICES[serviceKey]) {
            body.dataset.service = 'default';
            return;
        }
        body.dataset.service = serviceKey;
        var s = SERVICES[serviceKey];

        // Hero tagline
        var taglineEl = document.getElementById('heroTagline');
        if (taglineEl) taglineEl.innerHTML = s.tagline;

        // Hero accent paragraph
        var accentEl = document.getElementById('heroAccent');
        if (accentEl) accentEl.textContent = s.heroAccent;

        // Issue label
        var issueLabel = document.getElementById('heroIssueLabel');
        if (issueLabel) issueLabel.textContent = 'Vol. ' + s.label;

        // Work section headers
        var weEl = document.getElementById('workEyebrowText');
        if (weEl) weEl.textContent = s.workEyebrow;
        var whEl = document.getElementById('workHeadline');
        if (whEl) whEl.innerHTML = s.workHeadline;
        var wlEl = document.getElementById('workLead');
        if (wlEl) wlEl.textContent = s.workLead;

        // Contact section headers
        var chEl = document.getElementById('contactHeadline');
        if (chEl) chEl.innerHTML = s.contactHeadline;
        var clEl = document.getElementById('contactLead');
        if (clEl) clEl.textContent = s.contactLead;
        var fhEl = document.getElementById('formHeading');
        if (fhEl) fhEl.textContent = s.formHeading;

        // Highlight matching service pill
        document.querySelectorAll('.service-pill').forEach(function(p) {
            p.classList.toggle('active', p.dataset.service === serviceKey);
        });

        // Reorder case cards: matching first as featured
        var cards = document.querySelectorAll('#caseGrid .case-card');
        cards.forEach(function(card) {
            var tags = (card.dataset.cases || '').split(' ');
            var isMatch = s.featuredCases.some(function(fc) { return tags.indexOf(fc) !== -1; });
            card.dataset.featured = isMatch ? 'true' : 'false';
        });

        // Pre-fill the contact form service dropdown
        var serviceSelect = document.getElementById('cf-service');
        if (serviceSelect) {
            var optionExists = Array.from(serviceSelect.options).some(function(o) { return o.value === serviceKey; });
            if (optionExists) serviceSelect.value = serviceKey;
        }
        var queryServiceHidden = document.getElementById('query-service');
        if (queryServiceHidden) queryServiceHidden.value = serviceKey;
    }

    /* ============ Service pill clicks (smooth swap without full reload) ============ */
    document.querySelectorAll('.service-pill').forEach(function(pill) {
        pill.addEventListener('click', function(e) {
            e.preventDefault();
            var newService = pill.dataset.service;
            var url = '?' + newService + window.location.hash;
            // Update URL without full reload
            try { history.pushState({}, '', url); } catch(err) {}
            applyService(newService);
            // Scroll to the work section so they see the result of their choice
            var workSection = document.getElementById('work');
            if (workSection) workSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    /* ============ Initial apply on page load ============ */
    applyService(detectService());

    /* ============ Reveal on scroll ============ */
    var revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        revealEls.forEach(function(el) { io.observe(el); });
    } else {
        revealEls.forEach(function(el) { el.classList.add('in'); });
    }

    /* ============ Contact form ============ */
    var contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    var formSuccess  = document.getElementById('formSuccess');
    var submitBtn    = document.getElementById('formSubmitBtn');
    var formResetBtn = document.getElementById('formReset');
    var formErrorBox = document.getElementById('formError');

    function validateField(field) {
        var input = field.querySelector('input, textarea, select');
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
                        event: 'ari_contact_submit',
                        source_page: 'ari',
                        service:   formData.get('service')       || '',
                        query_service: formData.get('query_service') || ''
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

    if (formResetBtn) {
        formResetBtn.addEventListener('click', function() {
            contactForm.reset();
            contactForm.querySelectorAll('.field.invalid').forEach(function(f) { f.classList.remove('invalid'); });
            clearFormError();
            if (formSuccess) formSuccess.classList.remove('show');
            contactForm.style.display = '';
            contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }

    /* ============ UTM auto-population ============ */
    try {
        var params = new URLSearchParams(window.location.search);
        ['utm_source', 'utm_medium', 'utm_campaign'].forEach(function(p) {
            var hidden = document.getElementById(p.replace('_', '-'));
            if (hidden) hidden.value = params.get(p) || '';
        });
    } catch (e) {}

})();
