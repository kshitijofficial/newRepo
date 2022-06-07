const path = require("path");

module.exports = {
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
    },
  },
  mocha: {
    useColors: false,
    reporter: "mochawesome",
    reporterOptions: {
      reportFilename: process.env.UNIT_TEST_OUTPUT_FILE + ".json",
      json: true,
      html: false,
    },
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "native",
      settings: {
        optimizer: {
          enabled: false,
        },
      },
    },
  },
};
