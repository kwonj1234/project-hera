import { ActivityIndicator, PaperProvider } from 'react-native-paper';

import { AuthProvider, useAuth } from '@/src/providers';
import Router from '@/src/router'

export default function App() {
  const { session, loading } = useAuth()
  
  if (loading) {
    return <ActivityIndicator />
  }

  return (
    <PaperProvider>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </PaperProvider>
  );
}