import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import DelayedPrompt from '../components/DelayedPrompt'
import GenshinMonetizationTeardown from './GenshinMonetizationTeardown'
import '../styles/Page.css'

const CaseStudies = () => {
  // State to manage active case study view. null = list directory, "genshin-teardown" = genshin teardown view
  const [activeCaseStudy, setActiveCaseStudy] = useState(null)

  // Base path resolution for local dev and GitHub Pages production
  const baseAssetPath = `${import.meta.env.BASE_URL}genshin teardown/`

  return (
    <div className="page-container">
      <DelayedPrompt />

      <Navigation />

      <header className="page-header">
        <div className="header-gif">
          <span>Case Studies</span>
        </div>
      </header>

      <div className="page-content" style={{ maxWidth: '1200px' }}>
        {activeCaseStudy === null ? (
          /* =================================================================== */
          /* CASE STUDIES DIRECTORY (INDEX VIEW)                                 */
          /* =================================================================== */
          <div style={{ width: '100%', textAlign: 'center' }}>
            <p style={{ color: '#dddddd', marginBottom: '2rem', fontSize: '1.1rem' }}>
              Welcome to my case studies directory! Click on any card below to explore my detailed product breakdowns.
            </p>

            <div className="casestudy-grid">
              {/* Genshin Teardown Card (Active) */}
              <div
                className="casestudy-card"
                onClick={() => setActiveCaseStudy('genshin-teardown')}
              >
                <div className="casestudy-card-header">
                  
                  <span style={{ fontSize: '0.75rem', color: '#aaaaaa' }}>Feb 2026</span>
                </div>
                <h3 className="casestudy-card-title">Genshin Impact Teardown</h3>
                <p className="casestudy-card-desc">
                  Mobile client walk-through: daily hooks, shop, Paimon&apos;s Bargains, AR rewards, and 2026 friction
                  (weapon fate points, Starglitter roster, resin) with grounded product directions.
                </p>
                <div className="casestudy-card-footer">
                  Read Case Study &rarr;
                </div>
              </div>

              {/* Locked Placeholder Card 1 */}
              <div className="casestudy-card locked-card">
                <div className="casestudy-card-header">
                  <span className="casestudy-card-badge">Game Design</span>
                  <span style={{ fontSize: '0.75rem', color: '#888888' }}>Coming Soon</span>
                </div>
                <h3 className="casestudy-card-title">Project: Retro Game Loop</h3>
                <p className="casestudy-card-desc">
                  An upcoming design audit analyzing game loop structures, retro controls, and engagement design systems
                  in modern indie titles.
                </p>
                <div className="casestudy-card-footer">
                  Coming Soon...
                </div>
              </div>

              {/* Locked Placeholder Card 2 */}
              <div className="casestudy-card locked-card">
                <div className="casestudy-card-header">
                  <span className="casestudy-card-badge">System Dev</span>
                  <span style={{ fontSize: '0.75rem', color: '#888888' }}>Coming Soon</span>
                </div>
                <h3 className="casestudy-card-title">Winsock socket analysis</h3>
                <p className="casestudy-card-desc">
                  A low-level case study on socket networking architecture, Winsock buffers, and framing layouts for
                  real-time multiplayer clients.
                </p>
                <div className="casestudy-card-footer">
                  Coming Soon...
                </div>
              </div>
            </div>
          </div>
        ) : activeCaseStudy === 'genshin-teardown' ? (
          /* =================================================================== */
          /* GENSHIN IMPACT TEARDOWN DETAIL VIEW (WORD-TO-WORD FROM MD REPORT)    */
          /* =================================================================== */
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* Styled Back Button */}
            <button
              className="back-button"
              onClick={() => setActiveCaseStudy(null)}
            >
              &larr; Back to Case Studies
            </button>

            <GenshinMonetizationTeardown baseAssetPath={baseAssetPath} />
          </div>
        ) : null}
      </div>

      <Footer />
    </div>
  )
}

export default CaseStudies