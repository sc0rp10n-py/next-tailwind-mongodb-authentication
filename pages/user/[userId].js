import Head from "next/head";
import Link from "next/link";
import Error from "next/error";

const User = ({ user }) => {
    if (!user) {
        return <Error statusCode={404} />;
    }

    return (
        <>
            <Head>
                <title>{user.name}</title>
            </Head>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <Link href="/edit-profile">Edit Profile</Link>
            <Link href="/">Back to home</Link>
        </>
    );
};

// export async function getServerSideProps(context) {

// }

export default User;
