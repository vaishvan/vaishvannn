# One-off patch for CaseStudies.jsx sections F, 3, 4
from pathlib import Path
import re

path = Path(__file__).resolve().parents[1] / "src" / "pages" / "CaseStudies.jsx"
text = path.read_text(encoding="utf-8")

start = text.index('              <h3>F. Resource Gating & Bottleneck Monetization</h3>')
end = text.index(
    "              <hr style={{ borderColor: 'rgba(216, 198, 34, 0.2)', margin: '2rem 0' }} />\n\n              <h2>3. Post-2026"
)

section_f = r'''              <h3>F. Resource Gating & Bottleneck Monetization</h3>

              <h4>1. Supply Bundles (Gift Shop)</h4>
              <p>Weekly limits on packages containing character experience and enhancement materials costing Genesis Crystals:</p>
              <div className="casestudy-figure">
                <img src={`${baseAssetPath}Genshin-Impact01032021-021300-39034.jpg`} alt="Supply Bundles Shop" loading="lazy" />
                <span className="casestudy-img-caption">Gift Shop Supply Bundles tab displaying available resource packs</span>
              </div>
              <p>Detailed pop-up contents of the weekly Adventurer&apos;s Share Bundle (costs 60 Genesis Crystals):</p>
              <div className="casestudy-figure">
                <img src={`${baseAssetPath}Genshin-Impact01032021-021300-44164.jpg`} alt="Adventurer's Share Bundle Details" loading="lazy" />
                <span className="casestudy-img-caption">Adventurer&apos;s Share Bundle details: 80x Adventurer&apos;s Experience, 40x Fine Enhancement Ore</span>
              </div>
              <p>The Supply Bundles shop list is verified in the second walk-through sequence:</p>
              <div className="casestudy-figure">
                <img src={`${baseAssetPath}Genshin-Impact01032021-021435-88973.jpg`} alt="Supply Bundles Shop Sequence 2" loading="lazy" />
                <span className="casestudy-img-caption">Gift Shop Supply Bundles (Verification Sequence)</span>
              </div>
              <p><em>Mechanics</em>: Weekly limits on packages containing Hero&apos;s Wit (character experience) and Enhancement Ores, costing Genesis Crystals (e.g., Adventurer&apos;s Share Bundle for 60 Crystals).</p>
              <p><em>Product Purpose</em>: Targets high-spending players (&quot;whales&quot;) who want to bypass in-game time gating and immediately upgrade newly acquired characters.</p>

              <h4>2. Character Progression Gating</h4>
              <p>Attributes and stats for Level 80 Keqing (C0 standard 5-star character):</p>
              <div className="casestudy-figure">
                <img src={`${baseAssetPath}Genshin-Impact01032021-021304-16555.jpg`} alt="Keqing Character Attributes" loading="lazy" />
                <span className="casestudy-img-caption">Keqing Character Attributes page showing max Level 80 stats</span>
              </div>
              <p>Verification of Level 80 Keqing attributes in the second walk-through sequence:</p>
              <div className="casestudy-figure">
                <img src={`${baseAssetPath}Genshin-Impact01032021-021437-83696.jpg`} alt="Keqing Character Attributes Sequence 2" loading="lazy" />
                <span className="casestudy-img-caption">Keqing Character Attributes (Verification Sequence)</span>
              </div>
              <p>Attributes and stats for Level 80 Xiao (limited 5-star Anemo character):</p>
              <div className="casestudy-figure">
                <img src={`${baseAssetPath}Genshin-Impact01032021-021304-23880.jpg`} alt="Xiao Character Attributes" loading="lazy" />
                <span className="casestudy-img-caption">Xiao Character Attributes page showing max Level 80 stats</span>
              </div>
              <p>Verification of Level 80 Xiao attributes in the second walk-through sequence:</p>
              <div className="casestudy-figure">
                <img src={`${baseAssetPath}Genshin-Impact01032021-021437-92026.jpg`} alt="Xiao Character Attributes Sequence 2" loading="lazy" />
                <span className="casestudy-img-caption">Xiao Character Attributes (Verification Sequence)</span>
              </div>
              <p>Detailed character talent progression levels for Xiao (Talents at 8/7/7):</p>
              <div className="casestudy-figure">
                <img src={`${baseAssetPath}Genshin-Impact01032021-021438-50695.jpg`} alt="Xiao Talents" loading="lazy" />
                <span className="casestudy-img-caption">Xiao progression check: Talents at level 8/7/7, showing investment levels</span>
              </div>
              <p>Vertical duplicate-gacha constellation mapping for Xiao (Status: C0 locked):</p>
              <div className="casestudy-figure">
                <img src={`${baseAssetPath}Genshin-Impact01032021-021439-57906.jpg`} alt="Xiao Constellation" loading="lazy" />
                <span className="casestudy-img-caption">Xiao C0 constellation map, demonstrating vertical duplicate-gacha gating</span>
              </div>
              <p>Equipped Gladiator&apos;s Finale artifact set on Xiao (all 5-star Level 20 items):</p>
              <div className="casestudy-figure">
                <img src={`${baseAssetPath}Genshin-Impact01032021-021439-58926.jpg`} alt="Xiao Artifacts" loading="lazy" />
                <span className="casestudy-img-caption">Equipped full 5-star Gladiator&apos;s Finale set (all level 20 maxed)</span>
              </div>
              <p>Inventory Weapons showing Xiao&apos;s equipped signature 5-star weapon (Primordial Jade Winged-Spear level 80) and 4-star Lion&apos;s Roar:</p>
              <div className="casestudy-figure">
                <img src={`${baseAssetPath}Genshin-Impact01032021-021305-43868.jpg`} alt="Inventory Weapons" loading="lazy" />
                <span className="casestudy-img-caption">Weapons Inventory displaying equipped 5-star Primordial Jade Winged-Spear and 4-star weapons</span>
              </div>
              <p>Verification of Inventory Weapons list in the second walk-through sequence:</p>
              <div className="casestudy-figure">
                <img src={`${baseAssetPath}Genshin-Impact01032021-021441-56804.jpg`} alt="Inventory Weapons Sequence 2" loading="lazy" />
                <span className="casestudy-img-caption">Weapons Inventory (Verification Sequence)</span>
              </div>
              <p>Inventory Artifacts stockpile highlighting Gladiator&apos;s Nostalgia maxed 5-star artifact:</p>
              <div className="casestudy-figure">
                <img src={`${baseAssetPath}Genshin-Impact01032021-021305-71285.jpg`} alt="Inventory Artifacts" loading="lazy" />
                <span className="casestudy-img-caption">Artifacts Inventory displaying Gladiator&apos;s Nostalgia Level 20 maxed-out 5-star artifact</span>
              </div>
              <p>Verification of Inventory Artifacts list in the second walk-through sequence:</p>
              <div className="casestudy-figure">
                <img src={`${baseAssetPath}Genshin-Impact01032021-021441-76725.jpg`} alt="Inventory Artifacts Sequence 2" loading="lazy" />
                <span className="casestudy-img-caption">Artifacts Inventory (Verification Sequence)</span>
              </div>
              <p>Inventory Character Development materials showing ascension and talent materials (including 2x prestigious Crown of Insight):</p>
              <div className="casestudy-figure">
                <img src={`${baseAssetPath}Genshin-Impact01032021-021306-6044.jpg`} alt="Inventory Development Materials" loading="lazy" />
                <span className="casestudy-img-caption">Talent & Ascension materials inventory displaying 2x Crown of Insight and weekly boss drops</span>
              </div>
              <p>Verification of Inventory Character Development materials in the second walk-through sequence:</p>
              <div className="casestudy-figure">
                <img src={`${baseAssetPath}Genshin-Impact01032021-021442-9436.jpg`} alt="Inventory Development Materials Sequence 2" loading="lazy" />
                <span className="casestudy-img-caption">Talent & Ascension materials inventory (Verification Sequence)</span>
              </div>
              <p>Inventory Materials stockpile displaying mineral items and 251x Mystic Enhancement Ores:</p>
              <div className="casestudy-figure">
                <img src={`${baseAssetPath}Genshin-Impact01032021-021306-40368.jpg`} alt="Inventory Materials" loading="lazy" />
                <span className="casestudy-img-caption">Materials Inventory displaying 251x Mystic Enhancement Ores</span>
              </div>
              <p>Verification of Inventory Materials stockpile in the second walk-through sequence:</p>
              <div className="casestudy-figure">
                <img src={`${baseAssetPath}Genshin-Impact01032021-021442-48397.jpg`} alt="Inventory Materials Sequence 2" loading="lazy" />
                <span className="casestudy-img-caption">Materials Inventory (Verification Sequence)</span>
              </div>
              <p>Narrative engagement profile for Xiao showing basic affiliation and voice actor details:</p>
              <div className="casestudy-figure">
                <img src={`${baseAssetPath}Genshin-Impact01032021-021440-51696.jpg`} alt="Xiao Profile Details" loading="lazy" />
                <span className="casestudy-img-caption">Character Profile page for Xiao showing EN/JP Voice Actor credits and basic metadata</span>
              </div>
              <p>Narrative engagement story screen showing Xiao&apos;s unlocked &quot;Character Story 1&quot;:</p>
              <div className="casestudy-figure">
                <img src={`${baseAssetPath}Genshin-Impact01032021-021440-67263.jpg`} alt="Xiao Story Details" loading="lazy" />
                <span className="casestudy-img-caption">Character Story 1 reading page for Xiao, unlocked via Friendship level</span>
              </div>
              <p>Narrative engagement voice-over list for Xiao showing voice lines unlocked via progression:</p>
              <div className="casestudy-figure">
                <img src={`${baseAssetPath}Genshin-Impact01032021-021440-94306.jpg`} alt="Xiao Voice-Over List" loading="lazy" />
                <span className="casestudy-img-caption">Unlocked Voice-Over list for Xiao, enhancing narrative attachment</span>
              </div>
              <p><em>Mechanics</em>: Progressively higher costs in Mora (player has 671,595 Mora), local specialties, mob drops, weekly boss materials, and talent books. The absolute bottleneck is <strong>Original Resin</strong> (energy system, not shown in these screens but driving this entire progression loop), which restricts domain runs, bosses, and leyline outcroppings.</p>
              <p><em>Product Purpose</em>: Generates pressure on the Resin system, driving monetization of Resin refreshes (spending Primogems to buy energy) for dedicated players.</p>

'''

