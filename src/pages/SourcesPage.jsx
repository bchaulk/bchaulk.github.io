function SourcesPage() {
  return (
    <div className="view" key="sources">
      <section className="section page-head">
        <Reveal><span className="kicker">05 - Sources</span></Reveal>
        <Reveal delay={120}><h2 className="big-title">Where the <span className="grad">Data Comes From</span></h2></Reveal>
      </section>
      <section className="section">
        <div className="src-rows">
          {SOURCE_LINKS.map(([title, host, url], i) => (
            <Reveal key={url} delay={i * 100}>
              <a className="src-row" href={url} target="_blank" rel="noreferrer">
                <span className="src-idx">{String(i + 1).padStart(2, "0")}</span>
                <span className="src-title">{title}</span>
                <span className="src-host">{host}</span>
                <span className="src-arrow">→</span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
