import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';

import Layout from '#/components/layouts/app';
import { AppProvider } from '#/providers/app';
import { ThemeProvider } from '#/providers/theme';
import AppRoutes from '#/routes';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <BrowserRouter>
          <AppProvider>
            <Layout>
              <AppRoutes />
            </Layout>
          </AppProvider>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
export default App;
