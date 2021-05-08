import Link from "next/link"
import {useEffect} from "react"
import {useRouter} from "next/router"

const NotFound = () => {

    const router = useRouter();

    useEffect(() =>{
        setTimeout(() =>{
        router.push('/');
        }, 3000)
    },[]);

    return ( 
        <div className="not-fund">
            <h1>Oops...</h1>
            <p>That page is not found</p>
            <p>Go to <Link href="/"><a>Home</a></Link></p>
        </div>
     );
}
 
export default NotFound;