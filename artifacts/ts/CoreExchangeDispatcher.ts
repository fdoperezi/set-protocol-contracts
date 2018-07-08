export const CoreExchangeDispatcher = 
{
  "contractName": "CoreExchangeDispatcher",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "_factory",
          "type": "address"
        }
      ],
      "name": "validFactories",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_orderHash",
          "type": "bytes32"
        }
      ],
      "name": "orderCancels",
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
      "name": "vaultAddress",
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
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "transferProxyAddress",
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
      "constant": true,
      "inputs": [],
      "name": "owner",
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
      "constant": true,
      "inputs": [
        {
          "name": "_exchangeId",
          "type": "uint8"
        }
      ],
      "name": "exchanges",
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
      "constant": true,
      "inputs": [],
      "name": "state",
      "outputs": [
        {
          "name": "transferProxyAddress",
          "type": "address"
        },
        {
          "name": "vaultAddress",
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
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_orderHash",
          "type": "bytes32"
        }
      ],
      "name": "orderFills",
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
      "inputs": [
        {
          "name": "_set",
          "type": "address"
        }
      ],
      "name": "validSets",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_exchangeId",
          "type": "uint8"
        },
        {
          "indexed": false,
          "name": "_exchange",
          "type": "address"
        }
      ],
      "name": "ExchangeRegistered",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipRenounced",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_exchangeId",
          "type": "uint8"
        },
        {
          "name": "_exchange",
          "type": "address"
        }
      ],
      "name": "registerExchange",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405260008054600160a060020a031916331790556104ee806100256000396000f3006080604052600436106100b95763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630e4355d481146100be5780631e912bd6146100f35780633e3d13b21461011d578063430bf08a14610146578063715018a6146101775780638ca4daf91461018c5780638da5cb5b146101a1578063a003e069146101b6578063c19d93fb146101d1578063f2fde38b1461020c578063f7213db61461022d578063fef3ee7314610245575b600080fd5b3480156100ca57600080fd5b506100df600160a060020a0360043516610266565b604080519115158252519081900360200190f35b3480156100ff57600080fd5b5061010b600435610284565b60408051918252519081900360200190f35b34801561012957600080fd5b5061014460ff60043516600160a060020a0360243516610296565b005b34801561015257600080fd5b5061015b610325565b60408051600160a060020a039092168252519081900360200190f35b34801561018357600080fd5b50610144610334565b34801561019857600080fd5b5061015b6103a0565b3480156101ad57600080fd5b5061015b6103af565b3480156101c257600080fd5b5061015b60ff600435166103be565b3480156101dd57600080fd5b506101e66103dc565b60408051600160a060020a03938416815291909216602082015281519081900390910190f35b34801561021857600080fd5b50610144600160a060020a03600435166103f2565b34801561023957600080fd5b5061010b600435610415565b34801561025157600080fd5b506100df600160a060020a0360043516610427565b600160a060020a031660009081526004602052604090205460ff1690565b60009081526007602052604090205490565b600054600160a060020a031633146102ad57600080fd5b60ff8216600081815260016020908152604091829020805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03861690811790915582519384529083015280517feee2c0570205f21356a5108d71a4d6e7151682b92a84c761fca82cac87275c289281900390910190a15050565b600354600160a060020a031690565b600054600160a060020a0316331461034b57600080fd5b60008054604051600160a060020a03909116917ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482091a26000805473ffffffffffffffffffffffffffffffffffffffff19169055565b600254600160a060020a031690565b600054600160a060020a031681565b60ff16600090815260016020526040902054600160a060020a031690565b600254600354600160a060020a03918216911682565b600054600160a060020a0316331461040957600080fd5b61041281610445565b50565b60009081526006602052604090205490565b600160a060020a031660009081526005602052604090205460ff1690565b600160a060020a038116151561045a57600080fd5b60008054604051600160a060020a03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a7230582075880aac9f01d8a3cbbfecde2abbb358029e6862d1beedc70729d02ff7226e8e0029",
  "deployedBytecode": "0x6080604052600436106100b95763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630e4355d481146100be5780631e912bd6146100f35780633e3d13b21461011d578063430bf08a14610146578063715018a6146101775780638ca4daf91461018c5780638da5cb5b146101a1578063a003e069146101b6578063c19d93fb146101d1578063f2fde38b1461020c578063f7213db61461022d578063fef3ee7314610245575b600080fd5b3480156100ca57600080fd5b506100df600160a060020a0360043516610266565b604080519115158252519081900360200190f35b3480156100ff57600080fd5b5061010b600435610284565b60408051918252519081900360200190f35b34801561012957600080fd5b5061014460ff60043516600160a060020a0360243516610296565b005b34801561015257600080fd5b5061015b610325565b60408051600160a060020a039092168252519081900360200190f35b34801561018357600080fd5b50610144610334565b34801561019857600080fd5b5061015b6103a0565b3480156101ad57600080fd5b5061015b6103af565b3480156101c257600080fd5b5061015b60ff600435166103be565b3480156101dd57600080fd5b506101e66103dc565b60408051600160a060020a03938416815291909216602082015281519081900390910190f35b34801561021857600080fd5b50610144600160a060020a03600435166103f2565b34801561023957600080fd5b5061010b600435610415565b34801561025157600080fd5b506100df600160a060020a0360043516610427565b600160a060020a031660009081526004602052604090205460ff1690565b60009081526007602052604090205490565b600054600160a060020a031633146102ad57600080fd5b60ff8216600081815260016020908152604091829020805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03861690811790915582519384529083015280517feee2c0570205f21356a5108d71a4d6e7151682b92a84c761fca82cac87275c289281900390910190a15050565b600354600160a060020a031690565b600054600160a060020a0316331461034b57600080fd5b60008054604051600160a060020a03909116917ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482091a26000805473ffffffffffffffffffffffffffffffffffffffff19169055565b600254600160a060020a031690565b600054600160a060020a031681565b60ff16600090815260016020526040902054600160a060020a031690565b600254600354600160a060020a03918216911682565b600054600160a060020a0316331461040957600080fd5b61041281610445565b50565b60009081526006602052604090205490565b600160a060020a031660009081526005602052604090205460ff1690565b600160a060020a038116151561045a57600080fd5b60008054604051600160a060020a03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a7230582075880aac9f01d8a3cbbfecde2abbb358029e6862d1beedc70729d02ff7226e8e0029",
  "sourceMap": "970:860:9:-;;;567:5:59;:18;;-1:-1:-1;;;;;;567:18:59;575:10;567:18;;;970:860:9;;;;;;",
  "deployedSourceMap": "970:860:9:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2083:150:22;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2083:150:22;-1:-1:-1;;;;;2083:150:22;;;;;;;;;;;;;;;;;;;;;;;2529;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2529:150:22;;;;;;;;;;;;;;;;;;;;;1456:372:9;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1456:372:9;;;;;-1:-1:-1;;;;;1456:372:9;;;;;;;1954:123:22;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1954:123:22;;;;;;;;-1:-1:-1;;;;;1954:123:22;;;;;;;;;;;;;;827:111:59;;8:9:-1;5:2;;;30:1;27;20:12;5:2;827:111:59;;;;1809:139:22;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1809:139:22;;;;238:20:59;;8:9:-1;5:2;;;30:1;27;20:12;5:2;238:20:59;;;;1656:147:22;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1656:147:22;;;;;;;1579:18;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1579:18:22;;;;;;;;-1:-1:-1;;;;;1579:18:22;;;;;;;;;;;;;;;;;;;;;;;;1100:103:59;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1100:103:59;-1:-1:-1;;;;;1100:103:59;;;;;2377:146:22;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2377:146:22;;;;;2239:132;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2239:132:22;-1:-1:-1;;;;;2239:132:22;;;;;2083:150;-1:-1:-1;;;;;2196:30:22;2169:4;2196:30;;;:20;:30;;;;;;;;;2083:150::o;2529:::-;2615:4;2642:30;;;:18;:30;;;;;;;2529:150::o;1456:372:9:-;719:5:59;;-1:-1:-1;;;;;719:5:59;705:10;:19;697:28;;;;;;1640::9;;;:15;:28;;;:5;:28;;;;;;;;;:40;;-1:-1:-1;;1640:40:9;-1:-1:-1;;;;;1640:40:9;;;;;;;;1745:76;;;;;;;;;;;;;;;;;;;;;1456:372;;:::o;1954:123:22:-;2052:18;;-1:-1:-1;;;;;2052:18:22;1954:123;:::o;827:111:59:-;719:5;;-1:-1:-1;;;;;719:5:59;705:10;:19;697:28;;;;;;903:5;;;884:25;;-1:-1:-1;;;;;903:5:59;;;;884:25;;;931:1;915:18;;-1:-1:-1;;915:18:59;;;827:111::o;1809:139:22:-;1915:26;;-1:-1:-1;;;;;1915:26:22;1809:139;:::o;238:20:59:-;;;-1:-1:-1;;;;;238:20:59;;:::o;1656:147:22:-;1768:28;;1738:7;1768:28;;;:5;:28;;;;;;-1:-1:-1;;;;;1768:28:22;;1656:147::o;1579:18::-;;;;;-1:-1:-1;;;;;1579:18:22;;;;;;:::o;1100:103:59:-;719:5;;-1:-1:-1;;;;;719:5:59;705:10;:19;697:28;;;;;;1169:29;1188:9;1169:18;:29::i;:::-;1100:103;:::o;2377:146:22:-;2461:4;2488:28;;;:16;:28;;;;;;;2377:146::o;2239:132::-;-1:-1:-1;;;;;2343:21:22;2316:4;2343:21;;;:15;:21;;;;;;;;;2239:132::o;1338:171:59:-;-1:-1:-1;;;;;1408:23:59;;;;1400:32;;;;;;1464:5;;;1443:38;;-1:-1:-1;;;;;1443:38:59;;;;1464:5;;;1443:38;;;1487:5;:17;;-1:-1:-1;;1487:17:59;-1:-1:-1;;;;;1487:17:59;;;;;;;;;;1338:171::o",
  "source": "/*\n    Copyright 2018 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.4.24;\n\nimport { Ownable } from \"zeppelin-solidity/contracts/ownership/Ownable.sol\";\nimport { CoreState } from \"../lib/CoreState.sol\";\n\n\n/**\n * @title Core Exchange Dispatcher\n * @author Set Protocol\n *\n * The CoreExchangeDispatcher factilitates updating permissible exchanges\n * that are used in filling issuance orders. See CoreState.State.exchanges\n */\ncontract CoreExchangeDispatcher is\n    Ownable,\n    CoreState\n{\n\n    /* ============ Events ============ */\n\n    // Logs registration of new exchange\n    event ExchangeRegistered(\n        uint8 _exchangeId,\n        address _exchange\n    );\n\n    /* ============ Setter Functions ============ */\n\n    /**\n     * Register exchange address into mapping of exchanges \n     *\n     * @param _exchangeId   Enumeration of exchange\n     * @param _exchange     Exchange address to set\n     */\n    function registerExchange(\n        uint8 _exchangeId,\n        address _exchange\n    )\n        external\n        onlyOwner\n    {\n        // Add asset proxy and log registration.\n        state.exchanges[_exchangeId] = _exchange;\n\n        // Add asset proxy and log registration.\n        emit ExchangeRegistered(\n            _exchangeId,\n            _exchange\n        );\n    }\n}\n",
  "sourcePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/core/extensions/CoreExchangeDispatcher.sol",
  "ast": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/core/extensions/CoreExchangeDispatcher.sol",
    "exportedSymbols": {
      "CoreExchangeDispatcher": [
        1532
      ]
    },
    "id": 1533,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1494,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "597:23:9"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "zeppelin-solidity/contracts/ownership/Ownable.sol",
        "id": 1496,
        "nodeType": "ImportDirective",
        "scope": 1533,
        "sourceUnit": 5890,
        "src": "622:76:9",
        "symbolAliases": [
          {
            "foreign": 1495,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/core/lib/CoreState.sol",
        "file": "../lib/CoreState.sol",
        "id": 1498,
        "nodeType": "ImportDirective",
        "scope": 1533,
        "sourceUnit": 3089,
        "src": "699:49:9",
        "symbolAliases": [
          {
            "foreign": 1497,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1499,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5889,
              "src": "1009:7:9",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$5889",
                "typeString": "contract Ownable"
              }
            },
            "id": 1500,
            "nodeType": "InheritanceSpecifier",
            "src": "1009:7:9"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1501,
              "name": "CoreState",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3088,
              "src": "1022:9:9",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_CoreState_$3088",
                "typeString": "contract CoreState"
              }
            },
            "id": 1502,
            "nodeType": "InheritanceSpecifier",
            "src": "1022:9:9"
          }
        ],
        "contractDependencies": [
          3088,
          5889
        ],
        "contractKind": "contract",
        "documentation": "@title Core Exchange Dispatcher\n@author Set Protocol\n * The CoreExchangeDispatcher factilitates updating permissible exchanges\nthat are used in filling issuance orders. See CoreState.State.exchanges",
        "fullyImplemented": true,
        "id": 1532,
        "linearizedBaseContracts": [
          1532,
          3088,
          5889
        ],
        "name": "CoreExchangeDispatcher",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": null,
            "id": 1508,
            "name": "ExchangeRegistered",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1507,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1504,
                  "indexed": false,
                  "name": "_exchangeId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1508,
                  "src": "1158:17:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 1503,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "1158:5:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1506,
                  "indexed": false,
                  "name": "_exchange",
                  "nodeType": "VariableDeclaration",
                  "scope": 1508,
                  "src": "1185:17:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1505,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1185:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1148:60:9"
            },
            "src": "1124:85:9"
          },
          {
            "body": {
              "id": 1530,
              "nodeType": "Block",
              "src": "1581:247:9",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1523,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1517,
                          "name": "state",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3004,
                          "src": "1640:5:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_State_$3002_storage",
                            "typeString": "struct CoreState.State storage ref"
                          }
                        },
                        "id": 1520,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "exchanges",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 2981,
                        "src": "1640:15:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint8_$_t_address_$",
                          "typeString": "mapping(uint8 => address)"
                        }
                      },
                      "id": 1521,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 1519,
                        "name": "_exchangeId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1510,
                        "src": "1656:11:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1640:28:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1522,
                      "name": "_exchange",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1512,
                      "src": "1671:9:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1640:40:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1524,
                  "nodeType": "ExpressionStatement",
                  "src": "1640:40:9"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1526,
                        "name": "_exchangeId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1510,
                        "src": "1777:11:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1527,
                        "name": "_exchange",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1512,
                        "src": "1802:9:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 1525,
                      "name": "ExchangeRegistered",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1508,
                      "src": "1745:18:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint8_$_t_address_$returns$__$",
                        "typeString": "function (uint8,address)"
                      }
                    },
                    "id": 1528,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1745:76:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1529,
                  "nodeType": "EmitStatement",
                  "src": "1740:81:9"
                }
              ]
            },
            "documentation": "Register exchange address into mapping of exchanges \n     * @param _exchangeId   Enumeration of exchange\n@param _exchange     Exchange address to set",
            "id": 1531,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 1515,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1514,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 5837,
                  "src": "1567:9:9",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1567:9:9"
              }
            ],
            "name": "registerExchange",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1513,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1510,
                  "name": "_exchangeId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1531,
                  "src": "1491:17:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 1509,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "1491:5:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1512,
                  "name": "_exchange",
                  "nodeType": "VariableDeclaration",
                  "scope": 1531,
                  "src": "1518:17:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1511,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1518:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1481:60:9"
            },
            "payable": false,
            "returnParameters": {
              "id": 1516,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1581:0:9"
            },
            "scope": 1532,
            "src": "1456:372:9",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 1533,
        "src": "970:860:9"
      }
    ],
    "src": "597:1234:9"
  },
  "legacyAST": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/core/extensions/CoreExchangeDispatcher.sol",
    "exportedSymbols": {
      "CoreExchangeDispatcher": [
        1532
      ]
    },
    "id": 1533,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1494,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "597:23:9"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "zeppelin-solidity/contracts/ownership/Ownable.sol",
        "id": 1496,
        "nodeType": "ImportDirective",
        "scope": 1533,
        "sourceUnit": 5890,
        "src": "622:76:9",
        "symbolAliases": [
          {
            "foreign": 1495,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/core/lib/CoreState.sol",
        "file": "../lib/CoreState.sol",
        "id": 1498,
        "nodeType": "ImportDirective",
        "scope": 1533,
        "sourceUnit": 3089,
        "src": "699:49:9",
        "symbolAliases": [
          {
            "foreign": 1497,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1499,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5889,
              "src": "1009:7:9",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$5889",
                "typeString": "contract Ownable"
              }
            },
            "id": 1500,
            "nodeType": "InheritanceSpecifier",
            "src": "1009:7:9"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1501,
              "name": "CoreState",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3088,
              "src": "1022:9:9",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_CoreState_$3088",
                "typeString": "contract CoreState"
              }
            },
            "id": 1502,
            "nodeType": "InheritanceSpecifier",
            "src": "1022:9:9"
          }
        ],
        "contractDependencies": [
          3088,
          5889
        ],
        "contractKind": "contract",
        "documentation": "@title Core Exchange Dispatcher\n@author Set Protocol\n * The CoreExchangeDispatcher factilitates updating permissible exchanges\nthat are used in filling issuance orders. See CoreState.State.exchanges",
        "fullyImplemented": true,
        "id": 1532,
        "linearizedBaseContracts": [
          1532,
          3088,
          5889
        ],
        "name": "CoreExchangeDispatcher",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": null,
            "id": 1508,
            "name": "ExchangeRegistered",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1507,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1504,
                  "indexed": false,
                  "name": "_exchangeId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1508,
                  "src": "1158:17:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 1503,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "1158:5:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1506,
                  "indexed": false,
                  "name": "_exchange",
                  "nodeType": "VariableDeclaration",
                  "scope": 1508,
                  "src": "1185:17:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1505,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1185:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1148:60:9"
            },
            "src": "1124:85:9"
          },
          {
            "body": {
              "id": 1530,
              "nodeType": "Block",
              "src": "1581:247:9",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1523,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1517,
                          "name": "state",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3004,
                          "src": "1640:5:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_State_$3002_storage",
                            "typeString": "struct CoreState.State storage ref"
                          }
                        },
                        "id": 1520,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "exchanges",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 2981,
                        "src": "1640:15:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint8_$_t_address_$",
                          "typeString": "mapping(uint8 => address)"
                        }
                      },
                      "id": 1521,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 1519,
                        "name": "_exchangeId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1510,
                        "src": "1656:11:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1640:28:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1522,
                      "name": "_exchange",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1512,
                      "src": "1671:9:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1640:40:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1524,
                  "nodeType": "ExpressionStatement",
                  "src": "1640:40:9"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1526,
                        "name": "_exchangeId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1510,
                        "src": "1777:11:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1527,
                        "name": "_exchange",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1512,
                        "src": "1802:9:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 1525,
                      "name": "ExchangeRegistered",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1508,
                      "src": "1745:18:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint8_$_t_address_$returns$__$",
                        "typeString": "function (uint8,address)"
                      }
                    },
                    "id": 1528,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1745:76:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1529,
                  "nodeType": "EmitStatement",
                  "src": "1740:81:9"
                }
              ]
            },
            "documentation": "Register exchange address into mapping of exchanges \n     * @param _exchangeId   Enumeration of exchange\n@param _exchange     Exchange address to set",
            "id": 1531,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 1515,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1514,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 5837,
                  "src": "1567:9:9",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1567:9:9"
              }
            ],
            "name": "registerExchange",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1513,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1510,
                  "name": "_exchangeId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1531,
                  "src": "1491:17:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 1509,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "1491:5:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1512,
                  "name": "_exchange",
                  "nodeType": "VariableDeclaration",
                  "scope": 1531,
                  "src": "1518:17:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1511,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1518:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1481:60:9"
            },
            "payable": false,
            "returnParameters": {
              "id": 1516,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1581:0:9"
            },
            "scope": 1532,
            "src": "1456:372:9",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 1533,
        "src": "970:860:9"
      }
    ],
    "src": "597:1234:9"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-07-08T01:11:15.191Z"
}