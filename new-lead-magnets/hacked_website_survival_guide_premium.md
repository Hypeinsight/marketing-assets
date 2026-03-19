# The Hacked Website Survival Guide
## What to Do When Your Site Gets Compromised — And How to Make Sure It Never Happens Again

---

*A comprehensive guide for Australian business owners who have been hacked, are worried about being hacked, or want to understand what is truly at stake when your website's security fails — and what it takes to fix it permanently.*

---

## A Note Before You Begin

If you are reading this guide because your website has just been hacked, take a breath. You are not the first business owner this has happened to, and you will not be the last. Website hacking is not a reflection of your intelligence, your business, or your worth as an operator. It is, however, a serious problem that requires immediate, deliberate action — and the decisions you make in the next 24 to 72 hours will determine whether this is a minor setback or a catastrophic one.

This guide will walk you through exactly what to do, in the right order, with plain-English explanations at every step. By the time you finish reading, you will understand not just how to recover from this hack, but why it happened, what it is costing you right now, what your legal obligations are, and what it will take to make sure it never happens again.

If you are reading this guide as a precaution — because you have heard about other businesses being hacked and you want to be prepared — then you are already ahead of the game. The information in this guide will help you assess your current risk and take meaningful steps to protect your business before a crisis occurs.

This is not a document full of vague advice and reassuring platitudes. It is a working reference manual — the kind of document you can return to at each stage of the process and use as a practical guide. Keep it. Share it with your developer. Use it to ask the right questions and make the right decisions.

Either way, let us get started.

---

## Chapter 1: How to Know If Your Site Has Been Hacked

### The Warning Signs Most Business Owners Miss

One of the most unsettling realities of website hacking is that it is often invisible — at least at first. Unlike a break-in at a physical premises, where the damage is immediately obvious, a compromised website can continue to look and function normally on the surface while something deeply damaging is happening underneath.

Hackers are not always interested in destroying your website. In many cases, they want to use it quietly — as a platform for sending spam, hosting malicious content, redirecting your visitors to scam sites, or mining cryptocurrency using your server's resources. The longer they can operate without detection, the more value they extract. This is why many business owners discover a hack weeks or even months after it first occurred.

The following are the most common warning signs that your website has been compromised. You do not need to be experiencing all of them — even one or two should be treated as a serious red flag.

**Visitors are being redirected to other websites.** If customers are telling you that clicking on your website takes them to a completely different site — often a pharmaceutical, gambling, or adult content site — your site has almost certainly been hacked. This is one of the most common forms of attack, known as a redirect hack, and it is particularly damaging because your visitors lose trust in your brand immediately. Critically, this redirect often only triggers for visitors arriving from Google — meaning you may visit your own site and see nothing wrong, while every customer who clicks through from a search result is sent somewhere else entirely.

**Google is showing a warning when people search for your business.** Search Google for your own business name or website address. If you see a message beneath your listing that reads "This site may harm your computer" or "This site may be hacked," Google has detected malicious content on your site and is actively warning people away. This is known as being blacklisted, and it can devastate your search traffic overnight.

**Your website is displaying content you did not create.** This might be spam links buried in your pages, strange text in foreign languages, new pages that appeared without your knowledge, or advertisements for products and services that have nothing to do with your business. Hackers often inject this content to improve the search rankings of their own sites at your expense — a technique known as SEO spam or a pharma hack.

**Your website has disappeared from Google search results entirely.** If your site used to appear in Google searches and has suddenly vanished, it is possible that Google has de-indexed it due to detected malware or policy violations caused by a hack. This is distinct from being blacklisted — de-indexing means your site simply no longer appears in search results at all.

**Your web hosting company has suspended your account.** Reputable hosting providers actively scan for malware and will suspend accounts that are found to be distributing malicious content. If you have received a suspension notice from your host, it almost certainly means malware has been detected on your site.

**Your website is loading unusually slowly or crashing frequently.** While slow load times have many causes, a sudden and unexplained drop in performance can indicate that your server's resources are being consumed by malicious processes — such as spam sending, cryptocurrency mining, or participating in a distributed denial-of-service (DDoS) attack against another site.

**You are receiving unusual password reset emails or login notifications.** If you are receiving emails about password reset requests or login attempts that you did not initiate, someone may be attempting to gain access to your website's administration panel.

**Your customers are reporting suspicious emails from your domain.** If clients or contacts are receiving spam emails that appear to come from your email address or domain, hackers may have gained access to your email server through your website, or may be spoofing your domain to send phishing emails.

**Your website's files have been modified without your knowledge.** If you or your developer log into your website's file manager or FTP and notice files with unfamiliar names, recently modified dates on core files, or entirely new directories that should not be there, these are strong indicators of a compromise.

### The 5 Most Common Types of Website Hack — Explained in Plain English

Understanding the specific type of hack your site has experienced is important because different hacks require different responses, and some are significantly more damaging than others. The following are the five most common attack types affecting Australian small business websites.

**The Pharma Hack (SEO Spam).** This is the single most common type of hack affecting WordPress websites. In a pharma hack, the attacker injects thousands of hidden pages into your website — pages promoting pharmaceutical products, gambling sites, or adult content. These pages are invisible to you when you visit your own site, but they are visible to Google's crawlers. The result is that your website's search rankings are hijacked to promote the attacker's content, while your own rankings are destroyed. Many business owners run a pharma hack for months without knowing it exists, only discovering it when a customer mentions seeing strange search results, or when their Google rankings suddenly collapse.

**The Redirect Hack.** In a redirect hack, malicious code is injected into your website that automatically sends visitors to a different website — typically one selling counterfeit goods, pharmaceuticals, or worse. As noted above, these redirects are often conditional: they only trigger for visitors arriving from Google search results, or only on mobile devices, meaning the site owner who visits their own site directly sees nothing unusual. The damage to customer trust and Google rankings can be severe and long-lasting.

**The Backdoor.** A backdoor is a hidden piece of code that allows a hacker to re-enter your website at any time, even after the obvious malware has been cleaned. Backdoors are often planted as a contingency — the attacker knows that their malware may eventually be discovered and removed, so they leave a hidden access point that lets them return and re-infect the site. Backdoors are notoriously difficult to find because they are designed to look like legitimate files, are often given innocent-sounding names, and may be hidden deep within the site's file structure. This is one of the primary reasons why cleaning a hacked site without a professional is risky — a missed backdoor means the site will be re-compromised, often within days.

