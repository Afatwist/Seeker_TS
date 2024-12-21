/* Функции помощники */

/** Перенаправляет на страницы игры или конструктора */
export function goToPage(): string {
    const page = localStorage.getItem('page');

    if (page === 'constructor') return '../pages/constructor/board.html';
    if (page === 'game') return '../pages/game.html';
    return baseUrl;
}


export const baseUrl = '/seeker/';

/** Очистка  localStorage*/
export function localStorageClear(): void {
    localStorage.removeItem('gameData');
    localStorage.removeItem('fromConstructor');
}