const build = require('@microsoft/sp-build-web');

build.tslint.enabled = false;
build.tslint.mergeConfig({
    sourceMatch: [
        "src/**/helloWorld2/**/*.ts",
        "src/**/helloWorld2/**/*.tsx",
    ]
});

build.typescript.mergeConfig({
    sourceMatch: [
        //Your webpart files & supporting files
        "src/**/helloWorld2/**/*.ts",
        "src/**/helloWorld2/**/*.tsx",
        //Default settings
        "typings/main/**/*.ts",
        "typings/main.d.ts",
        "typings/tsd.d.ts",
        "typings/index.d.ts"
    ],
    failBuildOnErrors: false
});