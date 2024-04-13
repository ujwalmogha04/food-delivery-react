import { useState , useEffect} from "react";

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true);

    const handleisOnline = ()=>{setIsOnline(true)};
    const handleisOffline = ()=>{setIsOnline(false)}

    useEffect(() => {
        window.addEventListener("online", handleisOnline);
        window.addEventListener("offline", handleisOffline);

        return ()=>{
            window.removeEventListener("online", handleisOnline);
            window.removeEventListener("offline", handleisOffline);
        }
    }, [])

    return isOnline;
}

export default useOnline;