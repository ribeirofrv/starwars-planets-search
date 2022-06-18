import React from 'react';
import Header from '../components/Header/Header';
import MenuSearch from '../components/Menu/MenuSearch';
import PlanetsTable from '../components/Table/PlanetsTable';

export default function Home() {
  return (
    <>
      <Header />
      <MenuSearch />
      <PlanetsTable />
    </>
  );
}
