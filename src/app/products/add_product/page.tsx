'use client'
import { RenderTextAreaInput, RenderTextInput } from '../../../component/common/FormField/formField';
import { ROUTES } from '../../../constants/routes';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import styles from './page.module.css';
import { createProductAction, imageUploadAction } from '@/service/product';

const Page = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const router = useRouter();

    const onFinish = (value: any) => {

        const formData = new FormData()

        formData.append('files', value.image[0])
        formData.append('module_name', 'product')

        imageUploadAction(formData)
            .then(res => {
                const productValue = {
                    productName: value?.productName,
                    productDescription: value?.description,
                    productPoints: Number(value?.point),
                    productImages: [res.data[0].name]
                }

                createProductAction(productValue)
                    .then(res => {
                        if (res.status === 200) {
                            toast.success(res?.message)
                            router.push(`${ROUTES.product}?page=1`)
                        }
                        else {
                            toast.error(res?.message)
                        }
                    })
            })
    }

    return (
        <>
            <div>
                <h1>Add New Product</h1>
                <div className={styles.userForm}>
                    <form onSubmit={handleSubmit(onFinish)}>
                        <RenderTextInput
                            formField={styles.formField}
                            inputClasses={styles.inputField}
                            labelClasses={styles.formLabel}
                            errorClasses={styles.errorClass}
                            type="text"
                            labelName="Name"
                            placeholder="Name"
                            register={register("productName", {
                                required: "required" || "",
                                pattern: {
                                    value: /^[A-Za-z]{2,}$/i,
                                    message: "Enter valid name",
                                },
                            })}
                            errorMessage={errors?.productName ? errors?.productName?.message : ""}
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

                        <RenderTextAreaInput
                            formField={styles.formField}
                            inputClasses={styles.inputField}
                            labelClasses={styles.formLabel}
                            errorClasses={styles.errorClass}
                            labelName="Description"
                            placeholder="Description"
                            register={register("description", {
                                required: "required" || "",
                            })}
                            errorMessage={errors?.description ? errors?.description?.message : ""}
                        />

                        <RenderTextInput
                            formField={styles.formField}
                            inputClasses={styles.inputField}
                            labelClasses={styles.formLabel}
                            errorClasses={styles.errorClass}
                            type='file'
                            labelName='Product Image'
                            register={register("image", {
                                required: "required" || ""
                            })}
                            errorMessage={errors?.image ? errors?.image?.message : ""}
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