import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "../../pages/main-page/main-page";
import FilmPage from "../../pages/film-page/film-page";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path={`/movie/:filmId`} element={<FilmPage />}
          />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
