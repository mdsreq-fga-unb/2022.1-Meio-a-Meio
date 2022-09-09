import React, {useState, useEffect} from "react";
import { Select, MenuItem, SelectChangeEvent } from "@mui/material";


interface selectProps{
    name?: string;
    setValue?: (x: any)=> void;
    initialValue?: string;
}

const SelectUf = ({name, setValue, initialValue}: selectProps)=> {
    const [estados] = useState([
        "AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"
    ])
    const [selecionado, setSelecionado] = useState(null)
    useEffect(() => {
        if(initialValue) {
            const estado = estados.indexOf(initialValue);
            setSelecionado(estado);
        }
    })
    const handleSelect = (e: SelectChangeEvent<HTMLInputElement>) => {
        setSelecionado(e.target.value)
        if(setValue){
            setValue(estados[e.target.value])
        }
    }
    return (
        <>
        <Select onChange={(e) => handleSelect(e)} name={name||'uf'} label= {name||'uf'} value={selecionado}>
            {estados.map((i, index) => (
                <MenuItem key={index} value={index}>
                    {i}
                </MenuItem>
            ))}
        </Select>
        </>
    );
}

export default SelectUf