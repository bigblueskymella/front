let news = [];
const getLatestNews = async () => {
  let url = new URL(
    `https://api.newscatcherapi.com/v2/search?q=Apple&from='2022/10/15'&countries=KR&page_size=4`
  );
  //console.log(url);
  let header = new Headers({
    "x-api-key": `A3HQlGqGRJap1c3aXYWHa8cyQmMTFMAlMQM9Tc-L-nk`,
  });

  let response = await fetch(url, { headers: header });
  let data = await response.json();
  news = data.articles;
  console.log(news);

  render();
};

const render = () => {
  let newsHTML = "";
  newsHTML = news.map((news) => {
    return `
        <div class="row news">
                <div class="col-lg-4">
                    <img class="news-img-size" src="https://img.hankyung.com/photo/202107/01.27019659.1.jpg" alt="">
                </div>
                <div class="col-lg-8">
                    <h2>MZ세대들 푹 빠진 뽀로로 친구 '루피</h2>
                    <p> "표정 음흉하네"…MZ세대들 푹 빠진 뽀로로 친구 '루피'
                        이미경 기자
                        기자 스크랩
                        입력2021.07.24 14:30 수정2021.07.24 14:40
                        글자크기 조절
                        '잔망 루피' 반전 매력으로 인기
                        커뮤니티·SNS 등 온라인 언급량 31% 증가
                        '군침이 싹' 이미지 '밈'으로 자리 잡아
                        제페토·와디즈와 캐릭터 협업 잇따라
                        "동글동글하니 귀엽게 생겼잖아요. 평소에는 귀여운데 갑자기 음흉한 표정을 짓는 게 너무 웃기지 않나요? 일상에서 얌전히 있다가 한편에서는 음흉한 모습을 드러내는 것이 제
                        모습을 보는 것 같기도 해요." (32세 직장인 김모씨)

                        "몸이 핑크색인데다가 원피스까지 입어 엄청 여성스러운 캐릭터일 것 같잖아요. 그런데 온라인에서 활용되는 이미지를 보면 완전 반전이거든요. 매력 있는 캐릭터라고 생각해요."
                        (25세 취업준비생 윤모씨)
                    </p>
                    <div>
                        KBS * 2022-10-18
                    </div>
                </div>
            </div>`;
  });

  document.getElementById("news-board").innerHTML = newsHTML;
};

getLatestNews();


let names = [
    "Steven Paul Jobs",
    "Bill Gates",
    "Mark Elliot Zuckerberg",
    "Elon Musk",
    "Jeff Bezos",
    "Warren Edward Buffett",
    "Larry Page",
    "Larry Ellison",
    "Tim Cook",
    "Lloyd Blankfein",
  ];

  function printName(items){
    console.log(items)
  }

  names.forEach(printName)