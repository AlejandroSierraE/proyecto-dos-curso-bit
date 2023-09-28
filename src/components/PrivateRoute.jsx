import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebase from '@/data/Firebase/firebaseAuth'

export default function PrivateRoute({children}) {

    const[user, setUser] = useState('')
    const auth = getAuth(firebase)
    const router = useRouter()

    useEffect(() => {
        onAuthStateChanged(auth, (myUser) => {
            if(!myUser) {
                router.push('/login')
            } else {
                setUser(myUser)
            }
            console.log(myUser)          
        })
        
    }, [user, router])

    return user ? children : null
}
