# webview-forge-production-error

> Webview Preload works in development, not production 

### Install the dependencies

```bash
$ yarn
```

### Run the project locally (development)

```bash
$ yarn start
```

It works perfectly fine. Even shows `console.log` from `src/preload.ts`

### Make the project (production)

```bash
$ yarn make
```

Now run it from `out/webview-forge-production-error-win32-x64/webview-forge-production-error.exe` to see the error in console