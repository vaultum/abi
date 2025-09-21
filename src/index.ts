import SmartAccount from './abis/SmartAccount.json';
import SocialRecoveryModule from './abis/SocialRecoveryModule.json';
import SessionKeyValidator from './abis/SessionKeyValidator.json';
import SpendingLimitModule from './abis/SpendingLimitModule.json';

import sepolia from './addresses/sepolia.json';

export const ABIS = {
  SmartAccount,
  SocialRecoveryModule,
  SessionKeyValidator,
  SpendingLimitModule,
} as const;

export const ADDRESSES = {
  sepolia: sepolia.contracts,
  11155111: sepolia.contracts,
} as const;

export type ContractName = keyof typeof ABIS;

export function getAddress(name: ContractName, chainIdOrName: number | string): string {
  const key = typeof chainIdOrName === 'number' ? chainIdOrName : chainIdOrName;
  const map = (ADDRESSES as any)[key];
  if (!map || !map[name]) throw new Error(`No address for ${name} on chain ${chainIdOrName}`);
  return map[name];
}
