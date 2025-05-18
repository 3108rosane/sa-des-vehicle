"use client";

import { TextField, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import "./styles.css";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { ButtonGlobal } from "@/components/Button";
import React, { useState } from "react";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "CategoriaDocarro", headerName: "Categoria", width: 120 },
  { field: "tipo", headerName: "Tipo", width: 100 },
  { field: "descricao", headerName: "Descrição", width: 150 },
  { field: "quantidade", headerName: "Qtd", width: 90 }
];

export default function Stock() {
  const [linhasEstoque, setLinhasEstoque] = useState<any[]>([]);

  const [categoria, setCategoria] = useState("");
  const [motor, setMotor] = useState("");
  const [motorQtd, setMotorQtd] = useState(0);

  const [pneu, setPneu] = useState("");
  const [pneuQtd, setPneuQtd] = useState(0);

  const [carcaca, setCarcaca] = useState("");
  const [carcacaQtd, setCarcacaQtd] = useState(0);

  const [chassi, setChassi] = useState("");
  const [chassiQtd, setChassiQtd] = useState(0);

  const nextId = () => linhasEstoque.length + 1;

  const resetFields = () => {
    setCategoria("");
    setMotor("");
    setMotorQtd(0);
    setPneu("");
    setPneuQtd(0);
    setCarcaca("");
    setCarcacaQtd(0);
    setChassi("");
    setChassiQtd(0);
  };

  type ItemKind = "motor" | "pneu" | "carcaca" | "chassi";

  const gerarLinhas = (tipo: ItemKind, descricao: string, quantidade: number) =>
    Array.from({ length: quantidade }, (_, i) => ({
      id: nextId() + i,
      CategoriaDocarro: tipo === "motor" ? categoria : "-",
      tipo,
      descricao,
      quantidade: 1 // cada linha representa uma unidade
    }));

  const cadastrarItem = (tipo: ItemKind) => {
    let linhasNovas: any[] = [];

    if (tipo === "motor") {
      if (!categoria || !motor || motorQtd <= 0) return alert("Preencha categoria, motor e quantidade");
      linhasNovas = gerarLinhas("motor", motor, motorQtd);
    }
    if (tipo === "pneu") {
      if (!pneu || pneuQtd <= 0) return alert("Preencha pneu e quantidade");
      linhasNovas = gerarLinhas("pneu", pneu, pneuQtd);
    }
    if (tipo === "carcaca") {
      if (!carcaca || carcacaQtd <= 0) return alert("Preencha carcaça e quantidade");
      linhasNovas = gerarLinhas("carcaca", carcaca, carcacaQtd);
    }
    if (tipo === "chassi") {
      if (!chassi || chassiQtd <= 0) return alert("Preencha chassi e quantidade");
      linhasNovas = gerarLinhas("chassi", chassi, chassiQtd);
    }

    setLinhasEstoque(prev => [...prev, ...linhasNovas]);
    resetFields();
  };

  return (
    <div className="header-stock">
      <h1>Estoque</h1>

      {/* Categoria (apenas para motor) */}
      <div className="main-stock">
        <FormControl sx={{ width: "20%" }}>
          <InputLabel>Categoria do carro</InputLabel>
          <Select value={categoria} onChange={(e: SelectChangeEvent) => setCategoria(e.target.value)} label="Categoria do carro">
            <MenuItem value="Mecânico">Mecânico</MenuItem>
            <MenuItem value="Elétrico">Elétrico</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* Motor */}
      <fieldset className="secao">
        <legend>Motor</legend>
        <img src="https://cdn.autopapo.com.br/box/uploads/2018/11/22152231/motor-carro-novo-shutterstock-732x488.jpg" alt="motor" className='image-product' />
        <FormControl sx={{ width: "120px" }}>
          <InputLabel>Motor</InputLabel>
          <Select value={motor} onChange={(e: SelectChangeEvent) => setMotor(e.target.value)} label="Motor">
            <MenuItem value="1.0">1.0</MenuItem>
            <MenuItem value="1.8">1.8</MenuItem>
            <MenuItem value="2.0">2.0</MenuItem>
          </Select>
        </FormControl>
        <TextField label="Quantidade" type="number" value={motorQtd} onChange={e => setMotorQtd(Number(e.target.value))} sx={{ width: 120, ml: 2 }} />
        <ButtonGlobal text="CADASTRAR" handle={() => cadastrarItem("motor")} />
      </fieldset>

      {/* Pneu */}
      <fieldset className="secao">
        <legend>Pneu</legend>
        <img src="https://a-static.mlcdn.com.br/800x560/pneu-pirelli-aro-20-pzero-245-45r20-103y-xl-original-chevrolet-camaro/pneustore/10070001/b7dc4aae41f54f7df27a298ab92475ec.jpeg" alt="pneu" className='image-product' />
        <FormControl sx={{ width: "120px" }}>
          <InputLabel>Pneu</InputLabel>
          <Select value={pneu} onChange={(e: SelectChangeEvent) => setPneu(e.target.value)} label="Pneu">
            <MenuItem value="Pirelli">Pirelli</MenuItem>
            <MenuItem value="Goodyear">Goodyear</MenuItem>
          </Select>
        </FormControl>
        <TextField label="Quantidade" type="number" value={pneuQtd} onChange={e => setPneuQtd(Number(e.target.value))} sx={{ width: 120, ml: 2 }} />
        <ButtonGlobal text="CADASTRAR" handle={() => cadastrarItem("pneu")} />
      </fieldset>

      {/* Carcaça */}
      <fieldset className="secao">
        <legend>Carcaça</legend>
        <img src="https://www.karvi.com.br/blog/wp-content/uploads/2021/02/Tipos-de-carrocerias-850x459.jpg" alt="carcaca" className='image-product' />
        <FormControl sx={{ width: "120px" }}>
          <InputLabel>Carcaça</InputLabel>
          <Select value={carcaca} onChange={(e: SelectChangeEvent) => setCarcaca(e.target.value)} label="Carcaça">
            <MenuItem value="chevrolet">chevrolet</MenuItem>
            <MenuItem value="fiat">fiat</MenuItem>
            <MenuItem value="ford">ford</MenuItem>
            <MenuItem value="kia">kia</MenuItem>
          </Select>
        </FormControl>
        <TextField label="Quantidade" type="number" value={carcacaQtd} onChange={e => setCarcacaQtd(Number(e.target.value))} sx={{ width: 120, ml: 2 }} />
        <ButtonGlobal text="CADASTRAR" handle={() => cadastrarItem("carcaca")} />
      </fieldset>

      {/* Chassi */}
      <fieldset className="secao">
        <legend>Chassi</legend>
        <img src="https://www.consultaauto.com.br/wp-content/uploads/2016/06/chassi-chevy-ssr.jpg" alt="chassi" className='image-product' />
        <TextField label="Chassi" value={chassi} onChange={e => setChassi(e.target.value)} sx={{ width: 120 }} />
        <TextField label="Quantidade" type="number" value={chassiQtd} onChange={e => setChassiQtd(Number(e.target.value))} sx={{ width: 120, ml: 2 }} />
        <ButtonGlobal text="CADASTRAR" handle={() => cadastrarItem("chassi")} />
      </fieldset>

      <h1>Lista Estoque</h1>
      {linhasEstoque.length === 0 ? (
        <div style={{ textAlign: "center", color: "#888" }}>📭 Nenhum item no estoque.</div>
      ) : (
        <div className="lista-estoque">
          <DataGrid rows={linhasEstoque} columns={columns} autoHeight getRowId={(row) => row.id} />
        </div>
      )}
    </div>
  );
}
