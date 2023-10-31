// import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import LoginPage from "./pages/login";
import CreatePage from "./pages/create";
import SignupPage from "./pages/signup";
import ViewPost from "./pages/ViewPost";
import Firebase, { UserDataContext } from "./contexts/firebase";
import { appConfig } from "./firebase/config";
import { PostContext } from "./contexts/post";
import Account from "./pages/account";

function App() {
  return (
    <Firebase.Provider value={{ appConfig }}>
      <UserDataContext>
        <PostContext>
          <div className="App">
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/create" element={<CreatePage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/view" element={<ViewPost />} />
              <Route path="/account" element={<Account />} />
            </Routes>
          </div>
        </PostContext>
      </UserDataContext>
    </Firebase.Provider>
  );
}

export default App;
