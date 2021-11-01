require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remind equip hockey kiwi olympic ghost'; 
let testAccounts = [
"0xdf92ece2088d8466090695521dbbaa84d89956749c7045d281b106ac97762e5a",
"0x62aaa59325d3a46b74cf8bb3441ff72412101e3317667ef01efee067173b8355",
"0x60e195948ac9f8f46ce62102527e17f39aab32d26457b443372464dfc75d8940",
"0x6f6de66b95c1e82492b3791b9c094fd3a41c69cb63414d82dafe7901b74a1417",
"0xf79a1636fb436db67088c26c07d30dff88a511c691af379d1b1c4cf31c4c65bf",
"0x3632a3419c3d36e449606fc36c0e788ecf8243518704834fc921b6b7c6cc23e4",
"0xc756777f5f49e538625b4c79237dfba3859c9ab92645c8b97b41e77fa4495ad6",
"0x31ac7556b3287496d4beda01f3ecc592496d4471f9e7e5f58060fc6f5dbb6fb8",
"0xc798dd7123fce4c4674f7efdaa6be96ab648cdfacc3539f737b11ce17e3dc0bd",
"0x5b76eed91080038d78579b0fbfe6017b704fb0db62595aaa933fcce36ccdc56b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

