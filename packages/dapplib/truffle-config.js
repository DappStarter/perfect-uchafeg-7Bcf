require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth stereo home gesture creek flush gather'; 
let testAccounts = [
"0xdb923d280750cd346169d0a5b8abe20592728dba3897f629e6c466a730409839",
"0xf57387426d62ebe08871b330e83d3ce15d4f038ae756f95d28d007f2093e501e",
"0x969ff50d1cc945fdc38dddf570512ffe904d1165485733abcb7871a64e16423b",
"0x1bf35a842d9f3f9f9a115a0c69b5cf260fde0f9600718e7d771272041a65dafe",
"0xe18c22dd437d2a7c6bf0b4c9a8c527c78df3c9109b47c36ab07d33f2a725d0b4",
"0x0342a69c297ac1565403a68a68559e967349013746c6dc2365c241a388bba2bf",
"0x1da6e807cac00324147a95fc68940b868f698f4891d30844487a1d94243c47cb",
"0xe7e8823136006625e1d5b16971ec529ec07dbc7fc570e58d06c43f2fe1d5445b",
"0x7660632b1cb19997cd2737d6ecb6c405775e0e6fa2da538bc483309d112cf6ac",
"0x17f40d81afdb050b1a7968310d5d957c6ba71fe9382ed967e4bbc75149a41817"
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

