'use client'
import { ButtonGlobal } from "@/components/Button";
import "./styles.css"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";


const columns: GridColDef<(typeof linhasEstoque)[number]>[] = [

    { field: 'id', headerName: 'ID' },
    {
        field: 'CategoriaDocarro',
        headerName: 'Categoria',
        width: 500,
        editable: false,
    },
    {
        field: 'modelo',
        headerName: 'Modelo',
        width: 500,
        editable: false,
    },
    {
        field: 'ano',
        headerName: 'Ano',
        type: 'number',
    },
    {
        field: 'color',
        headerName: 'Cor',
    },
    {
        field: 'motor',
        headerName: 'Motor',
        type: 'number',
    },
    {
        field: 'pneu',
        headerName: 'Pneu',
        width: 300,
    },
];

const linhasEstoque = [
    { id: 1, CategoriaDocarro: 'Elétrico', modelo: 'Honda Civic', ano: '2010', color: 'Vermelho', motor: 2.0, pneu: "Pirelli" },
    { id: 2, CategoriaDocarro: 'Mecânico', modelo: 'Toyota Corolla', ano: '2015', color: 'Preto', motor: 1.0, pneu: "Pirelli " },
    { id: 3, CategoriaDocarro: 'Mecânico', modelo: 'Volkswagen Golf', ano: '2006', color: 'Branco', motor: 2.0, pneu: "Goodyear" },
    { id: 4, CategoriaDocarro: 'Mecânico', modelo: 'Chevrolet Onix', ano: '2015', color: 'Prata', motor: 1.8, pneu: "Goodyear" },
];


export default function Production() {




    return (
        <div>
            <div className='containerProduction'>
                <h1>Produção</h1>

                <div className='contentProduction'>
                    <h2>Novo Veículo</h2>
                    <form className='form'>
                        <div>
                            <div className='formSeparetor'>
                                <FormControl sx={{ width: '30%' }}>
                                    <InputLabel>Categoria Do carro</InputLabel>
                                    <Select label="selecione a Categoria do carro">
                                        <MenuItem value={10}>Elétrico</MenuItem>
                                        <MenuItem value={20}>Mecânico</MenuItem>
                                    </Select>
                                </FormControl>

                                <FormControl sx={{ width: '30%' }}>
                                    <InputLabel>Selecione o Modelo</InputLabel>
                                    <Select label="Selecione o Modelo">
                                        <MenuItem value={10}>Honda Civic</MenuItem>
                                        <MenuItem value={20}>Toyota Corolla</MenuItem>
                                        <MenuItem value={30}>Volkswagen Golf </MenuItem>
                                        <MenuItem value={20}>Chevrolet Onix </MenuItem>
                                    </Select>
                                </FormControl>

                                <FormControl sx={{ width: '30%' }}>
                                    <InputLabel>Selecione a cor</InputLabel>
                                    <Select label="Selecione a cor">
                                        <MenuItem value={10}>Preto</MenuItem>
                                        <MenuItem value={20}>Branco</MenuItem>
                                        <MenuItem value={30}>Prata</MenuItem>
                                        <MenuItem value={30}>Grafite</MenuItem>
                                    </Select>
                                </FormControl>

                                <FormControl sx={{ width: '30%' }}>
                                    <InputLabel>Selecione o Motor</InputLabel>
                                    <Select label="Selecione o Motor">
                                        <MenuItem value={10}>1.0</MenuItem>
                                        <MenuItem value={20}>1.8</MenuItem>
                                        <MenuItem value={30}>2.0 </MenuItem>
                                    </Select>
                                </FormControl>

                                <FormControl sx={{ width: '30%' }}>
                                    <InputLabel>Selecione o pneu</InputLabel>
                                    <Select label="Selecione o pneu">
                                        <MenuItem value={10}>Pirelli</MenuItem>
                                        <MenuItem value={20}>Goodyear</MenuItem>
                                    </Select>
                                </FormControl>

                                <TextField label="Quantidade" variant="outlined" type='number' sx={{ width: '30%' }} />
                            </div>
                        </div>
                        <div className='buttonGroup'>
                            <ButtonGlobal text="Enviar para Produção" handle={() => { }} />
                        </div>
                    </form>
                </div>

                <h1>Lista Últimos Produzidos</h1>
                <div className='datagrid'>
                    <DataGrid
                        rows={linhasEstoque}
                        columns={columns}
                        sx={{ maxHeight: '270px' }}
                        hideFooter
                    />
                </div>
            </div>

        </div>
    )
}