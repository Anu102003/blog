import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import CreatePost from "./pages/CreatePost"
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebaseconfig";
function App() {
  // const [isAuth,setIsAuth]=useState(false);
  const [isAuth,setIsAuth]=useState(localStorage.getItem('isAuth'));

  const signUserOut=()=>{
    signOut(auth).then(()=>{
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname="/login";
    })
  }
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand-lg justify-content-center navbar-light bg-dark text-center py-4">
          <Link to="/" className="nav-link text-white mx-2">Home</Link>
          {!isAuth ?  <Link to="/login" className="nav-link text-white mx-2">Login</Link>:
          (
            <>
            <Link to="/create-blog"className="nav-link text-white mx-2">Create Blog</Link>
             <button className="btn btn-primary" onClick={signUserOut}>Logout</button>
            </>
          )
}

        </nav>
      <div className="container mt-5">
        <Routes>
          <Route path="/"element={<Home isAuth={isAuth}/>}/>
          <Route path="/create-blog"element={<CreatePost isAuth={isAuth}/>}/>
          <Route path="/login"element={<Login setIsAuth={setIsAuth}/>}/>

        </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
