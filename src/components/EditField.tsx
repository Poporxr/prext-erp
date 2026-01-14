'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"

export const EditField = () => {
   
    return (
        <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
            <Image src="/edit.svg" width={28} height={28} alt="Profile" />
        </button>
    )
}
