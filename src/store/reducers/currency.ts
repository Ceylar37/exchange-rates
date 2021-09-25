import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppDispatch, RootState} from "../index";
import {API} from "../../api";

export interface ICurrency {
    symbol: string,
    rate: number,
    country: string
}

const currencySlice = createSlice({
    name: 'currency',
    initialState: {
        currencies: [] as ICurrency[],
        selectedCurrency: {
            country: '',
            symbol: '',
            rate: 0
        } as ICurrency
    },
    reducers: {
        setCurrencies: (state, action: PayloadAction<{currencies: ICurrency[]}>) => {
            state.currencies = action.payload.currencies
        },
        setSelectedCurrency: (state, action: PayloadAction<{country: string}>) => {
            const currency = state.currencies.find(currency => currency.country === action.payload.country)
            if (currency) state.selectedCurrency = currency
        }
    }
})

export const currencyReducer = currencySlice.reducer
export const currencyActions = currencySlice.actions

export const requestCurrenciesAndPull = createAsyncThunk<
    Promise<void>,
    void,
    {
        dispatch: AppDispatch,
        state: RootState
    }>('currency/requestCurrenciesAndPull', async (arg, thunkAPI) => {
        const {symbols} = await API.getSymbols()
        const {rates} = await API.getRates()
        const countries = await API.getCountries()
        const currencies: ICurrency[] = Object.keys(countries).map(key => ({rate: rates[countries[key]], symbol: symbols[countries[key]], country: key}))
        thunkAPI.dispatch(currencyActions.setCurrencies({currencies}))
    }
)