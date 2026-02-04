import api from "@/services/api";
import {ExpenseResponse} from "@/types/userTypes";

export async function getExpenses(token: string): Promise<ExpenseResponse> {
    return await api.get('/expense', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer token ${token}`
        }
    }).then(response => {
        console.log(response)
        return response.data

    }).catch(error => {
        console.log(error)
    })
}

export async function getExpense(id: number, token: string): Promise<ExpenseResponse> {
    return await api.get(`/expense/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer token ${token}`
        }
    }).then((response) => {
        console.log(response)
        return response.data
    }).catch((error) => {
        console.log(error)
    });
}