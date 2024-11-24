const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const {withNativeWind} = require('nativewind/metro');
/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

const setup = mergeConfig(getDefaultConfig(__dirname), config);

module.exports = withNativeWind(setup, {input: './src/styles/global.css'});
