import {Route, Routes} from "react-router-dom";
import {Favorites, Vacancies} from "@pages";
import {Header, Main} from "@components";
import {Box, MantineProvider} from "@mantine/core";
import "./App.css";

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Box w={"100vw"} h={"100vh"}>
        <Header/>
        <Main>
          <Routes>
            <Route path="/vacancies" element={<Vacancies/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
          </Routes>
        </Main>
      </Box>
    </MantineProvider>
  );
}