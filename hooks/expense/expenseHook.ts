import {getExpense, getExpenses} from "@/services/expense";
import {HttpStatusCode} from "axios";
import {Expense} from "@/types/userTypes";


export async function findExpense(token: string, id: number = 0): Promise<Expense[]> {


    const expensesFounded = id == 0 ? await getExpenses(token) : await getExpense(id, token)

    if (expensesFounded.statusCode === HttpStatusCode.NotFound) {
        throw new Error(expensesFounded.message)
        return [];
    }

    return expensesFounded.data;
}
