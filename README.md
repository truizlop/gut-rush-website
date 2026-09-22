# Gut Rush website

The Little Expedition landing page, real gameplay clips, support, Privacy Policy and Terms & Conditions.

Published at **https://truizlop.github.io/gut-rush-website/** using GitHub Pages from `main`, repository root. `.nojekyll` serves the static files directly. No build step, framework, third-party runtime script, analytics, external font request or video embed.

## Work locally

```sh
python3 -m http.server 4317 --bind 127.0.0.1
```

Open http://127.0.0.1:4317/. Edit the HTML pages, `styles.css` and `script.js`, then commit and push `main` to deploy. All links work under the GitHub Pages project prefix.

- `/`: illustrated landing page, chapter rail, inline preview and accessible native video dialog.
- `/privacy/`: current app and website data practices, plus explicitly conditional future service disclosures.
- `/terms/`: game/beta terms and conditional Remove Ads subscription and lifetime terms.
- `/support/`: support contact and expandable FAQs.

## Assets and media

Artwork and DynaPuff come from the authorized Gut Rush game assets. `asset-provenance.json` identifies the source files and media hashes. DynaPuff is covered by `assets/DynaPuff-OFL.txt`. Original game artwork and audio are not offered under an open-source licence.

The two approximately 13-second videos are actual iPhone 17e simulator recordings of the Mouth and Duodenum, captured on 18 September 2026 from the game source. DEBUG stage selection bypassed unlock requirements for capture; no score or achievement was reported. Ads and purchases were disabled. Inputs were real native swipe actions. No generated video or fabricated HUD was used. The footage is silent, trimmed, scaled to 540×1168 and encoded as H.264 at approximately 1.4 Mbps. Posters are frames from those recordings. Both clips can be opened directly without JavaScript.

The inline video is muted, pauses outside the viewport or when the page is hidden, and has an explicit play/pause control. Reduced motion and data-saving preferences suppress initial autoplay; reduced motion also stops the postcard animation. The dialog has native video controls, clip selection, Escape dismissal and focus return. The chapter rail supports touch, keyboard arrows and previous/next buttons. No visitor settings are persisted.

## Content maintenance

The published copy reflects the public App Store launch of 1.0 (8) and describes Firebase Analytics/Crashlytics starting with 1.1 (9). It distinguishes paid App Store purchases from no-charge TestFlight sandbox transactions and preserves Google ad-review/availability limitations. The privacy policy includes Firebase identifiers/events/diagnostics and its advertising restrictions. No public TestFlight invitation is implied or fabricated.

The listed US purchase prices describe the configured offers. Localized Apple confirmation controls any actual purchase. The legal pages reference primary provider documentation. This website deployment does not change app flags, in-app URLs, App Store Connect metadata, ad account settings or RevenueCat configuration.

## Verification

Check the home, three content pages, keyboard navigation, both video clips, carousel ends, no-JavaScript fallbacks, reduced motion and mobile layouts before publishing changes. Keep QA recordings, test logs and screenshots outside this repository. `404.html` uses absolute project URLs so nested unknown paths retain styling and a working home link.

## Social sharing

All pages use `assets/gut-rush-social-v1.jpg`, a dedicated 1200×630 JPEG, for Open Graph and Twitter/X large-image cards. Metadata includes dimensions, image type, alt text and page-specific titles/descriptions. The built-in image-generation prompt and provenance are in `asset-provenance.json`. Use a new versioned filename when replacing the image to avoid stale image caches.
