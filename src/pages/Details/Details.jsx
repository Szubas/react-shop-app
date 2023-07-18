import { ItemDetails } from "../../components/Item-details"
import { useLocation } from 'react-router-dom'
 
export const Details = () => {
    const {state} = useLocation();

    return(
        <>
            <ItemDetails item={state.item}/>
        </>
    )
}
