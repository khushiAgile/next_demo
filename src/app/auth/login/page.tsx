'use client'
import { RenderPassword, RenderTextInput } from '@/component/common/FormField/formField';
import { ROUTES } from '@/constants/routes';
import { login } from '@/service/auth';
import { ILogin } from '@/types/auth';
import { useRouter } from 'next/navigation';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast';
import styles from '../login/page.module.css'

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: { email: 'rootadmin@yopmail.com', password: '123456' } });
    const router = useRouter()

    const onFinish: SubmitHandler<ILogin> = (data) => {
        login(data)
            .then((res) => {
                router.replace(ROUTES.default)
                toast.success('Login SuccessFully !')
            })
            .catch(err => {
                console.log('err: ', err);
            })
    }
    return (
        <>
            <div className={styles.main}>
                <div className={styles.loginForm}>
                    <h1 className={styles.heading}>Login</h1>
                    <div className={styles.mainForm}>
                        <form onSubmit={handleSubmit(onFinish)}>
                            <RenderTextInput
                                formField={styles.formField}
                                inputClasses={styles.inputField}
                                labelClasses={styles.formLabel}
                                errorClasses={styles.errorClass}
                                type="email"
                                labelName="Email"
                                placeholder="Email"
                                register={register("email", {
                                    required: "required" || "",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Enter valid email",
                                    },
                                })}
                                errorMessage={errors?.email ? errors?.email?.message : ""}
                            />

                            <RenderPassword
                                formField={styles.formField}
                                labelClasses={styles.formLabel}
                                errorClasses={styles.errorClass}
                                labelName="Password"
                                placeholder="Password"
                                inputClasses={styles.inputField}
                                containerClasses={styles.containerClass}
                                register={register("password", {
                                    required: "required" || "",
                                })}
                                errorMessage={
                                    errors?.password ? errors?.password?.message : ""
                                }
                            />
                            <div className='w-full flex justify-center'>
                                <button type='submit' className={styles.submitBtn}>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login