import { useEffect, useState } from "react"

const useSeller = email => {
    const [isSeller, setSeller] = useState(false);
    const [isSellerLoading, setisSellerLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://rephone-server.vercel.app/users/Seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    setSeller(data.isSeller)
                    setisSellerLoading(false)
                })
        }
    }, [email])
    return [isSeller, isSellerLoading]
}
export default useSeller;