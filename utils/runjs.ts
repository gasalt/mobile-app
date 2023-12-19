const runFirst = `
const consoleLog = (type, log) => window.ReactNativeWebView.postMessage(JSON.stringify({'type': 'Console', 'data': {'type': type, 'log': log}}));
  console = {
      log: (log) => consoleLog('log', log),
      debug: (log) => consoleLog('debug', log),
      info: (log) => consoleLog('info', log),
      warn: (log) => consoleLog('warn', log),
      error: (log) => consoleLog('error', log),
  };
class Ethereum {
  isMetaMask = true;
  enable() {
      console.log('enable called')
      return ["0x00B6845c6F47C770cE630B96df9BD4A6dA91C65d"]
  }
  isConnected() {
      return true
  }

  pendingRequests = {
      // [id]: { resolve, reject, timeout }
  }
  count = 0;

  async request({ method, params }) {
      if (method === 'eth_requestAccounts') {
          console.log("requesting eth_requestAccounts")
          return ["0x00B6845c6F47C770cE630B96df9BD4A6dA91C65d"]
      }
      if (method === 'eth_accounts') {
          console.log("requesting eth_accounts")
          return ["0x00B6845c6F47C770cE630B96df9BD4A6dA91C65d"]
      }
      const id = this.count++;
      this.pendingRequests[id] = {}
      window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'ethereum', data: {method, params, id } }))

      return new Promise((resolve, reject) => {
          const timeout = setTimeout(() => {
              if (this.pendingRequests[id]) {
                  console.log("clearing timeout! Call is taking too long")
                  clearTimeout(timeout)
                //   delete this.pendingRequests[id]
                //   reject("request timed out")
              }
          }, 10000)
          this.pendingRequests[id] = { resolve, timeout }
      })
  }
  on(event, callback) {
      console.log({ event })
  }

  resolve(id, result) {
      if(!this.pendingRequests[id]) {
          console.log("request already resolved")
          return;
      }
      console.log("resolving id request")
      console.log({ id, })
      const { resolve, timeout } = this.pendingRequests[id]
      clearTimeout(timeout)
      resolve(result)
      delete this.pendingRequests[id]
  }
}
  
window.ethereum = new Ethereum();
  
window.addEventListener('message', (event) => {
  console.log("message received");
  const { id, result } = JSON.parse(event.data)
  console.log({ id, result });
  window.ethereum.resolve(id, result);
});

window.shareURL = () => {
    console.log('shareURL');
    const currentURL = window.location.href;
    window.ReactNativeWebView.postMessage(JSON.stringify({'type': 'Share', 'data': {currentURL}}));    
};
true;
`
export default runFirst;
