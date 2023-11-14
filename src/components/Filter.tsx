import React, { useState } from "react";
import { VehicleFilter, VehicleType } from "../data/vehicles/contracts";
import { VehicleTypeSelect } from "./VehicleTypeSelect";

export function Filter(props: {onChange: (filter: VehicleFilter) => void}) {
  
  const [type, setType] = React.useState<VehicleType | null>(null)
  const [title, setTitle] = React.useState<string>("")
  
    return (
      <div className="filter">
        <input type="text"          
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            props.onChange({title: e.target.value, type: type})
          }}
        />
        <VehicleTypeSelect
          value={type}
          onChange={ (type) => {
            setType(type);
            props.onChange({title: title, type: type})
          }}
        /> 
      </div>
    );
  }