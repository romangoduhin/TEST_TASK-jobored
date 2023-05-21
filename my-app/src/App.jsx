import {Route, Routes} from "react-router-dom";
import {Favorites, Vacancies} from "@pages";
import {Header, Main} from "@components";
import {Box, MantineProvider} from "@mantine/core";
import "./App.css";
import {useEffect} from "react";
import {useAuth} from "@hooks";

export default function App() {
  const {isAuthorized, authorize} = useAuth();

  useEffect(() => {
    if (!isAuthorized) {
      authorize()
    }
  }, [isAuthorized]);

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