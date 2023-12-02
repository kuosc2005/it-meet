import { useState, useContext, useEffect } from "react"
import { databaseContext } from '../../../../../../context/databaseContext/database.context'
import { Query } from 'appwrite'
export const useSponsors = ()=>{

    const database = useContext(databaseContext)
    const [sponsors, setSponsors] = useState([])
    useEffect(() => {
        // const fetchData = async () => {
        //     return await database.listDocuments("itmeet", "64dcd0522f029f78cb08")
        // }
        // fetchData().then((value) => {
        //     setSponsors(value.documents)
        // }).catch(err => {
        //     alert(err)
        // })
        setSponsors([{
            title:"F1SOFt",
            tier:"gold",
            logo:"https://c7.alamy.com/comp/PXPBDW/building-logo-design-real-estate-company-logo-design-abstract-construction-logo-design-building-logo-design-PXPBDW.jpg"
        }])
    }, [])
 
    return {sponsors }
}