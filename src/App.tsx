import React, { useState, useEffect } from "react";
import { Vehicle, VehicleFilter } from "./data/vehicles/contracts";
import { VehicleApi } from "./data/vehicles/api";
import { Filter } from "./components/Filter";
import { Table } from "./components/Table";
import "./index.css"

export const initFilter: VehicleFilter = {
  title: "",
  type: null
};

export default function App() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    const data = VehicleApi.search(initFilter);
    setVehicles(data);
  }, []);

  return (
    <>
      <Filter onChange={(filter: VehicleFilter) => {
          const data = VehicleApi.search(filter);
          setVehicles(data);
      }} />
      <Table vehicles={vehicles} />
    </>
  );
}