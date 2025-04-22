'use client'

import { TextField, Checkbox, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import "./styles.css"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { ButtonGlobal } from '@/components/Button';


const linhasEstoque = [
    {
        id: 1,
        CategoriaDocarro: 'Mecânico',
        motor: '1.8',
        pneu: 'Pirelli',
        carcaca: 'chevrolet',
        Chassi: "123"
    },
    {
        id: 2,
        CategoriaDocarro: 'Elétrico',
        motor: '2.0',
        pneu: 'Goodyear',
        carcaca: 'fiat',
        Chassi: "321"
    }, {
        id: 3,
        CategoriaDocarro: 'Mecânico',
        motor: '2.0',
        pneu: 'Goodyear',
        carcaca: 'kia',
        Chassi: "213"
    }, {
        id: 4,
        CategoriaDocarro: 'Mecânico',
        motor: '1.0',
        pneu: 'Pirelli',
        carcaca: 'ford',
        Chassi: "3214"
    },
];

const columns: GridColDef<(typeof linhasEstoque)[number]>[] = [

    { field: 'id', headerName: 'ID' },
    {
        field: 'CategoriaDocarro',
        headerName: 'Categoria',
        width: 500,
        editable: false,
    },
    {
        field: 'motor',
        headerName: 'Motor',
        width: 300,
    },
    {
        field: 'pneu',
        headerName: 'Pneu',
        width: 300,
    },
    {
        field: 'carcaca',
        headerName: 'Carcaca',
        width: 300,
    },
    {
        field: 'Chassi',
        headerName: 'Chassi',
        width: 300,
    },
];


export default function Stock() {

    return (
        <div className='header-stock'>
            <h1>Estoque</h1>


            <div className="main-stock">
                <FormControl sx={{ width: '20%' }}>
                    <InputLabel>Categoria do carro</InputLabel>
                    <Select label="Selecione a Categoria">
                        <MenuItem value={10}>Mecânico</MenuItem>
                        <MenuItem value={20}>Elétrico</MenuItem>
                    </Select>
                </FormControl>
            </div >

            <fieldset className='secao'>
                <legend>Motor</legend>
                <img src="https://cdn.autopapo.com.br/box/uploads/2018/11/22152231/motor-carro-novo-shutterstock-732x488.jpg" alt="motor" className='image-product' />
                <FormControl sx={{ width: '120px' }}>
                    <InputLabel id="label">Motor</InputLabel>
                    <Select label="Motor">
                        <MenuItem value="10">1.0</MenuItem>
                        <MenuItem value="20">1.8</MenuItem>
                        <MenuItem value="30">2.0</MenuItem>
                    </Select>
                </FormControl>
                <TextField label="Quantidade" variant="outlined" type='number' />
                <ButtonGlobal text="CADASTRAR" handle={() => { }} />
            </fieldset>

            <fieldset className='secao'>
                <legend>Pneu</legend>
                <img src="https://a-static.mlcdn.com.br/800x560/pneu-pirelli-aro-20-pzero-245-45r20-103y-xl-original-chevrolet-camaro/pneustore/10070001/b7dc4aae41f54f7df27a298ab92475ec.jpeg" alt="pneu" className='image-product' />
                <FormControl sx={{ width: '120px' }}>
                    <InputLabel>Pneu</InputLabel>
                    <Select label="Pneu">
                        <MenuItem value={10}>Pneu - Pirelli</MenuItem>
                        <MenuItem value={20}>Pneu - Goodyear</MenuItem>
                    </Select>
                </FormControl>
                <TextField label="Quantidade" variant="outlined" type='number' />
                <ButtonGlobal text="CADASTRAR" handle={() => { }} />
            </fieldset>

            <fieldset className='secao'>
                <legend>carcaça</legend>
                <img src="https://www.karvi.com.br/blog/wp-content/uploads/2021/02/Tipos-de-carrocerias-850x459.jpg" alt="carcaca" className='image-product' />
                <FormControl sx={{ width: '120px' }}>
                    <InputLabel>carcaça</InputLabel>
                    <Select label="carcaca">
                        <MenuItem value={10}>chevrolet</MenuItem>
                        <MenuItem value={20}>fiat</MenuItem>
                        <MenuItem value={20}>ford</MenuItem>
                        <MenuItem value={20}>kia</MenuItem>
                    </Select>
                </FormControl>
                <TextField label="Quantidade" variant="outlined" type='number' />
                <ButtonGlobal text="CADASTRAR" handle={() => { }} />
            </fieldset>

            <fieldset className='secao'>
                <legend>Chassi</legend>
                <img src="https://www.consultaauto.com.br/wp-content/uploads/2016/06/chassi-chevy-ssr.jpg" alt="chassi" className='image-product' />
                <TextField id="chassi-basic" label="chassi" variant="outlined" />
                <ButtonGlobal text="CADASTRAR" handle={() => { }} />
            </fieldset>
            <h1>lista estoque</h1>
            <div className='lista-estoque'>
                <DataGrid
                    rows={linhasEstoque}
                    columns={columns}
                />
            </div>
        </div >
    )
}   