
const assert = require( "assert" );

const rmp = require( "./rmp.js" );

assert.deepEqual( rmp( [ 1, 2, 3, 4, 5 ], ( value ) => ( value * 2 ) ), [ 2, 4, 6, 8, 10 ], "should be deeply equal" );

assert.deepEqual( rmp( 1, ( value ) => ( value * 2 ) ), [ ], "should be deeply equal" );

assert.deepEqual( rmp( false ), [ ], "should be deeply equal" );

console.log( "ok" );
