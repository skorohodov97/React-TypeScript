import React from "react";
import { CurrencyLabel } from "@skbkontur/react-ui";
import { Vehicle, vehicleTypeTitles } from "../data/vehicles/contracts";

interface TableItemType {
    vehicle: Vehicle,
    number: number;
}

const TableItem: React.FC<TableItemType> = ({ vehicle, number }) => {
    return (
        <tr>
            <td>{number}</td>
            <td>{vehicle.title}</td>
            <td>{vehicleTypeTitles[vehicle.type]}</td>
            <td>
                <CurrencyLabel value={vehicle.price} fractionDigits={2} />
            </td>
        </tr>
    );
};

interface arrayVehicle {
    vehicles: Vehicle [];
}

export const Table: React.FC<arrayVehicle> = ({ vehicles }) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th className="number">№</th>
                <th className="name">Название транспортного средства</th>
                <th className="type">Тип транспорта</th>
                <th className="price">Цена, ₽</th>
            </tr>
            </thead>
            <tbody>
            {vehicles.map((x, i) => (
                <TableItem key={x.id} number={i + 1} vehicle={x} />
            ))}
            </tbody>
        </table>
    );
};