## spfx-gulpfile-hack

This is a project designed to supplement my blog post at https://pdemro.com/improve-sharepoint-framework-build-times-by-hacking-gulp-and-webpack/.  The idea is to reduce build times for large SpFx projects which have many components during development of a single component (e.g. individual web part or extension).


### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp build
```
next, 
* uncomment lines 7-13 in gulpfile.js
* copy the contents of config/config.minimal.json into config/config.json
* comment hard-coded exception lines 112-115 ("Do not use mergeConfig with gulp-core-build-typescript") in node_modules/@microsoft/gulp-core-build-typescript/lib/TypeScriptTask.js

Finally:
```bash
gulp serve --nobrowser
```
Much more explanation in the blog post.

### Default Stuff

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

gulp clean - TODO
gulp test - TODO
gulp serve - TODO
gulp bundle - TODO
gulp package-solution - TODO
