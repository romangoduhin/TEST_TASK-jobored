import React from 'react';
import {EmptyContent} from "@components";
import {useNavigate} from "react-router-dom";

export const Favorites = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/vacancies")
  }

  return (
    <EmptyContent text={"Упс, здесь еще ничего нет!"}
                  buttonText={"Поиск вакансий"}
                  onClick={handleRedirect}
    />
  );
};
