

import { yupResolver } from "@hookform/resolvers/yup";
import { Button, ButtonGoogle } from "components/button";
import { Checkbox } from "components/checkbox";
import Field from "components/field";
import { IconEyeToggle } from "components/icons";
import Input from "components/input";
import { Label } from "components/label";
import LayoutAuthentication from "layout/LayoutAuthentication";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import *  as yup from "yup"
const SignUpPage = () => {
    // const schema = yup.object({
    //     fullname: yup.string().required("This field is required"),
    //     email: yup.string().email("Invalid email").required("This field is required"),
    //     password: yup.string().required("This field is required").min(8, "Password require more than 8 characters"),
    // }).required();

    const { handleSubmit, formState: { errors, isSubmitting, isValid }, reset, control, setValue, getValues, watch } = useForm({
        // resolver: yupResolver(schema)
    })
    const dispatch = useDispatch();
    // const handleSignUp = (values) => {
    //     dispatch(authRegister(values));
    // }
    const [open, setOpen] = useState(false)
    return (
        <LayoutAuthentication heading={"Sign Up"}>
            <p className="mb-6 text-xs font-medium text-center lg:mb-8 text-text3 lg:text-sm">Already have an account? <Link to="/sign-in" className='font-bold underline text-primary'>Sign in</Link></p>
                
            <ButtonGoogle>Sign up with Google</ButtonGoogle>
            <p className="mb-4 text-xs font-normal text-center lg:mb-8 lg:text-sm text-text2 dark:text-white">Or sign up with email</p>
            <form onSubmit={() => { }}>
                <Field>
                    <Label htmlFor="fullname">Full Name</Label>
                    <Input name="fullname" type="text" placeholder="Input your name here..." error={errors?.fullname?.message} control={control}></Input>
                </Field>
                <Field>
                    <Label htmlFor="email">Email</Label>
                    <Input name="email" type="email" placeholder="example@gmail.com" error={errors?.email?.message} control={control}></Input>
                </Field>
                <Field>
                    <Label htmlFor="password">Password</Label>
                    <Input name="password" type={open ? "text" : "password"} placeholder="Create a password" error={errors?.password?.message} control={control}>
                        <IconEyeToggle open={open} onClick={() => { setOpen(true) }}></IconEyeToggle>
                    </Input>
                </Field>
                <div className="flex items-start mb-5 gap-x-5">
                    <Checkbox checked={true} onClick={() => { }} name="term" control={control}>
                        <p className='flex-1 text-xs lg:text-sm text-text2 dark:text-text3'>I agree to the <span className="underline text-secondary">Terms of Use</span> and have read and understand the <span className="underline text-secondary">Privacy policy.</span></p>
                    </Checkbox>
                </div>
                <Button className="flex w-full" kind="primary" type="submit" >Create my account</Button>
            </form>
        </LayoutAuthentication>
    );
};

export default SignUpPage;