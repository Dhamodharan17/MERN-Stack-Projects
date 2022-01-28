import React, { Suspense } from "react";
import { Route, Switch, NavLink } from 'react-router-dom';

import VaccineFormPage from "./containers/VaccineForm";
import VaccineListPage from "./containers/VaccineList";

import NotFoundPage from "./presentation/NotFound";


const App = () => {

    let routes =
        <Switch>
            <Route path="/" exact component={VaccineFormPage} />
            <Route path="/vaccinelist" component={VaccineListPage} />
            <Route path="*" component={NotFoundPage} />
        </Switch>

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand"> Tekcasts</NavLink>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/" exact className="nav-link"> Vaccine Form</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/vaccinelist" className="nav-link"> Vaccine List</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <Suspense fallback={<div>Loading...</div>}>
                {routes}
            </Suspense>

        </>
    );
};

export default App;





