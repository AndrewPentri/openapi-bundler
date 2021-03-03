const { exec } = require( 'child_process' );
const apiBuildPath = './_build/openapi3.json';
const htmlBuildPath = './_build/api.html';

exec( `swagger-cli bundle ./openapi.json -o ${ apiBuildPath } && redoc-cli bundle ${ apiBuildPath } -o ${ htmlBuildPath }`,
       ( error, stdout, stderr ) => {
           if (error) {
               console.log(error.stack);
               console.log('Error code: '+error.code);
               console.log('Signal received: '+error.signal);
           }

           console.log('stdout: ' + stdout);
           console.log('stderr: ' + stderr);
       }
);