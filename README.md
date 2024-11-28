# Spotify with React Native

Clone de Spotify con React Native usando la Web API

## Requisitos

- Android Studio
- Node +20

## Configurar app

### Variables de entorno

```bash
# .env
API_URL=<URL de la api de Spotify>
API_TOKEN=<El ClientID de tu app en spotify developer>
```

### Iniciar metro

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Iniciar plataforma

Cuando el servidor de metro esté inicializado puedes abrir otra terminal y seleccionar que plataforma se ejecutará

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

De igual manera en la misma terminal del metro puedes seleccionar la plataforma

## Features

Este proyecto utiliza los siguientes features en react native

- [x] React Navigation
- [x] Universal links
- [x] Almacenamiento de token de autenticación
- [x] Reproducir audio (si la API de Spotify regresa el `preview_url`)
- [ ] Tema oscuro y claro según la configuración del sistema
- [ ] Buscar canciones
- [ ] Actualizar playlist
- [ ] Guardar artistas, playlist, álbumes, etc
- [ ] Refrescar token de sesión
- [ ] Modo offline para consultar playlist y álbumes guardados en el dispositivo
- [ ] Alternar entré claro / oscuro independientemente del sistema
