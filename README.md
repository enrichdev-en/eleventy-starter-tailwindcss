# Eleventy Starter Template 



Site Demo: <https://eleventy-starter-template.netlify.app>

This Eleventy starter template is build with the following:

- [Eleventy](https://www.11ty.dev/) - Static site generator and templating
- [Tailwindcss](https://tailwindcss.com/) - A utility-first CSS framework
- [PurgeCss](https://purgecss.com/) - A tool to remove unused CSS
- [PostCSS](https://postcss.org/) - For transforming CSS with Javascript
- [HTMLMinifier](https://github.com/kangax/html-minifier) - Javascript-based HTML minifier
- [Cssnano](https://cssnano.co/) - CSS optimisation
- [Netlify](https://www.netlify.com/) - Serverless platform to deploy websites and apps

---

### Requirements
- NodeJS
- Npm
- Netlify (optional)

---
## Getting started


Clone the project to your local environment

```
git clone https://github.com/enrichdev-en/eleventy-starter-tailwindcss.git my-site
```
Install dependencies (development)
```
cd my-site
npm install
```
---
## Development (Local)

To run the template locally in development mode:

```
npm run dev
```
See your site at: <http://localhost:8080>

`_temp` directory will be rendered with your development files.

---
## Production

To build production files:

```
npm run prod
```

`_site` directory will contain all the optimised files.

---
## Deployment

You can choose any methods to deploy this template. 

A simple way is to deploy via Netlify with just one click. A repo will be created in your GitHub, any subsequent changes pushed to the repo will be automatically uploaded.

[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/enrichdev-en/eleventy-starter-tailwindcss)

### Basic build settings on Netlify:

Build Command: `npm run build`

Publish Directory: `_site`

---
## Structure and Customisation

Content, assets, templates and layouts are stored in the `src` directory.

These can be customised to your needs.

```
.
└── src
    ├── _includes
    │   ├── layout.njk          # Templates
    │   ├── post-layout.njk
    │   └── partials            # Template partials
    │       ├── _footer.html
    │       ├── _head.njk
    │       └── _header.html
    ├── assets
    ├── css
    │   └── tailwind.css        # Tailwind directive injection
    ├── posts
    │   ├── blog-1              # Individual post
    │   ├── blog-2
    │   ...
    │   └── posts.json          # posts directory data file
    ├── index.html              # Main pages
    ├── about.html              
    ├── blog.html
    ├── collections.html
    └── contact.html
```

Configuration files:
- `eleventy.js`
- `postcss.config.js`
- `tailwind.config.js`
- `_data/projEnv.js`

---
### Other libraries

- [AOS](https://michalsnik.github.io/aos/) - Animate on scroll library (CDN)
- [rimraf](https://github.com/isaacs/rimraf#readme) - The UNIX command `rm -rf` for node
- [npm-run-all](https://github.com/mysticatea/npm-run-all) - A CLI tool to run multiple npm-scripts in parallel or sequential

---

Made by Eric @ Enrichdev

Feel free to clone, fork and give some feedback. Star if you like it.
