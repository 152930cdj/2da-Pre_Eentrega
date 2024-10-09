import React from 'react';
import Alert from 'react-bootstrap/Alert';


function Error(){

    return (
        <Alert variant="danger">
          <Alert.Heading>Hola!!</Alert.Heading>
          <p>
            Lo Sentimos, esta pagina no puede ser localizada.
          </p>
          <hr />
          <p className="mb-0">
            Whenever you need to, be sure to use margin utilities to keep things
            nice and tidy.
          </p>
        </Alert>
      );
    }

export default Error;