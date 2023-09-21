'use client'

import { RenderTextInput } from '../../../component/common/FormField/formField';
import { ROUTES } from '../../../constants/routes';
import { createUserAction } from '../../../service/user';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import styles from './page.module.css';
import { ICreateUser } from '@/types/user';

const Page = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<ICreateUser>();

    const router = useRouter();

    const onFinish = (value: ICreateUser) => {

        const data = {
            userName: value?.userName,
            mobileNo: value?.mobileNo,
            point: Number(value?.point)
        }

        createUserAction(data).then(res => {
            if (res.status === 200) {
                toast.success(res?.message)
                router.push(ROUTES.user)
            }
            else {
                toast.error(res?.message)
            }
        }).catch(err => console.log(err))
    }

    return (
        <>
            <div>
                <h1>Add New User</h1>
                <div className={styles.userForm}>
                    <form onSubmit={handleSubmit(onFinish)}>
                        <RenderTextInput
                            formField={styles.formField}
                            inputClasses={styles.inputField}
                            labelClasses={styles.formLabel}
                            errorClasses={styles.errorClass}
                            type="text"
                            labelName="User Name"
                            placeholder="User Name"
                            register={register("userName", {
                                required: "required" || "",
                                pattern: {
                                    value: /^[A-Za-z]{2,}$/i,
                                    message: "Enter valid user name",
                                },
                            })}
                            errorMessage={errors?.userName ? errors?.userName?.message : ""}
                        />

                        <RenderTextInput
                            formField={styles.formField}
                            inputClasses={styles.inputField}
                            labelClasses={styles.formLabel}
                            errorClasses={styles.errorClass}
                            type="text"
                            labelName="Mobile Number"
                            placeholder="Mobile Number"
                            register={register("mobileNo", {
                                required: "required" || "",
                                pattern: {
                                    value: /^[0-9]{10}$/i,
                                    message: "Enter valid mobile number",
                                },
                            })}
                            errorMessage={errors?.mobileNo ? errors?.mobileNo?.message : ""}
                        />

                        <RenderTextInput
                            formField={styles.formField}
                            inputClasses={styles.inputField}
                            labelClasses={styles.formLabel}
                            errorClasses={styles.errorClass}
                            type="text"
                            labelName="Point"
                            placeholder="Point"
                            register={register("point", {
                                required: "required" || "",
                                pattern: {
                                    value: /^[0-9]{2,}$/i,
                                    message: "Enter valid point",
                                },
                            })}
                            errorMessage={errors?.point ? errors?.point?.message : ""}
                        />

                        <div className='w-full flex justify-center'>
                            <button type='submit' className={styles.submitBtn}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Page