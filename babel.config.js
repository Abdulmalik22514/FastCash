module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@/assets': './src/assets',
          '@/contexts': './src/contexts',
          '@/screens': './src/screens',
          '@/styles': './src/styles',
          '@/routes': './src/routes',
          '@/services': './src/services',
          '@/hooks': './src/hooks',
          '@/shared': './src/shared',
          '@/components': './src/components',
          '@/types': './src/types',
          '@/utils': './src/utils',
          '@/navigation': './src/navigation',
          '@/constants': './src/constants',
          '@/store': './src/store',
          '@/context': './src/context',
        },
      },
    ],
  ],
};
