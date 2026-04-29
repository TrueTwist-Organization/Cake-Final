import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        admin: resolve(__dirname, 'admin.html'),
        cart: resolve(__dirname, 'cart.html'),
        checkout: resolve(__dirname, 'checkout.html'),
        collection: resolve(__dirname, 'collection.html'),
        combos: resolve(__dirname, 'combos.html'),
        contact: resolve(__dirname, 'contact.html'),
        disclaimer: resolve(__dirname, 'disclaimer.html'),
        photoCake: resolve(__dirname, 'photo-cake.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        product: resolve(__dirname, 'product.html'),
        shop: resolve(__dirname, 'shop.html'),
        terms: resolve(__dirname, 'terms.html'),
      }
    }
  }
});
