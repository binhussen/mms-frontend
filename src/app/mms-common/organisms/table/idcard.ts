export const idCardDocument = `<html>
  <head>
    <title>Print tab</title>
    <style>
      #result {
        position: relative;
        width: 22rem;
    height: 14rem;
        margin: 0 auto;
        border: 2px solid #ddd;
        border-radius: 12px;
        margin-bottom: 2em;
      }
      header {
        width: 100%;
        background: #0e223b;

        border-radius: 12px 12px 0 0;
      }
      header::after {
        content: "";
        display: flex;
        clear: both;
      }
      .camp {
        width: 80%;
        float: left;
        color: #fff;
      }
      .camp h4 {
        margin: 12px auto 0 7px;
      }
      .camp span {
        margin-left: 8px;
      }
      #logo {
        height: 64px;
        float: right;
      }
      Now we get into the content part .content {
        width: 80%;
      }
      .content::after {
        content: "";
        display: flex;
        clear: both;
      }
      .content img {
        float: right;
        width: 80px;
        height: 105px;
        margin: 12px 6px;
      }
      .content ul {
        width: 65%;
        float: left;
        padding-left: 15px;
      }
      ul li {
        list-style-type: none;
      }

      #down {
        font-size: 18px;
      }

      .outcard{
    background: #000;
    height: 3rem;
      }
      .btn{
        margin: 0 auto;
    display: block;
    background: #0e223b;
    color: #fff;
    border-radius: 6px;
    border: none;
    font-size: 1rem;
    padding: 5px 16px;
}
      }
    </style>
  </head>
  <body onload="window.print();window.close()">
    <div id="result" class="card">
      <header id="head">
        <div class="camp">
          <h4>በፌ/ፖ/ኮ/አስ/ር ልማት ዘርፍ ንብ/አስ/ጠቅ/አገ/ዋና/መ</h4>
          <span>የጦር መሳሪያ ፍቃድ</span>
        </div>
        <img src="/assets/img/logo.png" id="logo" />
      </header>

      <div class="content">
        <img src="" id="imgDisplayed" />
        <ul>
          <li id="name">ስም:___________</li>
          <li id="birth">ዜግነት:______________</li>
          <li id="fieldYear">የስራ ክፍል፡___________</li>
          <li id="fieldYear">የመኖሪያ አድራሻ፡________</li>
          <li id="fieldYear">ሞባይል፡___________</li>
          <li id="fieldYear">የስራ ክፍል፡___________</li>
          <li id="fieldYear">አደጋ ጊዜ ተጠሪ፡___________</li>
          <!--<li>:<span id="num"></span></li>--> 
        </ul>
      </div>
    </div>
    
    <div id="result" class="card">
      <div class="content">
        <ul>
          <li id="name">የመሳሪያ አይነት፡_________</li>
          <li id="birth">የወግ ቁጥር፡____________</li>
          <li id="fieldYear">የጥይት ብዛት፡____________</li>
          <li id="fieldYear">የካርታ ብዛት፡____________</li>
          <li id="fieldYear">የታጠቀበት ቀን፡_________</li>
          <li id="fieldYear">ፍቃድ የሰጠው ክፍል፡______</li>
          <li id="fieldYear">የሃላፊው ስም፡______</li>
        </ul>
      </div>
      <div class="outCard"></div>
    </div>
    <button class="btn print">print</button>
  </body>
</html>
`;
