import Image from "next/image";

const sizeRows = [
  ["6 3/4", "54", "21.2 in", "XS", "Adj.S"],
  ["6 7/8", "55", "21.6 in", "", "Adj.S"],
  ["7", "56", "22.0 in", "S", "Adj.S"],
  ["7 1/8", "57", "22.4 in", "", "Adj.M"],
  ["7 1/4", "58", "22.8 in", "M", "Adj.M"],
  ["7 3/8", "59", "23.2 in", "", "Adj.M"],
  ["7 1/2", "60", "23.6 in", "L", "Adj.L"],
  ["7 5/8", "61", "24.0 in", "", "Adj.L"],
  ["7 3/4", "62", "24.4 in", "XL", "Adj.L"]
];

export default function SizeGuidePage() {
  return (
    <main className="size-guide-page">
      <section className="size-guide-hero">
        <div className="editorial-container size-guide-hero__inner">
          <h1 className="serif-display">Size Guide</h1>
        </div>
      </section>

      <section className="editorial-container size-guide-content relative overflow-hidden">
        <Image
          src="/images/bg/elorebg8.png"
          alt=""
          fill
          sizes="(max-width: 1024px) 70vw, 32vw"
          className="pointer-events-none absolute inset-y-0 right-0 z-0 object-contain object-right opacity-50 mix-blend-multiply"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <p className="size-guide-intro">
            Use your head circumference to find the ELÖRE size that best corresponds to your measurement.
          </p>

          <div className="size-guide-table-wrap">
            <table className="size-guide-table">
              <thead>
                <tr>
                  <th>Head Circumference<br />(US)</th>
                  <th>Head Circumference<br />(cm)</th>
                  <th>Head Circumference<br />(in)</th>
                  <th>Size</th>
                  <th>Adjustable Size</th>
                </tr>
              </thead>
              <tbody>
                {sizeRows.map(([us, cm, inches, size, adjustable]) => (
                  <tr key={cm}>
                    <td className="size-guide-emphasis">{us}</td>
                    <td>{cm}</td>
                    <td>{inches}</td>
                    <td className="size-guide-emphasis">{size || "—"}</td>
                    <td>{adjustable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="size-guide-note">
            If your measurement falls between sizes, choose the next larger size for the most comfortable fit.
          </p>
        </div>
      </section>
    </main>
  );
}
