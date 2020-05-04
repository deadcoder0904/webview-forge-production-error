/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import { WebviewTag } from 'electron'
import './index.css'

console.log(
	'👋 This message is being logged by "renderer.js", included via webpack'
)

declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: any
const preload = MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY

const webview: WebviewTag = document.createElement('webview')
webview.setAttribute('style', 'width: 800px; height: 600px;')
webview.src = 'https://google.com'
webview.preload = preload
webview.addEventListener('dom-ready', function () {
	webview.openDevTools()
})

document.body.appendChild(webview)
