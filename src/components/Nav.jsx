function Nav({ route, go }) {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => { setOpen(false); }, [route]);
  const isMobile = () => window.matchMedia("(max-width:760px)").matches;
  const onLogo = () => {
    if (isMobile()) { setOpen((v) => !v); } else { go("/"); }
  };
  return (
    <nav className={`nav ${open ? "open" : ""}`}>
      <div className="nav-top">
        <a className="logo" onClick={onLogo}>wpg<span>/</span>climate</a>
      </div>
      <div className="navlinks">
        {NAV.map(([path, label]) => (
          <a key={path} className={route === path ? "active" : ""} onClick={() => go(path)}>
            {label}
          </a>
        ))}
      </div>
      <button className="pill-btn" onClick={() => go("/data")}>Explore Data</button>
    </nav>
  );
}

function Marquee() {
  const words = ["WEATHER DYNAMICS", "WINNIPEG, MB", "SCIENCE 1206", "CLIMATE FORECASTS", "EMISSION SCENARIOS", "THE PRAIRIES", "50.45°N 96.53°W"];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {[0, 1].map((k) => (
          <div className="marquee-group" key={k}>
            {words.map((w) => (
              <span key={w + k}>{w} <em>✦</em></span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
