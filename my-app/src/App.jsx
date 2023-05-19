import {Route, Routes} from "react-router-dom";
import {Favorites} from "./pages/Favorites/index.js";
import {Vacancies} from "./pages/Vacancies/index.js";

export const Header = () => {
  return (
    <div>Header</div>
  );
};

export default function App() {
  return (<>
      <Header/>
      <Routes>
        <Route path="/vacancies" element={<Vacancies/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
    </>
  );
}