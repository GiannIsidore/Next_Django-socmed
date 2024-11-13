// ClientAuthProvider.tsx
'use client';


import { AuthProvider } from '@/app/context/useAuth';
import { ReactNode } from 'react';

interface ClientAuthProviderProps {
  children: ReactNode;
}

const ClientAuthProvider = ({ children }: ClientAuthProviderProps) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default ClientAuthProvider;
