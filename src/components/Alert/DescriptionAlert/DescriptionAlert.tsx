import {
    Alert,
    AlertTitle,
    IconButton,
} from "@mui/material";
import useAlert from "../../../hooks/useAlert";
import {Close} from "@mui/icons-material";

const DescriptionAlert = () => {
    const { isOpen, type, title, body, close } = useAlert();

    return (
        <div>
            {
              isOpen && <Alert
                    severity={type}
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                close();
                            }}
                        >
                            <Close fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                >
                    <AlertTitle>{title}</AlertTitle>
                    {body}
                </Alert>
            }
        </div>
    )
}

export default DescriptionAlert;
