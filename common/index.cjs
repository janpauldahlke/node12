exports.make43 =  {
  random: () => {
    return Math.floor(Math.random() * 42);
  },

  giveNumber: () => {
    return `rolled ${Math.floor(Math.random() * 42)}`
  },

};
