// Questions database
const questions = {
    growing_up: {
        light: [
            "What was your favorite game as a kid?",
            "Did you have a childhood nickname?",
            "What's the silliest thing you believed as a child?",
            "Who was your childhood hero?",
            "What was your favorite snack growing up?",
            "Did you have any imaginary friends?",
            "What's a funny memory from elementary school?",
            "What was your favorite cartoon or TV show?",
            "What did you want to be when you grew up?",
            "What's the first concert or movie you remember seeing?"
        ],
        medium: [
            "What's a lesson you learned early in life?",
            "How did your hometown shape who you are?",
            "Who were you closest to in your family as a child?",
            "What's a tradition from your childhood you cherish?",
            "What's a challenge you faced growing up?",
            "How did you usually handle conflict as a kid?",
            "What's a value you learned from your parents or guardians?",
            "What's a moment from your childhood you wish you could relive?",
            "How did you celebrate birthdays or holidays?",
            "What's something you wish you could tell your younger self?"
        ],
        deep: [
            "How did your upbringing influence your view on love?",
            "What childhood experience shaped your core beliefs?",
            "How do you think your childhood wounds affect your relationships now?",
            "What's a fear from childhood you still carry?",
            "In what ways have you healed from your past?",
            "What's a family pattern you hope to break?",
            "How would you describe your inner child?",
            "What's a memory that changed the way you see the world?",
            "How do you want your future children's childhood to be different from yours?",
            "What did you need most as a child that you didn't get?"
        ]
    },
    family_connections: {
        light: [
            "How big is your extended family?",
            "Who's the funniest person in your family?",
            "What's your favorite family tradition?",
            "Do you have any family recipes?",
            "What's a classic family inside joke?",
            "Who are you most like in your family?",
            "What's a holiday your family makes special?",
            "Who's the best cook in your family?",
            "What's a family vacation you remember fondly?",
            "What's a family nickname you have or have given?"
        ],
        medium: [
            "How do you stay connected with your family?",
            "What role do you play in your family?",
            "How do you handle disagreements with family?",
            "What's a value your family instilled in you?",
            "How do you feel about family gatherings?",
            "What's something your family doesn't know about you?",
            "How do you show love to your family members?",
            "What's a family story you never get tired of hearing?",
            "How do you balance family and independence?",
            "What's a lesson you learned from a family member?"
        ],
        deep: [
            "How has your family shaped your view of relationships?",
            "What's a family dynamic you want to change?",
            "How do you want your future family to be different?",
            "What's a hard truth about your family you've come to accept?",
            "How do you process family conflict?",
            "What's a family value you want to pass on?",
            "What boundaries have you set with family, and why?",
            "How do you cope with family expectations?",
            "What's a healing moment you've had with your family?",
            "How do you define \"family\" beyond blood relations?"
        ]
    },
    values: {
        light: [
            "What's a value you admire in others?",
            "What's a cause you'd volunteer for?",
            "Do you believe in luck or fate?",
            "What's a motto you like?",
            "What's a superstition you secretly believe?",
            "What's something you think everyone should try once?",
            "What's a rule you always follow?",
            "What's a belief you've changed your mind about?",
            "What's a \"life hack\" you swear by?",
            "What's a silly hill you'd die on?"
        ],
        medium: [
            "What value guides your daily decisions?",
            "How do you define honesty?",
            "What's a non-negotiable for you in relationships?",
            "What's a belief you hold that's different from your family's?",
            "How do you handle ethical dilemmas?",
            "What's a principle you'd never compromise?",
            "How do you handle disagreement on values?",
            "What's a value you admire in your friends?",
            "How do you express your beliefs in action?",
            "What's a lesson that shaped your worldview?"
        ],
        deep: [
            "What core belief guides your life?",
            "How do your values shape your relationships?",
            "When have your values been tested?",
            "How do you handle it when your beliefs are challenged?",
            "What's a value you want to teach your children?",
            "How do your beliefs influence your goals?",
            "What's a belief you're still exploring?",
            "How do you reconcile differences in values with loved ones?",
            "What's a time you acted against your values, and what did you learn?",
            "How do your values help you through tough times?"
        ]
    },
    spiritual: {
        light: [
            "Do you believe in ghosts or aliens?",
            "What's your zodiac sign, and do you relate to it?",
            "Do you have any spiritual rituals?",
            "Have you ever had a \"sign\" from the universe?",
            "What's your favorite way to find peace?",
            "Do you believe in luck or destiny?",
            "What's a spiritual tradition you find interesting?",
            "Have you ever tried meditation or yoga?",
            "What's a song that feels spiritual to you?",
            "What's a place that feels sacred or peaceful?"
        ],
        medium: [
            "How do you define spirituality?",
            "What role does faith play in your life?",
            "How do you find meaning in difficult times?",
            "What's a spiritual lesson you've learned?",
            "How do you connect with something bigger than yourself?",
            "What's a spiritual practice you value?",
            "How do you handle differences in spiritual beliefs?",
            "What's a question about life you often ponder?",
            "How do you nurture your spiritual side?",
            "What's a moment you felt truly connected to the world?"
        ],
        deep: [
            "What's your spiritual journey been like?",
            "How do your spiritual beliefs impact your relationships?",
            "What's a spiritual experience that changed you?",
            "How do you reconcile doubt and faith?",
            "What's a spiritual value you want to pass on?",
            "How do you handle loss or grief spiritually?",
            "What's a question about existence you wish you could answer?",
            "How do you integrate spirituality into your daily life?",
            "What's a spiritual wound you're healing from?",
            "How do you define your purpose in a spiritual sense?"
        ]
    },
    career: {
        light: [
            "What was your first job?",
            "What's a dream job you had as a kid?",
            "What's the weirdest job you've ever had?",
            "Who inspires you in your field?",
            "What's your favorite part of your workday?",
            "What's a work skill you're proud of?",
            "What's your go-to work snack?",
            "What's a funny work story?",
            "What's a job you'd never want?",
            "What's a career you admire but wouldn't do?"
        ],
        medium: [
            "How did you choose your career path?",
            "What motivates you at work?",
            "What's a challenge you've overcome professionally?",
            "How do you handle work-life balance?",
            "What's a lesson you've learned from a boss or mentor?",
            "How do you deal with failure at work?",
            "What's a professional risk you've taken?",
            "How do you define success in your career?",
            "What's a work value you won't compromise?",
            "How do you want your career to evolve?"
        ],
        deep: [
            "What's your sense of purpose in your work?",
            "How does your career align with your values?",
            "What's a calling you feel drawn to?",
            "How do you want to make a difference through your work?",
            "What's a dream you haven't pursued yet?",
            "How do you handle setbacks in your calling?",
            "What's a legacy you want to leave in your field?",
            "How do you balance ambition and contentment?",
            "What's a career regret, and what did you learn?",
            "How do you envision your ideal work-life in ten years?"
        ]
    },
    growth: {
        light: [
            "What's a new skill you've learned lately?",
            "What's a book or podcast that inspired you?",
            "What's a habit you're proud of?",
            "What's a goal you're working on?",
            "Who's your role model for personal growth?",
            "What's a fun challenge you've taken on?",
            "What's a fear you've overcome?",
            "What's something you're curious about learning?",
            "What's a hobby that's helped you grow?",
            "What's a compliment you've received that meant a lot?"
        ],
        medium: [
            "What's a turning point in your self-growth?",
            "How do you handle setbacks?",
            "What's a limiting belief you've let go of?",
            "How do you practice self-compassion?",
            "What's a lesson you learned the hard way?",
            "How do you stay motivated to grow?",
            "What's a risk you took for personal growth?",
            "How do you measure your progress?",
            "What's a challenge you're currently working through?",
            "How do you seek feedback for growth?"
        ],
        deep: [
            "What's your biggest area for growth right now?",
            "How do you define self-acceptance?",
            "What's a transformation you're proud of?",
            "How do you heal from past mistakes?",
            "What's a deep fear you're working to overcome?",
            "How do you balance self-improvement with self-love?",
            "What's a dream version of yourself you're working toward?",
            "How do you handle feeling \"not enough\"?",
            "What's a breakthrough you've had in therapy or reflection?",
            "How do you want to grow in your relationships?"
        ]
    },
    relationships: {
        light: [
            "What's your idea of a perfect date?",
            "What's a romantic gesture you love?",
            "What's your love language?",
            "What's a couple you admire?",
            "What's your favorite thing about being in a relationship?",
            "What's a silly thing you and a partner have done together?",
            "What's your favorite way to show affection?",
            "What's a small thing that makes you feel loved?",
            "What's your favorite memory of us (or a past relationship)?",
            "What activities do you enjoy doing with a partner?"
        ],
        medium: [
            "How do you handle conflict in relationships?",
            "What's a lesson you've learned from past relationships?",
            "How do you express vulnerability with a partner?",
            "What's a value you need in a relationship?",
            "How do you balance independence and togetherness?",
            "What's a fear you have about relationships?",
            "How do you know when you're falling in love?",
            "What's an act of love that means a lot to you?",
            "What's a boundary that's important to you?",
            "How do you want to grow in a relationship?"
        ],
        deep: [
            "How have your past relationships shaped you?",
            "What's your biggest hope for a future partnership?",
            "How do you define emotional intimacy?",
            "What's a wound from a past relationship you're healing?",
            "How do you want to support your partner's growth?",
            "What's a lesson about love you wish everyone knew?",
            "How do you handle jealousy or insecurity?",
            "What's your vision for a healthy relationship?",
            "How do you want to resolve conflict with a partner?",
            "What does \"falling in love\" mean to you?"
        ]
    },
    dreams: {
        light: [
            "What is your biggest dream in life?",
            "What did you dream of becoming as a child?",
            "What is your dream job?",
            "What's a place you dream of visiting?",
            "Who or what inspires your dreams?",
            "What's a talent or skill you wish you had?",
            "What would your perfect day look like?",
            "What's a small dream you've already achieved?",
            "What's a silly or fun dream you have?",
            "What's something you love to do that makes you lose track of time?"
        ],
        medium: [
            "How did you choose your biggest dream?",
            "What steps have you taken toward your dream?",
            "What's the main ambition in your life now?",
            "What challenges have you faced in pursuing your dreams?",
            "Do your family and friends support your ambitions?",
            "What skills do you want to develop to achieve your dreams?",
            "How do you stay motivated to pursue your dreams?",
            "Have your dreams changed as you've grown older?",
            "What would you do if you knew you couldn't fail?",
            "What's an ambition you rarely share with others?"
        ],
        deep: [
            "What's your highest priority in this lifetime?",
            "Is this your dream, or someone else's?",
            "Are you settling for less than your true dream?",
            "What would you feel if you achieved your biggest dream?",
            "What steps can you take today toward your dream?",
            "What's a dream you've let go of, and why?",
            "How do your ambitions align with your values?",
            "What legacy do you want to leave behind?",
            "How do you handle doubt or fear about your dreams?",
            "How would your life change if you fully pursued your dreams?"
        ]
    },
    looking_ahead: {
        light: [
            "What's something you're looking forward to this week?",
            "What's a fun plan you want to make together?",
            "What's a new hobby you want to try?",
            "What's a trip you want to take?",
            "What's a goal for the next year?",
            "What's a holiday you're excited about?",
            "What's a skill you want to learn soon?",
            "What's a movie or show you want to watch together?",
            "What's a celebration you want to plan?",
            "What's a tradition you want to start?"
        ],
        medium: [
            "Where do you see yourself in five years?",
            "What's a change you want to make in your life?",
            "How do you envision your future family?",
            "What's a challenge you anticipate, and how will you face it?",
            "What's a hope you have for your relationship?",
            "How do you want to grow in the next year?",
            "What's a fear about the future you have?",
            "How do you prepare for the unknown?",
            "What's a personal milestone you want to reach?",
            "How do you want to support each other's futures?"
        ],
        deep: [
            "What's your vision for your life's next chapter?",
            "How do you want to feel about your life in 10 years?",
            "What's a future regret you want to avoid?",
            "How do you make decisions about your future?",
            "What's a dream for your future you haven't shared?",
            "How do you want your relationship to evolve?",
            "What's a legacy you want to build together?",
            "How do you handle uncertainty about the future?",
            "What's a hope you have for your community or the world?",
            "How do you want to look back on your life?"
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Get all screens
    const startScreen = document.getElementById('startScreen');
    const topicScreen = document.getElementById('topicScreen');
    const intensityScreen = document.getElementById('intensityScreen');
    const gameScreen = document.getElementById('gameScreen');

    // Start button handler
    const startBtn = document.getElementById('startBtn');
    startBtn.addEventListener('click', () => {
        startScreen.classList.add('hidden');
        topicScreen.classList.remove('hidden');
    });

    // Topic selection handler
    document.querySelectorAll('.topic-btn').forEach(button => {
        button.addEventListener('click', () => {
            const selectedTopic = button.getAttribute('data-topic');
            // Store the selected topic
            sessionStorage.setItem('selectedTopic', selectedTopic);
            // Move to intensity screen
            topicScreen.classList.add('hidden');
            intensityScreen.classList.remove('hidden');
        });
    });

    // Intensity selection handler
    document.querySelectorAll('.intensity-btn').forEach(button => {
        button.addEventListener('click', () => {
            const selectedIntensity = button.getAttribute('data-intensity');
            const selectedTopic = sessionStorage.getItem('selectedTopic');
            // Store the selected intensity
            sessionStorage.setItem('selectedIntensity', selectedIntensity);
            // Move to game screen
            intensityScreen.classList.add('hidden');
            gameScreen.classList.remove('hidden');
        });
    });

    // Random question handler
    const getQuestionBtn = document.getElementById('getQuestionBtn');
    if (getQuestionBtn) {
        // Keep track of used questions for each topic and intensity
        let usedQuestions = {};
        
        getQuestionBtn.addEventListener('click', () => {
            const selectedTopic = sessionStorage.getItem('selectedTopic');
            const selectedIntensity = sessionStorage.getItem('selectedIntensity');
            
            const topicMap = {
                'growing_up': 'growing_up',
                'family': 'family_connections',
                'career': 'career',
                'growth': 'growth',
                'relationships': 'relationships',
                'dreams': 'dreams',
                'values': 'values',
                'spiritual': 'spiritual',
                'looking_ahead': 'looking_ahead'
            };
            
            const actualTopic = topicMap[selectedTopic] || selectedTopic;
            const availableQuestions = questions[actualTopic][selectedIntensity];
            
            // Create a unique key for this topic-intensity combination
            const questionKey = `${actualTopic}-${selectedIntensity}`;
            
            // Initialize used questions array for this combination if it doesn't exist
            if (!usedQuestions[questionKey]) {
                usedQuestions[questionKey] = [];
            }
            
            let question;
            
            // If we've used all questions, reset the used questions array
            if (usedQuestions[questionKey].length === availableQuestions.length) {
                usedQuestions[questionKey] = [];
            }
            
            // Get a random unused question
            do {
                const randomIndex = Math.floor(Math.random() * availableQuestions.length);
                question = availableQuestions[randomIndex];
            } while (usedQuestions[questionKey].includes(question));
            
            // Add the question to used questions
            usedQuestions[questionKey].push(question);
            
            // Display the question while keeping history
            const questionDisplay = document.getElementById('questionDisplay');
            if (questionDisplay) {
                const newQuestionElement = document.createElement('div');
                newQuestionElement.className = 'question-entry';
                newQuestionElement.innerHTML = `<h2>${question}</h2>`;
                
                if (questionDisplay.firstChild) {
                    questionDisplay.insertBefore(newQuestionElement, questionDisplay.firstChild);
                } else {
                    questionDisplay.appendChild(newQuestionElement);
                }
            }
        });
    }

    // Back button handler
    document.querySelectorAll('.back-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            [topicScreen, intensityScreen, gameScreen].forEach(screen => {
                screen.classList.add('hidden');
            });
            startScreen.classList.remove('hidden');
        });
    });

    // Modify button handler
    document.querySelectorAll('.modify-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const modifyType = btn.getAttribute('data-modify');
            gameScreen.classList.add('hidden');
            if (modifyType === 'topic') {
                topicScreen.classList.remove('hidden');
            } else if (modifyType === 'intensity') {
                intensityScreen.classList.remove('hidden');
            }
        });
    });
});