**The Cryptojacking Attack.** Cryptojacking involves injecting code into your website that uses your visitors' computers (and sometimes your server) to mine cryptocurrency for the attacker. The visitor experiences this as their computer suddenly running hot, their fan spinning loudly, and their browser slowing to a crawl while on your website. They may not know why, but they will associate the poor experience with your brand. Cryptojacking is particularly insidious because it does not visibly damage your website — there are no spam pages, no redirects, nothing obviously wrong — making it very difficult to detect without active monitoring.

**The Defacement Attack.** This is the most visible type of hack — the attacker replaces your website's content with their own message, often a political statement, a taunt, or simply a declaration that the site has been compromised. While defacement attacks are immediately obvious and therefore quickly discovered, they are also deeply damaging to brand credibility. A business whose website has been publicly defaced faces an immediate trust crisis with existing and potential customers.

### How to Confirm a Hack

If you are experiencing one or more of the above warning signs, the following free tools will help you confirm whether your site has been compromised.

**Google Safe Browsing:** Visit `https://transparencyreport.google.com/safe-browsing/search` and enter your website address. Google will tell you immediately whether it has detected any unsafe content on your site.

**Sucuri SiteCheck:** Visit `https://sitecheck.sucuri.net` and enter your website address. This free scanner will check your site for known malware, blacklisting status, and obvious security issues. It takes less than a minute and provides a clear report.

**Google Search Console:** If you have Google Search Console set up for your website (and if you do not, you should), navigate to the Security Issues section. Google will alert you to any detected hacks, malware, or policy violations associated with your site.

**VirusTotal:** Visit `https://www.virustotal.com` and enter your website URL. VirusTotal checks your site against over 70 different security databases and will show you whether any of them have flagged your site as malicious.

**MXToolbox Blacklist Check:** Visit `https://mxtoolbox.com/blacklists.aspx` and enter your domain name. This tool checks whether your domain has been added to any of the major email blacklists — which happens when your site has been used to send spam.

If any of these tools confirm a problem, proceed immediately to Chapter 2. Do not delay — every hour that passes while your site is compromised increases the damage to your reputation, your search rankings, and potentially your customers' security.

---

## Chapter 2: The 7 Immediate Steps to Take Right Now

### Acting Quickly Is Everything

The moment you confirm or strongly suspect that your website has been hacked, the clock starts ticking. The following seven steps should be completed as quickly as possible — ideally within the first 24 hours. They are listed in order of priority.

---

**Step 1: Put Your Website Into Maintenance Mode**

Your first priority is to stop the bleeding. If your website is actively serving malicious content to visitors, every minute it remains live is another minute your customers are being exposed to potential harm and your reputation is being damaged.

Log into your website's content management system (CMS) and activate maintenance mode, which will replace your website with a simple "We're currently undergoing maintenance" message. If you cannot access your CMS, contact your web hosting provider immediately and ask them to take your site offline temporarily.

Do not be tempted to leave the site running while you investigate. The reputational cost of a brief maintenance period is far smaller than the cost of customers discovering that your website tried to install malware on their computer.

---

**Step 2: Change Every Password Associated With Your Website**

Before you do anything else on the technical side, change every password that could have been used to gain access to your site. This includes your CMS administrator password, your web hosting control panel password, your FTP/SFTP password, your database password, and the passwords of any other users who have administrator access to your site.

Use strong, unique passwords for each — a minimum of 16 characters, combining upper and lowercase letters, numbers, and symbols. Do not reuse passwords across different accounts. Use a password manager such as 1Password or Bitwarden to generate and store these securely.

If you use the same password for your website as you do for your email, banking, or other accounts, change those immediately as well. Credential stuffing — where hackers use stolen passwords from one breach to access other accounts — is extremely common.

---

**Step 3: Contact Your Web Hosting Provider**

Call or email your web hosting provider and inform them that your website has been compromised. Most reputable hosting companies have a security team that can assist with the following: identifying the source and method of the hack by reviewing server logs; scanning your hosting account for malware and infected files; restoring your website from a clean backup if one exists; and temporarily isolating your account to prevent the spread of malware to other sites on the same server.

Be specific when you contact them. Tell them what you have observed, what tools you have used to confirm the hack, and what you need from them. Ask explicitly whether they have a recent clean backup of your site and whether they can restore it. Ask them to provide you with the server access logs for the past 30 days — these logs will show you exactly when the attack occurred and, in many cases, which file was used as the entry point.

**Important:** If your hosting provider is unresponsive, dismissive, or unable to assist meaningfully with a security incident, this is itself a significant red flag about the quality of your hosting environment. A reputable host takes security incidents seriously and has processes in place to respond quickly.

---

**Step 4: Scan Your Website for Malware**

Whether or not your hosting provider assists with scanning, you should run your own malware scan using a dedicated security tool. The most widely used and trusted options for WordPress sites are Wordfence and MalCare. Both offer free versions that can scan your site and identify infected files.

If your site is built on a different platform, consult your platform's documentation for recommended security scanning tools, or engage a professional security service such as Sucuri (sucuri.net), which offers malware removal services for all website types.

The scan will produce a report listing infected files, suspicious code, and unauthorised changes. Save this report — you will need it in subsequent steps, and it may be required if you need to report the breach to the Office of the Australian Information Commissioner (OAIC).

---

**Step 5: Remove the Malware and Restore Clean Files**

Once you have identified the infected files, they need to be cleaned or replaced. This step requires technical knowledge and should ideally be performed by a developer or security professional if you are not comfortable working directly with website files.

The process involves replacing infected core files with clean versions from the original software source, removing any files that should not be there, and carefully reviewing modified files to identify and remove injected malicious code.

If your hosting provider has a clean backup from before the hack occurred, restoring from that backup is often the fastest and most reliable solution. However, be aware that if the backup is more than a few days old, you may lose recent content changes — and if the vulnerability that allowed the hack has not been addressed, the site will simply be hacked again.

**A critical warning about DIY malware removal:** Many business owners attempt to clean their own hacked site by deleting the files identified in a malware scan. This approach misses the backdoors — hidden files that are specifically designed to evade basic scanning tools. If you clean the obvious malware but leave a backdoor in place, your site will be re-compromised, often within 24–48 hours. Professional malware removal services use more sophisticated detection methods and are significantly more likely to find and remove all malicious code.

---

**Step 6: Identify and Close the Vulnerability**

