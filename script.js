// --- Fake News Detection System ---
// This script uses classic data structures (arrays, hash tables) for simple rule-based text analysis.

// Initial suspicious keywords (static, no UI management)
let suspiciousKeywords = [
    // --- List 1 ---
    'shocking', 'unbelievable', 'exposed', 'secret', 'miracle', 'banned', 'urgent', 'revealed', 'top secret', 'confidential', 'hidden truth', 'cover-up', 'hoax', 'scam', 'conspiracy', 'leaked', 'unreported', 'sensational', 'outrageous', 'forbidden', 'suppressed', 'unbelievable truth', 'the real story', 'nobody told you', 'exclusive', 'too good to be true', 'not a drill', 'viral', 'alert', 'danger', 'beware', 'warning', 'risk', 'threat', 'shocking truth', 'insane', 'breaking', 'unbelievable claim', 'massive', 'giant', 'enormous', 'never seen before', 'once in a lifetime', 'confirmed', 'insider', 'expert reveals', 'fake news', 'truth exposed', 'new discovery', 'magic cure', '100% proven', 'secret method', 'scandal', 'lies', 'political agenda', 'false flag', 'propaganda', 'social experiment', 'agenda', 'manipulation', 'targeted', 'censored', 'deleted', 'shadow banned', 'backdoor', 'breach', 'shocking footage', 'disaster', 'catastrophe', 'outbreak', 'collapse', 'destroy', 'hacked', 'exposed truth', 'evil plan', 'elites', 'puppets', 'fake story', 'made up', 'fiction', 'outrageous claim', 'leaked email', 'secret document', 'classified', 'government secret', 'deep state', 'reptilian', 'mind control', 'mk ultra', 'illuminati', 'NWO', 'false prophet', 'zombie apocalypse', 'hidden camera', 'caught on tape', 'jaw-dropping', 'terrifying', 'shocking image', 'disturbing video', 'massive cover-up',
    // --- List 2 ---
    "you won't believe", 'this will blow your mind', 'doctors hate him', 'one simple trick', 'what happens next will shock you', 'click here to see', 'don’t miss this', 'she did this and you won’t believe what happened', 'why nobody is talking about this', '5 things you didn’t know', 'number 4 will shock you', 'he tried this and it worked', 'change your life instantly', 'life-changing secret', 'proven method', 'guaranteed results', 'must see', 'instant results', 'the answer will surprise you', 'experts stunned', 'this is what they don’t want you to know', 'exposed by insiders', 'this is not a joke', 'this isn’t fake', 'only smart people can answer this', 'revealed at last', 'scientists are baffled', 'turned his life around', 'what happens next is unbelievable', 'unbelievable footage', 'unbelievable secret', 'caught red handed', 'the internet is going crazy', 'people are freaking out', 'internet shocked', 'never heard before', 'you’ve been lied to', 'this changes everything', "before it's too late", 'act now', 'don’t wait',
    // --- List 3 ---
    'terrifying', 'heartbreaking', 'incredible', 'amazing', 'devastated', 'furious', 'outraged', 'disgusting', 'horrific', 'inspiring', 'magical', 'emotional', 'sad', 'happy', 'glorious', 'devastating', 'alarming', 'pathetic', 'gross', 'enraged', 'crying', 'broken', 'epic', 'worst', 'adorable', 'stunning', 'breathtaking', 'awe-inspiring', 'hilarious', 'thrilling', 'overwhelmed', 'amazed', 'horrifying', 'killed', 'dead', 'explosion', 'chaos', 'emergency', 'suicide', 'trauma', 'tragedy', 'destruction', 'war', 'violence', 'riot', 'tears', 'shocker', 'desperate', 'hopeless', 'betrayal', 'revenge', 'injustice', 'humiliated', 'crushed', 'glorious victory', 'hopeless case', 'final warning',
    // --- List 4 ---
    'you won', 'claim now', 'free prize', 'free money', 'limited time', 'order now', 'special offer', 'buy now', 'only today', 'last chance', 'get rich quick', 'instant cash', 'double your money', 'win big', 'cash prize', 'claim reward', 'free gift', 'urgent message', 'exclusive offer', 'congratulations', 'winner alert', 'hot deal', 'risk-free', 'guaranteed income', 'zero investment', 'make $500 a day', 'free trial', 'no cost', 'earn from home', 'easy income', 'unlimited earnings', 'best deal', '100% legit', 'click now', 'sign up today', 'enter your details', 'lucky winner', 'win today', 'selected for reward', 'one-time deal', "don't delay", 'just pay shipping', 'act fast', 'instant access', 'lottery', 'crypto boom', 'passive income', 'forex trading secret', 'pyramid scheme', 'MLM', 'network marketing',
    // --- List 5 ---
    'deep state', 'illuminati', 'globalist', 'NWO', 'puppet master', 'rigged election', 'voter fraud', 'stolen votes', 'media blackout', 'brainwashing', 'censorship', 'global agenda', 'false flag operation', 'big pharma', 'government control', 'population control', 'mark of the beast', 'anti-vaxxer', '5G causes virus', 'fake pandemic', 'plandemic', 'chemtrails', 'climate hoax', 'QAnon', 'Epstein didn’t kill himself', 'crisis actor', 'hoax shooting', 'gun grab', 'socialist takeover', 'communism rising', 'agenda 2030', 'woke agenda', 'fake democracy', 'political correctness', 'elites control everything', 'lizard people', 'satanic ritual', 'adrenochrome', 'child trafficking ring', 'pedogate', 'blood sacrifice', 'NWO agents', 'spiritual warfare', 'vaccine chips', 'biometric tracking', 'secret societies',
    // --- List 6 (domains) ---
    'clickbaitnews.com', 'truthrevealed.net', 'conspiracynow.info', 'viraltruths.xyz', 'fakejournal.com', 'worldpoliticsuncovered.org', 'rawnews247.co', 'shockreport.live', 'secretsources.tv', 'breakingnow.net', 'urgentnewsfeed.com', 'watchthisbeforedeleted.com', 'healthmiraclecures.net', 'justnewsfacts.biz', 'unknownsource.news', 'alternativehealing.life', 'realtruthtoday.tv', 'dailyreveal.org', 'megaexposed.news', 'thehiddenmessage.com', 'viralcentral.co', 'politicsalert.live', 'secretsocietyfacts.org'
];

