import { ErrorBoundary } from './utils';
import { GlassRouter } from './utils/glass/router';

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
