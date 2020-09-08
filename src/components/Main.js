import React from 'react';
import { Link, withRouter } from "react-router-dom";

function Main(props) {
    return (
        <div>
            <Link to="#">Main </Link>
            {/* {this.props.location.search === '?id=Kate' && <div onClick={() => { this.props.history.go(-1) }}>Some secret for Kate</div>} */}
        </div>
    )
}

export default withRouter(Main);
