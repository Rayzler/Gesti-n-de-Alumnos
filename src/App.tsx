import {Route, Switch, useLocation} from "wouter";
import LoginView from "./paths/Login.tsx";
import SubjectsView from "./paths/Subjects.tsx";
import StudentsView from "./paths/Students.tsx";
import {useEffect} from "react";
import StudentView from "./paths/Student.tsx";

export default function App() {
    const [, navigate] = useLocation();
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    useEffect(() => {
        if (isAuthenticated !== "true") {
            navigate("/");
        }
    }, [isAuthenticated, navigate]);

    return (
        <Switch>
            <Route path="/" component={LoginView}/>
            <Route path="/students" component={StudentsView}/>
            <Route path="/students/:id" component={StudentView}/>
            <Route path="/subjects" component={SubjectsView}/>

            {/* Default route in a switch */}
            <Route>404: No such page!</Route>
        </Switch>
    );
}
