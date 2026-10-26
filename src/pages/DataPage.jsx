function DataPage() {
  const [item, setItem] = useState("hotDays");
  const [mode, setMode] = useState("both");
  const items = Object.entries(DATA);

  return (
    <div className="view" key="data">
      <section className="section page-head">
        <Reveal><span className="kicker">02 — Forecasts</span></Reveal>
        <Reveal delay={120}><h2 className="big-title">Analyzing <span className="grad">Climate Forecasts</span></h2></Reveal>
        <Reveal delay={240}>
          <p className="lead">
            Data from the <a href="https://climateatlas.ca" target="_blank" rel="noreferrer">Climate Atlas of Canada</a> for Winnipeg
            (city ID 465), comparing the recent past (1976–2005) with projections for 2021–2050 and 2051–2080 under
            low (RCP4.5) and high (RCP8.5) emission scenarios. Low and high bars show the model ensemble mean;
            the table gives the 10th–90th percentile range across 24 climate models.
          </p>
        </Reveal>
      </section>

      <section className="section">
        <Reveal>
          <div className="controls">
            <select value={item} onChange={(e) => setItem(e.target.value)}>
              {items.map(([k, v]) => (
                <option key={k} value={k}>{v.label}</option>
              ))}
            </select>
            <div className="mode-toggle">
              <button className={mode === "low" ? "on" : ""} onClick={() => setMode("low")}>Low</button>
              <button className={mode === "both" ? "on" : ""} onClick={() => setMode("both")}>Both</button>
              <button className={mode === "high" ? "on" : ""} onClick={() => setMode("high")}>High</button>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="chart-box">
            <ClimateChart item={item} mode={mode} />
          </div>
        </Reveal>
      </section>

      <section className="section">
        <Reveal><h3 className="sub-title">The Data Table</h3></Reveal>
        <Reveal delay={120}>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Past (1976–2005)</th>
                  <th>2021–2050 · RCP4.5</th>
                  <th>2021–2050 · RCP8.5</th>
                  <th>2051–2080 · RCP4.5</th>
                  <th>2051–2080 · RCP8.5</th>
                </tr>
              </thead>
              <tbody>
                {items.map(([k, v]) => {
                  const fmt = (r) => `${r[0]} – ${r[1]}`;
                  return (
                    <tr key={k}>
                      <td>{v.label}</td>
                      <td>{v.past}</td>
                      <td>{fmt(v.r45[0])}</td>
                      <td>{fmt(v.r85[0])}</td>
                      <td>{fmt(v.r45[1])}</td>
                      <td>{fmt(v.r85[1])}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <p className="note">
            Low scenarios (sweeping global emission cuts) and high scenarios (current emission trends) diverge
            dramatically: under a high scenario Winnipeg could see roughly <strong>4.5× more 30°C+ days</strong> by mid-century.
          </p>
        </Reveal>
        <Reveal delay={280}>
          <div className="sources">
            <a href="https://climateatlas.ca" target="_blank" rel="noreferrer">Climate Atlas of Canada ↗</a>
            <a href="https://climateatlas.ca/map/canada/plus30_2030_85#city=465" target="_blank" rel="noreferrer">Winnipeg — Climate Atlas ↗</a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
