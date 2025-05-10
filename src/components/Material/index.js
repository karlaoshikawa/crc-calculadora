"use client";
import { useState } from "react";
import "./material.scss";

export default function Material() {
  const [materialList, setMaterialList] = useState({
    material01: {
      material: "Papelão cinza",
      undMedida: ["Unidade", "Metro", "Centímetro", "Gramas"],
      qntBuy: "",
      expendValue: "",
      total: "0,00",
    },
    material02: {
      material: "Papelão Paraná (1m x 0,8m = 0,8m²)",
      undMedida: ["Unidade", "Metro", "Centímetro", "Gramas"],
      qntBuy: "",
      expendValue: "",
      total: "0,00",
    },
    material03: {
      material: "Papelão Couro (1m x 0,8m = 0,8m²)",
      undMedida: ["Unidade", "Metro", "Centímetro", "Gramas"],
      qntBuy: "",
      expendValue: "",
      total: "0,00",
    },
    material04: {
      material: "Papel Cartão/ Duplex",
      undMedida: ["Unidade", "Metro", "Centímetro", "Gramas"],
      qntBuy: "",
      expendValue: "",
      total: "0,00",
    },
    material05: {
      material: "Tecido Interno - Forração (Metro)",
      undMedida: ["Unidade", "Metro", "Centímetro", "Gramas"],
      qntBuy: "",
      expendValue: "",
      total: "0,00",
    },
    material06: {
      material: "Tecido Externo - Forração (Metro)",
      undMedida: ["Unidade", "Metro", "Centímetro", "Gramas"],
      qntBuy: "",
      expendValue: "",
      total: "0,00",
    },
    material07: {
      material: "Papel Interno - Forração",
      undMedida: ["Unidade", "Metro", "Centímetro", "Gramas"],
      qntBuy: "",
      expendValue: "",
      total: "0,00",
    },
    material08: {
      material: "Papel Externo - Forração",
      undMedida: ["Unidade", "Metro", "Centímetro", "Gramas"],
      qntBuy: "",
      expendValue: "",
      total: "0,00",
    },
    material09: {
      material: "Cola",
      undMedida: ["Unidade", "Metro", "Centímetro", "Gramas"],
      qntBuy: "",
      expendValue: "",
      total: "0,00",
    },
    material10: {
      material: "Fita Crepe",
      undMedida: ["Unidade", "Metro", "Centímetro", "Gramas"],
      qntBuy: "",
      expendValue: "",
      total: "0,00",
    },
    material11: {
      material: "Durex",
      undMedida: ["Unidade", "Metro", "Centímetro", "Gramas"],
      qntBuy: "",
      expendValue: "",
      total: "0,00",
    },
    material12: {
      material: "Pezinho / Acessórios",
      undMedida: ["Unidade", "Metro", "Centímetro", "Gramas"],
      qntBuy: "",
      expendValue: "",
      total: "0,00",
    },
    material13: {
      material: "Fecho",
      undMedida: ["Unidade", "Metro", "Centímetro", "Gramas"],
      qntBuy: "",
      expendValue: "",
      total: "0,00",
    },
    material14: {
      material: "Alça",
      undMedida: ["Unidade", "Metro", "Centímetro", "Gramas"],
      qntBuy: "",
      expendValue: "",
      total: "0,00",
    },
    material15: {
      material: "Fitas(Metro)",
      undMedida: ["Unidade", "Metro", "Centímetro", "Gramas"],
      qntBuy: "",
      expendValue: "",
      total: "0,00",
    },
    material16: {
      material: "Elástico(Metro)",
      undMedida: ["Unidade", "Metro", "Centímetro", "Gramas"],
      qntBuy: "",
      expendValue: "",
      total: "0,00",
    },
    material17: {
      material: "Lâmina estilete roliço",
      undMedida: ["Unidade", "Metro", "Centímetro", "Gramas"],
      qntBuy: "",
      expendValue: "",
      total: "0,00",
    },
    material18: {
      material: "Lâmina estilete",
      undMedida: ["Unidade", "Metro", "Centímetro", "Gramas"],
      qntBuy: "",
      expendValue: "",
      total: "0,00",
    },
    material19: {
      material: "Rolinho de espuma",
      undMedida: ["Unidade", "Metro", "Centímetro", "Gramas"],
      qntBuy: "",
      expendValue: "",
      total: "0,00",
    },
    material20: {
      material: "Tinta",
      undMedida: ["Unidade", "Metro", "Centímetro", "Gramas"],
      qntBuy: "",
      expendValue: "",
      total: "0,00",
    },
  });

  return (
    <div className="material-container">
      <table>
        <tr className="name-itens-box">
          <th>Material</th>
          <th>Unidade de Medida</th>
          <th>Quantidade comprada</th>
          <th>Valor gasto</th>
          <th>Total gasto</th>
        </tr>

        {materialList &&
          Object.values(materialList).map((item, index) => (
            <tr key={index} className="itens-value-box">
              <td>
                <input
                  type="text"
                  className="material-input-item"
                  value={item.material}
                />
              </td>
              <td>
                <select>
                  {item.undMedida?.map((medida, index) => (
                    <option key={index} value={medida}>
                      {medida}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <input
                  type="text"
                  className="qntBuy-input-item"
                  value={item.qntBuy}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="expendValue-input-item"
                  value={item.expendValue}
                />
              </td>

              <td>
                <p>{item.total}</p>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
}
