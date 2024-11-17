import React from 'react'

const Footer = () => {
    return (
        <footer className="fixed  bottom-0 w-full p-4 bg-gray-900 text-gray-400 text-center">
            © {new Date().getFullYear()} Edu School. All Rights Reserved.
        </footer>

    )
}

export default Footer