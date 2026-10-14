# Competitor benchmark

Reviewed October 2026: **skygate.lk**, **fineducationconsultants.lk**, **wiseeducationandmigration.com** and **lifepatheducation.com**. No text, images or branding from these sites were reused.

## Summary table

| | Sky Gate | FIN Education | Wise Education & Migration | Lifepath Education |
|---|---|---|---|---|
| **Structure** | One long page with anchor nav | Single-page home + a few inner pages | Multi-page, 12-country dropdown | Short home page, Finland-focused |
| **Destinations** | 22 flags with no country pages | Finland only | 9 destination cards + sub-pages | Flag picker with no visible list |
| **Universities** | None named | ~16 Finnish logos, relationship unclear | Named inside success cards | “15+” count only |
| **Trust signals** | Stats (rendered as “0”), 16 unlabelled visa screenshots, initials-only reviews | “100 % success” (unsupported), photo testimonials, YouTube | Google reviews 4.9 / 60, scholarship % on stories | Stats bar, video, testimonial carousel |
| **CTAs** | 9+ different CTA labels, mixed anchor vs WhatsApp | WhatsApp only | “Apply now” everywhere | 9 CTA variants, “Login” next to “Get started” |
| **Lead capture** | Form with no visible name/email fields | No form | No visible enquiry form | Two inconsistent forms |
| **Main weaknesses** | Loader + 5-slide hero, broken counters, contradictory claims | “0+” counter, typos, image-only course info | Menu repeated 3–4×, 2020–23 content, `#` links, typos | “Global Travel” headline mismatch, duplicated contact blocks |

## 1. Must-haves (every competitor has these, so we match them)
- Destination overview with a clear path to each country
- Services list (counselling, applications, visas, test prep, pre-departure)
- Testimonials or success stories
- Headline stats (years, students, success rate)
- WhatsApp contact and phone numbers on every page
- “Free consultation” as the main offer
- FAQ covering costs, IELTS, work rights and dependants

## 2. What to adopt
- **Sky Gate:** a FAQ on practical questions and a clear 5-step process → our *How it works* timeline and FAQ accordion.
- **FIN Education:** testimonials with names and real outcomes, plus a family/dependant visa focus → visa outcome and course details on every testimonial, and a dependant visas section on the Migration page.
- **Wise:** a proper destination dropdown with dedicated country pages, plus scholarship outcomes → 6 detailed destination pages and a Scholarships & Intakes page.
- **Lifepath:** office hours and directions alongside the form → contact page with hours, a map and directions for every branch.

## 3. Weaknesses we beat
| Weakness seen | Our answer |
|---|---|
| Broken “0” counters and unsupported claims | Stat values are rendered in HTML first (correct even without JS), then animated. All figures are flagged in `config.mjs` for verification |
| Cluttered heroes, loaders and sliders | One static hero with one primary and one secondary CTA. No loader, no carousel above the fold |
| Too many CTA labels | One primary action everywhere (“Book a Free Consultation”) and one secondary (WhatsApp) |
| WhatsApp-only or broken forms | One consistent, validated enquiry form on every page, plus WhatsApp |
| Image-only course info, no country detail | Text-based country pages: why study there, courses, costs, intakes, visa, work rights, FAQ |
| Stale dates, typos, `#` links | Content lives in one data file. The build checks links (0 broken), sets the footer year automatically, and keeps dates in ISO format |
| Weak mobile UX | Mobile-first layout, tested at 360 / 768 / 1024 / 1440 px, 48 px tap targets, slide-in drawer |
| No accreditation or partner proof | Dedicated accreditation section, partner logo strip, and a note on registered-agent status for migration (MARA / RCIC) |