Removing the malware is not enough. Unless you identify and close the vulnerability that allowed the hacker to get in, your site will be compromised again — often within hours or days of being cleaned.

Common entry points include outdated CMS software, outdated or abandoned plugins and themes, weak administrator passwords, insecure file permissions, and compromised third-party integrations. Your hosting provider's server logs and the malware scan report will often point to the specific file or vulnerability that was exploited.

We will explore the root causes of website hacking in much greater depth in Chapter 3, because understanding *why* your site was targeted is the key to preventing it from happening again.

---

**Step 7: Notify Affected Parties**

Once your site is clean and secure, you have an obligation to notify anyone who may have been affected by the breach. This step is one that many business owners are tempted to skip or minimise — but it is both ethically important and, in many cases, legally required under Australian law.

**Notify your customers** if there is any possibility that their personal information was accessed or stolen. Under the Australian Privacy Act 1988 and the Notifiable Data Breaches (NDB) scheme, businesses covered by the Privacy Act are required to notify both the Office of the Australian Information Commissioner (OAIC) and affected individuals if a data breach is likely to result in serious harm. We cover your legal obligations in full detail in Chapter 4.

**Notify Google** once your site is clean by submitting a review request through Google Search Console. If Google has blacklisted your site or flagged it for security issues, this review request is the mechanism by which you ask Google to re-evaluate your site and remove the warning. This process can take anywhere from a few hours to several days.

**Notify your email list** if your domain was used to send spam or phishing emails. A brief, honest communication explaining what happened, what you have done to fix it, and what recipients should do if they received a suspicious email will go a long way towards preserving trust.

---

### The 72-Hour Response Timeline

The following table provides a practical timeline for managing a website hack response. Use it as a checklist to ensure nothing is missed in the critical first three days.

| Timeframe | Priority Actions |
|---|---|
| **First 2 hours** | Take site offline or into maintenance mode; change all passwords; contact hosting provider |
| **Hours 2–6** | Run malware scans; review server logs; assess the scope of the breach |
| **Hours 6–24** | Begin malware removal or engage professional help; identify the vulnerability |
| **Hours 24–48** | Restore clean site; close the vulnerability; submit Google review request |
| **Hours 48–72** | Notify affected customers if required; notify OAIC if required; document the incident |
| **Week 2 onwards** | Assess long-term security posture; begin planning permanent solution |

---

## Chapter 3: Why Hackers Targeted Your Site

### It Was Not Personal — But It Was Preventable

One of the first questions business owners ask after a hack is: "Why me?" The answer, in most cases, is not that your business was specifically targeted. Hackers — particularly the automated bots that conduct the majority of website attacks — do not discriminate by industry, size, or location. They scan millions of websites continuously, looking for known vulnerabilities, and they attack whatever they find.

You were not targeted because of who you are. You were targeted because of what your website was: vulnerable.

To illustrate the scale of this: security researchers estimate that over 30,000 websites are hacked every single day globally. The vast majority of these are not high-profile corporate targets — they are small and medium-sized businesses whose websites were running outdated software, using weak passwords, or hosted on insecure servers. Automated scanning bots probe every publicly accessible website on the internet, continuously, looking for the specific signatures of known vulnerabilities. When they find one, the attack is executed automatically, without any human ever looking at your specific website.

Understanding the specific reasons your site was vulnerable is the most important step in preventing future attacks. The following are the most common root causes of website hacking, and they are worth examining honestly and carefully.

### Root Cause 1: An Outdated Content Management System

The most common cause of website hacking, by a significant margin, is an outdated content management system. WordPress, which powers the majority of small business websites in Australia, releases regular updates that patch known security vulnerabilities. When those updates are not applied — because the site owner does not know how, does not have time, or is worried about breaking something — those vulnerabilities remain open indefinitely.

Hackers maintain databases of known vulnerabilities in every version of WordPress and other CMS platforms. When a new vulnerability is discovered and published (which happens regularly), automated bots begin scanning the internet for sites running the vulnerable version within hours. If your site is running an old version of WordPress, it is not a matter of *if* it will be targeted — it is a matter of *when*.

The same principle applies to the theme your site uses. Themes are essentially the design and layout layer of your website, and they too require regular updates to patch security vulnerabilities. An outdated theme — particularly one that is no longer actively maintained by its developer — is a common and serious security risk.

### Root Cause 2: Outdated or Abandoned Plugins

If WordPress core updates are the most common cause of hacking, outdated plugins are a very close second. The average WordPress website uses between 10 and 30 plugins — small pieces of software that add functionality to the site, such as contact forms, image galleries, SEO tools, and e-commerce features.

Each plugin is a separate piece of software with its own code, its own update cycle, and its own potential vulnerabilities. When a vulnerability is discovered in a popular plugin, it can affect hundreds of thousands of websites simultaneously. The Wordfence Threat Intelligence team, which tracks WordPress security vulnerabilities, reports that plugin vulnerabilities account for the majority of WordPress hacking incidents.

Particularly dangerous are **abandoned plugins** — plugins that were once actively developed but whose developers have stopped releasing updates. These plugins may have known, publicly documented vulnerabilities that will never be patched. Yet they continue to run on thousands of websites whose owners are unaware that the plugin is no longer maintained.

How do you know if a plugin is abandoned? In WordPress, visit the plugin's page on the WordPress.org repository and check the "Last updated" date. Any plugin that has not been updated in more than 12 months should be treated with caution. Any plugin that has not been updated in two or more years, or that is marked as "not tested with the last 3 major releases of WordPress," should be considered a security liability and removed.

### Root Cause 3: Cheap or Shared Hosting

The hosting environment your website lives in has a profound impact on its security. Many small business websites are hosted on cheap shared hosting plans — plans where hundreds or thousands of websites share the same server resources. While this is an economical choice, it introduces a significant security risk: if any one of the other websites on your shared server is compromised, malware can potentially spread to your site through the shared environment.

Cheap hosting providers also tend to invest less in server-level security measures such as firewalls, intrusion detection systems, and automated malware scanning. They may not perform regular security audits of their infrastructure, and their support teams may have limited expertise in security incident response.

A particularly important question to ask your hosting provider is: **"Do you use account isolation on your shared hosting servers?"** Account isolation means that even if another website on the same server is compromised, the malware cannot spread to your account. Many budget hosting providers do not implement proper account isolation, meaning a hack of any one of the thousands of sites on your shared server can affect you directly.

### Root Cause 4: Weak Administrator Passwords and Poor Access Control

