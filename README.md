# GCPS website

A seven-page website for **Global Clothing Product Services**, built with plain HTML, CSS, and JavaScript. No installation or build step is required for the downloadable website.

## Open the website

Extract the ZIP completely, then open `index.html` in a browser. Keep the `assets` folder and `LOGO.png` beside the HTML files. The contact links and Google Maps require an internet connection.

The shared visual styling is in `assets/css/style.css`. The mobile menu, gallery viewer, and WhatsApp enquiry form are in `assets/js/script.js`. In the Sites source repository, these website files are under `dist/`.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home and company introduction |
| `about-us.html` | Company background, mission, markets, and commitments |
| `our-services.html` | Inspections, technical audits, product development, consultancy, and testing coordination |
| `gallery.html` | Six images extracted from the company profile, with an enlarged image viewer |
| `contact-us.html` | Phone, WhatsApp enquiry form, address, and embedded Google Maps |
| `privacy-policy.html` | Website information handling and external-service disclosures |
| `terms-and-conditions.html` | Website use and service-enquiry terms |

The original `LOGO.png` is used for the header, footer, browser favicon, and touch icon. Its image content has not been changed.

## Contact behaviour

- Phone: **+92 333 4664500**. Local format in the profile: **0333-4664500**.
- Contact: **Muhammad Younas**.
- WhatsApp links use `https://wa.me/923334664500`.
- The enquiry form creates an encoded WhatsApp message from the visitor's entries. The visitor reviews and sends the message in WhatsApp. It does not send email, automatically send a WhatsApp message, or simulate a successful submission.
- No email address was provided in the profile or on the reviewed company page, so none has been invented.
- A direct phone link and WhatsApp link remain available without JavaScript. Gallery images also remain accessible as ordinary links.

## Location

The website uses the written address from the supplied profile:

**Sector-DD, Overseas B-Block, Bahria Town, Lahore, Pakistan.**

The map and Google Maps link search for that address area. No office coordinates or Google Place ID were provided. The existing website's map link searches for “Overseas Enclave Sector C”, which differs from its written address and the profile. This version follows the supplied written address. Confirm the exact office pin before directing visitors to a particular building; the Contact Us page tells visitors to call before visiting.

## Edit the website

1. Edit page text directly in its HTML file. The main content is inside `<main id="main">`.
2. Change colours or fonts in the `:root` variables at the top of `assets/css/style.css`. The default font stack uses readable fonts already available on the visitor's device.
3. To change contact details, search across all HTML files for `923334664500`, `+92 333 4664500`, `Muhammad Younas`, and the address. Update both visible text and structured data. Change the form's `data-whatsapp` value as well as phone and WhatsApp links.
4. The header and footer are present in each HTML file so navigation and content work without JavaScript. Apply shared navigation or footer edits to all seven pages.
5. Replace gallery images in `assets/images/` and update their paths, captions, alt text, dimensions, and `srcset` values in `gallery.html`. Some photographs also appear on Home, About Us, or Our Services.
6. Keep the logo filename exactly `LOGO.png`, including its capital letters. If you replace it with a differently sized image, also update the image dimensions in the HTML.

## Public hosting and SEO

The website is prepared for **https://www.gcpsco.com/**. Upload the contents of the extracted website folder to the web root of that domain. Do not upload a ZIP as a substitute for extracting the website files on the server.

This package includes:

- Seven separate pages with their main content directly in HTML.
- Unique page titles and meta descriptions, one main heading per page, and descriptive internal links.
- Canonical URLs, Open Graph title/description metadata, and Twitter title/description metadata.
- JSON-LD for the business, website, individual pages, breadcrumbs, and service listings.
- `sitemap.xml` listing the seven production page URLs and a matching `robots.txt`.
- Local images in WebP format, responsive image sources, explicit dimensions, deferred JavaScript, and lazy loading below the main image.
- Responsive layouts, keyboard focus styles, a skip link, labelled controls, a native gallery dialog, and reduced-motion support.

If you use a different domain or a subfolder, update **all** absolute URLs in the HTML metadata and JSON-LD, `sitemap.xml`, and `robots.txt`. Keep canonical and sitemap URLs consistent with the URLs your public host actually serves. Configure a redirect between `www` and the bare domain so there is one preferred production origin.

After public launch, verify the domain in [Google Search Console](https://search.google.com/search-console/about) and submit its sitemap. Private preview access is for reviewing the site; public search visibility depends on publishing the website where crawlers can access it.

These changes support crawling and clear presentation; they do not guarantee indexing, rankings, or a particular performance score. See [Google's SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide).

## Policy review before public launch

The Privacy Policy and Terms and Conditions are drafted to match this website's actual features. Review them against GCPS's real enquiry handling, retention practices, hosting provider, contractual arrangements, and applicable requirements before adopting them as company policy. Update the displayed date when the policy text changes.

The code includes no analytics, ad trackers, custom cookies, or browser storage. Google Maps is embedded on the Contact Us page; WhatsApp and Google process information under their own policies. If you later add analytics, a form backend, newsletter tools, or other integrations, update the policy accordingly.

## Content and image sources

| Source | Use |
| --- | --- |
| Supplied `Company Profile(1).pptx`, slide 1 | Full company name, tagline, and main service scope |
| Profile, slide 2 | Company background, product categories, markets, and mission |
| Profile, slides 3–4 | Professional and technical services |
| Profile, slides 5–6 | Client commitments, inspection stages, reporting, and quality improvement |
| Profile, slide 8 | Contact person, phone number, website, and written address |
| Supplied `LOGO.png` | Website logo and favicon; original bytes retained |
| Supplied `index(1).html` | Basic semantic structure and contact-form guidance; generic garment-manufacturing example copy replaced with GCPS's actual service profile |
| [Existing GCPS website](https://www.gcpsco.com/), reviewed 6 September 2026 | Cross-check of services, contact person, phone, and written address |
| [Google Privacy Policy](https://policies.google.com/privacy) and [WhatsApp Privacy Policy](https://www.whatsapp.com/legal/privacy-policy) | Links for the two external services used by the website |

| Website image | Source inside the supplied PowerPoint |
| --- | --- |
| `denim-stitching.webp` | `ppt/media/image1.png`, slide 1 |
| `garment-measurement.webp` | `ppt/media/image29.jpeg`, slide 6 |
| `fabric-selection.webp` | `ppt/media/image19.png`, slide 4 |
| `garment-development.webp` | `ppt/media/image18.jpg`, slide 4 |
| `pattern-development.webp` | `ppt/media/image16.jpeg`, slide 4 |
| `denim-review.webp` | `ppt/media/image11.jpeg`, slides 3 and 7 |

Small image variants are supplied for responsive loading. The gallery identifies these as company-profile illustrations; it does not claim they document specific assignments. Brand-experience logos were not converted into customer endorsements. The small watermarked image in the profile was not used; no watermark was removed.

## Verification scope

The delivered source was checked for page structure, missing local assets, broken internal links and anchors, unique page metadata, valid JSON-LD and sitemap XML, logo integrity, JavaScript syntax, and consistent contact URLs. Live browser rendering, actual WhatsApp delivery, and Google's returned office pin were not verified. No message was sent to the company during development.
