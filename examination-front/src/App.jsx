import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import { createContext, useState } from "react";
import About from "./components/about";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/signup";
import SignIn from "./components/signin";
import SignOut from "./components/signout";
import MyCards from "./components/myCards";
import ProtectedRoute from "./components/common/protectedRoute";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import CardsCreate from "./components/cardsCreate";
import CardsDelete from "./components/cardsDelete";
import CardsEdit from "./components/cardsEdit";
import PreviewCard from "./components/previewCard";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app d-flex flex-column min-vh-100" id={theme}>
        <ToastContainer />
        <header>
          <Navbar theme={theme} toggleTheme={toggleTheme} />
        </header>
        <main className="flex-fill container">
          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="about" element={<About theme={theme} />} />
            <Route
              path="sign-up"
              element={<SignUp theme={theme} redirect="/sign-in" />}
            />
            <Route
              path="sign-in"
              element={<SignIn theme={theme} redirect="/" />}
            />
            <Route
              path="sign-out"
              element={<SignOut theme={theme} redirect="/" />}
            />
            <Route
              path="my-cards"
              element={
                <ProtectedRoute onlyBiz>
                  <MyCards theme={theme} />
                </ProtectedRoute>
              }
            />
            <Route
              path="create-card"
              element={
                <ProtectedRoute onlyBiz>
                  <CardsCreate redirect="/my-cards" />
                </ProtectedRoute>
              }
            />
            <Route
              path="my-cards/edit/:id"
              element={
                <ProtectedRoute onlyBiz>
                  <CardsEdit />
                </ProtectedRoute>
              }
            />
            <Route
              path="my-cards/delete/:id"
              element={
                <ProtectedRoute onlyBiz>
                  <CardsDelete />
                </ProtectedRoute>
              }
            />
            <Route
              path="my-cards/preview/:id"
              element={
                <ProtectedRoute onlyBiz>
                  <PreviewCard theme={theme} />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <footer>
          <Footer theme={theme} />
        </footer>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