text = text[:start] + section_f + text[end:]

s3_start = text.index('              <h2>3. Post-2026 Monetization Friction')
s3_end = text.index(
    "              <hr style={{ borderColor: 'rgba(216, 198, 34, 0.2)', margin: '2rem 0' }} />\n\n              <h2>4. Grounded Product Solutions"
)
s3 = text[s3_start:s3_end]
s3_clean = re.sub(
    r'\s*<div className="casestudy-figure">.*?</div>',
    '',
    s3,
    flags=re.DOTALL,
)
replacements = [
    (
        'The weapon banner changes every 21 days (such as the banner featured in\n                ). If',
        'The weapon banner changes every 21 days (such as the banner featured in standard weapon wishes). If',
    ),
    (
        'panic-spend to buy Genesis Crystal packs (\n                ) to avoid',
        'panic-spend to buy Genesis Crystal packs to avoid',
    ),
    (
        'The Masterless Starglitter exchange pool (\n                ) has remained',
        'The Masterless Starglitter exchange pool has remained',
    ),
    ('Supply Bundles (\n                ) are extremely', 'Supply Bundles are extremely'),
    (
        'Enhancement Ores, detail at\n                ) offer',
        'Enhancement Ores) offer',
    ),
    (
        'Mystic Enhancement Ores (\n                \n                shows a large',
        'Mystic Enhancement Ores (showing a large',
    ),
    (
        '("Wanderlust Invocation",\n                ) has expanded',
        '("Wanderlust Invocation") has expanded',
    ),
    (
        'rate-ups (such as the Keqing banner shown in\n                ) or an annual',
        'rate-ups (such as the Keqing banner) or an annual',
    ),
    (
        'shop exchanges (\n                ) and Battle Pass',
        'shop exchanges and Battle Pass',
    ),
]
for old, new in replacements:
    s3_clean = s3_clean.replace(old, new)
