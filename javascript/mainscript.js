let currentSubject = '';
let currentQuiz = '';
let currentQuestion = 0;
let correctAnswers = 0;
let incorrectQuestions = [];
let isRetrying = false;
let chartInstance = null;

const questions = {
          "人類の出現と文明の起こり": [
        {
            question: "最も古い人類である猿人は、どこの大陸で生まれた？",
            choices: ["ユーラシア大陸", "アフリカ大陸", "北アメリカ大陸", "オーストラリア大陸"],
            correct: 1
        },
        {
            question: "打製石器を使って狩りや採集を行なっていた時代を何と言う？",
            choices: ["猿人時代", "石器時代", "旧石器時代", "縄文時代"],
            correct: 2
        },
        {
            question: "煮たり蓄えたりするための道具を何と言う？",
            choices: ["土偶", "バケツ", "器", "土器"],
            correct: 3
        },
              {
            question: "メソポタミア文明で発見された文字の名前は？",
            choices: ["くさび形文字", "象形文字", "インダス文字", "甲骨文字"],
            correct: 0
        },
                    {
            question: "メソポタミア文明で発明された月の満ち欠けに基づいた暦を何という？",
            choices: ["太陽暦", "和暦", "太陰暦", "西暦"],
            correct: 2
        },
                          {
            question: "(A)の近くにエジプト文明、(B)の近くにメソポタミア文明、(C)の近くにインダス文明ができた。",
            choices: ["A:ナイル川B:インダス川C:ユーフラテス川", "A:ナイル川B:ユーフラテス川C:インダス川", "A:ユーフラテス川B:ナイル川C:インダス川", "A:インダス文明B:ユーフラテス川C:ナイル川"],
            correct: 1
        },
                          {
            question: "日本列島に人類が移り住んできたのはいつ？",
            choices: ["4万9千年前", "5万1千年前", "3万8千年", "3万2千年前"],
            correct: 2
        },
                          {
            question: "日本列島に人類が移り住んできたのは何大陸より早い？",
            choices: ["ヨーロッパ", "北アメリカ", "南アメリカ", "オーストラリア"],
            correct: 1
        }
    ],
                "人類の出現と文明の起こり2": [
        {
            question: "紀元前6世紀に孔子が説いた、親子・兄弟などの秩序を大切にし、思いやりの心を持って政治を行うべきだとする教えをなんと言う？",
            choices: ["仏教", "キリスト教", "儒学", "イスラム教"],
            correct: 2
        },
        {
            question: "紀元前3世紀に中国を統一した始皇帝は、なんと言う国の王？",
            choices: ["秦", "隋", "周", "殷"],
            correct: 0
        },
        {
            question: "始皇帝が北方の遊牧民の侵入を防ぐために修築された建造物は？",
            choices: ["富士山", "周城", "秦の長城", "万里の長城"],
            correct: 3
        },
              {
            question: "紀元前4世紀ごろにアレクサンドロス大王が東方に遠征したことで生まれた、ギリシャの文化とオリエントの文化が融合した文化をなんと言う？",
            choices: ["ヘラクレス", "ヘレニズム", "融合文化", "ギリエント"],
            correct: 1
        },
                    {
            question: "イタリアの都市国家から出発し、紀元前27年に皇帝が統治する政治(帝政)を始めた国は？",
            choices: ["ローマ帝国", "バチカン市国", "大日本帝国", "ギリシャ帝国"],
            correct: 0
        },
                          {
            question: "紀元前5世紀ごろに現れたシャカが説いた教えを何と言う？",
            choices: ["キリスト教", "イスラム教", "仏教", "ヒンドゥー教"],
            correct: 2
        },
                          {
            question: "紀元前1世紀にパレスチナ地方でイエスが説いた教えを何と言う？",
            choices: ["仏教", "キリスト教", "ヒンドゥー教", "イスラム教"],
            correct: 1
        },
                          {
            question: "ムハンマドが唯一神「アラー」のお告げを受け、7世紀に起こした宗教は？",
            choices: ["ヒンドゥー教", "イスラム教", "仏教", "キリスト教"],
            correct: 1
        }
    ],
    "縄文弥生": [
        {
            question: "表面に縄目の文様がついた(A)を使うようになった。",
            choices: ["石器土器", "縄文土器", "弥生土器", "大和土器"],
            correct: 1
        },
        {
            question: "地面を掘り屋根をかけた(A)に住むようになった。",
            choices: ["高床住居", "藁の家", "木造の家", "たて穴住居"],
            correct: 3
        },
        {
            question: "まじないに使う(A)が作られた。",
            choices: ["土器", "土偶", "銅鏡", "青銅器"],
            correct: 1
        },
              {
            question: "この時代を何と言う？",
            choices: ["石器時代", "縄文時代", "古墳時代", "飛鳥時代"],
            correct: 1
        },
        {
            question: "大陸から(A)を伝え、(B)を使う。",
            choices: ["A:青銅器B:弥生土器", "A:稲作B:弥生土器", "A:金印B:縄文土器", "A:まじないB:縄文土器"],
            correct: 1
        },		
			{
            question: "この時代を何と言う？",
            choices: ["縄文時代", "石器時代", "弥生時代", "縄文時代"],
            correct: 2
        },
						        {
            question: "この頃の日本は何と呼ばれる？",
            choices: ["隋", "倭", "魏", "日"],
            correct: 1
        },
        {
            question: "この頃何個のクニ(国)にわかれていた？",
            choices: ["50余り", "100余り", "150余り", "200余り"],
            correct: 1
        },

                {
			question: "(A)によると、小国同士の争いが続いたため、(B)の卑弥呼を倭国の女王とした。",
            choices: ["A:古事記B:遠江国", "A:魏志倭人伝B:魏", "A:魏志倭人伝B:邪馬台国", "A:日本書紀B:遠江国"],
            correct: 2
        }
    ],
			    "古墳飛鳥": [
        {
            question: "四角形と円形を合わせた古墳が作られた。この古墳の名前は？",
            choices: ["四角円墳", "前方後円墳", "前角後円墳", "円墳"],
            correct: 1
        },
			       	 {
            question: "古墳が作られたのは何が現れたことを示す？",
            choices: ["獲加多支鹵大王(ワカタケルオオキミ)", "豪族", "支配者", "権力者"],
            correct: 1
        },
        {
            question: "大陸から移り住んできた人は？",
            choices: ["移住民", "移民", "渡来人", "渡人"],
            correct: 2
        },
				{		            question: "渡来人が仏教・儒教と何を教えた？",
            choices: ["鉄", "埴輪", "須恵器", "文字"],
            correct: 2
        },
              {
            question: "この時代を何と言う？",
            choices: ["縄文時代", "石器時代", "古墳時代", "縄文時代"],
            correct: 2
        },
        {
            question: "南北に分かれていた中国を何が統一した？",
            choices: ["周", "殷", "隋", "漢"],
            correct: 2
        },
              {
            question: "渡来人の知識と技術を利用した誰が戦力を伸ばした？",
            choices: ["中臣氏", "蘇我氏", "厩戸王", "小野妹子"],
            correct: 1
        },
						        {
			question: "(A)が摂政になり家柄ではなく有能な人を役人に用いる(B)の制度や役人の心得として(C)を定める。",
            choices: ["A:蘇我氏B:冠位十二階C:十七条の憲法", "A:聖徳太子B:冠位十二階C:十七条の憲法", "A:聖徳太子B:十七条の憲法C:冠位十二階", "A:蘇我氏B:十七条の憲法C:冠位十二階"],
            correct: 1
        },
						        {
            question: "大和を中心に栄えた宗教文化は？",
            choices: ["飛鳥文化", "国風文化", "奈良文化", "縄文文化"],
            correct: 0
        },
			        {
            question: "隋にかわって(A)が統一した。",
            choices: ["秦", "百済", "中国", "唐"],
            correct: 3
        },
        {
            question: "小野妹子らを(A)として派遣する。",
            choices: ["遣唐使", "遣隋使", "遣漢使", "遣新羅使"],
            correct: 0
        },

                {
			question: "(A)は(B)と中臣鎌足とともに倒された。",
            choices: ["A:蘇我氏B:中大兄皇子", "A:聖徳太子B:中大兄皇子", "A:中大兄皇子B:蘇我氏", "A:聖徳太子B:蘇我氏"],
            correct: 0
        },
			                {
			question: "何の改革をした？",
            choices: ["進撃の改新", "大化の改新", "飛鳥の改新", "天皇の改新"],
            correct: 1
        },
						                {
			question: "倭国は百済に大群を送ったが、(A)で敗れた",
            choices: ["朝鮮の戦い", "白村江の戦い", "日本海の戦い", "唐百済の戦い"],
            correct: 1
        },
									                {
			question: "天智天皇の後継をめぐり、(A)が起こり、天武天皇がおおきな勢力を握った。",
            choices: ["飛鳥の乱", "壬申の戦い", "壬王の乱", "壬申の乱"],
            correct: 3
        },
												                {
			question: "律令に基づいて政治を行う国家作りを何と言う？",
            choices: ["律令国家", "大宝律令", "律令政治", "大宝政治"],
            correct: 0
        },
												                {
			question: "701年に何の法律が定められた？",
            choices: ["国家律令", "大宝律令", "律令法", "律令政治"],
            correct: 1
        },
												                {
			question: "中央政府である(A)のもと、地方は国・群・里に分けられ、国試によって治められる。",
            choices: ["法律", "律令", "朝廷", "天皇"],
            correct: 2
        }
    ],
    "奈良": [
        {
            question: "藤原鎌足と中大兄皇子が倒した人物は？",
            choices: ["卑弥呼", "蘇我氏", "聖武天皇", "聖徳太子"],
            correct: 1
        },
        {
            question: "〇〇の改新←何の改新？",
            choices: ["北条の改新", "白村江の改新", "大化の改新", "進化の改新"],
            correct: 2
        }
    ],
    "理科": [
        {
            question: "二酸化炭素を集める方法は？",
            choices: ["二酸化マンガンに過酸化水素水", "二酸化マンガンに薄い塩酸", "石灰石に薄い塩酸", "石灰石に過酸化水素水"],
            correct: 2
        },
        {
            question: "ガスバーナーのネジの名称は？",
            choices: ["上：ガス調節ネジ、下：空気調節ネジ", "上：酸素調節ネジ、下：水素調節ネジ", "上：水調節ネジ、下：空気調節ネジ", "上：空気調節ネジ、下：ガス調節ネジ"],
            correct: 3
        }
    ]
};

