export const deposit = (amount) =>{
    return{
        type : 'DEPOSIT',
        payload: amount,
    }
}

export const Withdraw = (amount) =>{
    return{
        type : 'WITHDRAW',
        payload: amount,
    }
}

export const collectInterest = (amount) =>{
    return{
        type : 'COLLECT_INTEREST',
    }
}

export const deleteAccount = (amount) =>{
    return{
        type : 'DELETE_ACCOUNT',
        
    }
}

export const toggleAccount = (amount) =>{
    return{
        type : 'TOGGLE',
        
    }
}

export const toggleLogIn = () =>{
    return{
        type: 'IS_LOGGED_IN',
    }
}