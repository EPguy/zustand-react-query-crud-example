import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";
import {useState} from "react";
import useDialog from '../../../hooks/useDialog';

const ConfirmDialog = () => {
    const [input, setInput] = useState("");
    const { title, body, label, isOpen, close, confirm } = useDialog();

   return (
       <div>
           <Dialog open={isOpen} onClose={() => close()}>
               <DialogTitle>{title}</DialogTitle>
               <DialogContent>
                   <DialogContentText>
                     {body}
                   </DialogContentText>
                   <TextField
                       autoFocus={true}
                       margin="dense"
                       id="name"
                       label={label}
                       type="password"
                       fullWidth
                       variant="standard"
                       value={input}
                       onChange={(e) => setInput(e.target.value)}
                   />
               </DialogContent>
               <DialogActions>
                   <Button onClick={() => close()}>Cancel</Button>
                   <Button onClick={() => confirm(input)}>Confirm</Button>
               </DialogActions>
           </Dialog>
       </div>
   )
}

export default ConfirmDialog;
