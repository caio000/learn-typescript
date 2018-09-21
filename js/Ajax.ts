
class Ajax {
    private READY_STATUS_CODE : number;

    constructor() {
      this.READY_STATUS_CODE = 4;
    }

    private isCompleted (req: XMLHttpRequest) {
      return req.readyState === this.READY_STATUS_CODE;
    }

    public httpCatch(url: string, callback: (status: number, response: string) => any) : void {
      let req = new XMLHttpRequest();

      req.onreadystatechange = () => {
        let finished = this.isCompleted(req);
        if (finished) {
          callback(req.status, req.responseText);
        }
      }

      req.open("GET", url, true);
      req.send();
    }

}


const ajax = new Ajax();
ajax.httpCatch("https://httpbin.org/get", (status, response) => {
  console.log(`Status: ${status}`);
  let pre = document.createElement('pre');
  let element = <HTMLElement> document.getElementsByTagName('main')[0];
  let content = document.createTextNode(response);

  pre.appendChild(content);
  element.appendChild(pre);
});
