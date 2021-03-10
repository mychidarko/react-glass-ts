import React from "react";
import { EBState } from "./types";

export default class ErrorBoundary extends React.Component<any, EBState> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
    // Report to crashes API with user information.
  }

  render = () =>
    !this.state.hasError ? (
      this.props.children
    ) : (
      <div className="error_boundary">
        <h2>Oops, something went wrong!</h2>
        <p>
          Please reload this page or contact support if this problem persists.
          Sorry for the inconvenience.
        </p>
      </div>
    );
}
