const build = require('@microsoft/sp-build-web');

build.tslint.enabled = false;
build.tslint.mergeConfig({
    sourceMatch: [
        "src/webparts/<your webpart here>/**/*.ts",
        "src/webparts/<your webpart here>/**/*.tsx",
    ]
});

build.typescript.mergeConfig({
    sourceMatch: [
        //Your webpart files & supporting files
        "src/**/<your webpart here>/**/*.ts",
        "src/**/<your webpart here>/**/*.tsx",
        //Default settings
        "typings/main/**/*.ts",
        "typings/main.d.ts",
        "typings/tsd.d.ts",
        "typings/index.d.ts"
    ],
    failBuildOnErrors: false
});