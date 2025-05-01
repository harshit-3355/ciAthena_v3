import { useLocation } from 'react-router-dom';

export default function useActiveRoute() {
  const { pathname } = useLocation();

  function getActivePath() {
    return pathname.split('/')[1];
  }

  function isPathActive(path: string) {
    if (!path) return false;
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path) || pathname.startsWith(`/${path}`);
  }

  return { getActivePath, isPathActive };
}
