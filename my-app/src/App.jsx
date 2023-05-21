import {Header, Main} from "@components";
import {Box, MantineProvider} from "@mantine/core";
import "./App.css";
import {useEffect} from "react";
import {useAuth} from "@hooks";
import {Loader} from "@templates";
import {Notifications} from "@mantine/notifications";

export default function App() {
  const {isAuthorized, authorize} = useAuth();

  useEffect(() => {
    if (!isAuthorized) {
      authorize()
    }
  }, [isAuthorized]);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Notifications/>
      <Box w={"100vw"} h={"100vh"}>
        {
          isAuthorized
            ? <>
              <Header/>
              <Main/>
            </>
            : <Loader text={"Authorizing"}/>
        }

      </Box>
    </MantineProvider>
  );
}