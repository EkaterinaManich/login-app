import React from 'react';
import {Link} from "react-router-dom";

export default function Contacts(props) {
    console.log('from Contacts', props)
    return (
        <div>
          <Link to="#">Contacts</Link>  
        </div>
    )
}
