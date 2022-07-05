import React from 'react'
import { useState } from 'react-redux'

const AccountType = () =>{
    const isSavingAccount = useSelector(({banking}) => banking.isSavingAccount)



    return(
        <div>
            <hr />
            <h1 
             className={'is-size-3 has-text-link has-text-centered ${isSavingAccount ?  }'}>
                { isSavingAccount ? 'Saving Account' : ' Checking Account'}
                </h1>

        </div>
    )
}


export default AccountType