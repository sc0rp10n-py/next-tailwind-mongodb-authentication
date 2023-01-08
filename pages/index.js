import Link from "next/link";

const Index = () => {
    return (
        <>
            <div className="container mx-auto text-center min-h-screen flex flex-col justify-center items-center">
                <h1 className="text-4xl">Home</h1>
                <div className="flex flex-col justify-around text-2xl my-10 space-y-5">
                    <button className="bg-blue-500 py-2 px-7 rounded text-white">
                        <Link href="/login">Login</Link>
                    </button>
                    <button className="bg-blue-500 py-2 px-7 rounded text-white">
                        <Link href="/register">Register</Link>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Index;
