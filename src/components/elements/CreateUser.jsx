import { useCallback } from 'react';
import {
    Box,
    FormControl,
    TextField,
    Button,
    Grid,
    Typography,
    Modal,
    IconButton,
} from '@mui/material';
import IconClose from '@mui/icons-material/Close';
import { useFormik } from 'formik';
import { validationSchema } from './../utils/formSchema';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

function CreateUser({ open, handleClose, handleCreateNewUser }) {
    //Some memoization to prevent renders
    const onHandleClose = useCallback(() => {
        handleClose();
        formik.resetForm();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const initialValues = {
        name: '',
        email: '',
        company: '',
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            const { name, email, company } = values;
            const data = {
                name,
                email,
                company,
            };
            handleCreateNewUser(data).then(() => {
                onHandleClose();
            });
        },
    });

    return (
        <Modal
            open={open}
            onClose={onHandleClose}
            aria-labelledby="modal-modal-title"
        >
            <Box sx={style}>
                <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Grid item xs={8}>
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                        >
                            Create User
                        </Typography>
                    </Grid>
                    <Grid item xs={4} justifyContent="flex-end">
                        <Grid container justifyContent="flex-end">
                            <IconButton onClick={onHandleClose}>
                                <IconClose />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
                <Box
                    component="form"
                    sx={{ mt: 3 }}
                    noValidate
                    autoComplete="off"
                    onSubmit={formik.handleSubmit}
                >
                    <FormControl fullWidth sx={{ mb: 2 }}>
                        <TextField
                            required
                            fullWidth
                            id="name"
                            name="name"
                            label="Name"
                            type="text"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.name &&
                                Boolean(formik.errors.name)
                            }
                            helperText={
                                formik.touched.name && formik.errors.name
                            }
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ mb: 2 }}>
                        <TextField
                            fullWidth
                            id="email"
                            name="email"
                            label="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.email &&
                                Boolean(formik.errors.email)
                            }
                            helperText={
                                formik.touched.email && formik.errors.email
                            }
                        />
                    </FormControl>

                    <FormControl fullWidth sx={{ mb: 2 }}>
                        <TextField
                            required
                            id="company"
                            name="company"
                            label="Company name"
                            type="text"
                            value={formik.values.company}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.company &&
                                Boolean(formik.errors.company)
                            }
                            helperText={
                                formik.touched.company && formik.errors.company
                            }
                        />
                    </FormControl>

                    <Grid item sx={{ mt: 2 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Submit
                        </Button>
                    </Grid>
                </Box>
            </Box>
        </Modal>
    );
}

export default CreateUser;
