'use client'

export default function GlobalError({
    error,
    reset,
}: {
    error: Error
    reset: () => void
}) {
    return (
        <html>
            <body>
                <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <h2>Something went wrong!</h2>
                    <button onClick={() => reset()} style={{ padding: '5px 20px', marginTop: '20px' }}>Try again</button>
                </div>
            </body>
        </html>
    )
}