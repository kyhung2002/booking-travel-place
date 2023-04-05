import Field from 'components/field';
import Input from 'components/input';

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LayoutAuthentication from '../layout/LayoutAuthentication';
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import { IconEyeToggle } from 'components/icons';
import { useForm } from 'react-hook-form';
import { Button, ButtonGoogle } from 'components/button';
import { useDispatch } from 'react-redux';
import { authLogin } from 'store/auth/auth-slice';
import { toast } from 'react-toastify';
import { Label } from 'components/label';
const SignInPage = () => {
    const schema = yup.object({
        email: yup.string().email("Invalid email").required("This field is required"),
        password: yup.string().required("This field is required").min(8, "Password require more than 8 characters"),
    }).required();
    const { handleSubmit, formState: { errors, isSubmitting, isValid }, reset, control, setValue, getValues, watch } = useForm({
        resolver: yupResolver(schema)
    })
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const handleSignIn = (values) => {
        const isLogin = dispatch(authLogin(values));
        if (isLogin) {
            toast.success("Login successfully")
            navigate("/")
        }
    }
    // const { value: open, handleToggleValue: handleTogglePassword } = useToggleValue(false)
    return (
        <LayoutAuthentication heading={"Welcome Back!"}>
            <p className="mb-6 text-xs font-medium text-center lg:mb-8 text-text3 lg:text-sm">Dont have an account? <Link to="/sign-up" className='font-bold underline text-primary'>Sign up</Link></p>

            <ButtonGoogle>Sign in with Google</ButtonGoogle>
            <form onSubmit={handleSubmit(handleSignIn)}>
                <Field>
                    <Label htmlFor="email">Email</Label>
                    <Input name="email" type="email" placeholder="example@gmail.com" error={errors?.email?.message} control={control}></Input>
                </Field>
                <Field>
                    <Label htmlFor="password">Password</Label>
                    <Input name="password" placeholder="Fill in a password" error={errors?.password?.message} control={control}>
                        <IconEyeToggle ></IconEyeToggle>
                    </Input>
                </Field>
                <div className='mb-5 text-right'>
                    <span className='text-sm font-medium text-primary'>Forgot password</span>
                </div>
                <Button className="w-full" kind="primary" type="submit" >Sign in</Button>
            </form>
        </LayoutAuthentication>
    );
};

export default SignInPage;