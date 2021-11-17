const sorterPromise = (arr) => {
  return new Promise((resolve, reject) => {
    const anyNotString = arr.find((el) => typeof el !== 'string');
    if (anyNotString) {
      reject('Error: Not all elements are string type!');
    }
    resolve(arr.sort());
  });
};

export default sorterPromise;
