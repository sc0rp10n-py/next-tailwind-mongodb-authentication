import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    return (
        <>
            <div className="container mx-auto text-center min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl">Register</h1>
            <form className="border rounded p-5 flex flex-col space-y-5 my-10">
                <input
                    type="email"
                    placeholder="Email"
                    className="py-2 px-4 rounded border"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="py-2 px-4 rounded border"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button
                    className="bg-blue-500 py-2 px-7 rounded text-white"
                    type="submit">Register</button>
            </form>
            <p>
                Already have an account? <Link href="/login">Login</Link>
                </p>
                </div>
        </>
    )
}

export default Register;