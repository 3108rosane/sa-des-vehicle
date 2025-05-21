
"use client";

import styles from './styles.module.css';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { TextField, Select, MenuItem, FormControl, InputLabel, Checkbox, FormControlLabel, Chip } from "@mui/material";
import React, { useState } from "react";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "produto", headerName: "Produto", width: 130 },
  { field: "lote", headerName: "Lote", width: 100 },
  { field: "responsavel", headerName: "Responsável", width: 150 },
  {
    field: "status", headerName: "Status", width: 130, renderCell: (params) => {
      const value = params.value;
      let color = "default" as any;
      if (value === "Aprovado") color = "success";
      else if (value === "Reprovado") color = "error";
      else if (value === "Pendente") color = "warning";
      return <Chip label={value} color={color} variant="outlined" />;
    }
  },
];

const rows = [
  { id: 1, produto: "Product A", lote: "1001", responsavel: "João", status: "Aprovado" },
  { id: 2, produto: "Product A", lote: "1002", responsavel: "Maria", status: "Reprovado" },
  { id: 3, produto: "Product B", lote: "1003", responsavel: "Carlos", status: "Pendente" },
  { id: 4, produto: "Product B", lote: "1004", responsavel: "Anna", status: "Pendente" },
];

export default function Quality() {
  const [produto, setProduto] = useState("");
  const [status, setStatus] = useState("");
  const [responsavel, setResponsavel] = useState("");
  const [pendentes, setPendentes] = useState(false);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Qualidade</h1>
      <div className={styles.filters}>
        <TextField label="Produto" size="small" value={produto} onChange={(e) => setProduto(e.target.value)} />
        <FormControlLabel
          control={<Checkbox checked={pendentes} onChange={(e) => setPendentes(e.target.checked)} />}
          label="Somente Pendentes"
        />
        <FormControl size="small" style={{ minWidth: 160 }}>
          <InputLabel>Status da inspeção</InputLabel>
          <Select value={status} label="Status da inspeção" onChange={(e) => setStatus(e.target.value)}>
            <MenuItem value=""><em>Todos</em></MenuItem>
            <MenuItem value="Aprovado">Aprovado</MenuItem>
            <MenuItem value="Reprovado">Reprovado</MenuItem>
            <MenuItem value="Pendente">Pendente</MenuItem>
          </Select>
        </FormControl>
        <TextField label="Responsável" size="small" value={responsavel} onChange={(e) => setResponsavel(e.target.value)} />
      </div>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </div>
  );
}
