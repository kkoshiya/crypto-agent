"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sampleAbi = void 0;
exports.sampleAbi = [
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    },
                    {
                        "internalType": "int32",
                        "name": "securityZone",
                        "type": "int32"
                    }
                ],
                "internalType": "struct inEuint8",
                "name": "_encryptedNumber",
                "type": "tuple"
            }
        ],
        "name": "addCipherText",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "addToyPlain",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "InvalidShortString",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "SignerNotMessageSender",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "SignerNotOwner",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "str",
                "type": "string"
            }
        ],
        "name": "StringTooLong",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "EIP712DomainChanged",
        "type": "event"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    },
                    {
                        "internalType": "int32",
                        "name": "securityZone",
                        "type": "int32"
                    }
                ],
                "internalType": "struct inEuint8",
                "name": "_encryptedNumber",
                "type": "tuple"
            }
        ],
        "name": "setCipherText",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    },
                    {
                        "internalType": "int32",
                        "name": "securityZone",
                        "type": "int32"
                    }
                ],
                "internalType": "struct inEuint8",
                "name": "_encryptedNumber",
                "type": "tuple"
            }
        ],
        "name": "setHighestNumber",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "_cipherText",
        "outputs": [
            {
                "internalType": "euint8",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "_largestNumber",
        "outputs": [
            {
                "internalType": "euint8",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "eip712Domain",
        "outputs": [
            {
                "internalType": "bytes1",
                "name": "fields",
                "type": "bytes1"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "version",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "chainId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "verifyingContract",
                "type": "address"
            },
            {
                "internalType": "bytes32",
                "name": "salt",
                "type": "bytes32"
            },
            {
                "internalType": "uint256[]",
                "name": "extensions",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "bytes32",
                        "name": "publicKey",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "bytes",
                        "name": "signature",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct Permission",
                "name": "signature",
                "type": "tuple"
            }
        ],
        "name": "getSealedOutput",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "plainToy",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];
