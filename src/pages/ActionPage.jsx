function ActionPage() {
  return (
    <div className="view" key="action">
      <section className="section page-head">
        <Reveal><span className="kicker">04 — Action</span></Reveal>
        <Reveal delay={120}><h2 className="big-title">Combating <span className="grad">Climate Change</span></h2></Reveal>
        <Reveal delay={240}><p className="lead">Fighting climate change takes action at every level — from city hall to your own hallway.</p></Reveal>
      </section>

      <section className="section">
        <Reveal><h3 className="sub-title">What Winnipeg & Manitoba are doing</h3></Reveal>
        <div className="two-col">
          <Reveal delay={100}>
            <div className="action-card">
              <span className="tag">City of Winnipeg</span>
              <p>
                <strong>Waste-to-energy biodiesel facility.</strong> Winnipeg operates one of the largest bio-solids
                and waste-to-fuel facilities of its kind, turning household waste into fuel — a centrepiece of the
                City's plan to cut community emissions sharply by 2030.
              </p>
            </div>
          </Reveal>
          <Reveal delay={220}>
            <div className="action-card">
              <span className="tag">Province of Manitoba</span>
              <p>
                <strong>Climate and Green Plan (2017).</strong> The provincial plan targeted dramatic reductions in
                greenhouse gases and invested in transit, building efficiency, and clean energy — Manitoba Hydro's
                grid is already about 97% renewable hydro power.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <Reveal><h3 className="sub-title">Ways you can help personally</h3></Reveal>
        <div className="chip-grid">
          {HELP_ITEMS.map((t, i) => (
            <Reveal key={t} delay={i * 80}>
              <div className="chip">
                <span className="chip-dot"></span>
                {t}
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={400}>
          <div className="sources">
            <a href="https://climateatlas.ca" target="_blank" rel="noreferrer">Climate Atlas of Canada ↗</a>
            <a href="https://climateatlas.ca/local-solutions" target="_blank" rel="noreferrer">Local Solutions ↗</a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