Despite decades of warnings about password security, weak passwords remain one of the most common causes of website compromise. Brute force attacks — where automated bots attempt thousands of password combinations per second — are extraordinarily common, and a weak password can be cracked in seconds.

Equally problematic is poor access control. The following are the most common access control failures seen on small business websites:

Using "admin" as the WordPress username — this is the first username every brute force attack tries, and it is trivially easy for an attacker to confirm whether it exists. Using your business name, your own name, or any dictionary word as a password. Giving administrator-level access to the website to staff members, contractors, or web designers who no longer work with the business — and whose credentials may have been compromised elsewhere. Having multiple administrator accounts when only one is needed. Never enabling two-factor authentication, which would prevent a successful login even if the password is compromised.

### Root Cause 5: A Poorly Coded Original Build

Some websites are hacked not because of outdated software or weak passwords, but because the original code was written poorly. Custom-built features — contact forms, booking systems, membership portals, e-commerce functionality — that were not developed with security best practices in mind can contain vulnerabilities that are entirely independent of the CMS or plugins.

**SQL injection** is a technique where an attacker inserts malicious database commands into an input field on your website — such as a search box or contact form — and the server executes those commands, potentially exposing or deleting your entire database. A properly coded website validates and sanitises all user input before it is processed, preventing SQL injection entirely. An improperly coded website does not.

**Cross-site scripting (XSS)** is a technique where an attacker injects malicious JavaScript code into your website, which then executes in the browsers of your visitors. This can be used to steal session cookies, redirect users, or display fraudulent content. Again, this is entirely preventable with proper input handling — but many websites built quickly or on a tight budget do not implement these protections.

**Insecure file upload handlers** are a common vulnerability in websites that allow users to upload files — such as images, documents, or profile photos. If the upload handler does not properly validate the type and content of uploaded files, an attacker can upload a PHP script disguised as an image, which then gives them the ability to execute arbitrary code on your server.

These vulnerabilities are often introduced when a website is built by an inexperienced developer, a freelancer working quickly to a tight budget, or a website builder tool that generates insecure code. They cannot be fixed by updating plugins or changing passwords — they require the underlying code to be rewritten.

### Root Cause 6: No SSL Certificate or Misconfigured Security Headers

A website without a valid SSL certificate transmits data between the visitor's browser and the server in plain text — meaning that any data submitted through your website, including contact form submissions, login credentials, and payment information, can potentially be intercepted by anyone monitoring the network traffic.

Beyond SSL, a properly configured website implements a set of HTTP security headers that protect against specific categories of browser-based attacks. These headers are invisible to the casual visitor but are checked by browsers and security scanners. Common security headers include Content Security Policy (CSP), which prevents cross-site scripting attacks; X-Frame-Options, which prevents your site from being embedded in an iframe on a malicious site (a technique known as clickjacking); and HTTP Strict Transport Security (HSTS), which forces browsers to always use HTTPS when connecting to your site.

Most small business websites have none of these headers configured. Running your website through a free tool such as `https://securityheaders.com` will show you exactly which headers are missing and what grade your site receives. An "F" grade — which the majority of small business websites receive — indicates that the site is missing fundamental browser-level security protections.

### Root Cause 7: No Active Monitoring

Perhaps the most overlooked root cause of website hacking is not a specific vulnerability but the absence of monitoring. A website that is not actively monitored for security events, file changes, and suspicious login attempts will not detect a compromise until the damage is already done — and as we have established, hacks are often invisible for weeks or months.

Active monitoring includes: automated malware scanning that runs at least daily; file integrity monitoring that alerts you when core files are modified; login attempt monitoring that detects and blocks brute force attacks; uptime monitoring that alerts you immediately if your site goes down; and Google Search Console monitoring for security warnings and manual actions.

None of these monitoring tools are expensive or technically complex to implement. But they require someone to set them up, review the alerts, and act on them — which is precisely why ongoing professional website maintenance is not a luxury but a business necessity.

### The Uncomfortable Truth

Reading through these root causes, you may have recognised your own website in one or more of them. Perhaps your site is running an old version of WordPress. Perhaps you have plugins you installed years ago and have never updated. Perhaps you are on a cheap hosting plan. Perhaps you do not even know who built your site or what security measures, if any, were taken during the build.

If so, the uncomfortable truth is this: **your current website, in its current state, cannot be made truly secure through patching alone.** The problems described above are not surface-level issues that can be fixed with a plugin or a software update. They are structural problems — problems with the foundation of the site — and they require a structural solution.

That solution is the subject of Chapter 5. But first, there is something more urgent to address: your legal obligations.

---

## Chapter 4: Your Legal Obligations After a Website Hack

### This Is Not Optional

Many business owners treat the legal dimension of a website hack as an afterthought — something to worry about once the technical crisis has been resolved. This is a mistake. Australia has clear, enforceable legal obligations around data breach notification, and the penalties for non-compliance have increased dramatically in recent years.

This chapter provides a plain-English overview of your legal obligations as an Australian business owner following a website security incident. It is not a substitute for legal advice — if you are in any doubt about your obligations in a specific situation, consult a qualified privacy lawyer. But it will give you a clear understanding of the framework and the questions you need to be asking.

### The Notifiable Data Breaches Scheme

The Notifiable Data Breaches (NDB) scheme, established under the Privacy Act 1988, requires organisations covered by the Privacy Act to notify both the Office of the Australian Information Commissioner (OAIC) and affected individuals when an "eligible data breach" occurs.

An eligible data breach is defined as a breach that is likely to result in serious harm to any of the individuals whose information is involved. Serious harm includes financial harm, reputational damage, physical harm, psychological harm, and harm to relationships or employment.

**Who is covered by the Privacy Act?** The Act applies to Australian Government agencies and private sector organisations with an annual turnover of more than $3 million. It also applies to health service providers, credit reporting bodies, and certain other categories of organisation regardless of turnover. Importantly, many small businesses fall outside the $3 million threshold — but this does not mean they have no obligations. Even businesses not covered by the Privacy Act may have contractual obligations to notify customers of a breach, and may face significant reputational consequences if they do not.

**What constitutes a data breach in the context of a website hack?** If your website stores or processes personal information — names, email addresses, phone numbers, payment details, health information, or any other information that could identify an individual — and that information may have been accessed by an unauthorised party as a result of the hack, you have experienced a data breach. This includes situations where your contact form submissions are stored in a database that may have been accessed, where your e-commerce site stores customer order history, or where your membership site stores user profiles.

