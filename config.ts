const gourmetechSite = (import.meta.env.VITE_GOURMETECH_SITE_URL || 'https://www.gourmetech.com.br').replace(/\/$/, '');
const gourmetechSystem = (import.meta.env.VITE_GOURMETECH_SYSTEM_URL || 'https://gourmetech.appcomprarapida.com.br').replace(/\/$/, '');
const expectedStore = 'https://play.google.com/store/apps/details?id=com.kineticsolutions.comprarapida';

export const gourmetechHomeUrl = gourmetechSite;
export const gourmetechContactUrl = `${gourmetechSite}/contact?source=compra-rapida`;
export const gourmetechLoginUrl = `${gourmetechSystem}/login`;
export const playStoreUrl = import.meta.env.VITE_CUSTOMER_PLAY_STORE_URL === expectedStore ? expectedStore : '';
