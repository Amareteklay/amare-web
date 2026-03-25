import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Homo Adapticus</h1>
      <p>Essays on adaptation, technology, and what it means to be human.</p>
      <nav>
        <ul>
          <li><Link href="/journal/adaptation-ai">Adaptation & AI</Link></li>
          <li><Link href="/journal/manifesto">Manifesto</Link></li>
        </ul>
      </nav>
    </main>
  );
}
