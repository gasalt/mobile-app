const runFirst = `
const consoleLog = (type, log) => window.ReactNativeWebView.postMessage(JSON.stringify({'type': 'Console', 'data': {'type': type, 'log': log}}));
const console = {
    log: (log) => consoleLog('log', log),
    debug: (log) => consoleLog('debug', log),
    info: (log) => consoleLog('info', log),
    warn: (log) => consoleLog('warn', log),
    error: (log) => consoleLog('error', log),
    print: (log) => consoleLog('print', log),
};

class Ethereum {
  isMetaMask = true;

  isConnected() {
      return true
  }

  pendingRequests = {} // [id]: { resolve, reject, timeout }
  count = 0;

  async request({ method, params }) {
      const id = this.count++;
      this.pendingRequests[id] = {}
      window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'ethereum', data: {method, params, id } }))

      return new Promise((resolve, reject) => {
          const timeout = setTimeout(() => {
              if (this.pendingRequests[id]) {
                  console.print("clearing timeout! Call is taking too long"+id)
                  clearTimeout(timeout)
                //   delete this.pendingRequests[id]
                //   reject("request timed out")
              }
          }, 10000)
          this.pendingRequests[id] = { resolve, timeout, reject }
      })
  }

  on(event, callback) {
      console.print({ event })
  }

  resolveQuery(id, result) {
      if(!this.pendingRequests[id]) {
          console.print("request already resolved: ", id)
          return;
      }
      const { resolve, timeout } = this.pendingRequests[id]
      clearTimeout(timeout)
      resolve(result)
      delete this.pendingRequests[id]
      console.print("resolved request: "+id)
  }
  rejectQuery(id, error) {
        if(!this.pendingRequests[id]) {
            console.print("request already resolved: ", id)
            return;
        }
        const { reject, timeout } = this.pendingRequests[id]
        clearTimeout(timeout)
        reject(error)
        delete this.pendingRequests[id]
        console.print("resolved request: "+id)
  }
}
  
window.ethereum = new Ethereum();

window.shareURL = () => {
    console.print('shareURL');
    const currentURL = window.location.href;
    window.ReactNativeWebView.postMessage(JSON.stringify({'type': 'Share', 'data': {currentURL}}));    
};
true;
`
export default runFirst;
