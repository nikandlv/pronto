import * as types from '../Actions/types'
import LocalizedStrings from 'react-localization';
import EnglishLocale from '../../Locale/EN_US.json'
import TestLocale from '../../Locale/TEST_TEST.json'

const hours = new Date().getHours()
const isDayTime = hours > 6 && hours < 20

const initialState = {
    name: 'Pronto',
    theme: isDayTime ? 'light' : 'dark',
    language: 'en_us',
    locale: new LocalizedStrings({
        en_us: EnglishLocale,
        test_test: TestLocale,
    }),
    search: "",
    tag: "",
    category: {
        title: "",
        id: 0
    },
}

export default function ApplicationReducer(state = initialState,action) {
    switch(action.type) {
        case types.APPLICATION.TOGGLE_THEME: 
            return {
                ...state,
                theme: state.theme === 'light' ? 'dark' : 'light'
            }
        case types.APPLICATION.SET_LANGUAGE:
            state.locale.setLanguage(action.payload);
            return {
                ...state,
                language: action.payload
            }
        case types.APPLICATION.SET_SEARCH:
            return {
                ...state,
                search: action.payload
            }
        case types.APPLICATION.SET_TAG:
            return {
                ...state,
                tag: action.payload
            }            
        case types.APPLICATION.SET_CATEGORY:
            return {
                ...state,
                search: action.payload
            }            
    }
    return state;
}