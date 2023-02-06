import { useEffect } from 'react';

export default function useUpdatePageTitle(title) {
  const prevTitle = document.title;

  useEffect(() => {
    document.title = title;
    return () => (document.title = prevTitle); // Reset title on unmount
  }, [title, prevTitle]);
}
