
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

    public httpPost(url: string, data: Object, callback: (status: number, response: string) => any) : void {
      let req = new XMLHttpRequest();

      req.onreadystatechange = () => {
        let finished = this.isCompleted(req);
        if (finished) {
          callback(req.status, req.responseText);
        }
      }

      req.open("POST", url, true);
      req.setRequestHeader("content-type", 'application/json');
      req.send(JSON.stringify(data));
    }

}
