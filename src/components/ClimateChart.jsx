function ClimateChart({ item, mode }) {
  const canvasRef = React.useRef(null);
  const chartRef = React.useRef(null);

  React.useEffect(() => {
    if (!canvasRef.current) return;
    const def = DATA[item];
    const labels = ["Past (1976–2005)", "2021–2050", "2051–2080"];
    const pastData = [def.past, null, null];
    const lowData = [def.past, ...def.low];
    const highData = [def.past, ...def.high];
    const series = mode === "low" ? [["Low change (RCP4.5)", lowData]] : mode === "high" ? [["High change (RCP8.5)", highData]] : [["Low change (RCP4.5)", lowData], ["High change (RCP8.5)", highData]];
    const colors = ["#f4f1ea", "#ff4d00"];
    const ds = series.map(([name, proj], i) => ({
      label: name,
      data: labels.map((_, j) => (pastData[j] != null ? pastData[j] : proj[j])),
      backgroundColor: colors[i],
      hoverBackgroundColor: colors[i],
      borderRadius: 10,
      maxBarThickness: 64,
    }));
    if (chartRef.current) chartRef.current.destroy();
    chartRef.current = new Chart(canvasRef.current, {
      type: "bar",
      data: { labels, datasets: ds },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 900, easing: "easeOutQuart" },
        plugins: {
          legend: { labels: { color: "#cbd5e1", usePointStyle: true, pointStyle: "circle", font: { family: "Space Grotesk" } } },
          tooltip: {
            backgroundColor: "#141413",
            titleColor: "#f4f1ea",
            bodyColor: "#a3a09a",
            borderColor: "rgba(244,241,234,0.2)",
            borderWidth: 1,
            padding: 12,
            cornerRadius: 10,
            titleFont: { family: "Space Grotesk" },
          },
        },
        scales: {
          x: { ticks: { color: "#6b6963", font: { family: "Space Grotesk" } }, grid: { display: false } },
          y: { ticks: { color: "#6b6963", font: { family: "Space Grotesk" } }, grid: { color: "rgba(244,241,234,0.08)" } },
        },
      },
    });
  }, [item, mode]);

  return <canvas ref={canvasRef}></canvas>;
}
