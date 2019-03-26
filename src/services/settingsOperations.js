import localStorage from 'local-storage';
const settingsKey = 'settings';

export function setLocalSettings(settings){
    localStorage.set(settingsKey, settings);
}

export function getLocalSettings(){
    return localStorage.get(settingsKey);

}

export function clearLocalSettings(){
    localStorage.remove(settingsKey);
}