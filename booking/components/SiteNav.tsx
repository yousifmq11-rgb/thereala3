const NAV_CSS = `
  #site-nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:10px 20px;}
  .nav-dock{max-width:1280px;margin:0 auto;height:62px;display:flex;align-items:center;gap:24px;padding:0 22px;background:rgba(20,20,20,0.88);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);border:1px solid rgba(255,255,255,0.1);border-radius:16px;box-shadow:0 8px 32px rgba(0,0,0,0.4);}
  .nav-logo{color:#fff;font-size:18px;font-weight:900;text-decoration:none;letter-spacing:-0.02em;flex-shrink:0;}
  .nav-logo span{color:#E8890A;}
  .nav-links{display:flex;align-items:center;gap:4px;margin-left:auto;}
  .nav-link{font-size:13px;font-weight:500;color:rgba(255,255,255,0.75);text-decoration:none;padding:7px 12px;border-radius:8px;transition:background .15s,color .15s;white-space:nowrap;}
  .nav-link:hover{background:rgba(255,255,255,0.08);color:#fff;}
  .nav-link.active{color:#fff;background:rgba(255,255,255,0.1);}
  .nav-dropdown{position:relative;}
  .nav-dropdown > summary{font-size:13px;font-weight:500;color:rgba(255,255,255,0.75);padding:7px 12px;border-radius:8px;cursor:pointer;list-style:none;display:flex;align-items:center;gap:5px;transition:background .15s,color .15s;}
  .nav-dropdown > summary::-webkit-details-marker{display:none;}
  .nav-dropdown > summary:hover,.nav-dropdown[open] > summary{background:rgba(255,255,255,0.08);color:#fff;}
  .nav-dropdown-menu{position:absolute;top:calc(100% + 8px);left:0;background:#1a1a1a;border:1px solid rgba(255,255,255,0.12);border-radius:14px;padding:8px;min-width:200px;box-shadow:0 16px 40px rgba(0,0,0,0.5);z-index:10;}
  .nav-dropdown-item{display:block;font-size:13px;font-weight:500;color:rgba(255,255,255,0.75);text-decoration:none;padding:9px 14px;border-radius:8px;transition:background .12s,color .12s;white-space:nowrap;}
  .nav-dropdown-item:hover{background:rgba(255,255,255,0.08);color:#fff;}
  .nav-cta{display:inline-flex;align-items:center;gap:7px;background:#E8890A;color:#fff;font-size:13px;font-weight:700;padding:9px 18px;border-radius:100px;text-decoration:none;margin-left:8px;transition:background .15s,transform .12s;flex-shrink:0;}
  .nav-cta:hover{background:#C4720A;transform:translateY(-1px);}
  @media(max-width:768px){
    .nav-links .nav-link,.nav-dropdown{display:none;}
    .hide-mobile-nav{display:none;}
  }
  @media(min-width:769px){
    .nav-mobile-cta{display:none;}
  }
`;

export default function SiteNav({ active }: { active?: string }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: NAV_CSS }} />
      <div id="site-nav">
        <div className="nav-dock">
          <a href="https://3aservice.fi" className="nav-logo">
            3A <span>Service</span>
          </a>

          <div className="nav-links">
            <a href="https://3aservice.fi" className="nav-link">Etusivu</a>

            <details className="nav-dropdown">
              <summary>
                Automerkit
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>
              </summary>
              <div className="nav-dropdown-menu">
                <a href="/merkit/bmw" className="nav-dropdown-item">BMW</a>
                <a href="/merkit/mercedes" className="nav-dropdown-item">Mercedes-Benz</a>
                <a href="/merkit/volvo" className="nav-dropdown-item">Volvo</a>
                <a href="/merkit/toyota" className="nav-dropdown-item">Toyota &amp; Lexus</a>
                <a href="/merkit/audi" className="nav-dropdown-item">Audi</a>
                <a href="/merkit/volkswagen" className="nav-dropdown-item">Volkswagen</a>
              </div>
            </details>

            <a
              href="/huoltohinnasto"
              className={`nav-link${active === 'hinnasto' ? ' active' : ''}`}
            >
              Hinnasto
            </a>

            <a
              href="/blog"
              className={`nav-link${active === 'blog' ? ' active' : ''}`}
            >
              Ajankohtaista
            </a>
          </div>

          <a href="/varaa" className="nav-cta">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Varaa aika
          </a>
        </div>
      </div>
    </>
  );
}
