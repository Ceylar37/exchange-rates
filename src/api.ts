import $ from 'jquery'

const ACCESS_KEY = '27b6fd44b20851862a460b1af37d2601'

interface IRatesResponse {
    'success': boolean,
    'timestamp': number,
    'base': string,
    'date': string,
    'rates': {
        [key: string]: number
    }
}

interface ISymbolsResponse {
    'success': boolean,
    'symbols': {
        [key: string]: string
    }
}

interface ICountriesResponse {
    [key: string]: string
}

export const API = {
    getSymbols() {
        return $.ajax({
            url: 'http://data.fixer.io/api/symbols?access_key=' + ACCESS_KEY,
            method: 'get',
            success: (data: ISymbolsResponse) => {
                debugger
                if (!data.success) throw new Error('Server Error')
                return data
            }
        })
    },

    getRates() {
        return $.ajax({
            url: 'http://data.fixer.io/api/latest?access_key=' + ACCESS_KEY + '&format=1',
            method: 'get',
            success: (data: IRatesResponse) => {
                if (!data.success) throw new Error('Server Error')
                return data
            }
        })
    },

    getCountries() {
        return $.ajax({
            url: 'http://country.io/currency.json',
            method: 'get',
            success: (data: ICountriesResponse) => data
        })
    }
}