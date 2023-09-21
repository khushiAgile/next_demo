'use client'
import { store } from '@/service/redux/store'
import { setupAxios } from '@/utils/function'
import React, { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'


export const toastOptions = {
    duration: 3000,
}

const Template = ({
    children,
}: {
    children: React.ReactNode
}) => {
    useEffect(() => {
        setupAxios(store)
    }, [])
    return (
        <Provider store={store}>
            <Toaster toastOptions={toastOptions} />
            {children}
        </Provider>
    )
}

export default Template