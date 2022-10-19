import './App.css';
import {Header} from "./components/Header";
import {Home} from "./view/Home";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {About} from "./view/About";
import {MovieDetail} from "./view/MovieDetail";

function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Switch>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/movie/:id">
                        <MovieDetail/>
                    </Route>
                    <Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
