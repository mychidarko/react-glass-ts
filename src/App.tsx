import { GlassRouter } from 'glass-router';
import { ErrorBoundary } from './utils';

import "./store";
import "./routes";

function App() {
  return (
    <ErrorBoundary>
      <Routes />
    </ErrorBoundary>
  );
}

const Routes = () => GlassRouter.render();

export default App;
