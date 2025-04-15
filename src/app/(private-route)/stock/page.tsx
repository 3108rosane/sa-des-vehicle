'use client'

import { TextField, Checkbox, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useState } from 'react';
import "./styles.css"
import MainMenu from "@/components/mainMenu"


export default function Stock() {

    return (
        <div className='first-stock'>
            <h1>Estoque</h1>

            <div className='second-stock'>
                <div className='third-stock'>
                    <InputLabel id="label">selecionar</InputLabel>
                    <Select labelId="label" id="select" value="20">
                        <MenuItem value="10">Ten</MenuItem>
                        <MenuItem value="20">marca</MenuItem>
                    </Select>
                </div>
                <div className="third-stock">
                    <FormControl sx={{ width: '20%' }}>
                        <InputLabel>Selecione a Categoria</InputLabel>
                        <Select label="Selecione a Categoria">
                            <MenuItem value={10}>Mecânico</MenuItem>
                            <MenuItem value={20}>Elétrico</MenuItem>
                        </Select>
                    </FormControl>

                </div >
            </div>
        </div>
    )
}   