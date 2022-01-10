import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import routes from "routes.js";
// import Sidebar from "components/Sidebar/Sidebar.js";
import PrivateRoute from "../Utils/PrivateRoute";

var ps;

class AdminLayout extends React.Component {
  state = {
    backgroundColor: "blue",
    //  routes :routes,
  };
  constructor() {
    super();
    this.state.routes = [];
  }
  mainPanel = React.createRef();
  // componentDidMount() {
  //   this.state.routes = validateRoutesByRole(routes);
  // }
  // componentWillUnmount() {
  //   this.state.routes = validateRoutesByRole(routes);
  //   if (navigator.platform.indexOf("Win") > -1) {
  //     ps && ps.destroy();
  //     document.body.classList.toggle("perfect-scrollbar-on");
  //   }
  // }
  componentDidUpdate(e) {
    // this.state.routes = validateRoutesByRole(routes);

    if (e.history.action === "PUSH") {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.mainPanel.current.scrollTop = 0;
    }
  }
  handleColorClick = (color) => {
    this.setState({ backgroundColor: color });
  };
  render() {
    return (
      <div className="wrapper">

        <h1>admin  </h1>
        {/* <Sidebar
          {...this.props}
          routes={this.state.routes}
          backgroundColor={this.state.backgroundColor}
        />
        <div className="main-panel" ref={this.mainPanel}>
          <Switch>
            {this.state.routes.map((prop, key) => {
              return (
                <PrivateRoute
                  path={prop.layout + prop.path}
                  component={prop.component}
                  key={key}
                />
              );
            })}
            {/* <Redirect from="/admin" to="/admin/accounts/all" /> */}
          {/* </Switch> */}


        {/* </div> */} 
      </div>
    );
  }
}

export default AdminLayout;
