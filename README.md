# @vaultum/abi

[![npm version](https://badge.fury.io/js/%40vaultum%2Fabi.svg)](https://www.npmjs.com/package/@vaultum/abi)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **Canonical ABI definitions and network addresses for Vaultum V2 smart contracts**

This data-only package provides the official Application Binary Interface (ABI) definitions and network deployment addresses for Vaultum's V2 smart contract system.

## 🎯 Purpose

- **📋 Canonical ABIs**: Official contract interfaces for all Vaultum V2 contracts
- **🌐 Network Addresses**: Verified deployment addresses across supported networks
- **🔒 Version Locked**: Each version corresponds to a specific contracts release
- **📦 Zero Dependencies**: Pure data package with minimal footprint

## 📦 Installation

```bash
npm install @vaultum/abi
# or
yarn add @vaultum/abi
# or  
pnpm add @vaultum/abi
```

## 🚀 Usage

### Import ABIs

```typescript
import { ABIS, ContractName } from '@vaultum/abi';

// Get specific contract ABI
const smartAccountABI = ABIS.SmartAccount;
const sessionKeyValidatorABI = ABIS.SessionKeyValidator;

// Available contracts
type ContractName = 
  | 'SmartAccount'
  | 'SessionKeyValidator' 
  | 'SpendingLimitModule'
  | 'SocialRecoveryModule';
```

### Import Addresses

```typescript
import { ADDRESSES, getAddress } from '@vaultum/abi';

// Get all addresses for a network
const sepoliaAddresses = ADDRESSES.sepolia;

// Get specific contract address
const smartAccountAddress = getAddress('SmartAccount', 11155111); // Sepolia
const sessionValidatorAddress = getAddress('SessionKeyValidator', 'sepolia');

// Supported networks
const networks = {
  sepolia: 11155111,
  // More networks will be added as they're deployed
};
```

### Complete Example

```typescript
import { ethers } from 'ethers';
import { ABIS, getAddress } from '@vaultum/abi';

// Create contract instance
const provider = new ethers.JsonRpcProvider('YOUR_RPC_URL');
const smartAccountAddress = getAddress('SmartAccount', 'sepolia');
const smartAccount = new ethers.Contract(
  smartAccountAddress,
  ABIS.SmartAccount,
  provider
);

// Interact with contract
const owner = await smartAccount.owner();
console.log('SmartAccount owner:', owner);
```

## 📊 V2 Contracts

This package includes ABIs and addresses for:

### **🏠 Core Contracts**
- **`SmartAccount`**: Main account abstraction contract with V2 session key caps
- **`SessionKeyValidator`**: Session key validation with spending limits and allowlists

### **🔧 Modules**  
- **`SpendingLimitModule`**: Token and ETH spending limits with owner bypass
- **`SocialRecoveryModule`**: Social recovery with configurable guardians and timelocks

## 🌐 Supported Networks

| Network | Chain ID | Status |
|---------|----------|--------|
| **Sepolia** | `11155111` | ✅ Live |
| **Mainnet** | `1` | 🚧 Coming Soon |

## 🔄 Versioning

This package follows semantic versioning aligned with contract deployments:

- **`0.2.x`**: V2 contracts with session key caps
- **`0.1.x`**: V1 contracts (deprecated)

Each version is tagged and corresponds to a specific contracts repository release.

## 📋 Package Contents

```
src/
├── abis/                    # Contract ABI JSON files
│   ├── SmartAccount.json
│   ├── SessionKeyValidator.json
│   ├── SpendingLimitModule.json
│   └── SocialRecoveryModule.json
├── addresses/               # Network deployment addresses  
│   └── sepolia.json
└── index.ts                 # Main exports
```

## 🔍 Verification

All addresses in this package are verified on:
- **Etherscan** (Mainnet/Sepolia)
- **Sourcify** (Decentralized verification)

Runtime bytecode verification ensures deployed contracts match the source code.

## 🔗 Related Packages

- **[@vaultum/sdk](https://www.npmjs.com/package/@vaultum/sdk)**: TypeScript SDK for Vaultum API
- **[vaultum/sdk](https://packagist.org/packages/vaultum/sdk)**: PHP SDK for Vaultum API

## 🏗️ Development

This is a **data-only package** sourced from:
- **ABIs**: Generated from `github.com/vaultum/contracts` builds
- **Addresses**: Recorded from verified deployments
- **Types**: Generated automatically from ABI definitions

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

## 🛡️ Security

**Verification Required**: Always verify contract addresses independently before interacting with them in production. This package provides convenience but does not replace proper security practices.

**Report Issues**: Security concerns should be reported via our [Security Policy](https://github.com/vaultum/abi/security).

---

*This package is part of the Vaultum V2 smart contract ecosystem. For full documentation, visit [github.com/vaultum/contracts](https://github.com/vaultum/contracts).*
