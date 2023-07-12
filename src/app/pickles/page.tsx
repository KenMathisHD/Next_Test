import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All about pickles!",
  description:
    "A page dedicated solely to an individuals love for a good, green, sour burger pickle",
};

export default function Pickles() {
  const badPickles = [
    "bread and butter",
    "sweet pickles",
    "overseasoned pickles",
  ];
  const goodPickles = ["dill", "kosher", "hamburger"];
  return (
    <main style={{ textAlign: "center" }}>
      <h1>I love pickles</h1>
      <p>I mean, c'mon, who doesn't love a good pickle</p>
      <br />
      <section>
        <h2>
          However, I don't love all pickles equally. Only certain kinds of
          pickles{" "}
        </h2>
        <p>
          This is because there are good pickles, and bad pickles, and some
          pickles in between. <br /> Bad pickles are bad pickles though, and
          there's no convincing me otherwise
          <br />
        </p>
        <br />
        <h3>Bad Pickles</h3>
        <ul>
          {badPickles.map((pickle) => (
            <li>{pickle}</li>
          ))}
        </ul>
        <br />
        <h3>Good Pickles</h3>
        <ul>
          {goodPickles.map((pickle) => (
            <li>{pickle}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
