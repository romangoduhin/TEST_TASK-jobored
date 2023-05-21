import React from 'react';
import {Box} from "@mantine/core";
import {Navigate, Route, Routes} from "react-router-dom";
import {Favorites, Vacancies} from "@pages";

export const Main = () => {
  return (
    <Box w={"100%"}
         h={"calc(100% - 84px)"}
         bg={"grey100"}
    >
      <Routes>
        <Route path="/vacancies" element={<Vacancies/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path='*' element={<Navigate to='/vacancies'/>}/>
      </Routes>
    </Box>
  );
};