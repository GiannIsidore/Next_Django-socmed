'use client'
import { useAuth } from "@/app/context/useAuth";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

const PrivateRoute = ({children}: {children: ReactNode}) => {

    const { authLoading, auth } = useAuth();

    if(authLoading){
        return <div>Loading...</div>
    }

    if (!auth) {
        const router = useRouter();
        router.push('/login');
        return null;
    } else {
        return <>{children}</>
    }
}
export default PrivateRoute;
