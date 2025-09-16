# IW4x Docs

This repository contains the code for the IW4x documentation, built with [Astro Starlight](https://starlight.astro.build/).

## Build

Before building, make sure **you have [NodeJS LTS](https://nodejs.org/en/download) installed.**

To build, do the following:
- Clone GitHub repository via `git` or GitHub Desktop.
- Open a CMD terminal and run the `cd <path>` to where the repository is at.
- Run `npm i` to install all the modules.
- Once completed, you can now run `npm run dev`.

## Contributing

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images should be small and can be added to `src/assets/` and embedded in Markdown with a relative link. (check for <img> tags in code)

Static assets can be placed in the `public/` directory.

## Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
