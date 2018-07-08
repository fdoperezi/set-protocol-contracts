export const IERC20 = 
{
  "contractName": "IERC20",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
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
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
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
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_quantity",
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
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_quantity",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_quantity",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "/*\n    Copyright 2018 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.4.24;\n\n\n/**\n * @title GeneralERC20\n * @author Set Protocol\n *\n * Interface for using ERC20 Tokens. This interface is needed to interact with tokens that are not\n * fully ERC20 compliant and return something other than true on successful transfers.\n */\ninterface IERC20 {\n    function balanceOf(\n        address _owner\n    )\n        external\n        view\n        returns (uint256);\n\n    function allowance(\n        address _owner,\n        address _spender\n    )\n        external\n        view\n        returns (uint256);\n\n    function transfer(\n        address _to,\n        uint256 _quantity\n    )\n        external;\n\n    function transferFrom(\n        address _from,\n        address _to,\n        uint256 _quantity\n    )\n        external;\n\n    function approve(\n        address _spender,\n        uint256 _quantity\n    )\n        external;\n}\n",
  "sourcePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/lib/IERC20.sol",
  "ast": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/lib/IERC20.sol",
    "exportedSymbols": {
      "IERC20": [
        4417
      ]
    },
    "id": 4418,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 4377,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "597:23:47"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": "@title GeneralERC20\n@author Set Protocol\n * Interface for using ERC20 Tokens. This interface is needed to interact with tokens that are not\nfully ERC20 compliant and return something other than true on successful transfers.",
        "fullyImplemented": false,
        "id": 4417,
        "linearizedBaseContracts": [
          4417
        ],
        "name": "IERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 4384,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4380,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4379,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 4384,
                  "src": "918:14:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4378,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "918:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "908:30:47"
            },
            "payable": false,
            "returnParameters": {
              "id": 4383,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4382,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 4384,
                  "src": "986:7:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4381,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "986:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "985:9:47"
            },
            "scope": 4417,
            "src": "890:105:47",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 4393,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4389,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4386,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 4393,
                  "src": "1029:14:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4385,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1029:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4388,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 4393,
                  "src": "1053:16:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4387,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1053:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1019:56:47"
            },
            "payable": false,
            "returnParameters": {
              "id": 4392,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4391,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 4393,
                  "src": "1123:7:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4390,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1123:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1122:9:47"
            },
            "scope": 4417,
            "src": "1001:131:47",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 4400,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4398,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4395,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 4400,
                  "src": "1165:11:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4394,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1165:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4397,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 4400,
                  "src": "1186:17:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4396,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1186:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1155:54:47"
            },
            "payable": false,
            "returnParameters": {
              "id": 4399,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1226:0:47"
            },
            "scope": 4417,
            "src": "1138:89:47",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 4409,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4407,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4402,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 4409,
                  "src": "1264:13:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4401,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1264:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4404,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 4409,
                  "src": "1287:11:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4403,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1287:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4406,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 4409,
                  "src": "1308:17:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4405,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1308:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1254:77:47"
            },
            "payable": false,
            "returnParameters": {
              "id": 4408,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1348:0:47"
            },
            "scope": 4417,
            "src": "1233:116:47",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 4416,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4414,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4411,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 4416,
                  "src": "1381:16:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4410,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1381:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4413,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 4416,
                  "src": "1407:17:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4412,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1407:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1371:59:47"
            },
            "payable": false,
            "returnParameters": {
              "id": 4415,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1447:0:47"
            },
            "scope": 4417,
            "src": "1355:93:47",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 4418,
        "src": "867:583:47"
      }
    ],
    "src": "597:854:47"
  },
  "legacyAST": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/lib/IERC20.sol",
    "exportedSymbols": {
      "IERC20": [
        4417
      ]
    },
    "id": 4418,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 4377,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "597:23:47"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": "@title GeneralERC20\n@author Set Protocol\n * Interface for using ERC20 Tokens. This interface is needed to interact with tokens that are not\nfully ERC20 compliant and return something other than true on successful transfers.",
        "fullyImplemented": false,
        "id": 4417,
        "linearizedBaseContracts": [
          4417
        ],
        "name": "IERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 4384,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4380,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4379,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 4384,
                  "src": "918:14:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4378,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "918:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "908:30:47"
            },
            "payable": false,
            "returnParameters": {
              "id": 4383,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4382,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 4384,
                  "src": "986:7:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4381,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "986:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "985:9:47"
            },
            "scope": 4417,
            "src": "890:105:47",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 4393,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4389,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4386,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 4393,
                  "src": "1029:14:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4385,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1029:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4388,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 4393,
                  "src": "1053:16:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4387,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1053:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1019:56:47"
            },
            "payable": false,
            "returnParameters": {
              "id": 4392,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4391,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 4393,
                  "src": "1123:7:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4390,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1123:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1122:9:47"
            },
            "scope": 4417,
            "src": "1001:131:47",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 4400,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4398,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4395,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 4400,
                  "src": "1165:11:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4394,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1165:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4397,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 4400,
                  "src": "1186:17:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4396,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1186:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1155:54:47"
            },
            "payable": false,
            "returnParameters": {
              "id": 4399,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1226:0:47"
            },
            "scope": 4417,
            "src": "1138:89:47",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 4409,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4407,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4402,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 4409,
                  "src": "1264:13:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4401,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1264:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4404,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 4409,
                  "src": "1287:11:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4403,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1287:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4406,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 4409,
                  "src": "1308:17:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4405,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1308:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1254:77:47"
            },
            "payable": false,
            "returnParameters": {
              "id": 4408,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1348:0:47"
            },
            "scope": 4417,
            "src": "1233:116:47",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 4416,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4414,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4411,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 4416,
                  "src": "1381:16:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4410,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1381:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4413,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 4416,
                  "src": "1407:17:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4412,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1407:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1371:59:47"
            },
            "payable": false,
            "returnParameters": {
              "id": 4415,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1447:0:47"
            },
            "scope": 4417,
            "src": "1355:93:47",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 4418,
        "src": "867:583:47"
      }
    ],
    "src": "597:854:47"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-07-08T01:11:15.203Z"
}