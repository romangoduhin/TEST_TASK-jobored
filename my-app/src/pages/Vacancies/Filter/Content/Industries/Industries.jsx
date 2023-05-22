import React, {useEffect, useState} from 'react';
import {Flex, Select, Text} from "@mantine/core";
import {Down} from "@icons";
import {superjobApi} from "@services";
import {Loader} from "@templates";
import {useFilter} from "../../../hooks";

export const Industries = () => {
  const [catalogues, setCatalogues] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const {filter, updateFilter} = useFilter()

  useEffect(() => {
    setIsLoading(true)

    const fetchCatalogues = async () => {
      const catalogues = await superjobApi.getCatalogues();

      const updatedCatalogues = catalogues.map(catalog => ({"value": catalog.key, "label": catalog.title_rus}))

      setCatalogues(updatedCatalogues)
      setIsLoading(false)
    }

    fetchCatalogues();
  }, []);

  return (
    <Flex direction={"column"}>
      <Text fw={"700"}>Отрасль</Text>
      <Select
        placeholder={"Выберите отрасль"}
        rightSection={isLoading ? <Loader size={"xs"}/> : <Down/>}
        rightSectionWidth={30}
        data={catalogues}
        value={filter.catalogues}
        onChange={(value) => updateFilter("catalogues", value)}
      />
    </Flex>
  );
};
