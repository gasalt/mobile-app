module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            'stream': 'stream-browserify',
            'buffer': '@craftzdog/react-native-buffer',
          },
        },
      ],
      // Required for expo-router
      'expo-router/babel',
      'react-native-reanimated/plugin',
    ],
    overrides: [{
      test: './node_modules/ethers',
      plugins: [
        ['@babel/plugin-transform-private-methods', { "loose": true }],
        [
          "module-resolver",
          {
            alias: {
              'crypto': 'react-native-quick-crypto',
            }
          }
        ]
      ]
    }]
  };
};
