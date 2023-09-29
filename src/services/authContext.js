export const saveToLocalStorage = (key, value) => {
    try {
       return localStorage.setItem(key, value);
    } catch (error) {
        console.error('Erreur lors de la sauvegarde dans le stockage local :', error);
    }
};

export const getToLocalStorage = (key) => {
    try {
        return localStorage.getItem(key);
    } catch (error) {
        console.error('Erreur lors de la recuperation dans le stockage local :', error);
    }
};

export const clearLocalStorage = () => {
    try {
        return localStorage.clear();
    } catch (error) {
        console.error('Erreur lors de la suppression dans le stockage local :', error);
    }
};



