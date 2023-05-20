import React from 'react';
import {EmptyContent} from "@components";
import {Center} from "@mantine/core";
import {useNavigate} from "react-router-dom";

export const Favorites = () => {
  const navigate = useNavigate();
  
  const handleRedirect = () => {
    navigate("/vacancies")
  }

  return (
    <Center w={"100%"} h={"100%"}>
      <EmptyContent text={"Упс, здесь еще ничего нет!"}
                    buttonText={"Поиск вакансий"}
                    onClick={handleRedirect}
      />
    </Center>
  );
};