**What are the notification requirements?** If you determine that an eligible data breach has occurred, you are required to notify the OAIC as soon as practicable — ideally within 30 days of becoming aware of the breach. You are also required to notify affected individuals, either directly (by email or letter) or, if direct notification is not practicable, by publishing a notice on your website.

**What are the penalties for non-compliance?** The penalties for serious or repeated privacy breaches were significantly increased in December 2022. A serious or repeated privacy breach can now attract a penalty of the greater of $50 million, three times the value of the benefit obtained from the breach, or 30% of the company's adjusted turnover during the breach period. For smaller businesses, the maximum penalty is $2.5 million per breach. These are not theoretical figures — Australian regulators are actively pursuing enforcement actions, and the consequences of ignoring your obligations can be severe.

### What to Do If You Believe a Data Breach Has Occurred

The following steps outline the required process under the NDB scheme.

**Step 1: Assess the breach.** As quickly as possible, determine what information may have been accessed, how many individuals are affected, and whether the breach is likely to result in serious harm. Document your assessment process and the evidence you relied on.

**Step 2: Contain the breach.** Take immediate steps to stop the breach from continuing — which, in the context of a website hack, means taking the site offline, changing all passwords, and removing the malicious code as described in Chapter 2.

**Step 3: Notify the OAIC.** If you determine that an eligible data breach has occurred, submit a notification to the OAIC using the online notification form at `https://www.oaic.gov.au`. The notification must include a description of the breach, the kinds of information involved, the number of individuals affected, and the steps you have taken or plan to take in response.

**Step 4: Notify affected individuals.** Contact affected individuals directly, providing a clear description of what happened, what information was involved, and what steps they should take to protect themselves. If you cannot contact individuals directly, publish a prominent notice on your website.

**Step 5: Review and remediate.** Document the breach, your response, and the steps you have taken to prevent a recurrence. This documentation will be required if the OAIC investigates the breach.

### The Reputational Cost: What the Numbers Say

Beyond the legal penalties, the financial and reputational cost of a website hack for an Australian small business is significant and often underestimated. The Australian Cyber Security Centre (ACSC) reports that the average self-reported cost of a cybercrime incident for a small business has risen to approximately $46,000 — and this figure captures only the direct costs reported by businesses, not the indirect costs of lost customers, damaged reputation, and reduced search visibility.

For incidents involving a data breach, the costs are dramatically higher. Research consistently shows that the average cost of a data breach for a small business ranges from $120,000 to well over $1 million when all direct and indirect costs are accounted for — including incident response, legal fees, customer notification, regulatory penalties, and the long-term impact on customer trust and retention.

The cost of preventing a hack — through a professionally built, properly maintained website — is a fraction of the cost of recovering from one.

---

## Chapter 5: The Temporary Fixes vs. The Permanent Solution

### Why Patching a Compromised Site Is Like Bailing Out a Leaking Boat

When a business owner discovers their site has been hacked, the natural instinct is to fix it as quickly and cheaply as possible. Call the developer, clean the malware, update the plugins, and get back to normal. This is understandable — but it is also, in most cases, a decision that will lead to being hacked again.

To understand why, consider an analogy. Imagine you discover that your home has been broken into through a window with a faulty lock. You call a locksmith, who fixes the lock. Problem solved — until the burglar comes back through a different window with the same faulty lock, or through the back door that was never properly secured in the first place.

Cleaning malware from a hacked website is the equivalent of fixing the lock. It addresses the immediate symptom, but it does not address the underlying structural vulnerabilities that made the hack possible. And because those vulnerabilities are often numerous, interconnected, and deeply embedded in the site's architecture, they cannot all be reliably identified and fixed through a patching exercise.

### What "Fixing" a Hacked Site Actually Involves — And What It Misses

When a developer or security service cleans a hacked website, they are typically doing the following: removing the malicious code and files that the hacker injected; updating the CMS, plugins, and themes to their latest versions; strengthening password policies and adding a security plugin; and implementing a web application firewall to block common attack patterns.

These are all worthwhile steps. But they have significant limitations that are rarely explained to business owners.

**They cannot fix vulnerabilities in the original code.** If the site was built with insecure custom code — SQL injection vulnerabilities, insecure file upload handlers, cross-site scripting vulnerabilities — updating WordPress and its plugins will not address those vulnerabilities. The only way to fix insecure custom code is to rewrite it, which on an old site often means rewriting significant portions of the site.

**They cannot guarantee that all malware has been found.** Sophisticated hackers plant multiple backdoors — hidden access points that allow them to re-enter the site even after the obvious malware has been cleaned. Finding and removing every backdoor on a heavily infected site is extremely difficult, and even experienced security professionals sometimes miss them. Industry data suggests that a significant proportion of cleaned sites are re-hacked within 30 days — often because a backdoor was missed.

**They cannot address the hosting environment.** If the site is on cheap shared hosting where other sites have been compromised, cleaning your site does not protect it from re-infection through the shared environment. The only solution is to move to better hosting — which, on an old site with a complex setup, is often more disruptive and expensive than it sounds.

**They cannot compensate for years of deferred maintenance.** A site that has not been properly maintained for three, four, or five years has accumulated a significant technical debt of security vulnerabilities. Bringing it up to a genuinely secure state is not a matter of running a few updates — it requires a comprehensive audit and remediation process that, in many cases, costs more than building a new site from scratch.

**They cannot future-proof the site.** Even if a patched site is clean today, it will continue to accumulate new vulnerabilities as new exploits are discovered in its outdated technology stack. A site built on an old version of a page builder, using a theme that is no longer actively developed, running on a PHP version that is no longer supported — these are not problems that can be solved by patching. They are structural limitations that will continue to generate security risks indefinitely.

### The Honest Cost Comparison

Business owners often resist the idea of a full website rebuild because of the perceived cost. But this resistance is usually based on comparing the cost of a rebuild against the cost of a single patching exercise — not against the true total cost of continuing to patch an insecure site over time.

The following table provides a realistic cost comparison for a typical small business website over a three-year period.

| Scenario | Year 1 | Year 2 | Year 3 | 3-Year Total |
|---|---|---|---|---|
| **Patch and maintain old site** | $800–$1,500 (hack cleanup + updates) | $600–$1,200 (maintenance + another hack) | $800–$2,000 (another hack + emergency fixes) | $2,200–$4,700 |
| **Professional rebuild + maintenance** | $5,000–$15,000 (rebuild) + $1,200/yr maintenance | $1,200 (maintenance) | $1,200 (maintenance) | $7,400–$17,400 |
| **Cost of a serious data breach** | $46,000–$120,000+ (incident response, legal, notification, lost business) | — | — | $46,000–$120,000+ |

