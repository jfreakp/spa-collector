import { Link as LinkRouter } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import AuthLayout from '../layout/AuthLayout'
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import YupPassword from 'yup-password'
import { useAuthStore } from '../../hooks/useAuthStore';
//import { registerUser } from '../../store/auth/thunks';

YupPassword(yup) // extend yup

const schema = yup.object({
    lastName: yup.string().required('El Apellido es requerido').min(3, 'El Apellido deve contener mínimo 3 letras.'),
    firstName: yup.string().required('El Nombre es requerido').min(3, 'El Nombre deve contener mínimo 3 letras.'),
    email: yup.string().required('El email es requerido').email('El email no es valido'),
    password: yup.string().required().password()
        .min(8, 'La contraseña debe contener 8 o más caracteres, al menos uno de cada tipo: mayúsculas, minúsculas, números y especiales.')
        .minLowercase(1, 'La contraseña debe contener al menos 1 letra minúscula')
        .minUppercase(1, 'La contraseña debe contener al menos 1 letra mayúscula')
        .minNumbers(1, 'La contraseña debe contener al menos 1 número')
        .minSymbols(1, 'La contraseña debe contener al menos un carácter especial'),
}).required();


export default function RegisterPage() {
   
    const {startRegister} = useAuthStore();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues:{
            lastName:"Torres Diaz",
            firstName:"Juan Pablo",
            email:"jptorresdota@gmail.com",
            password:"*Pablito17621"
        }
    });

    const dispatch = useDispatch()

    const onSubmit = (data: any) => {
        startRegister(data)
    };

    return (
        <AuthLayout title='Login'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Nombre"
                            type="firstName"
                            placeholder='Nombre'
                            fullWidth
                            {...register("firstName")}
                            error={errors.firstName ? true : false}
                            helperText={errors.firstName?.message?.toString()}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Apellido"
                            type="lastName"
                            placeholder='Apellido'
                            fullWidth
                            {...register("lastName")}
                            error={errors.lastName ? true : false}
                            helperText={errors.lastName?.message?.toString()}
                        />
                    </Grid>
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
                        <Grid item xs={12} sm={12}>
                            <Button
                                type='submit'
                                variant='contained' fullWidth>
                                Crear Cuenta
                            </Button>
                        </Grid>
                        <Grid>

                        </Grid>
                    </Grid>
                    <Grid container direction="row" justifyContent="end" sx={{ mt: 2 }}>
                        <Typography sx={{ mr: 1 }}>Ya tienes Cuenta?</Typography>
                        <Link
                            component={LinkRouter}
                            color="inherit"
                            to="/auth/login">
                            Ingresar
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    )
}
