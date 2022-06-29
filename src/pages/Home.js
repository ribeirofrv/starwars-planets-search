import React from 'react';
import Header from '../components/Header/Header';
import Menu from '../components/Menu/Menu';
import PlanetsTable from '../components/Table/PlanetsTable';

export default function Home() {
  return (
    <>
      <Header />
      <Menu />
      <PlanetsTable />
    </>
  );
}
