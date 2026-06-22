import { useContext } from 'react';
import NavigationContext from './NavigationContextCore';

export default function useNavigation() {
  const context = useContext(NavigationContext);

  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }

  return context;
}
