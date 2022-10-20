import { createContext, useContext } from 'react'

import { CredentialCardProps } from '../components/misc/CredentialCard'
import OnboardingPages from '../screens/OnboardingPages'
import { OCABundleResolver } from '../types/oca'

export interface ConfigurationContext {
  pages: typeof OnboardingPages
  splash: React.FC
  terms: React.FC
  homeContentView: React.FC
  OCABundle: OCABundleResolver
  useBiometry: React.FC
  CredentialCardList: React.FC<CredentialCardProps>
  CredentialCardDetailHeader: React.FC<CredentialCardProps>
}

export const ConfigurationContext = createContext<ConfigurationContext>(null as unknown as ConfigurationContext)

export const ConfigurationProvider = ConfigurationContext.Provider

export const useConfiguration = () => useContext(ConfigurationContext)
