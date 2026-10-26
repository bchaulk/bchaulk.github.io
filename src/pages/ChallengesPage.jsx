function ChallengesPage() {
  return (
    <div className="view" key="challenges">
      <section className="section page-head">
        <Reveal><span className="kicker">03 — Challenges</span></Reveal>
        <Reveal delay={120}><h2 className="big-title">Three Challenges for the <span className="grad">21st Century</span></h2></Reveal>
        <Reveal delay={240}>
          <p className="lead">Based on the forecast data and research, these are the biggest climate threats facing Winnipeg in the coming decades.</p>
        </Reveal>
      </section>
      <section className="section">
        <div className="challenge-list">
          {CHALLENGES.map((c, i) => (
            <Reveal key={c.n} delay={i * 150}>
              <article className="challenge-row">
                <div className="challenge-num">{c.n}</div>
                <div className="challenge-body">
                  <h3>{c.t}</h3>
                  <p>{c.d}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={450}>
          <div className="sources">
            <a href="https://climateatlas.ca" target="_blank" rel="noreferrer">Climate Atlas of Canada ↗</a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
