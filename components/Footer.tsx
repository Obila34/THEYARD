import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <Link href="/" className="foot-logo">
            The<b>—</b>Yard
          </Link>
          <p className="foot-tag">
            Africa&apos;s home for AI builders, founders, and thinkers.
          </p>
        </div>

        <div>
          <h4 className="foot-h">Explore</h4>
          <ul className="foot-list">
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/news">News</Link></li>
            <li><Link href="/demos">Demos</Link></li>
            <li><Link href="/community">Community</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="foot-h">The Yard</h4>
          <ul className="foot-list">
            <li><Link href="/newsletter">Smoke Signal</Link></li>
            <li><Link href="/community">Events</Link></li>
            <li><Link href="/demos">The Drop</Link></li>
            <li><Link href="/">About</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="foot-h">Connect</h4>
          <ul className="foot-list">
            <li><a href="#">WhatsApp</a></li>
            <li><a href="#">Discord</a></li>
            <li><a href="#">X / Twitter</a></li>
            <li><a href="#">YouTube</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-base">
        <span>© 2026 The Yard · Nairobi, Kenya</span>
        <div className="footer-socials">
          <a href="#">TWITTER</a>
          <a href="#">INSTAGRAM</a>
          <a href="#">LINKEDIN</a>
          <a href="#">YOUTUBE</a>
        </div>
      </div>
    </footer>
  );
}
