module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@features': './src/features',
          '@router': './src/router',
          '@components': './src/common/components',
          '@utils': './src/common/utils',
          '@config': './src/common/config',
          '@constants': './src/common/constants',
        },
      },
    ],
  ],
};
