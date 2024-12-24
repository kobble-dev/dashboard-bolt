import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';
import { Layout } from './components/layout/Layout';
import { ErrorBoundary } from './components/error/ErrorBoundary';
import { useThemeStore } from './store/themeStore';
import { theme } from './theme/mantineTheme';
import '@mantine/core/styles.css';

export default function App() {
  const { colorScheme } = useThemeStore();

  return (
    <MantineProvider theme={theme} defaultColorScheme={colorScheme}>
      <ErrorBoundary>
        <BrowserRouter>
          <Layout>
            <AppRoutes />
          </Layout>
        </BrowserRouter>
      </ErrorBoundary>
    </MantineProvider>
  );
}