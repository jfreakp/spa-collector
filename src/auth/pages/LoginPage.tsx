import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Link as LinkRouter } from 'react-router-dom'
import AuthLayout from '../layout/AuthLayout'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import {useAuthStore} from '../../hooks/useAuthStore'

const schema = yup.object({
    email: yup.string().required('El email es requerido').email('El email no es valido'),
    password: yup.string().required()
}).required();

export default function LoginPage() {

    const {startLogin} = useAuthStore();
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues:{
            email: 'jptorresdota@gmail.com',
            password: '*Pablito17621'
        }
    });

    const onSubmit = (data: any) => {
        console.log("data", data);
        startLogin(data)
    }

    return (
        <AuthLayout title='Login'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder='corrreo@gmail.com'
                            fullWidth
                            {...register("email")}
                            error={errors.email ? true : false}
                            helperText={errors.email?.message?.toString()}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Password"
                            type="password"
                            placeholder='Contraseña'
                            fullWidth
                            {...register("password")}
                            error={errors.password ? true : false}
                            helperText={errors.password?.message?.toString()}
                        />
                    </Grid>
                    <Grid container spacing={2} sx={{ mt: 2 }}>
                        <Grid item xs={12} sm={6}>
                            <Button
                                type='submit'
                                variant='contained' fullWidth>
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button
                                onClick={()=>{}}
                                variant='contained' fullWidth>
                                <Google />
                                <Typography sx={{ ml: 1, }}>Google</Typography>
                            </Button>
                        </Grid>
                        <Grid>

                        </Grid>
                    </Grid>
                    <Grid container direction="row" justifyContent="end" sx={{ mt: 2 }}>
                        <Link
                            component={LinkRouter}
                            color="inherit"
                            to="/auth/register">
                            Crear Cuenta
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    )
}