s3_clean = re.sub(
    r"like the user's Xiao \[\s*\]\), or",
    "like the user's Xiao), or",
    s3_clean,
)
s3_clean = re.sub(
    r'Level 80 Xiao \[\s*\], Level 80 Keqing \[\s*\]\) requires',
    'Level 80 Xiao, Level 80 Keqing) requires',
    s3_clean,
)
s3_clean = re.sub(
    r'5-star artifacts \(\s*\n                and\s*\n                \)\. Due',
    '5-star artifacts. Due',
    s3_clean,
)
text = text[:s3_start] + s3_clean + text[s3_end:]

s4_start = text.index('              <h2>4. Grounded Product Solutions')
s4_end = text.index(
    "              <hr style={{ borderColor: 'rgba(216, 198, 34, 0.2)', margin: '2rem 0' }} />\n\n              <h2>5. Screenshot Evidence Matrix"
)
s4 = text[s4_start:s4_end]
s4_clean = re.sub(
    r'\s*<div className="casestudy-figure">.*?</div>',
    '',
    s4,
    flags=re.DOTALL,
)
s4_clean = s4_clean.replace(
    'across banner changes (targeted at banners like\n                ).',
    'across banner changes.',
)
s4_clean = s4_clean.replace(
    'Supply Bundles (\n                ). Re-engineer',
    'Supply Bundles. Re-engineer',
)
s4_clean = s4_clean.replace(
    'Standard Wish banner (\n                ):',
    'Standard Wish banner:',
)
s4_clean = s4_clean.replace(
    'Welkin Moon subscription (\n                ).</li>',
    'Welkin Moon subscription.</li>',
)
text = text[:s4_start] + s4_clean + text[s4_end:]

path.write_text(text, encoding="utf-8")
print("Patched", path)
