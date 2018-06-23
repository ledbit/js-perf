
// usage: node toNumber.js string


if(process) {
  console.log('Node version:', process.version, 'V8', process.versions.v8);
}

let st = Date.now();
const x=process.argv[2];


const count=100000000;
for(let i=0; i<count; i++) {
   Number.isNaN(Number(x))
}

console.log(`Number('${x}') rate: `, Math.round(count/(Date.now()-st)), 'Kps')

st = Date.now();
for(let i=0; i<count; i++) {
   Number.isNaN(+x)
}
console.log(`(+'${x}') rate: `, Math.round(count/(Date.now()-st)), 'Kps')


st = Date.now();
for(let i=0; i<count; i++) {
   Number.isNaN(parseFloat(x))
}
console.log(`parseFloat('${x}') rate: `, Math.round(count/(Date.now()-st)), 'Kps')


