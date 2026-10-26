function Nav({ route, go }) {
  return (
    <nav className="nav">
      <a className="logo" onClick={() => go("/")}>wpg<span>/</span>climate</a>
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
