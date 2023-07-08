import './VerifiAcount.css'
import { useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import React, { useEffect } from "react"
import verify_account from "../../Store/User/actions"
import { Link as Anchor } from 'react-router-dom'

export default function VerifiAcount() {

    const Store = useSelector((store) => store.user)
    console.log(Store)
    const dispatch = useDispatch()
    const params = useParams()
    console.log(params)

    useEffect(() => {
        dispatch(verify_account({ verify_code: params.verify_code }))
    }, [])
    return (
        <div className="containerGeneral">
            <div className='content'>
                <h1 id='h1verify'>Your account has been verified.</h1>
                <Anchor className="anchor" to={"/"}>Home</Anchor>
            </div>
        </div>
    )
}
