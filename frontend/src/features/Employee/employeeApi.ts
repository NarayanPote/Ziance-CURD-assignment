import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api";
import { IEmployee } from "../../models/employee";

export const getEmployees = createAsyncThunk("employee/getEmployees", async () => {
    try {
        const response = await API.get("")        
        return response.data
    } catch (error) {
        console.log(error)
    }
})

export const addEmployee = createAsyncThunk("employee/addEmployee", async (employee: IEmployee) => {
     try {
        const response = await API.post("", employee)
        return response.data
    } catch (error) {
        console.log(error)
    }
})

export const updateEmployee = createAsyncThunk("employee/updateEmployee",
    async (employee: IEmployee) => {
        try {
            const response = await API.put(`/${employee.id}`, employee);
            return response.data
        } catch (error) {
            console.log(error)
        }
    }) 

export const deleteEmployee = createAsyncThunk("employee/deleteEmployee", async (id: number) => {
    try {
        const response = await API.delete(`/${id}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
})