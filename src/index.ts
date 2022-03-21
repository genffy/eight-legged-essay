import { assign } from 'lodash-es'
let message: string = 'Hello Web';
const data = assign({}, {
    name: 'hi',
    msg: message,
})
console.log('learn algorithms', message);
