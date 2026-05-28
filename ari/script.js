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
            formHeading: 'Send Ari a note about Google Ads',
            stats: [
                ['$20M+', 'in ad spend stewarded across paid search and shopping'],
                ['+45%', 'more deals closed by sales teams using AI-assisted ad tooling'],
                ['10→200', 'enquiries per quarter after one combined SEO + ads program'],
                ['5 min', 'inbound lead response on accounts Ari runs end to end']
            ],
            divider: {
                text: 'Paid search is a craft. The teams who treat it like one out-earn the teams who treat it like a black box.',
                attr: 'On performance media'
            }
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
            formHeading: 'Send Ari a note about HubSpot',
            stats: [
                ['20+', 'years building marketing tech stacks for SMB and mid-market'],
                ['HubSpot×', 'paired with MailChimp, ActiveCampaign, Klaviyo as needed'],
                ['Form→', 'tagged, routed, and nurtured automatically'],
                ['Pragmatic', 'cost discipline, no platform lock-in for its own sake']
            ],
            divider: {
                text: 'The best automation stack is the one you do not have to babysit. Pragmatic beats elegant every single time.',
                attr: 'On marketing automation'
            }
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
            formHeading: 'Send Ari a note about AI agents',
            stats: [
                ['32 pages', 'of authored AI Agent Playbook with 7 interactive activities'],
                ['Build vs Buy', 'decision matrix shipped with the practice'],
                ['SMB→ENT', 'rollout plans from 90-hour SMB to 30-60-90 day enterprise'],
                ['HITL', 'human-in-the-loop patterns wired in from day one']
            ],
            divider: {
                text: 'Agentic AI is not magic. It is a swarm of small, narrow, accountable agents wired together with discipline.',
                attr: 'On agentic systems'
            }
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
            formHeading: 'Send Ari a note about SEO',
            stats: [
                ['2.9k→15.7k', 'monthly organic clicks in a single year (Phriendly Phishing)'],
                ['+119%', 'organic user growth across one B2B SaaS engagement'],
                ['90k', 'page views on a single deep-dive article (Selerity)'],
                ['Page 1', 'dominance on 20+ high-intent terms in crowded categories']
            ],
            divider: {
                text: 'SEO is content strategy with technical foundations. Most teams have one or the other. The wins live in both.',
                attr: 'On organic search'
            }
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
            formHeading: 'Send Ari a note about GEO',
            stats: [
                ['ChatGPT+', 'Perplexity, Claude, Gemini, Google AI Overviews monitored'],
                ['RAG-ready', 'content structured for LLM retrieval and citation'],
                ['Schema+', 'structured data that gives LLMs something to cite'],
                ['Built on', 'two decades of classical SEO foundations']
            ],
            divider: {
                text: 'GEO is SEO with new judges. The judges are language models. The fundamentals still apply.',
                attr: 'On generative search'
            }
        },
        'content': {
            label: 'Content',
            tagline: 'content &amp; editorial strategy',
            heroAccent: 'Long-form content that earns links, ranks in search, and converts. Articles, lead magnets, sales pages, newsletters, and editorial systems. Ari has authored seven full-length business playbooks. You can browse them further down the page.',
            workEyebrow: 'Selected content work',
            workHeadline: 'Content engagements, <em>verified outcomes.</em>',
            workLead: 'Content strategy that turns into ranked pages, qualified traffic, and authored work that compounds. The case studies below highlight where content carried the win.',
            featuredCases: ['content'],
            contactHeadline: 'Talk to Ari about <em>content</em>',
            contactLead: 'A 30-minute conversation about your category, your existing content, and where the biggest editorial opportunity actually lives.',
            formHeading: 'Send Ari a note about content',
            stats: [
                ['7+', 'full-length business playbooks authored end to end'],
                ['90k', 'page views on a single article (Netflix data deep-dive)'],
                ['7-min', 'average time on page when the content earns it'],
                ['Editorial', 'systems built for ongoing publishing, not one-off blogs']
            ],
            divider: {
                text: 'Content is the cheapest moat a business can build. It just takes patience and a point of view.',
                attr: 'On editorial strategy'
            }
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
            formHeading: 'Send Ari a note about website design',
            stats: [
                ['40+', 'website and product designs shipped from wireframe to launch'],
                ['SaaS→ECOM', 'experience across SaaS, e-commerce, B2B, healthcare, finance'],
                ['Figma+', 'design system, prototype, and developer handoff included'],
                ['CRO', 'baked into the design, not retrofitted after launch']
            ],
            divider: {
                text: 'A site that does not convert is a brochure. A site that converts is a salesperson. Design accordingly.',
                attr: 'On website design'
            }
        }
    };

    /* ============ Detect service from query string ============
       Supports three patterns, in priority order:
       1. ?service=google-ads&utm_source=google&utm_campaign=...
          (canonical: explicit param, plays nicely with UTMs)
       2. ?google-ads&utm_source=google
          (bare flag, anywhere in the query string)
       3. Aliased shortcuts: ?ads, ?ppc, ?web, ?copy etc.

       Ignores all reserved UTM params (utm_source, utm_medium,
       utm_campaign, utm_term, utm_content, gclid, fbclid, etc.)
       so paid-search and paid-social campaign URLs do not collide
       with the service-selector logic.
    ============================================================= */
    var ALIASES = {
        'googleads':       'google-ads',
        'ads':             'google-ads',
        'ppc':             'google-ads',
        'ai':              'ai-agents',
        'agents':          'ai-agents',
        'web':             'website',
        'design':          'website',
        'webdesign':       'website',
        'copy':            'content',
        'copywriting':     'content',
        'editorial':       'content',
        'content-strategy':'content'
    };
    function normalise(k) {
        k = (k || '').toLowerCase().trim();
        return ALIASES[k] || k;
    }
    // Params we never treat as a service flag, even if alone in the URL
    var RESERVED = {
        'utm_source': 1, 'utm_medium': 1, 'utm_campaign': 1,
        'utm_term': 1, 'utm_content': 1, 'utm_id': 1,
        'gclid': 1, 'fbclid': 1, 'msclkid': 1, 'gad_source': 1,
        'ref': 1, 'source': 1, 'campaign': 1, 'medium': 1,
        '_ga': 1, '_gl': 1, 'mc_cid': 1, 'mc_eid': 1
    };

    function detectService() {
        var params;
        try { params = new URLSearchParams(window.location.search); }
        catch (e) { return null; }

        // 1. Explicit ?service=foo wins
        var explicit = normalise(params.get('service') || '');
        if (SERVICES[explicit]) return explicit;

        // 2. Scan all keys for a bare service flag (?google-ads&utm_source=...)
        var found = null;
        params.forEach(function(_value, key) {
            if (found) return;
            var k = key.toLowerCase();
            if (RESERVED[k]) return;
            var n = normalise(k);
            if (SERVICES[n]) found = n;
        });
        return found;
    }

    /* ============ Apply service personalisation ============ */
    // Default stats and divider quote, captured once on page load so
    // we can restore them when the user clears their selection.
    var DEFAULT_STATS = null;
    var DEFAULT_QUOTE = null;
    function captureDefaults() {
        if (DEFAULT_STATS) return;
        DEFAULT_STATS = [1,2,3,4].map(function(i) {
            var num = document.querySelector('[data-stat="num-' + i + '"]');
            var lbl = document.querySelector('[data-stat="label-' + i + '"]');
            return num && lbl ? [num.innerHTML, lbl.textContent] : null;
        });
        var q = document.getElementById('dividerQuoteText');
        var a = document.getElementById('dividerQuoteAttr');
        if (q && a) DEFAULT_QUOTE = { text: q.textContent, attr: a.textContent };
    }

    function applyStats(stats) {
        if (!stats || !stats.length) return;
        stats.forEach(function(pair, idx) {
            var num = document.querySelector('[data-stat="num-' + (idx+1) + '"]');
            var lbl = document.querySelector('[data-stat="label-' + (idx+1) + '"]');
            if (num) num.innerHTML = pair[0];
            if (lbl) lbl.textContent = pair[1];
        });
    }
    function applyDivider(d) {
        if (!d) return;
        var q = document.getElementById('dividerQuoteText');
        var a = document.getElementById('dividerQuoteAttr');
        if (q) q.textContent = d.text;
        if (a) a.textContent = d.attr;
    }
    function applyAuthoredPromotion(serviceKey) {
        document.querySelectorAll('.authored-card').forEach(function(card) {
            var cat = card.dataset.cat || '';
            // 'general' cards (YouTube) never get promoted
            card.dataset.promoted = (cat === serviceKey && cat !== 'general') ? 'true' : 'false';
        });
    }

    function applyService(serviceKey) {
        var body = document.body;
        captureDefaults();
        if (!serviceKey || !SERVICES[serviceKey]) {
            body.dataset.service = 'default';
            // Restore default stats + quote
            if (DEFAULT_STATS) applyStats(DEFAULT_STATS);
            if (DEFAULT_QUOTE) applyDivider(DEFAULT_QUOTE);
            // Clear promotions
            document.querySelectorAll('#reviewGrid .review-card').forEach(function(rc) {
                rc.dataset.promoted = 'false';
            });
            document.querySelectorAll('.authored-card').forEach(function(c) { c.dataset.promoted = 'false'; });
            document.querySelectorAll('.svideo-card').forEach(function(c) { c.dataset.promoted = 'false'; });
            // Clear active pill state
            document.querySelectorAll('.service-pill').forEach(function(p) { p.classList.remove('active'); });
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

        // Subtly promote reviews matching the selected service (orange ring),
        // without hiding the rest. The masonry layout keeps order.
        document.querySelectorAll('#reviewGrid .review-card').forEach(function(rc) {
            var cat = rc.dataset.cat || '';
            rc.dataset.promoted = (cat === serviceKey) ? 'true' : 'false';
        });

        // Service-specific stats + divider quote + authored-work promotion
        applyStats(s.stats);
        applyDivider(s.divider);
        applyAuthoredPromotion(serviceKey);

        // Promote the matching service-video card (orange ring, order -1)
        document.querySelectorAll('.svideo-card').forEach(function(c) {
            c.dataset.promoted = (c.dataset.svc === serviceKey) ? 'true' : 'false';
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

    /* ============ Service pill clicks ============
       Preserves existing query params (notably UTMs) when swapping
       service, then updates URL via history.pushState. Uses the
       canonical ?service=foo form so the result is a clean,
       shareable URL the team can paste into any context.
    ============================================================ */
    document.querySelectorAll('.service-pill').forEach(function(pill) {
        pill.addEventListener('click', function(e) {
            e.preventDefault();
            var newService = pill.dataset.service;
            var params;
            try { params = new URLSearchParams(window.location.search); }
            catch (err) { params = new URLSearchParams(); }

            // Strip any old service flags (both ?service= and bare ?foo)
            params.delete('service');
            Object.keys(SERVICES).forEach(function(k) { params.delete(k); });
            Object.keys(ALIASES).forEach(function(k) { params.delete(k); });

            // Set the canonical service param
            params.set('service', newService);

            var url = '?' + params.toString() + window.location.hash;
            try { history.pushState({}, '', url); } catch(err) {}
            applyService(newService);

            var workSection = document.getElementById('work');
            if (workSection) workSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    /* ============ Initial apply on page load ============ */
    applyService(detectService());

    /* ============ Video testimonials: auto-scrolling strip + lightbox ============ */
    (function setupVideoStrip() {
        var strip  = document.getElementById('videoStrip');
        var modal  = document.getElementById('videoModal');
        var player = document.getElementById('videoModalPlayer');
        var toggle = document.querySelector('[data-strip-toggle]');
        var prev   = document.querySelector('[data-modal-prev]');
        var next   = document.querySelector('[data-modal-next]');
        var closeBtn = document.querySelector('[data-modal-close]');
        var counter  = document.querySelector('[data-modal-counter]');
        if (!strip || !modal || !player) return;

        /* ---- Thumbnail-from-first-frame trick ---------------------
           preload="metadata" by itself often leaves the video black
           until the user plays it. Seeking to ~0.5s after metadata
           loads forces the browser to decode + render a frame, which
           becomes the visible "thumbnail". Works across modern
           Chrome / Firefox / Safari and is invisible to the user.
        ---------------------------------------------------------- */
        strip.querySelectorAll('video').forEach(function(v) {
            // Only the first-cycle videos have preload=metadata; the
            // duplicates have preload=none so we leave those alone
            if (v.getAttribute('preload') !== 'metadata') return;
            function seekToFirstFrame() {
                try {
                    // 0.5s tends to land on a meaningful frame (avoids
                    // pure-black opening of some camera apps)
                    v.currentTime = Math.min(0.5, (v.duration || 1) - 0.1);
                } catch (e) {}
            }
            // Some browsers fire loadedmetadata, others need loadeddata
            v.addEventListener('loadedmetadata', seekToFirstFrame, { once: true });
            v.addEventListener('loadeddata',     seekToFirstFrame, { once: true });
        });

        // Build the master list of unique video sources from the first cycle (5 items)
        var items = strip.querySelectorAll('.video-strip-item:not([aria-hidden])');
        var sources = [];
        items.forEach(function(it) {
            var v = it.querySelector('video source');
            sources.push({ src: v ? v.getAttribute('src') : '', type: v ? v.getAttribute('type') : 'video/mp4' });
        });
        var currentIdx = 0;

        function openModal(idx) {
            currentIdx = (idx + sources.length) % sources.length;
            var s = sources[currentIdx];
            player.innerHTML = '<source src="' + s.src + '" type="' + s.type + '">';
            player.load();
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
            if (counter) counter.textContent = (currentIdx + 1) + ' of ' + sources.length;
            // Autoplay with sound off first (modal player has audio on by default)
            player.play().catch(function() { /* autoplay blocked, user clicks play */ });
            // Pause the strip while modal is open
            strip.classList.add('paused');
        }
        function closeModal() {
            modal.classList.remove('show');
            document.body.style.overflow = '';
            player.pause();
            player.removeAttribute('src');
            player.load();
            strip.classList.remove('paused');
        }

        // Click any strip item to open
        strip.querySelectorAll('.video-strip-item').forEach(function(it) {
            it.addEventListener('click', function() {
                var idx = parseInt(it.dataset.videoIdx || '0', 10);
                openModal(idx);
            });
        });

        // Pause/resume toggle for the auto-scroll
        if (toggle) {
            toggle.addEventListener('click', function() {
                var paused = strip.classList.toggle('paused');
                toggle.querySelector('span').textContent = paused ? 'Resume' : 'Pause';
                toggle.setAttribute('aria-label', paused ? 'Resume testimonial strip' : 'Pause testimonial strip');
                var icon = toggle.querySelector('svg');
                if (icon) {
                    icon.innerHTML = paused
                        ? '<polygon points="6 4 20 12 6 20 6 4" fill="currentColor" stroke="none"/>'
                        : '<rect x="6" y="5" width="4" height="14"/><rect x="14" y="5" width="4" height="14"/>';
                }
            });
        }

        // Modal nav
        if (prev) prev.addEventListener('click', function() { openModal(currentIdx - 1); });
        if (next) next.addEventListener('click', function() { openModal(currentIdx + 1); });
        if (closeBtn) closeBtn.addEventListener('click', closeModal);

        // Click backdrop to close
        modal.addEventListener('click', function(e) {
            if (e.target === modal) closeModal();
        });

        // ESC to close, arrows to navigate
        document.addEventListener('keydown', function(e) {
            if (!modal.classList.contains('show')) return;
            if (e.key === 'Escape')     closeModal();
            if (e.key === 'ArrowLeft')  openModal(currentIdx - 1);
            if (e.key === 'ArrowRight') openModal(currentIdx + 1);
        });
    })();

    /* ============ Portfolio carousel pause/resume toggle ============ */
    (function setupPortfolioToggle() {
        var track  = document.getElementById('portfolioTrack');
        var toggle = document.querySelector('[data-portfolio-toggle]');
        if (!track || !toggle) return;
        toggle.addEventListener('click', function() {
            var paused = track.classList.toggle('paused');
            toggle.querySelector('span').textContent = paused ? 'Resume' : 'Pause';
            var icon = toggle.querySelector('svg');
            if (icon) {
                icon.innerHTML = paused
                    ? '<polygon points="6 4 20 12 6 20 6 4" fill="currentColor" stroke="none"/>'
                    : '<rect x="6" y="5" width="4" height="14"/><rect x="14" y="5" width="4" height="14"/>';
            }
        });
    })();

    /* ============ Legacy video carousel hook (no-op if removed) ============ */
    (function legacyVideoCarousel() {
        var carousel = document.getElementById('videoCarousel');
        var wrap     = document.getElementById('videoCarouselWrap');
        if (!carousel) return;

        var prevBtn  = document.querySelector('[data-carousel-prev]');
        var nextBtn  = document.querySelector('[data-carousel-next]');
        var counter  = document.querySelector('[data-carousel-counter]');
        var cards    = carousel.querySelectorAll('.video-card');

        function getScrollAmount() {
            // Scroll by the width of the first card plus the gap
            var first = cards[0];
            if (!first) return 320;
            var cardWidth = first.getBoundingClientRect().width;
            var cs = getComputedStyle(carousel);
            var gap = parseFloat(cs.columnGap || cs.gap || 0) || 0;
            return cardWidth + gap;
        }

        function whichCardIsFirstVisible() {
            // Find which card's left edge is closest to (just before) the carousel's scroll position
            var scrollLeft = carousel.scrollLeft;
            for (var i = 0; i < cards.length; i++) {
                var c = cards[i];
                var left = c.offsetLeft - carousel.offsetLeft;
                if (left + c.offsetWidth / 2 > scrollLeft) return i;
            }
            return cards.length - 1;
        }

        function updateState() {
            var max = carousel.scrollWidth - carousel.clientWidth - 1;
            var atStart = carousel.scrollLeft <= 1;
            var atEnd   = carousel.scrollLeft >= max;
            if (prevBtn) prevBtn.disabled = atStart;
            if (nextBtn) nextBtn.disabled = atEnd;
            if (wrap) {
                wrap.dataset.atStart = atStart ? 'true' : 'false';
                wrap.dataset.atEnd   = atEnd   ? 'true' : 'false';
            }
            if (counter) {
                var idx = whichCardIsFirstVisible();
                counter.textContent = (idx + 1) + ' of ' + cards.length;
            }
        }

        if (prevBtn) prevBtn.addEventListener('click', function() {
            carousel.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
        });
        if (nextBtn) nextBtn.addEventListener('click', function() {
            carousel.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
        });

        // Throttled scroll listener
        var scrollTimer;
        carousel.addEventListener('scroll', function() {
            if (scrollTimer) cancelAnimationFrame(scrollTimer);
            scrollTimer = requestAnimationFrame(updateState);
        }, { passive: true });

        // Keyboard support when the carousel is focused
        carousel.setAttribute('tabindex', '0');
        carousel.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft')  { e.preventDefault(); if (prevBtn) prevBtn.click(); }
            if (e.key === 'ArrowRight') { e.preventDefault(); if (nextBtn) nextBtn.click(); }
        });

        // Initial state, plus update on resize
        updateState();
        window.addEventListener('resize', updateState);
    })();

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

    // Submissions go to Formspree, endpoint set on <form action="...">
    var SUBMIT_URL = contactForm.getAttribute('action');

    // Service label map for dynamic subject lines
    var SERVICE_LABELS = {
        'google-ads': 'Google Ads',
        'hubspot':    'HubSpot & Automation',
        'ai-agents':  'AI Agents',
        'seo':        'SEO',
        'geo':        'GEO',
        'content':    'Content',
        'website':    'Website Design',
        'multi':      'Multiple'
    };

    // Before submitting, update _subject hidden field based on the
    // selected service (from URL query or the form dropdown) so the
    // team sees the right tag in their inbox.
    function refreshSubject() {
        var subjectInput = contactForm.querySelector('input[name="_subject"]');
        if (!subjectInput) return;
        var chosen = (contactForm.querySelector('[name="service"]') || {}).value || '';
        var queried = (contactForm.querySelector('[name="query_service"]') || {}).value || '';
        var key = chosen || queried;
        var label = SERVICE_LABELS[key];
        subjectInput.value = label
            ? '[Ari Profile / ' + label + '] New enquiry'
            : '[Ari Profile] New enquiry';
    }

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

        refreshSubject();

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
            // Formspree returns HTTP 200 on success, 4xx on error
            if (result.ok) {
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
