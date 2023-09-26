import { ThemeType } from "../Types/ThemeType"
import { DEFAULT_THEME, THEME_KEY } from "../constants/LocalStorageConstants"

export function getSavedTheme(): ThemeType {
    const localTheme = localStorage.getItem(THEME_KEY);
    return localTheme === null ? DEFAULT_THEME : localTheme as ThemeType;
}

export function setSavedTheme(theme: ThemeType): void{
    localStorage.setItem(THEME_KEY, theme);
}