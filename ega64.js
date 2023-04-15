/* 

    generate EGA64 palette for BipS
    for import an https://ditherit.com/

*/ 
var items = ['00', '55', 'aa', 'ff'];

console.log('[');
var count = 0;
for (const a of items) {
    for (const b of items) {
        for (const c of items) {
            console.log( (count > 0 ? ',' : '' ) + '{ "hex": "#' + a + b + c + '}' );
            count++;
        }
    }
}
console.log(']');