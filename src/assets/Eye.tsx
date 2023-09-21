import React from "react";

function Eye() {
    return (
        <>
            <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="11" cy="10" r="3.5" stroke="#4F4F4F" />
                <path
                    d="M19.188 8.93429C19.5762 9.40556 19.7703 9.64119 19.7703 10C19.7703 10.3588 19.5762 10.5944 19.188 11.0657C17.7679 12.7899 14.6357 16 11 16C7.36427 16 4.23206 12.7899 2.81197 11.0657C2.42381 10.5944 2.22973 10.3588 2.22973 10C2.22973 9.64119 2.42381 9.40556 2.81197 8.93429C4.23206 7.21014 7.36427 4 11 4C14.6357 4 17.7679 7.21014 19.188 8.93429Z"
                    stroke="#4F4F4F"
                />
                <path d="M1 1L19 19" stroke="white" strokeWidth="2" />
                <path d="M3 1L19 17" stroke="#4F4F4F" />
            </svg>
        </>
    );
}

export default Eye;
