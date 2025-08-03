<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lefties | Field OS v1.0</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary-blue: #0071B6;
            --dark-bg: #0D1117;
            --mid-dark-bg: #161B22;
            --light-text: #e5e7eb;
            --success-green: #10B981;
            --warning-amber: #F59E0B;
            --danger-red: #EF4444;
        }
        body {
            font-family: 'Nunito', sans-serif;
            background-color: var(--dark-bg);
            color: var(--light-text);
        }
        .deep-glass {
            background: linear-gradient(145deg, rgba(30, 41, 59, 0.2), rgba(17, 24, 39, 0.4));
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 1.5rem;
            backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
        }
        .btn {
            padding: 1rem 1.5rem;
            border-radius: 1rem;
            font-weight: 700;
            text-align: center;
            transition: all 0.2s ease;
            cursor: pointer;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .btn-primary { background-color: rgba(0, 113, 182, 0.4); }
        .btn-primary:hover { background-color: rgba(0, 113, 182, 0.6); transform: translateY(-2px); }
        .btn-secondary { background-color: rgba(255, 255, 255, 0.05); }
        .btn-secondary:hover { background-color: rgba(255, 255, 255, 0.1); }
        .result-card { border-left-width: 4px; }
        .border-success { border-color: var(--success-green); }
        .text-success { color: var(--success-green); }
        .border-warning { border-color: var(--warning-amber); }
        .text-warning { color: var(--warning-amber); }
        .border-danger { border-color: var(--danger-red); }
        .text-danger { color: var(--danger-red); }
        .icon { width: 1.5rem; height: 1.5rem; margin-right: 0.75rem; flex-shrink: 0; }
        textarea { background-color: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.1); border-radius: 0.5rem; }
    </style>
