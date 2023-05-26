import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title= `${title} | Curious World`;
    },[title])
}
 export default useTitle;