// For fast lookup, use a hash table (object)
let keywordTable = {};
function updateKeywordTable() {
    keywordTable = {};
    suspiciousKeywords.forEach(word => {
        keywordTable[word.toLowerCase()] = true;
    });
}
updateKeywordTable();

// DOM Elements
const newsForm = document.getElementById('news-form');
const newsInput = document.getElementById('news-input');
const resultDiv = document.getElementById('result');
const foundKeywordsDiv = document.getElementById('found-keywords');
const foundKeywordsCountDiv = document.getElementById('found-keywords-count');
const themeSwitcher = document.getElementById('theme-switcher');

// Theme switcher logic
let darkMode = false;
themeSwitcher.onclick = function() {
    darkMode = !darkMode;
    document.body.classList.toggle('dark', darkMode);
    themeSwitcher.textContent = darkMode ? 'Switch Theme' : 'Switch Theme'; // You can change text to 'Light'/'Dark' if desired
};

// --- Detection Logic ---
function detectFakeNews(text) {
    // Normalize input
    const input = text.toLowerCase();
    let foundKeywords = [];

    // Check for each keyword (array + hash table for O(1) lookup)
    suspiciousKeywords.forEach(word => {
        // For multi-word keywords, use includes; for single, use word boundaries
        if (word.includes(' ')) {
            if (input.includes(word)) foundKeywords.push(word);
        } else {
            // Regex for word boundary
            const regex = new RegExp('\\b' + word + '\\b', 'i');
            if (regex.test(input)) foundKeywords.push(word);
        }
    });

    // Scoring: if less than or equal to 4 suspicious keywords, classify as 'fake'
    const isFake = foundKeywords.length >= 4 && foundKeywords.length > 0;
    return {
        isFake,
        foundKeywords
    };
}

// --- Form Submission ---
newsForm.onsubmit = function(e) {
    e.preventDefault();
    const text = newsInput.value.trim();
    if (!text) {
        resultDiv.textContent = 'Please enter a news headline or article.';
        resultDiv.className = '';
        foundKeywordsDiv.innerHTML = '';
        foundKeywordsCountDiv.textContent = '';
        return;
    }
    const { isFake, foundKeywords } = detectFakeNews(text);
    if (isFake) {
        resultDiv.textContent = `Likely FAKE news! (${foundKeywords.length} suspicious keyword${foundKeywords.length !== 1 ? 's' : ''} found)`;
        resultDiv.className = 'fake';
    } else {
        resultDiv.textContent = `Likely REAL news! (${foundKeywords.length} suspicious keyword${foundKeywords.length !== 1 ? 's' : ''} found)`;
        resultDiv.className = 'real';
    }
    // Display found keywords count and as tags
    if (foundKeywords.length > 0) {
        foundKeywordsCountDiv.textContent = '';
        foundKeywordsDiv.innerHTML = foundKeywords.map(word => `<span class='keyword'>${word}</span>`).join(' ');
    } else {
        foundKeywordsCountDiv.textContent = '';
        foundKeywordsDiv.innerHTML = '';
    }
}; 