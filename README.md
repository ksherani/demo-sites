# Demo Sites

One static repository, one hosting project, multiple independent websites.

- `index.html`: collection homepage.
- `jemma/`: redesigned Mansel Law Consultancy website.
- Future sites: add `khaista/index.html`, `another-name/index.html`, etc.

## URLs

On GitHub Pages (once enabled):

- Collection: https://ksherani.github.io/demo-sites/
- Mansel: https://ksherani.github.io/demo-sites/jemma/
- Future Khaista: https://ksherani.github.io/demo-sites/khaista/

On a custom domain pointing to this Pages project, these become `https://your-domain.com/jemma/` and `/khaista/`.

## Deploy

In repository Settings → Pages → Build and deployment, select **GitHub Actions**. The included workflow deploys on pushes to `main`. If Pages is unavailable, check the repository visibility and GitHub plan. Alternatively deploy this repository to a static host with no build command and repository root as the output directory.

## Add a site

1. Create a lowercase folder, e.g. `khaista/`.
2. Put its `index.html` and all its assets inside that folder.
3. Use relative links (`styles.css`, `assets/photo.jpg`), not root-relative `/assets/...` links. This works on GitHub Pages and custom domains.
4. Add a link to it in the root `index.html`.
5. Commit and push. The workflow automatically includes any top-level folder containing `index.html`. Keep those folders public-only: everything inside them is deployed.

```sh
git clone https://github.com/ksherani/demo-sites.git
cd demo-sites
python3 -m http.server 8080
```

Visit http://localhost:8080/jemma/.

## Content and scope

Content and original images sourced from https://www.mansellawconsultancy.co.uk/ (home, our-services, about-us, contact), reviewed 25 November 2026. Reorganised into one responsive page with all service categories, consultation/ongoing/post-case support, Jemma’s biography, three testimonials, seven preparation topics, contact information and original disclaimer. Webador platform promotions were intentionally omitted.

This is a design concept and is marked `noindex,nofollow`. No new professional credentials, reviews, fees or outcome guarantees have been invented. The original broad representation claim is qualified as support subject to the scope agreed for the matter; the consultancy’s non-solicitor disclaimer remains explicit. Source testimonials are reproduced as supplied. Images remain subject to the original owner's rights.

The contact form prepares a `mailto:` draft. It does not store, transmit or claim to submit enquiries. Phone and direct email links also work. A production enquiry backend and its privacy policy should be added before replacing this with a server-submitted form.
