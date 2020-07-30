import React from "react"
import "./App.css"
import Home from "./components/pages/Home/index"

// import NavbarButton from "./components/common/Navbar/index"
// import Way from "./components/pages/Way/index"
// import Dev from "./components/pages/Dev/index"
// import Yog from "./components/pages/Yog/index"
// import Art from "./components/pages/Art/index"
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

const App = () => {
  return (
    <>
      <Home />
    </>
    // <Router>
    //     <div id="header-menu">
    //         <Link to="/">
    //             <NavbarButton title={'AF'} />
    //         </Link>
    //         <Link to="/way">
    //             <NavbarButton title={'Way'} />
    //         </Link>
    //         <Link to="/dev">
    //             <NavbarButton title={'Dev'} />
    //         </Link>
    //         <Link to="/yog">
    //             <NavbarButton title={'Yog'} />
    //         </Link>
    //         <Link to="/art">
    //             <NavbarButton title={'Art'} />
    //         </Link>
    //     </div>
    //     <Switch>
    //         <Route path="/way">
    //             <Way />
    //         </Route>
    //         <Route path="/dev">
    //             <Dev />
    //         </Route>
    //         <Route path="/yog">
    //             <Yog />
    //         </Route>
    //         <Route path="/art">
    //             <Art />
    //         </Route>
    //         <Route path="/">
    //             <Home />
    //         </Route>
    //     </Switch>
    // </Router>
  )
}

export default App
