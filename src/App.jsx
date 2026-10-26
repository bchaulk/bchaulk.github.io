function App() {
  const parseRoute = () => {
    const h = window.location.hash.replace(/^#/, "");
    return NAV.some(([p]) => p === h) ? h : "/";
  };
  const [route, setRoute] = useState(parseRoute);
  useEffect(() => {
    const onHash = () => {
      setRoute(parseRoute());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  const go = (path) => { window.location.hash = path; };

  const pages = {
    "/": <Home go={go} />,
    "/data": <DataPage />,
    "/challenges": <ChallengesPage />,
    "/action": <ActionPage />,
    "/sources": <SourcesPage />,
  };

  return (
    <div className="page">
      <Nav route={route} go={go} />
      {pages[route]}
      <footer className="footer">
        <div className="footer-inner">
          <span className="logo">wpg<span>/</span>climate</span>
          <p>Science 1206 · Weather Dynamics · Winnipeg, Manitoba</p>
        </div>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
