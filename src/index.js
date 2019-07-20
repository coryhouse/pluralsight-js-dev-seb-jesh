import numeral from 'numeral';

const courseValue = numeral(1000).format('ZMW0,0.00');
console.log(`I would pay ZMW{courseValue} for this awesome course!`);