function selectSubject(subject) {
    currentSubject = subject;
    document.getElementById('subject-title').textContent = subject;

    const unitButtons = document.getElementById('unit-buttons');
    unitButtons.innerHTML = '';

    unitButtons.innerHTML = 
        `<button onclick="startQuiz('歴史')">スタート</button>`;

    document.getElementById('home-container').style.display = 'none';
    document.getElementById('subject-container').style.display = 'block';
}

function startQuiz(quiz) {
    currentQuiz = quiz;
    currentQuestion = 0;
    correctAnswers = 0;
    incorrectQuestions = [];
    isRetrying = false;
    document.getElementById('quiz-subject').textContent = `${currentSubject}: ${quiz}`;
    document.getElementById('subject-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    const questionsList = questions[currentSubject];
    if (!questionsList || questionsList.length === 0) {
        alert('問題がありません');
        return;
    }

    let questionObj;
    if (isRetrying) {
        if (currentQuestion >= incorrectQuestions.length) {
            showResult();
            return;
        }
        questionObj = questionsList[incorrectQuestions[currentQuestion]];
    } else {
        if (currentQuestion >= questionsList.length) {
            showResult();
            return;
        }
        questionObj = questionsList[currentQuestion];
    }

    document.getElementById('question').textContent = questionObj.question;
    const choiceButtons = document.querySelectorAll('.choices .choice');
    questionObj.choices.forEach((choice, index) => {
        choiceButtons[index].textContent = choice;
        choiceButtons[index].classList.remove('disabled');
        choiceButtons[index].style.backgroundColor = '#ddd';
    });

    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('result-container').textContent = '';

    updateProgressBar();
}

function checkAnswer(selectedIndex) {
    const questionObj = questions[currentSubject][isRetrying ? incorrectQuestions[currentQuestion] : currentQuestion];
    const choiceButtons = document.querySelectorAll('.choices .choice');
    const correctIndex = questionObj.correct;

    const resultContainer = document.getElementById('result-container');
			    const answerbg = document.getElementById('answerbg');
			    const answersection = document.getElementById('answersection');
    const resultImage = document.getElementById('result-image'); // 画像を表示するための要素
    const resultSound = document.getElementById('result-sound'); // サウンドを再生するための要素

    if (selectedIndex === correctIndex) {
        resultContainer.textContent = '正解';
        correctAnswers++;
        choiceButtons[selectedIndex].style.backgroundColor = 'white';
				    answerbg.style.display = 'block';
	    answersection.style.display = 'block';
        // 正解の画像を表示
        resultImage.src = 'img/正解.png'; // 正解の画像ファイルパス
        resultImage.style.display = 'block';

        // 正解のサウンドを再生
        resultSound.src = 'audio/正解.mp3'; // 正解のサウンドファイルパス
        resultSound.play();

    } else {
        resultContainer.textContent = '不正解';
        if (!isRetrying && !incorrectQuestions.includes(currentQuestion)) {
            incorrectQuestions.push(currentQuestion);
        }
        choiceButtons[selectedIndex].style.backgroundColor = 'white';
			    answerbg.style.display = 'block';
	    answersection.style.display = 'block';
        // 不正解の画像を表示
        resultImage.src = 'img/不正解.png'; // 不正解の画像ファイルパス
        resultImage.style.display = 'block';

        // 不正解のサウンドを再生
        resultSound.src = 'audio/不正解.mp3'; // 不正解のサウンドファイルパス
        resultSound.play();
    }

    choiceButtons.forEach(button => button.classList.add('disabled'));
    document.getElementById('next-btn').style.display = 'block';
}


function retryIncorrect() {
    isRetrying = true;
    currentQuestion = 0;
    correctAnswers = 0;
    document.querySelectorAll('.choices .choice').forEach(button => {
        button.classList.remove('disabled');
        button.style.backgroundColor = '#ddd';
    });

    document.getElementById('result-screen').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    loadQuestion();
}

function nextQuestion() {
			            // 画像とサウンドをリセット
     		const answerbg = document.getElementById('answerbg');
		    const answersection = document.getElementById('answersection');
            const resultImage = document.getElementById('result-image');
            const resultSound = document.getElementById('result-sound');
            answersection.style.display = 'none';  // ポップアップを非表示変更
            answerbg.style.display = 'none';  // ポップアップ背景を非表示変更
            resultImage.style.display = 'none';  // 画像を非表示にする
            resultSound.pause();                 // サウンドを停止する
            resultSound.currentTime = 0;         // サウンドの再生位置をリセット
    currentQuestion++;
    const totalQuestions = isRetrying ? incorrectQuestions.length : questions[currentSubject].length;
    if (currentQuestion >= totalQuestions) {
        showResult();
    } else {
        loadQuestion();
    }
}

function confirmShowResult() {
    if (confirm("結果を表示しますか？")) {
        showResult();
    }
}

function showAnswer() {
    const questionObj = questions[currentSubject][isRetrying ? incorrectQuestions[currentQuestion] : currentQuestion];
    alert(`正解: ${questionObj.choices[questionObj.correct]}`);
}

function showResult() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';

    const totalQuestions = isRetrying ? incorrectQuestions.length : questions[currentSubject].length;
    const correctRate = Math.min((correctAnswers / totalQuestions) * 100, 100);
    document.getElementById('score').textContent = `正解率: ${correctRate.toFixed(2)}%`;

    if (chartInstance) {
        chartInstance.destroy();
    }

    const ctx = document.getElementById('score-chart').getContext('2d');
    chartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['正解', '不正解'],
            datasets: [{
                data: [correctAnswers, totalQuestions - correctAnswers],
                backgroundColor: ['#28a745', '#dc3545']
            }]
        }
    });

    document.getElementById('retry-btn').style.display = incorrectQuestions.length ? 'block' : 'none';
}

function updateProgressBar() {
    const totalQuestions = isRetrying ? incorrectQuestions.length : questions[currentSubject].length;
    const completedQuestions = isRetrying ? currentQuestion : currentQuestion + 1;
    const progressPercentage = (completedQuestions / totalQuestions) * 100;
    document.getElementById('progress-bar').style.width = progressPercentage + '%';
    document.getElementById('remaining-questions').textContent = totalQuestions - completedQuestions;
}

function goBackToTop() {
    document.getElementById('result-screen').style.display = 'none';
	document.getElementById('home-container').style.display = 'block';
		document.getElementById('quiz-subject').style.display = 'none';
}
			
