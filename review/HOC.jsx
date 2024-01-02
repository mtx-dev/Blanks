import React, {useCallback, useEffect, useState} from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const handleChildrenMount = useCallback(() => setCount((count) => count + 1), []);
  if (count > 10) return null;
  return <ChildrenWithHoc count={count} onMount={handleChildrenMount} />;
}

// -----------

function Children({ count, onMount }) {
  useEffect(() => {
    onMount();
  }, []);

  return <div>{count}</div>;
}

function withInternalTestHoc(Component) {
  return function ComponentWithInternalTestHoc(props) {
    return <Component {...props} />;
  };
}

function withTestHoc(Component) {
  return function ComponentWithTestHoc(props) {
    const DecoratedComponent = withInternalTestHoc(Component);
    return <DecoratedComponent {...props} />;
  };
}

export const ChildrenWithHoc = withTestHoc(Children)