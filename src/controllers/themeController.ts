import { Theme } from '../types/Theme';
import * as LocalStorageConstants from '../constants/localStorageConstants';

export function getSavedTheme(): Theme {
  const localTheme = localStorage.getItem(LocalStorageConstants.THEME_KEY);
  return localTheme === null ? LocalStorageConstants.DEFAULT_THEME : localTheme as Theme;
}

export function setSavedTheme(theme: Theme): void{
  localStorage.setItem(LocalStorageConstants.THEME_KEY, theme);
}