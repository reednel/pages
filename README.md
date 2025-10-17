
<div align="center">
  <img src="src/assets/astrogon-logo.svg" style="width:80%;" alt="Astrogon Logo" align="center" />
</div>

---

[![GitHub License](https://img.shields.io/github/license/reednel/pages?color=red)](https://github.com/reednel/pages/blob/main/LICENSE) [![Repo Size](https://img.shields.io/github/repo-size/reednel/pages)](https://github.com/reednel/pages) ![GitHub branch check runs](https://img.shields.io/github/check-runs/reednel/pages/main) [![Website](https://img.shields.io/website?up_message=online&up_color=limegreen&down_message=offline&down_color=yellow&url=https%3A%2F%2Freednel.com%2F)](https://reednel.com/)

Reed Nelson's personal website - [reednel.com](https://reednel.com).

Interested in this repo? [Astrogon](https://github.com/astrogon/astrogon) is the more developer-friendly and fully-featured template of this site.

## Development Instructions

1. Fork this repository to your own GitHub account, then clone it to your local machine
2. Use Node 22: `nvm install 22` or `nvm use 22`
3. From the project directory, install Node dependencies: `npm install`
4. From the project directory, build: `npm run dev`
   1. Alternately*: `npx astro build`, `npx wrangler dev`
5. See your changes live at `http://localhost:4321`

> *This is relevant if you intend to deploy your site to Cloudflare. Starting with Astro 5.8, Node 18 is unsupported, but the old Cloudflare Pages uses 18 by default. Wrangler appears to be necessary to use the new Cloudflare Workers. Read about Astro deployment [here](https://docs.astro.build/en/guides/deploy/cloudflare/#cloudflare-workers).

## License

Pages is licensed under the [MIT License](LICENSE). Again, unless your name is Reed Nelson, get out of here and fork [Astrogon](https://github.com/astrogon/astrogon) instead.
