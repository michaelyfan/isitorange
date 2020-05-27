# Is It Orange

:tangerine::tangerine::tangerine:

https://isitorange.surge.sh/

### Useful commands
* for a hot-reloaded development server: `npm run dev`
* to build: `npm run build`
* to test the build on a local server: `npm run serve`
* to deploy built files: `npm run deploy`*
* to check for dependency vulnerabilities: `npm run security`

*install [surge](https://surge.sh/) and change the URL in `package.json` to one you have access to

### Note about Sass
The project currently doesn't handle `url(...)` in the Sass folders due to a lack of need; keep in mind there are [some problems](https://github.com/webpack-contrib/sass-loader#problems-with-url) if `url(...)` must be used

### TODOS:
- fedorange
