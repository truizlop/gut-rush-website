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

The published copy reflects TestFlight 1.0 (7): no public App Store release, live ads disabled, purchases disabled. Before changing that state, update the availability copy and policies to match the actual service configuration, replace the status with an actual App Store link when available, and verify the final privacy disclosures. No public TestFlight invitation is implied or fabricated.

The planned US purchase prices are conditional, not active offers. Localized Apple confirmation controls any actual purchase. The legal pages reference primary provider documentation. This website deployment does not change app flags, in-app URLs, App Store Connect metadata, ad account settings or RevenueCat configuration.

## Verification

Check the home, three content pages, keyboard navigation, both video clips, carousel ends, no-JavaScript fallbacks, reduced motion and mobile layouts before publishing changes. Keep QA recordings, test logs and screenshots outside this repository. `404.html` uses absolute project URLs so nested unknown paths retain styling and a working home link.
