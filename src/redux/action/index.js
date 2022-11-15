import React from 'react';

export const AddCart = (product) => {
    return {
        type: "ADDITEM",
        payload:product
    }
}
export const DeleteCart = (product) => {
    return {
        type: "DELETEITEM",
        payload:product
    }
}