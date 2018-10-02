let promise : Promise<any> = new Promise((resolve: any, reject: any) => {
  let isOpen = true;
  if(isOpen) {
    resolve('opened');
  } else {
    reject('not opened');
  }
});

promise.then((response) => {
  console.log(response);
}).catch((response) => {
  console.log(response);
});

function openFile() : Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    let isOpen: boolean = true;
    if (isOpen) {
      resolve('Opened');
    }
    reject('not Opened');
  });
}

function readFile() : Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    let isOpen: boolean = true;
    if (isOpen) {
      resolve('read file');
    }
    reject('can not read the file');
  });
}

function closeFile() : Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      let isOpen: boolean = true;
      if (isOpen) {
        resolve('File is close');
      }
      reject('the file is not open');
    });
}


openFile()
  .then(() => readFile()
    .then(() => closeFile()
      .then(() => console.log('Its works'))
      .catch())
    .catch())
  .catch();


  async function actionFile() : Promise<any> {
    await openFile();
    await readFile();
    await closeFile();
  }

  actionFile().then(() => console.log('It\'s works'));
