import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, IconButton, Stack, TextField } from "@mui/material";
import FormControlContext from "@mui/material/FormControl/FormControlContext";
import CloseIcon from "@mui/icons-material/Close"
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function EditarEndereco(props) {
    const [open, openchange] = useState(false);
    const functionopenpopup = () => {
        openchange(true);
    }
    const closepopup = () => {
        openchange(false);
    }

    const [nome, setNome] = useState("")
    const [rua, setRua] = useState("");
    const [cep, setCep] = useState("");
    const [cidade, setCidade] = useState("");
    const [bairro, setBairro] = useState("");
    const [complemento, setComplemento] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
        
        axios.put(
            `http://localhost:8081/cliente/endereco/${props.id}`, {
                nome: nome,
                rua: rua,
                cep: cep,
                cidade: cidade,
                bairro: bairro,
                complemento: complemento
            }
        )
        window.location = "/painel/enderecos"
        
    }

    useEffect(() => {
        axios.get(
            `http://localhost:8081/cliente/endereco/${props.id}`
        ).then(({data}) => {
            setNome(data.nome)
            setRua(data.rua);
            setCep(data.cep);
            setCidade(data.cidade);
            setBairro(data.bairro);
            setComplemento(data.complemento)
        })
    }, [props.id])
    
    return (
        <div style={{ textAlign: 'center', width: '100%', padding: '10px 0'}}>
            <Button onClick={functionopenpopup} color="primary" variant="contained" sx={{width: "100%"}}>Editar</Button>
            <Dialog
                open={open} onClose={closepopup} fullWidth maxWidth="sm">
                <DialogTitle>Editar Endereço <IconButton onClick={closepopup} style={{ float: 'right' }}><CloseIcon color="primary"></CloseIcon></IconButton>  </DialogTitle>
                <DialogContent>
                    <Stack spacing={2} margin={2}>
                        <TextField variant="outlined" label="Nome" className={nome !== "" ? "has-val input" : "input"}
                            type="text"
                            value={nome}
                            onChange={(e) => {
                                setNome(e.target.value); 
                            }}
                        >
                        </TextField>
                        <TextField variant="outlined" label="Rua" className={rua !== "" ? "has-val input" : "input"}
                            type="text"
                            value={rua}
                            onChange={(e) => {
                                setRua(e.target.value); 
                            }}
                        >
                        </TextField>
                        <TextField variant="outlined" label="Cep" className={cep !== "" ? "has-val input" : "input"}
                            type="number"
                            value={cep}
                            onChange={(e) => setCep(e.target.value)}
                        >
                        </TextField>
                        <TextField variant="outlined" label="Cidade" className={cidade !== "" ? "has-val input" : "input"}
                            type="text"
                            value={cidade}
                            onChange={(e) => {
                                setCidade(e.target.value); 
                            }}
                        >
                        </TextField>
                        <TextField variant="outlined" label="Bairro" className={bairro !== "" ? "has-val input" : "input"}
                            type="text"
                            value={bairro}
                            onChange={(e) => {
                                setBairro(e.target.value); 
                            }}
                        >
                        </TextField>
                        <TextField variant="outlined" label="Complemento" className={complemento !== "" ? "has-val input" : "input"}
                            type="text"
                            value={complemento}
                            onChange={(e) => {
                                setComplemento(e.target.value); 
                            }}
                        >
                        </TextField>
                        <Button onClick={submitHandler} color="primary" variant="contained">Atualizar</Button>
                    </Stack>
                </DialogContent>
                <DialogActions>

                </DialogActions>
            </Dialog>
        </div>
    );
}
