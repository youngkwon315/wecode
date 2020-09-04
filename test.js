const getEven = () => {
  let result = [];
  for (let i = 0; i < 51; i++) {
    if (i % 2 === 0) result.push(i);
  }
  return result;
};

console.log(getEven());