The numbers make the case clearly. The cost of a professional rebuild, spread over three years, is comparable to the cost of repeatedly patching a compromised site — and dramatically less than the cost of a serious data breach. And the rebuilt site delivers not just security but a better, faster, more effective website that actively contributes to the business's growth.

### The Permanent Solution: A Professionally Rebuilt Website

The permanent solution to a structurally vulnerable website is a professionally built replacement — a new website, built from the ground up on a modern, secure framework, by developers who understand security best practices and build them into the site from the very first line of code.

A professionally rebuilt website addresses every one of the root causes described in Chapter 3. It is built on a current, actively maintained CMS with a minimal, carefully selected set of plugins — reducing the attack surface dramatically compared to a site with dozens of outdated plugins. It is hosted on a quality, security-focused hosting environment with server-level firewalls, automated malware scanning, and regular backups. It is built with security best practices embedded in the code. It is maintained on an ongoing basis, with regular updates applied promptly and a professional team available to respond if an issue arises.

This is not a sales pitch for the sake of it. It is an honest assessment of what it takes to have a website that is genuinely secure in the current threat environment.

---

## Chapter 6: What a Secure, Modern Website Actually Looks Like

### The Difference Between a Website That Looks Good and One That Is Built Right

Many business owners, when they think about getting a new website, focus primarily on how it looks. They want something modern, professional, and reflective of their brand. These are entirely legitimate goals — but they are the visible layer of what a good website delivers. Underneath the design, a well-built website has a set of technical and security characteristics that are invisible to the casual observer but absolutely critical to its long-term performance and safety.

### A Minimal, Purposeful Technology Stack

A professionally built website uses the minimum number of tools, plugins, and third-party integrations necessary to achieve the site's goals. Every additional plugin or integration is an additional potential vulnerability — and an additional maintenance obligation. A good developer will build custom functionality where appropriate, rather than installing a plugin for every feature, and will be selective and deliberate about which third-party tools are used.

This is in stark contrast to the typical small business website, which may have accumulated dozens of plugins over the years — some actively used, some forgotten, some abandoned by their developers — each one representing a potential entry point for attackers.

### Quality, Security-Focused Hosting

A professionally built website is hosted on an environment that is appropriate for a business asset. This typically means a managed WordPress hosting provider (such as WP Engine, Kinsta, or Flywheel) or a quality Australian hosting provider with a strong security track record, rather than the cheapest shared hosting plan available.

Quality hosting environments include server-level firewalls, automated daily backups with easy one-click restore, active malware scanning, DDoS protection, and a support team with genuine security expertise. They also typically include staging environments — separate copies of the site where updates and changes can be tested before being applied to the live site, reducing the risk of an update breaking something.

### HTTPS, SSL, and Proper Security Headers

Every page of a professionally built website is served over HTTPS, with a valid SSL certificate that is renewed automatically before it expires. The SSL configuration is set up correctly, with HTTP requests automatically redirected to HTTPS.

Beyond SSL, a properly configured website implements the full suite of HTTP security headers described in Chapter 3 — Content Security Policy, X-Frame-Options, HTTP Strict Transport Security, and others. Running a professionally built site through `https://securityheaders.com` should return an "A" or "A+" grade.

### Regular, Managed Updates

A professionally maintained website has a defined update process. Core CMS updates, plugin updates, and theme updates are applied regularly — typically monthly, or more frequently when critical security patches are released — and are tested in a staging environment before being applied to the live site.

This ongoing maintenance is not optional. It is the single most important thing that keeps a website secure over time. A website that is not actively maintained will inevitably accumulate vulnerabilities, and it is only a matter of time before those vulnerabilities are exploited.

### Automated Backups and a Disaster Recovery Plan

A professionally built website has automated daily backups stored in a location separate from the hosting server — meaning that even if the server is completely compromised, a clean copy of the site can be restored quickly. The backup and restore process is tested regularly to ensure it actually works when needed.

Many business owners assume their hosting provider is backing up their site. In some cases this is true, but the frequency, retention period, and reliability of hosting provider backups vary enormously. A dedicated backup solution, managed as part of the website's ongoing maintenance, provides a reliable safety net.

### A Web Application Firewall and Active Monitoring

A web application firewall (WAF) sits between the internet and your website, inspecting incoming traffic and blocking requests that match known attack patterns. Combined with active monitoring — daily malware scanning, file integrity monitoring, login attempt monitoring, and uptime monitoring — a professionally maintained site has multiple layers of defence and the ability to detect and respond to threats before they cause significant damage.

### Secure User Access Management

A professionally managed website has a clear, documented access control policy. Only the people who genuinely need administrator access have it. All accounts use strong, unique passwords. Two-factor authentication is enabled for all administrator accounts. Former staff and contractors have their access removed promptly when they leave.

### The Result: A Website That Works for Your Business, Not Against It

A website built and maintained to these standards is not just more secure — it is also faster, more reliable, and more effective as a business tool. Modern, lightweight code loads faster than the bloated output of old page builders. Quality hosting delivers better uptime and performance than cheap shared servers. Regular maintenance ensures the site continues to function correctly as browsers, devices, and web standards evolve.

---

## Chapter 7: How to Choose the Right Web Developer — And Avoid the Wrong One

### The Questions That Separate Professional Agencies from Risky Operators

One of the most common mistakes business owners make after a hack is engaging the first developer who offers to fix the problem quickly and cheaply. This is understandable — when you are in crisis mode, speed and price feel like the most important factors. But engaging the wrong developer can leave you with a site that is cleaned on the surface but still fundamentally insecure, or worse, a site that is re-hacked within weeks because the underlying vulnerabilities were never properly addressed.

The following are the questions you should ask any developer or agency before engaging them to rebuild or secure your website. A professional, competent agency will answer all of these questions confidently and specifically. Vague, dismissive, or evasive answers are red flags.

### Questions About Security Practices

**"What security measures do you build into every website by default?"** A professional agency should be able to describe a specific, documented set of security practices they implement on every project — not just "we follow best practices." Look for specific answers about security headers, hardened configurations, minimal plugin use, and secure coding standards.

