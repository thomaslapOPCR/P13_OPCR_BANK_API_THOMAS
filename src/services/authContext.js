
export const saveToLocalStorage = (key, value, cond) => {
    try {
        return cond ? localStorage.setItem(key, value) : sessionStorage.setItem(key, value);
    } catch (error) {
        console.error('Erreur lors de la sauvegarde dans le stockage local:', error);
    }
};

export const getToLocalStorage = (key, cond) => {
    try {
        return cond ? localStorage.getItem(key) : sessionStorage.getItem(key);
    } catch (error) {
        console.error('Erreur lors de la récupération dans le stockage local:', error);
    }
};

export const clearLocalStorage = (cond) => {

    try {
        return cond ? localStorage.clear() : sessionStorage.clear();
    } catch (error) {
        console.error('Erreur lors de la suppression dans le stockage local:', error);
    }
};