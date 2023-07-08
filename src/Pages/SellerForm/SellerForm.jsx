import React from 'react'
import FormSeller from '../../Components/FormSeller/FormSeller'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actionUser from '../../Store/GetUser/Actions';
import BtnLog from '../../Components/btnLog/BtnLog';

const { oneUser } = actionUser;

export default function SellerForm() {
    const dispatch = useDispatch();
    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));

        if (user && user.user) {
            dispatch(oneUser({ user_id: user.user }));
        }
    }, [dispatch]);

    const idUser = useSelector((store) => store.getUser.user[0]);
    console.log(idUser)

    return (
        token && idUser?.is_admin ?(
        <div>
            <FormSeller />
        </div >) : (<BtnLog />)
    )
}
