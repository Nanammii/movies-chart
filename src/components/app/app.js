import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "../../pages/main-page/main-page";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          {/*<Route path={`/film/:filmId`} element={<FilmPage />}*/}
          />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