**"What hosting environment do you recommend, and why?"** A professional agency has a considered, specific recommendation for hosting — not just "whatever you want to use." They should be able to explain the security advantages of their recommended host, including account isolation, server-level firewalls, and backup policies.

**"How do you handle updates and maintenance after the site launches?"** A professional agency offers an ongoing maintenance plan that includes regular updates, security monitoring, and a defined response process for security incidents. If the answer is "we build the site and then it's up to you," this is a significant red flag — a website without ongoing maintenance will inevitably become vulnerable.

**"Do you implement two-factor authentication and what is your approach to access control?"** A professional agency implements 2FA as a standard practice and has a clear policy on who has access to the site and how that access is managed and revoked.

**"How do you handle backups?"** The answer should include automated daily backups, off-site storage, and a tested restore process. "The hosting provider handles backups" is not an acceptable answer on its own.

### Questions About Their Process and Track Record

**"Can you show me examples of websites you have built that are still live and performing well?"** A reputable agency has a portfolio of live client websites they are proud to show. Visit those websites and check them using tools like Google PageSpeed Insights and Sucuri SiteCheck — the quality of their security and performance practices will be evident.

**"Have any of your client websites been hacked? How did you respond?"** Every experienced developer has had a client site compromised at some point. What matters is how they responded. A professional agency has a clear incident response process and can describe it specifically.

**"Who owns the website and all its files when the project is complete?"** The answer should be unambiguously: you do. Some developers retain ownership of the code or the hosting account as a way of locking clients in. This is a serious red flag.

**"What happens if I need to move the site to a different host or developer in the future?"** A professional agency builds sites in a way that makes them portable and hands over full access and documentation at project completion. An agency that makes it difficult or expensive to move away is prioritising their own interests over yours.

### Red Flags to Walk Away From

The following are warning signs that a developer or agency is not the right choice for a business that takes its website security seriously.

| Red Flag | What It Signals |
|---|---|
| Promises a very fast turnaround at a very low price | Corners will be cut; security will not be a priority |
| Cannot explain their security practices in specific terms | They do not have any |
| Recommends the cheapest possible hosting | They are not thinking about your long-term security |
| Does not offer or recommend ongoing maintenance | They are not thinking about what happens after launch |
| Retains ownership of your domain, hosting, or code | They are creating dependency, not serving your interests |
| Cannot provide references from current, satisfied clients | Their track record does not support their claims |
| Uses excessive numbers of plugins to build functionality | They are taking shortcuts that create security risks |
| Does not ask questions about your business goals | They are building a website, not solving a business problem |

---

## Chapter 8: The Website Security Self-Assessment

### Where Does Your Site Stand Right Now?

The following self-assessment is designed to give you a realistic picture of your website's current security posture. Work through each question honestly and tally your score at the end. The results will tell you where you stand — and what you need to do about it.

For each question, answer Yes (2 points), Unsure (1 point), or No (0 points).

---

**Section A: Your CMS and Software**

1. Is your WordPress (or other CMS) installation running the latest version?
2. Are all of your plugins updated to their latest versions?
3. Is your website theme updated to its latest version?
4. Are all of your plugins actively maintained (updated within the last 12 months)?
5. Have you removed any plugins that you no longer use?

**Section B: Your Hosting Environment**

6. Is your website hosted on a managed or quality hosting plan (not the cheapest shared option)?
7. Does your hosting provider offer server-level malware scanning?
8. Does your hosting provider implement account isolation on shared servers?
9. Does your hosting provider offer automated daily backups?
10. Are your backups stored off-site (not just on the same server as your website)?

**Section C: Access and Authentication**

11. Is your WordPress admin username something other than "admin"?
12. Are all administrator passwords at least 16 characters and unique?
13. Is two-factor authentication enabled for all administrator accounts?
14. Do you know exactly who has administrator access to your website?
15. Have you removed access for any former staff or contractors?

**Section D: Security Configuration**

16. Does your website use HTTPS on every page?
17. Does your website have a valid, auto-renewing SSL certificate?
18. Has your website been tested for security headers (e.g., via securityheaders.com)?
19. Does your website have a web application firewall in place?
20. Is your website's login page protected against brute force attacks?

**Section E: Monitoring and Recovery**

21. Is your website scanned for malware at least daily?
22. Do you receive alerts if your website goes offline?
23. Do you receive alerts if core website files are modified?
24. Have you tested your backup restore process in the last 6 months?
25. Do you have a written incident response plan for a website hack?

---

### Scoring Your Assessment

| Score | Rating | What It Means |
|---|---|---|
| **40–50** | Strong | Your site has solid security foundations. Focus on maintaining and improving. |
| **28–39** | Moderate | Meaningful vulnerabilities exist. Prioritise the areas where you scored lowest. |
| **15–27** | At Risk | Your site has significant security gaps. Professional review is strongly recommended. |
| **0–14** | Critical | Your site is highly vulnerable. Immediate professional assessment is essential. |

If you scored below 28, or if you found yourself answering "Unsure" to many of the questions — which itself is a significant concern — the most valuable next step is a professional website security audit. Not a surface-level scan, but a thorough, expert review of your site's code, configuration, hosting environment, and access controls.

---

## Chapter 9: The Long-Term Security Plan — Protecting Your Website for Years to Come

### Security Is Not a Project. It Is a Practice.

One of the most important mindset shifts a business owner can make about website security is to stop thinking of it as a one-time project and start thinking of it as an ongoing practice. A website that is secure today will not necessarily be secure in six months — not because anything has gone wrong, but because the threat landscape evolves continuously. New vulnerabilities are discovered in WordPress, plugins, and themes every week. New attack techniques emerge. New automated scanning bots are deployed.

The only way to maintain a genuinely secure website over time is to treat security as a continuous, managed process — not something you address once after a crisis and then forget about.

### The Four Pillars of Long-Term Website Security

**Pillar 1: Prevention.** A secure foundation — built on quality hosting, minimal plugins, clean code, and proper configuration — dramatically reduces the attack surface. Prevention is the most cost-effective form of security because it stops incidents from occurring rather than responding to them after the fact.

**Pillar 2: Detection.** Active monitoring — daily malware scanning, file integrity monitoring, login attempt monitoring, and uptime monitoring — ensures that if something does go wrong, it is detected quickly. The difference between a hack that is discovered within hours and one that runs for months is the difference between a minor incident and a major crisis.

