import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddQuestion from "./components/Deck/AddDeck/AddQuestion";
import AllDeck from "./components/Deck/AllDeck";
import LearnDeck from "./components/Deck/Learn/LearnDeck";
import DeckHome from "./components/Deck/DeckHome";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { fetchAllDeck } from "./redux/actions/actions";
import LearnDeckNoRedux from "./components/Deck/Learn/LearnDeckNoRedux";
import LearnController from "./components/Deck/Learn/Controller/LearnController";
import DeckInfo from "./components/Deck/DeckInfo/DeckInfo";
import AllQuestion from "./components/Deck/DeckInfo/AllQuestion";
import QuestionEdit from "./components/Deck/DeckInfo/QuestionEdit";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllDeck());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <NavBar></NavBar>
                <Home />
              </div>
            }
          />
          <Route
            path="/decks"
            element={
              <div>
                <NavBar />
                <AllDeck />
              </div>
            }
          />
          <Route
            path="/decks/:id/learn/:shuffleQuestions/:shuffleChoices/:sortByPriority"
            element={
              <div>
                <NavBar />
                <LearnDeckNoRedux />
              </div>
            }
          />
          <Route
            path="/decks/:id/learn/controller"
            element={
              <div>
                <NavBar />
                <LearnController />
              </div>
            }
          />
          <Route
            path="/decks/:id"
            element={
              <div>
                <NavBar />
                <div style={{ textAlign: "center" }}>
                  <DeckHome />
                </div>
              </div>
            }
          />
          <Route
            path="/decks/:id/deckinfo"
            element={
              <div>
                <NavBar />
                <DeckInfo />
              </div>
            }
          />
          <Route
            path="/decks/:id/deckinfo/allQuestions"
            element={
              <div>
                <NavBar />
                <AllQuestion />
              </div>
            }
          />
          <Route
            path="/decks/:id/deckinfo/allQuestions/:questionId/edit"
            element={
              <div>
                <NavBar />
                <QuestionEdit />
              </div>
            }
          />
          <Route
            path="/decks/:id/addCard"
            element={
              <div>
                <NavBar />
                <AddQuestion />
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
