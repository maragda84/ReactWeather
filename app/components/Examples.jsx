var React = require("react");
var {Link} = require('react-router');

var Examples = (props) => {
  return(
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few examples locations to try out:</p>
      <ol>
        <li>
          <Link to="/?location='Igualada'" activeClassName="active">Igualada</Link>
        </li>
        <li>
          <Link to="/?location=Rio" activeClassName="active">Rio</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
