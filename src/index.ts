import SmartAccount from './abis/SmartAccount.json';
import SocialRecoveryModule from './abis/SocialRecoveryModule.json';
import SessionKeyValidator from './abis/SessionKeyValidator.json';
import SessionKeyModule from './abis/SessionKeyModule.json';
import SpendingLimitModule from './abis/SpendingLimitModule.json';

import sepolia from './addresses/sepolia.json';

export const ABIS = {
  SmartAccount,
  SocialRecoveryModule,
  SessionKeyValidator,
  SessionKeyModule,
  SpendingLimitModule,
} as const;

export const ADDRESSES = {
  11155111: sepolia.contracts,
  // 1: mainnet.contracts,
} as const;

export type ContractName = keyof typeof ABIS;

export function getAddress(name: ContractName, chainId: number): string {
  const map = (ADDRESSES as any)[chainId];
  if (!map || !map[name]) throw new Error(`No address for ${name} on chain ${chainId}`);
  return map[name];
}
