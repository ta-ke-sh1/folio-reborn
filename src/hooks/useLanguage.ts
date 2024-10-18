import {Language, message_en, message_vi, system_language_en} from "../language/languages.tsx";
import {create} from "zustand/react";

type LanguageState = {
    language: any,
    languageData: any,
}

type LanguageActions = {
    setLanguage: (language: any) => void;
    setLanguageSource: (dataSource: any) => void;
}

export const useLanguageState = create<LanguageState & LanguageActions>((set) => ({
    languageData: system_language_en,
    language: Language.EN,
    setLanguage: (language: any ) => set((_) => ({language: language})),
    setLanguageSource: (dataSource: any) => set((_) => ({languageData: dataSource})),
}))

export const getMessage = (language: any, code: string) => {
    let messageSource: any
    if (language === undefined) {
        language = Language.EN
    }
    switch (language) {
        case Language.VI:
            messageSource = message_vi;
            break;
        case Language.EN:
            messageSource = message_en
            break;
        default:
            console.log("Unsupported language! " + language)
            return "n/a";
    }
    return messageSource[code];
}