**Pillar 3: Response.** A documented incident response plan — knowing exactly what to do, in what order, and who to call — dramatically reduces the time and cost of recovering from a security incident. The steps in Chapter 2 of this guide form the basis of a response plan; your agency should help you document and customise this for your specific situation.

**Pillar 4: Recovery.** Reliable, tested backups are the ultimate safety net. No matter what happens — a hack, a failed update, an accidental deletion — a clean, recent backup means you can restore your site quickly and completely. Backups that have never been tested are not reliable backups; they are files that might work when you need them.

### What a Professional Website Maintenance Plan Looks Like

A professional website maintenance plan, provided by a reputable agency, typically includes the following services delivered on an ongoing monthly basis.

| Service | Frequency | Purpose |
|---|---|---|
| CMS core updates | Monthly (or as released) | Patch known security vulnerabilities |
| Plugin and theme updates | Monthly (or as released) | Patch known security vulnerabilities |
| Malware scanning | Daily | Detect infections early |
| Uptime monitoring | Continuous | Detect outages immediately |
| File integrity monitoring | Daily | Detect unauthorised file changes |
| Off-site backup | Daily | Enable fast recovery from any incident |
| Security report | Monthly | Keep you informed of your site's security status |
| Incident response | As needed | Respond quickly if something goes wrong |

A maintenance plan of this scope typically costs between $150 and $500 per month depending on the complexity of the site and the level of service provided. This is not an expense — it is insurance. And unlike most insurance, it delivers tangible, ongoing value every single month in the form of a website that is faster, more reliable, and more secure.

### The Compounding Value of a Well-Maintained Website

There is a compounding benefit to ongoing professional website maintenance that goes beyond security. A website that is regularly updated, monitored, and optimised will consistently outperform a neglected site across every metric that matters to your business.

Search engine rankings improve over time as the site's technical health is maintained and improved. Page load speed remains fast as the hosting environment and code are kept current. Conversion rates are higher on a site that loads quickly, functions correctly on all devices, and inspires trust through its professional appearance and security credentials. Customer trust is maintained because the site never serves malware, never goes offline unexpectedly, and never embarrasses the business with a hack.

The business owner who invests in ongoing professional website maintenance is not just buying security — they are buying a compounding competitive advantage.

---

## Chapter 10: Your Next Steps — The Deep Website Audit

### From Reading to Action

You have now read this guide in full. You understand the warning signs of a hack, the immediate response steps, the root causes of website vulnerability, your legal obligations, the difference between patching and rebuilding, what a secure website looks like, how to choose the right developer, and what a long-term security plan involves.

That knowledge is genuinely valuable. But knowledge without action does not protect your business.

The single most valuable action you can take right now — whether your site has been hacked or not — is to commission a professional deep website audit. Not a surface-level scan using a free online tool, but a thorough, expert review conducted by a professional who understands both the technical and business dimensions of website security.

### What a Deep Website Audit Covers

A deep website audit conducted by our team covers the following areas in comprehensive detail.

**Technical Security Review.** A thorough examination of your site's code, configuration, and software versions against known vulnerability databases. This includes checking every plugin and theme for known vulnerabilities, reviewing your server configuration for security misconfigurations, testing your site's security headers, and examining your SSL configuration.

**Malware and Blacklist Scan.** A comprehensive scan of your site's files and database for known malware signatures, suspicious code patterns, hidden backdoors, and injected content. We check your domain against all major blacklists and Google's Safe Browsing database.

**Access Control Review.** A review of all user accounts with access to your website, their permission levels, and the strength of their authentication. We identify any accounts that should not exist, any accounts using weak passwords, and any accounts without two-factor authentication.

**Hosting Environment Assessment.** An evaluation of your hosting environment's security features, including account isolation, server-level firewalls, backup configuration, and malware scanning capabilities.

**Backup and Recovery Assessment.** A review of your current backup configuration, including frequency, retention period, storage location, and whether the restore process has been tested.

**Compliance Assessment.** A review of your website's data collection and storage practices against the requirements of the Australian Privacy Act and the Notifiable Data Breaches scheme, identifying any areas of potential non-compliance.

**Performance and Maintenance Assessment.** An evaluation of your website's current performance metrics, update history, and overall maintenance status — providing a clear picture of the technical debt that has accumulated and what it will take to address it.

### What You Receive

At the conclusion of the audit, you receive a comprehensive written report covering all of the above areas, with findings presented in plain English alongside a risk rating for each issue identified. The report includes a prioritised action plan — telling you exactly what needs to be addressed first, what can wait, and what the recommended long-term solution looks like.

You also receive a 60-minute video call with our team to walk through the findings, answer your questions, and discuss the options available to you. There is no obligation to engage our services beyond the audit — the report and the recommendations are yours to act on however you choose.

### How to Book Your Deep Website Audit

To book your Deep Website Audit, visit **[Your Agency Website URL]** or call us directly on **[Your Phone Number]**.

Audits are conducted via a combination of automated scanning tools and manual expert review, and are typically completed within 5–7 business days of engagement. The audit investment is **[Your Audit Price]**, which is credited in full against any subsequent website project if you choose to proceed with a rebuild or remediation.

We work with businesses across Australia and can accommodate all engagements remotely. Our team has conducted website security audits for businesses across a wide range of industries, and we bring both technical expertise and a genuine understanding of the business context to every engagement.

---

### A Final Word

Your website is one of your business's most important assets. For many of your customers, it is the first impression they have of your business — and for some, it is the primary way they find you, evaluate you, and decide whether to contact you. It deserves to be treated with the same care and investment as any other critical business asset.

A hacked website is not just a technical problem. It is a threat to your reputation, your customers' trust, your search visibility, and potentially your legal compliance. The good news is that it is a solvable problem — and the solution, when done properly, delivers a website that is not just secure but genuinely better in every way than what you had before.

The business owners who thrive online are not the ones who got lucky and were never hacked. They are the ones who took their website seriously as a business asset, invested in building it properly, and maintained it with the same professionalism they bring to every other part of their business.

We look forward to helping you get there.

---

*
This guide was prepared to help Australian business owners understand and respond to website security threats. The information provided is general in nature and does not constitute professional legal, technical, or financial advice. For specific advice regarding your situation, please consult a qualified professional. Australian Privacy Act obligations and penalty figures referenced in this guide reflect the law as at the time of publication and may be subject to change.*

---

**[Your Agency Name]**
**[Your Website URL]**
**[Your Phone Number]**
**[Your Email Address]**

*Helping Australian businesses build websites that work harder, perform better, and stay secure.*
