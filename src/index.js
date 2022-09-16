import { assign } from 'lodash-es';

const message = 'Hello Web';
const data = assign(
  {},
  {
    name: 'hi',
    msg: message,
  }
);
console.log('learn algorithms', message, data);
