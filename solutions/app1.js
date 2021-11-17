const converterPromise = (arr = []) => {
  return new Promise((resolve, reject) => {
    const upperCaseArr = arr.map((el) => {
      if (typeof el !== 'string') {
        reject('Error: Not all elements are string type!');
      } else {
        return el.toLocaleUpperCase();
      }
    });
    resolve(upperCaseArr);
  });
};

export default converterPromise;
