'use client'
import { IRenderInputProps } from '@/types/FormField'
import React, { useState } from 'react'
import EyeLock from '@/assets/EyeLock'
import Eye from '@/assets/Eye'

// Text Field
export const RenderTextInput = ({
    register,
    type,
    children,
    placeholder,
    containerClasses,
    inputClasses,
    labelClasses,
    labelName,
    disabled,
    errorClasses,
    errorMessage,
    formField
}: IRenderInputProps) => {
    return <>
        <div className={formField}>

            <label
                htmlFor={labelName}
                className={`formLabel ${labelClasses}`}
                data-content={labelName}
            >
                <span className="hidden--visually">{labelName}</span>
            </label>
            <div className={containerClasses}>
                <input
                    {...register}
                    className={`${inputClasses}`}
                    disabled={disabled}
                    type={type}
                    placeholder={placeholder}
                />
                <span>{children}</span>
            </div>
            <div className={errorClasses}>
                {errorMessage && (
                    <span>{errorMessage}</span>
                )}
            </div>
        </div>
    </>
}

// password
export const RenderPassword = ({
    register,
    type,
    children,
    placeholder,
    containerClasses,
    inputClasses,
    labelClasses,
    labelName,
    disabled,
    errorClasses,
    errorMessage,
    formField
}: IRenderInputProps) => {
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    return (
        <>
            <div className={formField}>
                <label
                    htmlFor={labelName}
                    className={labelClasses}
                    data-content={labelName}
                >
                    <span className="hidden--visually">{labelName}</span>
                </label>
                <div className={containerClasses}>
                    <input
                        {...register}
                        className={`${inputClasses}`}
                        disabled={disabled}
                        type={passwordShown ? "text" : "password"}
                        placeholder={placeholder}

                    />
                    <span onClick={togglePasswordVisiblity}>
                        {passwordShown ? <EyeLock /> : <Eye />}
                    </span>
                </div>
                <div className={errorClasses}>
                    {errorMessage && (
                        <span >{errorMessage}</span>
                    )}
                </div>
            </div>
        </>
    );
};

// Text Area Field
export const RenderTextAreaInput = ({
    register,
    placeholder,
    containerClasses,
    inputClasses,
    labelClasses,
    labelName,
    errorClasses,
    errorMessage,
    formField
}: IRenderInputProps) => (
    <>
        <div className={formField}>

            <label
                htmlFor={labelName}
                className={`formLabel ${labelClasses}`}
                data-content={labelName}
            >
                <span >{labelName}</span>
            </label>
            <textarea
                {...register}
                className={`${inputClasses}`}
                placeholder={placeholder}
                rows={10}
                cols={10}
            />

            <div className={`inputError ${errorClasses}`}>
                {errorMessage && (
                    <span className="textDanger textRight">{errorMessage}</span>
                )}
            </div>
        </div>
    </>
);
