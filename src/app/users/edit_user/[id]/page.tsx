'use client'

import { RenderTextInput } from '../../../../component/common/FormField/formField';
import { ROUTES } from '../../../../constants/routes';
import { updateUserAction } from '../../../../service/user';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import styles from '../../add_user/page.module.css'
import { IUpdateUser } from '@/types/user';

interface IParamsProps {
    id: string
}

interface ISearchParams {
    UserName: string;
    phoneNo: string;
    point: number;
}

const Page = ({ params, searchParams }: { params: IParamsProps, searchParams: ISearchParams }) => {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm<IUpdateUser>();

    const router = useRouter();

    useEffect(() => {

        setValue('userName', searchParams.UserName)
        setValue('mobileNo', searchParams.phoneNo)
        setValue('point', searchParams.point)

    }, [searchParams])

    const onFinish = (value: IUpdateUser) => {

        const data = {
            _id: params.id,
            userName: value?.userName,
            mobileNo: value?.mobileNo,
            point: Number(value?.point)
        }

        updateUserAction(data).then(res => {
            if (res.status === 200) {
                toast.success(res?.message)
                router.push(ROUTES.user)
            }
            else {
                toast.error(res?.response?.data?.message)
            }
        })
    }

    return (
        <>
            <div>
                <h1>Edit User</h1>
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