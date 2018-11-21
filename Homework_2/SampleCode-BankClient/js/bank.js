let bankBytecode = "0x608060405260008054600160a060020a033316600160a060020a0319909116179055610e17806100306000396000f3006080604052600436106100da5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416632c0837a681146100df5780632e1a7d4d1461010d57806341c0e1b5146101275780634fb2e45d1461013c57806356fbd78f1461015d5780637b83b50b146101845780637fe01e8814610199578063893d20e8146101b15780638dde60fa146101e2578063a0712d6814610206578063a9059cbb1461021e578063b41d068f14610242578063d0e30db01461025d578063d96a094a14610265578063fcb979781461027d575b600080fd5b3480156100eb57600080fd5b506100f4610292565b6040805192835260208301919091528051918290030190f35b34801561011957600080fd5b506101256004356102bb565b005b34801561013357600080fd5b506101256103cf565b34801561014857600080fd5b50610125600160a060020a0360043516610443565b34801561016957600080fd5b50610172610516565b60408051918252519081900360200190f35b34801561019057600080fd5b50610172610532565b3480156101a557600080fd5b5061012560043561054e565b3480156101bd57600080fd5b506101c6610654565b60408051600160a060020a039092168252519081900360200190f35b3480156101ee57600080fd5b50610125600160a060020a0360043516602435610663565b34801561021257600080fd5b50610125600435610777565b34801561022a57600080fd5b50610125600160a060020a036004351660243561084c565b34801561024e57600080fd5b5061012560043560243561093a565b610125610ade565b34801561027157600080fd5b50610125600435610b3f565b34801561028957600080fd5b50610125610ce2565b600160a060020a0333166000908152600360209081526040808320546004909252909120549091565b600160a060020a033316600090815260016020526040902054670de0b6b3a7640000820290811115610337576040805160e560020a62461bcd02815260206004820152601c60248201527f796f75722062616c616e63657320617265206e6f7420656e6f75676800000000604482015290519081900360640190fd5b604051600160a060020a0333169082156108fc029083906000818181858888f1935050505015801561036d573d6000803e3d6000fd5b50600160a060020a033316600081815260016020908152604091829020805485900390558151858152429181019190915281517f5bb95829671915ece371da722f91d5371159095dcabf2f75cd6c53facb7e1bab929181900390910190a25050565b60005433600160a060020a03908116911614610435576040805160e560020a62461bcd02815260206004820152601160248201527f796f7520617265206e6f74206f776e6572000000000000000000000000000000604482015290519081900360640190fd5b600054600160a060020a0316ff5b6000805433600160a060020a039081169116146104aa576040805160e560020a62461bcd02815260206004820152601160248201527f796f7520617265206e6f74206f776e6572000000000000000000000000000000604482015290519081900360640190fd5b5060008054600160a060020a0383811673ffffffffffffffffffffffffffffffffffffffff198316811790935560408051428152905191909216929183917f587a4fcff87b7be11c779eb502f8b2584f996387d8b8cda0e5113fef424f73169181900360200190a35050565b600160a060020a03331660009081526002602052604090205490565b600160a060020a03331660009081526001602052604090205490565b600160a060020a033316600090815260036020526040812054819081106105bf576040805160e560020a62461bcd02815260206004820152601c60248201527f796f7520646f206e6f7420686176652074696d65206465706f73697400000000604482015290519081900360640190fd5b5050600160a060020a03331660008181526003602090815260408083208054600284528285208054820160648984020490810190915582548290039092556004845282852094909455815184815281850193810193909352428383015290519293909290917fc2a61458a766eaa6217eec2e78312475c1bb04625b3d61fdd6819572f8a14ac0919081900360600190a2505050565b600054600160a060020a031690565b600160a060020a033316600090815260026020526040902054670de0b6b3a7640000820290811115610705576040805160e560020a62461bcd02815260206004820152602160248201527f796f757220636f696e2062616c616e63657320617265206e6f7420656e6f756760448201527f6800000000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b600160a060020a033381166000818152600260209081526040808320805487900390559387168083529184902080548601905583518681524291810191909152835191937f941d755df54ad0234b406209d0c923107cabf6d4f1ce335b8ae5d89d6a28c2d292918290030190a3505050565b6000805433600160a060020a039081169116146107de576040805160e560020a62461bcd02815260206004820152601160248201527f796f7520617265206e6f74206f776e6572000000000000000000000000000000604482015290519081900360640190fd5b50600160a060020a0333166000818152600260209081526040918290208054670de0b6b3a764000086029081019091558251858152429281019290925282519093927f8069ef4945469d029cc32e222031bccdc99b2eaaf4ee374cd268012f7ddee907928290030190a25050565b600160a060020a033316600090815260016020526040902054670de0b6b3a76400008202908111156108c8576040805160e560020a62461bcd02815260206004820152601c60248201527f796f75722062616c616e63657320617265206e6f7420656e6f75676800000000604482015290519081900360640190fd5b600160a060020a033381166000818152600160209081526040808320805487900390559387168083529184902080548601905583518681524291810191909152835191937fbabc8cd3bd6701ee99131f374fd2ab4ea66f48dc4e4182ed78fecb0502e44dd692918290030190a3505050565b600160a060020a0333166000908152600260205260409020548211156109d0576040805160e560020a62461bcd02815260206004820152602160248201527f796f757220636f696e2062616c616e63657320617265206e6f7420656e6f756760448201527f6800000000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b600160a060020a03331660009081526003602052604090205415610a64576040805160e560020a62461bcd02815260206004820152602360248201527f796f75206f6e6c792063616e207374617274206f6e652074696d65206465706f60448201527f7369740000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b600160a060020a0333166000818152600260209081526040808320805487900390556003825280832080548701905560048252918290208490558151858152908101849052428183015290517fcbf0ce9f04929d888bfa34783af6f81795ea6121f54fb2224233fbba7e0faf989181900360600190a25050565b600160a060020a0333166000818152600160209081526040918290208054349081019091558251908152429181019190915281517fad40ae5dc69974ba932d08b0a608e89109412d41d04850f5196f144875ae2660929181900390910190a2565b60008054600160a060020a0316815260026020526040902054670de0b6b3a7640000820290811115610be0576040805160e560020a62461bcd028152602060048201526024808201527f6f776e6572277320636f696e2062616c616e63657320617265206e6f7420656e60448201527f6f75676800000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b600160a060020a033316600090815260016020526040902054811115610c50576040805160e560020a62461bcd02815260206004820152601c60248201527f796f75722062616c616e63657320617265206e6f7420656e6f75676800000000604482015290519081900360640190fd5b600160a060020a033381166000818152600160209081526040808320805487900390558254851683528083208054870190558383526002825280832080548701905582549094168252908390208054859003905582518581524291810191909152825191927f4c5ad1aea676c1e1613de5416105424342b84655de046903409dea58418bedff92918290030190a25050565b600160a060020a03331660009081526003602052604081205481908110610d53576040805160e560020a62461bcd02815260206004820152601c60248201527f796f7520646f206e6f7420686176652074696d65206465706f73697400000000604482015290519081900360640190fd5b5050600160a060020a0333166000818152600360209081526040808320805460048085528386208054600287528588208054850160649286029290920491820190559387905590855294909455815184815281850193810193909352428383015290519293909290917fede9a31f34537ca82588b32fa134d9a2396b4c9d44dbc957feb5a34adbd6a45b919081900360600190a250505600a165627a7a72305820a6ee7e5e0033d22bec54db83f1692ae32c3a1bf541affb8b9951c4db82c621fb0029";
let bankAbi = [
    {
        "constant": true,
        "inputs": [],
        "name": "getTimeDeposit",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "etherValue",
                "type": "uint256"
            }
        ],
        "name": "withdraw",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "kill",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwner",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getCoinBalance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getBankBalance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "currentPeriod",
                "type": "uint256"
            }
        ],
        "name": "cancelTimeDeposit",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getOwner",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "to",
                "type": "address"
            },
            {
                "name": "coinValue",
                "type": "uint256"
            }
        ],
        "name": "transferCoin",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "coinValue",
                "type": "uint256"
            }
        ],
        "name": "mint",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "to",
                "type": "address"
            },
            {
                "name": "etherValue",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "coinValue",
                "type": "uint256"
            },
            {
                "name": "period",
                "type": "uint256"
            }
        ],
        "name": "startTimeDeposit",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "deposit",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "coinValue",
                "type": "uint256"
            }
        ],
        "name": "buy",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "completeTimeDeposit",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "DepositEvent",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "WithdrawEvent",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "TransferEvent",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "MintEvent",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "BuyCoinEvent",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "TransferCoinEvent",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "oldOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "newOwner",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "TransferOwnerEvent",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "period",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "StartTimeDepositEvent",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "money",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "interest",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "CompleteTimeDepositEvent",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "money",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "interest",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "CancelTimeDepositEvent",
        "type": "event"
    }
]