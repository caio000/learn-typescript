namespace MyEvents {

  abstract class Handler {

    protected element: HTMLElement;

    constructor (elementId: string, event: string) {
      this.element = <HTMLElement> document.getElementById(elementId);
      this.element.addEventListener(event, this.run);
    }

    abstract run() : void;
  }

  export class ClickHandler extends Handler {

    constructor (elementId: string) {
      super(elementId, 'click');
    }

    run() : void {
      alert('click');
    }
  }

  export class DoubleClickHandler extends Handler {

      constructor(elementId: string) {
        super(elementId, 'dblclick');
      }

      run() : void {
        alert('DoubleClick');
      }
  }

  export class OfflineHandler extends Handler {

    constructor(elementId: string) {
      super(elementId, 'offline');
    }

    run() : void {
      alert('You are offline!');
    }

  }

}


const clickHandler = new MyEvents.DoubleClickHandler('btn-01');
const offlineHandler = new MyEvents.OfflineHandler('btn-01');
