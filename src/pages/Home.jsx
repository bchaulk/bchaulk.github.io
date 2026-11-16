function Home({ go }) {
  const stats = [
    { c: <Counter to={4.8} decimals={1} prefix="+" suffix="°C" />, l: "of warming by 2051–2080 under a high-emission scenario, versus the 1976–2005 average" },
    { c: <Counter to={64} />, l: "days above 30°C per year by 2051–2080 (high scenario), up from about 14 in the past" },
    { c: <Counter to={19} suffix="×" />, l: "more tropical nights above 22°C by 2051–2080 than the historical average" },
    { c: <Counter to={97} suffix="%" />, l: "of Manitoba's electricity grid already runs on renewable hydro power" },
  ];
  return (
    <div className="view" key="home">
      <section className="hero">
        <div className="hero-inner">
          <Reveal><span className="kicker">Science 1206 - Weather Dynamics</span></Reveal>
          <h1 className="hero-title">
            <Reveal delay={120}><span>Canada's</span></Reveal>
            <Reveal delay={260}><span className="grad">Changing</span></Reveal>
            <Reveal delay={400}><span>Climate.</span></Reveal>
          </h1>
          <Reveal delay={550}>
            <p className="hero-sub">
              How climate change will reshape <strong>Winnipeg, Manitoba</strong> - and what the forecast means for the people who live here.
            </p>
          </Reveal>
          <Reveal delay={680}>
            <div className="hero-cta">
              <button className="pill-btn big" onClick={() => go("/data")}>Explore the Data →</button>
              <button className="ghost-btn big" onClick={() => go("/challenges")}>The Challenges</button>
            </div>
          </Reveal>
          <Reveal delay={800}>
            <p className="byline">Made by Ben, Ian, and Reid</p>
          </Reveal>
        </div>
        <Marquee />
      </section>

      <section className="section">
        <Reveal><h2 className="section-title">What is Climate Change?</h2></Reveal>
        <div className="two-col">
          <Reveal delay={100}>
            <p>
              Climate change is the long-term shift in Earth's average weather patterns, temperature, precipitation,
              and extreme events. It is different from weather, which changes day to day. Over the past century,
              Earth's average temperature has risen by about 1.3°C, and Canada has warmed about twice as fast as the
              global average, with the Prairies seeing some of the fastest winter warming in the country.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p>
              This warming is not natural. When humans burn fossil fuels like coal, oil, and gas, we release
              greenhouse gases, mainly carbon dioxide. These gases act like a blanket around the planet: sunlight
              passes through, but heat from Earth's surface cannot escape as easily, so it gets trapped. Since the
              Industrial Revolution, atmospheric CO₂ has climbed from about 280 to over 420 parts per million,
              which is why today's warming is happening far faster than any natural climate cycle in Earth's history.
            </p>
          </Reveal>
        </div>
        <Reveal delay={300}>
          <div className="sources">
            <a href="https://climateatlas.ca" target="_blank" rel="noreferrer">Climate Atlas of Canada ↗</a>
            <a href="https://climateatlas.ca/climate-change-basics" target="_blank" rel="noreferrer">Climate Change Basics ↗</a>
          </div>
        </Reveal>
      </section>

      <section className="section">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="stat">
                <div className="stat-num">{s.c}</div>
                <p>{s.l}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
