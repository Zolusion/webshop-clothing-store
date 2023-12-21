import { useEffect } from "react"
import { useRouter } from "next/router"

export default function Success() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 5000);
    }, []);

    return (
        <div className="flex min-h-screen flex-col">
            <div className="flex flex-col items-center justify-center flex-1">
                <h1 className="text-4xl font-bold text-white">Thankyou for your message</h1>
                <p className="text-white">We will get back to you shortly</p>
            </div>
        </div>
    )
}