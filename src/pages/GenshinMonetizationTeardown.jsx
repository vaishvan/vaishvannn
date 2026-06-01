import React from 'react'

const MediaRow = ({ src, alt, children }) => (
  <div className="casestudy-media-row">
    <div className="casestudy-media-text">{children}</div>
    {src ? (
      <div className="casestudy-media-visual">
        <img className="casestudy-img" src={src} alt={alt || ''} loading="lazy" />
      </div>
    ) : null}
  </div>
)

const GenshinMonetizationTeardown = ({ baseAssetPath }) => {
  const img = (name) => `${baseAssetPath}${name}`

  return (
    <div className="casestudy-article">
      <h1 className="casestudy-title casestudy-title--hero">
        A Teardown in Genshin Impact - Here's to a Billion Dollar Gatcha Strat
      </h1>

      <p className="casestudy-lead">
        I LOVE playing games. And something I've always wondered is how people spend tens and thousands of dollars on gatcha games. So
        what better than to do a teardown of one of the most popular gatcha games out there, Genshin Impact. I wanted to understand how the monetization works, and what makes it so effective. I also wanted to see if there are any opportunities for improvement, and what lessons we can learn from it. So I spent some time playing the game, analyzing the mechanics, and writing down my thoughts. Here's what I found.
      </p>

      <hr className="casestudy-hr" />

      <h2>How I approached it</h2>
      <ul>
        <li>
          <strong>Client</strong>: mobile build, same flows as PC (Paimon menu → Shop → Wishes →
          character/inventory).
        </li>
        <li>
          <strong>Focus</strong>: mechanics and player-facing friction that still matter in 2026, not
          one-off outrage that&apos;s already patched.
        </li>
      </ul>

      <hr className="casestudy-hr" />

      <h2>Entry and daily hooks</h2>
      <p>New and returning players hit rewards before they ever open the crystal shop.</p>

      <h3>Login &amp; Adventure Rank bonuses</h3>
      <MediaRow src={img('genshin-impact-mobile-start-game.png')} alt="">
        <p>
          First session rewards train &quot;come back tomorrow&quot; and Primogem value—Adventure Rank
          login bonus (e.g. AR 2) with Primogems and materials on sign-in.
        </p>
      </MediaRow>

      <h3>Daily login streak</h3>
      <MediaRow src={img('genshin-impact-mobile-rewards.png')} alt="">
        <p>
          The rewards screen shows streak progress and mixed payouts (Primogems plus account XP
          items)—loss-aversion on missed days.
        </p>
        <p>
          <strong>Product angle:</strong> Welkin-style value (best Primogem-per-money for daily logins)
          competes with these free hooks; together they normalize checking in before spending.
        </p>
      </MediaRow>

      <hr className="casestudy-hr" />

      <h2>Shop surface and premium currency</h2>
      <MediaRow src={img('genshin-impact-mobile-shop.png')} alt="">
        <p>Monetization UI is one tap from the main menu—Shop and Wishes from the Paimon menu.</p>
        <p>
          Players rarely buy &quot;pulls&quot; directly. They buy <strong>Genesis Crystals</strong> →{' '}
          <strong>Primogems</strong> → <strong>Fates</strong>. Extra steps reduce sticker shock on
          gacha.
        </p>
        <p>
          On this account the shop also showed <strong>Blessing of the Welkin Moon</strong> active
          (monthly sub: upfront crystals + daily Primogems for 30 days) and{' '}
          <strong>Battle Pass</strong> promotion—subscription and seasonal tracks sitting beside
          top-up.
        </p>
      </MediaRow>

      <hr className="casestudy-hr" />

      <h2>Cashback: Starglitter &amp; Stardust (Paimon&apos;s Bargains)</h2>
      <MediaRow src={img('genshin-impact-mobile-paimons-bargains.png')} alt="">
        <p>
          Duplicate pulls feed a second economy. The monthly exchange is under{' '}
          <strong>Paimon&apos;s Bargains</strong>: Masterless Starglitter row (legacy 4★ characters,
          Intertwined/Acquaint Fates, materials) and Stardust row (monthly Fate discounts, EXP, Mora).
        </p>
        <p>
          <strong>Still painful in 2026:</strong> the <strong>4★ character list in Starglitter</strong>{' '}
          is largely the launch roster. Modern supports don&apos;t appear—so Starglitter stops feeling
          like agency for current team-building and pushes players back to limited banners.
        </p>
        <p>
          Hard conversion when out of event Fates: <strong>160 Primogems per Fate</strong> on the
          exchange screen (same rule as desktop).
        </p>
      </MediaRow>

      <hr className="casestudy-hr" />

      <h2>Wishes (core gacha)</h2>
      <p>
        Character events, weapon epitome, standard pool, and occasional standard rate-ups behave as on
        PC. Mobile layout differs; economy does not.
      </p>
      <p>
        Weapon <strong>Epitomized Path</strong> is friendlier after 5.0 (lower fate-point cap), but{' '}
        <strong>points still don&apos;t carry across weapon banner rotations</strong>—low spenders face
        use-it-or-lose-it weapon banners.
      </p>
      <p>
        <strong>Standard banner</strong> still has no epitomized-style pick; <strong>Acquaint Fates</strong>{' '}
        from Adventure Rank and BP feel low-value without a target.
      </p>

      <hr className="casestudy-hr" />

      <h2>Adventure Rank &amp; account progression</h2>
      <p>
        Progression screens explain why players feel &quot;AR gated&quot; and why rank-ups matter for free
        pulls.
      </p>
      <MediaRow src={img('genshin-impact-mobile-adventure-rank.png')} alt="">
        <p>Adventure Rank / World Level UI—account progression separate from character build depth.</p>
      </MediaRow>
      <MediaRow src={img('genshin-impact-mobile-adventure-rank-rewards.png')} alt="">
        <p>
          Rank-up packages bundle Primogems, Fates, and materials—free gacha currency tied to account
          level (e.g. Primogems, Acquaint Fate, Hero&apos;s Wit, Mora on rank-up).
        </p>
      </MediaRow>

      <hr className="casestudy-hr" />

      <h2>Build pressure (why resin and investment still drive spend)</h2>
      <p>
        Even on a mid-progress account, <strong>character panels</strong> show how much vertical
        investment gacha implies.
      </p>
      <MediaRow src={img('genshin-impact-mobile-attributes.png')} alt="">
        <p>
          Character attributes at high level—stats, weapon, artifacts; the grind is domains/resin, not
          this screen alone.
        </p>
      </MediaRow>
      <MediaRow src={img('genshin-impact-mobile-constellation.png')} alt="">
        <p>Constellation screen (e.g. C0)—duplicate 5★/4★ gating for power spikes.</p>
      </MediaRow>
      <MediaRow src={img('genshin-impact-mobile-weapons-2.png')} alt="">
        <p>
          Supporting screens in the same folder document the loop: character archive, weapon
          list/selection, enhancement, domains/challenge, loot, and achievements—all places where{' '}
          <strong>Original Resin</strong> and time gates bite after you pull someone new.
        </p>
      </MediaRow>
      <MediaRow src={img('genshin-impact-mobile-challenge.png')} alt="">
        <p>
          <strong>Resin math</strong> still lags artifact and talent cost for many players; that{' '}
          <strong>reduces appetite for the next banner</strong> even when Primogem income looks okay on
          paper.
        </p>
      </MediaRow>

      <hr className="casestudy-hr" />

      <h2>Supply bundles &amp; weak crystal packs</h2>
      <p>
        Gift-tab bundles that sell <strong>Adventurer&apos;s Experience</strong> and{' '}
        <strong>Fine Enhancement Ore</strong> for Genesis Crystals help early game but feel wrong for
        accounts already swimming in ores. No resin, no artifact tuning items—missed conversion on
        mid/high spenders who would pay for <strong>Fragile/Transient Resin</strong> or{' '}
        <strong>Sanctifying Elixir</strong>-style bundles.
      </p>

      <hr className="casestudy-hr" />

      <h2>Ideas that fit systems they already have</h2>
      <table className="casestudy-table">
        <thead>
          <tr>
            <th>Pain</th>
            <th>Direction</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Weapon fate points reset</td>
            <td>
              <strong>Carry 0–1 fate point</strong> across weapon banners; re-select target each rotation
            </td>
          </tr>
          <tr>
            <td>Dead Starglitter roster</td>
            <td>
              <strong>Rotating modern 4★</strong> or expensive monthly 4★ selector in Paimon&apos;s Bargains
            </td>
          </tr>
          <tr>
            <td>Weak crystal bundles</td>
            <td>Resin + late-game artifact items in shop bundles</td>
          </tr>
          <tr>
            <td>Standard banner</td>
            <td>
              <strong>Standard epitomized path</strong> for one char + one weapon
            </td>
          </tr>
          <tr>
            <td>Resin fatigue</td>
            <td>
              Slightly faster recharge + small Welkin <strong>Transient Resin</strong> drip
            </td>
          </tr>
        </tbody>
      </table>

      <hr className="casestudy-hr" />

      <h2>Bottom line</h2>
      <p>
        Mobile shows the same stack: <strong>daily/subscription hooks</strong>,{' '}
        <strong>indirect crystal → pull pricing</strong>, <strong>gacha</strong>, and{' '}
        <strong>duplicate cashback</strong>—with <strong>Adventure Rank</strong> and <strong>login</strong>{' '}
        feeding free Fates. Where it ages badly is <strong>mid/late accountability</strong>: weapon
        points that vanish, a frozen Starglitter museum, standard wishes with no aim, resin that
        can&apos;t keep up with how many characters the game sells.
      </p>
      <p>Fixing those is retention and LTV through trust, not just sharper FOMO.</p>
    </div>
  )
}

export default GenshinMonetizationTeardown
