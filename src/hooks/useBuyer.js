import { useEffect, useState } from "react"

const useBuyer = email => {
    const [isBuyer, setBuyer] = useState(false);
    const [isBuyerLoading, setisBuyerLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/Buyer/${email}`)
                .then(res => res.json())
                .then(data => {
                    setBuyer(data.isBuyer)
                    setisBuyerLoading(false)
                })
        }
    }, [email])
    return [isBuyer, isBuyerLoading]
}
export default useBuyer;