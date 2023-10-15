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
    overrides: [
      {
        include: './node_modules/ethers',
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
      },
      {
        include: './node_modules/@opengsn/provider/node_modules/ethers-v6',
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
      },
      {
        include: './node_modules/@opengsn/provider/dist/RelayProvider.js',
        plugins: [
          "@babel/plugin-transform-modules-commonjs",
          "@babel/plugin-proposal-dynamic-import",
          [
            "module-resolver",
            {
              alias: {
                'ethers-v6/providers': './node_modules/@opengsn/provider/node_modules/ethers-v6',
              }
            }
          ]
        ]
      },
    ]
  };
};