</head>
<body class="antialiased">

    <main class="py-12">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <img src="core-logo-transparent.png" alt="Lefties Logo" class="h-16 w-auto mx-auto mb-4" onerror="this.style.display='none'">
                <h1 class="text-3xl md:text-4xl font-black text-white">Lefties Field OS</h1>
                <p class="mt-2 text-lg text-gray-400">Diagnosis | Pricing | Scripts | Logging</p>
            </div>

            <div id="wizard" class="max-w-2xl mx-auto">
                <!-- Step 1: Fibre ID -->
                <div id="step-1" class="step deep-glass p-8">
                    <h2 class="text-2xl font-bold text-blue-400 mb-1">Step 1: Identify the Fibre</h2>
                    <p class="text-gray-400 mb-6">Perform a burn test. What did you find?</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button class="btn btn-primary" data-fibre="Wool">Burns slowly, smells like hair, crumbly ash</button>
                        <button class="btn btn-primary" data-fibre="Nylon">Melts & burns, celery smell, hard bead</button>
                        <button class="btn btn-primary" data-fibre="Polyester">Melts, sweet/fruity smell, black bead</button>
                        <button class="btn btn-primary" data-fibre="Olefin">Melts quickly, tar smell, tan bead</button>
                        <button class="btn btn-primary" data-fibre="CottonJute">Burns, smells like paper, soft grey ash</button>
                        <button class="btn btn-secondary" data-fibre="Unknown">Fibre is Unknown / High Risk</button>
                    </div>
                </div>

                <!-- Step 2: Stain Type -->
                <div id="step-2" class="step deep-glass p-8 hidden">
                    <h2 class="text-2xl font-bold text-blue-400 mb-1">Step 2: Identify the Stain</h2>
                    <p class="text-gray-400 mb-6">What category does the stain fall into?</p>
                    <div class="grid grid-cols-2 gap-4">
                        <button class="btn btn-primary" data-stain="Organic">Organic (Food, soil, urine)</button>
                        <button class="btn btn-primary" data-stain="Tannin">Tannin (Coffee, tea, wine)</button>
                        <button class="btn btn-primary" data-stain="Oil">Oil (Grease, ink, general grime)</button>
                        <button class="btn btn-primary" data-stain="Dye">Synthetic Dye (Cordial, makeup)</button>
                    </div>
                </div>

                <!-- Step 3: The Playbook (Results) -->
                <div id="step-3" class="step hidden">
                    <div class="deep-glass p-8 mb-6 space-y-8">
                        <div>
                            <h2 class="text-2xl font-bold text-blue-400 mb-4">The Playbook</h2>
                            <div class="grid grid-cols-2 gap-4">
                                <div><p class="text-sm text-gray-400">Fibre:</p><p id="result-fibre" class="text-xl font-bold"></p></div>
                                <div><p class="text-sm text-gray-400">Stain:</p><p id="result-stain" class="text-xl font-bold"></p></div>
                            </div>
                        </div>
                        
                        <!-- Pricing Module -->
                        <div id="pricing-module" class="hidden">
                            <h3 class="text-xl font-bold mb-3 flex items-center"><svg class="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01"></path></svg>Suggested Pricing Add-On</h3>
                            <div id="pricing-content" class="result-card border-success bg-gray-900/50 p-4 rounded-lg"></div>
                        </div>

                        <!-- Client Script Module -->
                        <div>
                            <h3 class="text-xl font-bold mb-3 flex items-center"><svg class="icon text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>Client-Facing Script</h3>
                            <div id="script-content" class="bg-gray-900/50 p-4 rounded-lg text-gray-300 italic"></div>
                            <button id="copy-script-btn" class="btn btn-secondary text-xs py-1 px-3 mt-2">Copy Script</button>
                        </div>

                        <!-- Flags Section -->
                        <div>
                            <h3 class="text-xl font-bold mb-3 flex items-center"><svg class="icon text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>Flags & Warnings</h3>
                            <div class="space-y-3"><div id="green-flags" class="flex items-start"></div><div id="red-flags" class="flex items-start"></div></div>
                        </div>

                        <!-- Process Section -->
                        <div>
                            <h3 class="text-xl font-bold mb-3 flex items-center"><svg class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>Standard Procedure</h3>
                            <ol id="process-list" class="list-decimal list-inside space-y-2 text-gray-300"></ol>
                        </div>
                        
                        <!-- Chemicals Section -->
                        <div>
                            <h3 class="text-xl font-bold mb-3 flex items-center"><svg class="icon text-danger" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>Recommended Chemicals</h3>
                            <div id="result-playbook" class="space-y-4"></div>
                        </div>

                        <!-- Job Log Module -->
                        <div>
                            <h3 class="text-xl font-bold mb-3 flex items-center"><svg class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>Job Log</h3>
                            <div class="bg-gray-900/50 p-4 rounded-lg">
                                <label for="job-notes" class="font-bold text-gray-400">Job Notes:</label>
                                <textarea id="job-notes" rows="3" class="w-full p-2 mt-1" placeholder="e.g., Client used supermarket spray. Heavy traffic wear by door. Pre-tested in wardrobe, all clear."></textarea>
                                <label for="photo-upload" class="font-bold text-gray-400 mt-4 block">Upload "Before" Photo:</label>
                                <input type="file" id="photo-upload" accept="image/*" class="w-full text-sm text-gray-400 mt-1 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500/20 file:text-blue-300 hover:file:bg-blue-500/30">
                                <img id="photo-preview" class="mt-4 rounded-lg max-h-60 hidden" />
                                <p class="text-xs text-gray-500 mt-2">Note: This does not save the log. Take a screenshot of the page to keep a permanent record.</p>
                            </div>
                        </div>

                    </div>
                    <button id="reset-btn" class="btn btn-secondary w-full">Start Over</button>
                </div>
            </div>
        </div>
    </main>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const wizard = document.getElementById('wizard');
            const steps = wizard.querySelectorAll('.step');
            const resetButton = document.getElementById('reset-btn');
            const copyScriptButton = document.getElementById('copy-script-btn');
            const photoUpload = document.getElementById('photo-upload');
            const photoPreview = document.getElementById('photo-preview');

            let selections = { fibre: null, stain: null };

            const playbookData = {
                fibres: {
                    "Wool": { risk: 'High', safeChems: ['Neutral Detergent', 'Enzyme Spotter', 'Acidic Spotter'], greenFlags: ["Hides soil well, resilient to traffic."], redFlags: ["Sensitive to high pH (>8), can be damaged by bleach.", "Prone to browning if overwet.", "Can shrink if temperature is too high."] },
                    "Nylon": { risk: 'Low', safeChems: ['Neutral Detergent', 'Enzyme Spotter', 'Alkaline Degreaser', 'Acidic Spotter', 'Reducer'], greenFlags: ["Very resilient, excellent for high traffic areas.", "Responds well to a wide range of chemicals."], redFlags: ["Can be stained by acid dyes (cordial, food dyes) if not protected."] },
                    "Polyester": { risk: 'Low', safeChems: ['Neutral Detergent', 'Enzyme Spotter', 'Alkaline Degreaser', 'Acidic Spotter', 'Oxidiser'], greenFlags: ["Extremely stain resistant to water-based stains.", "Solution-dyed versions are very colorfast."], redFlags: ["Attracts oily soils.", "Can be damaged by high heat."] },
                    "Olefin": { risk: 'Low', safeChems: ['Neutral Detergent', 'Enzyme Spotter', 'Alkaline Degreaser', 'Acidic Spotter', 'Oxidiser'], greenFlags: ["Highly resistant to stains, moisture, and fading.", "Excellent chemical resistance."], redFlags: ["Low melting point, avoid high heat.", "Can be damaged by oily stains."] },
                    "CottonJute": { risk: 'High', safeChems: ['Neutral Detergent', 'Acidic Spotter'], greenFlags: ["Natural fibre, often has a premium look."], redFlags: ["Highly absorbent, prone to browning and water stains.", "Can shrink easily.", "Weakens when wet, avoid aggressive cleaning."] },
                    "Unknown": { risk: 'High', safeChems: ['Neutral Detergent'], greenFlags: ["Treating as high-risk is the safest option."], redFlags: ["Proceed with extreme caution.", "Only use neutral pH products.", "Always pre-test in an inconspicuous area."] }
                },
                stains: {
                    "Organic": { chems: ['Enzyme Spotter', 'Oxidiser', 'Neutral Detergent'], process: ["Scrape up any solid matter.", "Apply Enzyme Spotter, agitate gently.", "Allow 5-10 minutes dwell time, keeping it moist.", "Rinse thoroughly with HWE.", "If colour remains, consider a light application of Oxidiser (on approved fibres)."], pricingAddOn: "Urine / Biohazard (from +$45)" },
                    "Tannin": { chems: ['Acidic Spotter', 'Neutral Detergent'], process: ["Blot the stain thoroughly.", "Apply Acidic Spotter.", "Tamp gently, do not scrub.", "Allow short dwell time (2-3 mins).", "Rinse thoroughly with HWE."] },
                    "Oil": { chems: ['Alkaline Degreaser', 'Neutral Detergent'], process: ["Apply Alkaline Degreaser (on approved fibres).", "Agitate to emulsify the oil.", "Rinse thoroughly with HWE.", "Repeat if necessary."], pricingAddOn: "Heavy Soil / Pet Treatment (from +$25)" },
                    "Dye": { chems: ['Reducer', 'Oxidiser'], process: ["Clean the area first with Neutral Detergent.", "Test Reducer/Oxidiser in a hidden spot.", "Apply chemical carefully to the stain only.", "Follow with specific instructions for heat or dwell time.", "Rinse thoroughly."], pricingAddOn: "Advanced Stain Removal (Quoted onsite)" }
                },
                chemicals: {
                    'Neutral Detergent': { pH: '6-8', purpose: 'General soil', safeOn: 'All fibres', warning: 'Test colourfastness.', risk: 'success' },
                    'Enzyme Spotter': { pH: '~7', purpose: 'Protein/organic', safeOn: 'Synthetic & wool (short dwell)', warning: 'Rinse; avoid long dwell on wool.', risk: 'success' },
                    'Alkaline Degreaser': { pH: '9-10', purpose: 'Oil & grease', safeOn: 'Synthetic', warning: 'NOT ON WOOL/JUTE; neutralise after.', risk: 'warning' },
                    'Acidic Spotter': { pH: '2-4', purpose: 'Tannin & browning', safeOn: 'Synthetic (test on wool)', warning: 'May lighten colours; pre-test.', risk: 'warning' },
                    'Oxidiser': { pH: '5-7', purpose: 'Organic & odour', safeOn: 'Synthetic; caution on natural', warning: 'Use diluted; protect dark colours.', risk: 'danger' },
                    'Reducer': { pH: 'Neutral', purpose: 'Synthetic dyes', safeOn: 'Nylon & solution-dyed', warning: 'NOT ON WOOL; ventilate.', risk: 'danger' }
                },
                scripts: {
                    "Default": "Okay, so we're looking at a standard {stain} stain on a {fibre} carpet. I'll use a specific {chem} that's designed for this. I'll pre-test it to be safe, but it should come up great.",
                    "Wool_Tannin": "Okay, so it looks like we've got a tannin stain here, probably from coffee or tea. Because this is a wool carpet, we can't just blast it. I'll use a specific acidic spotter that's safe for wool to gently lift the stain without damaging the fibres. We should get a great result, but I wanted to let you know we're taking extra care with it.",
                    "Nylon_Dye": "Right, this looks like a synthetic dye stain, maybe from a cordial or drink. Because this is a nylon carpet, we have a good chance of removing this with a specialized chemical called a reducer. I'll need to be careful and apply some controlled heat, but it's the best way to tackle this type of stain.",
                    "Polyester_Oil": "This looks like an oily stain on a polyester carpet. The good news is polyester cleans up really well. I'll use a degreaser to break down the oil and then flush it out completely. Should look good as new.",
                    "CottonJute_Default": "Okay, this is a natural fibre, so we have to be really careful. I'll be using a pH-neutral cleaner and a low-moisture method to avoid any browning or water marks. The goal here is a safe, effective clean without risking damage to the delicate fibres.",
                    "Unknown_Default": "Because we can't be 100% sure on the fibre type, I have to treat this as a high-risk job. I'll be using the safest, most gentle method with a neutral pH cleaner. I'll pre-test everything in a hidden spot before I touch the main area.",
                    "Organic_Urine": "It looks like we're dealing with a pet urine spot here. A standard clean won't fix this because the problem is deep in the underlay. I'll need to use a special enzyme treatment and a sub-surface extraction tool to flush it out properly. This is an add-on service, but it's the only way to properly treat the odour at its source."
                }
            };

            function showStep(stepNumber) {
                steps.forEach(step => step.classList.add('hidden'));
                document.getElementById(`step-${stepNumber}`).classList.remove('hidden');
            }

            function generatePlaybook() {
                const fibreInfo = { ...playbookData.fibres[selections.fibre] };
                const stainInfo = { ...playbookData.stains[selections.stain] };
                
                document.getElementById('result-fibre').textContent = selections.fibre.replace('Jute', '/Jute');
                document.getElementById('result-stain').textContent = selections.stain;
                
                // --- Pricing Module ---
                const pricingModule = document.getElementById('pricing-module');
                const pricingContent = document.getElementById('pricing-content');
                if (stainInfo.pricingAddOn) {
                    pricingContent.innerHTML = `<p class="font-bold text-lg">${stainInfo.pricingAddOn}</p><p class="text-sm text-gray-400">Reason: This job requires specialized chemicals and/or techniques beyond a standard clean.</p>`;
                    pricingModule.classList.remove('hidden');
                } else {
                    pricingModule.classList.add('hidden');
                }

                // --- Client Script ---
                const scriptContainer = document.getElementById('script-content');
                let scriptKey = `${selections.fibre}_${selections.stain}`;
                if(selections.stain === "Organic" && (selections.fibre === "Wool" || selections.fibre === "Nylon" || selections.fibre === "Polyester")) scriptKey = "Organic_Urine";
                if(!playbookData.scripts[scriptKey]) scriptKey = `${selections.fibre}_Default`;
                if(!playbookData.scripts[scriptKey]) scriptKey = "Default";

                let scriptText = playbookData.scripts[scriptKey]
                    .replace('{stain}', selections.stain.toLowerCase())
                    .replace('{fibre}', selections.fibre.toLowerCase().replace('jute','/jute'))
                    .replace('{chem}', stainInfo.chems[0]);
                scriptContainer.textContent = scriptText;

                // --- Flags & Process ---
                document.getElementById('green-flags').innerHTML = `<div class="w-6 h-6 flex-shrink-0 text-success mr-3"><svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><div><h4 class="font-bold text-success">Green Flags</h4><ul class="list-disc list-inside text-sm text-gray-300">${fibreInfo.greenFlags.map(f => `<li>${f}</li>`).join('')}</ul></div>`;
                document.getElementById('red-flags').innerHTML = `<div class="w-6 h-6 flex-shrink-0 text-danger mr-3"><svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg></div><div><h4 class="font-bold text-danger">Red Flags</h4><ul class="list-disc list-inside text-sm text-gray-300">${fibreInfo.redFlags.map(f => `<li>${f}</li>`).join('')}</ul></div>`;
                document.getElementById('process-list').innerHTML = stainInfo.process.map(step => `<li>${step}</li>`).join('');

                // --- Chemicals ---
                const chemicalsContainer = document.getElementById('result-playbook');
                let recommendedChems = stainInfo.chems.filter(chem => fibreInfo.safeChems.includes(chem));
                if (recommendedChems.length === 0) recommendedChems.push('Neutral Detergent'); 

                chemicalsContainer.innerHTML = ''; 
                recommendedChems.forEach(chemName => {
                    const chem = playbookData.chemicals[chemName];
                    chemicalsContainer.innerHTML += `<div class="result-card border-${chem.risk} bg-gray-900/50 p-4 rounded-lg"><h3 class="text-xl font-bold text-${chem.risk}">${chemName}</h3><p class="text-sm text-gray-400">${chem.purpose}</p><hr class="border-gray-700 my-2"><div class="text-sm"><p><span class="font-bold">pH Level:</span> ${chem.pH}</p><p><span class="font-bold">Safe On:</span> ${chem.safeOn}</p><p class="font-bold text-${chem.risk} mt-2">Warning: ${chem.warning}</p></div></div>`;
                });
            }

            wizard.addEventListener('click', (e) => {
                if (e.target.matches('[data-fibre]')) { selections.fibre = e.target.dataset.fibre; showStep(2); }
                if (e.target.matches('[data-stain]')) { selections.stain = e.target.dataset.stain; generatePlaybook(); showStep(3); }
            });

            resetButton.addEventListener('click', () => {
                selections.fibre = null; selections.stain = null;
                document.getElementById('job-notes').value = '';
                photoPreview.classList.add('hidden');
                photoUpload.value = '';
                showStep(1);
            });
            
            copyScriptButton.addEventListener('click', () => {
                const scriptText = document.getElementById('script-content').textContent;
                navigator.clipboard.writeText(scriptText).then(() => {
                    copyScriptButton.textContent = 'Copied!';
                    setTimeout(() => { copyScriptButton.textContent = 'Copy Script'; }, 2000);
                });
            });

            photoUpload.addEventListener('change', (event) => {
                const file = event.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        photoPreview.src = e.target.result;
                        photoPreview.classList.remove('hidden');
                    };
                    reader.readAsDataURL(file);
                }
            });
        });
    </script>
</body>
</html>
