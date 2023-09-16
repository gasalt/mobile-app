const runFirst = `
const consoleLog = (type, log) => window.ReactNativeWebView.postMessage(JSON.stringify({'type': 'Console', 'data': {'type': type, 'log': log}}));
  console = {
      log: (log) => consoleLog('log', log),
      debug: (log) => consoleLog('debug', log),
      info: (log) => consoleLog('info', log),
      warn: (log) => consoleLog('warn', log),
      error: (log) => consoleLog('error', log),
  };

window.shareURL = () => {
    console.log('shareURL');
    const currentURL = window.location.href;
    window.ReactNativeWebView.postMessage(JSON.stringify({'type': 'Share', 'data': {currentURL}}));    
};
true;
`
export default runFirst;
