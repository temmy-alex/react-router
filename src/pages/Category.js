import { Route, Switch, Link, useRouteMatch } from "react-router-dom";

function Category() {
  var match = useRouteMatch();

  return (
    <div>
      <h2>Halaman Category</h2>
      <ul>
        <li>
          <Link to={`${match.url}/foods`}>Food</Link>
        </li>
        <li>
          <Link to={`${match.url}/drinks`}>Drinks</Link>
        </li>
        {/* <li>
            <Link to="/category/foods">Foods</Link>
        </li>
        <li>
            <Link to="/category/drinks">Drinks</Link>
        </li> */}
      </ul>
      <Switch>
        <Route path="/category/foods">List of Foods: Nasgor, bakso</Route>
        <Route path="/category/drinks">
          List of Drinks: Mineral Water, Coffee
        </Route>
      </Switch>
    </div>
  );
}

export default Category;
