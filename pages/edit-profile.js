import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const EditProfile = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    return (
        <>
            <Head>
                <title>Edit Profile</title>
            </Head>
            <h1>Edit Profile</h1>
            <form>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Update</button>
            </form>
        </>
    )
}

export default EditProfile;