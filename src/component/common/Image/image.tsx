import Image from 'next/image'
import React, { FC, useState } from 'react'

interface IProps {
    src: string;
    alt: string;
    placeholder?: "empty" | "blur";
    type: 'static' | 'external';
    className?: string;
    width: number;
    height: number;
    loading?: "lazy" | "eager";
}

const CustomImage: FC<IProps> = ({ src, alt, loading, className, width, height, placeholder, type }) => {
    const [error, setError] = useState<boolean>(false);
    return (
        <>
            <Image
                className={className}
                src={!error ? src : '/Placeholder_Image.png'}
                alt={alt}
                quality={100}
                width={width}
                height={height}
                priority={true}
                placeholder={type === 'static' ? 'blur' : placeholder}
                loading={loading}
                onError={() => setError(true)}
            >
            </Image>
        </>
    )
}

export default CustomImage;