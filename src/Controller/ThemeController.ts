import { ThemeType } from '../Types/ThemeType';
import * as LocalStorageConstants from '../Constants/LocalStorageConstants';

export function getSavedTheme(): ThemeType {
  const localTheme = localStorage.getItem(LocalStorageConstants.THEME_KEY);
  return localTheme === null ? LocalStorageConstants.DEFAULT_THEME : localTheme as ThemeType;
}

export function setSavedTheme(theme: ThemeType): void{
  localStorage.setItem(LocalStorageConstants.THEME_KEY, theme);
}