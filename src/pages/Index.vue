<template>
  <q-page>
    <div>
      <q-parallax :height="984">
        <template v-slot:media>
          <img
            src="imgs/first-bg.jpg"
            style="-webkit-filter: brightness(50%); filter: brightness(50%)"
          />
        </template>

        <template v-slot:content="scope">
          <div
            class="absolute column items-center"
            :style="{
              opacity: 0.55 + (1 - scope.percentScrolled) * 0.45,
              top: scope.percentScrolled * 60 + '%',
              left: 0,
              right: 0,
            }"
          >
            <q-img src="icons/icon.svg" style="width: 200px; height: 200px" />
            <div class="text-h3 text-white text-center q-mt-lg">
              西电微软学生俱乐部
            </div>
            <div class="text-h6 text-grey-3 text-center">
              Microsoft Student Club in XDU
            </div>
          </div>
        </template>
      </q-parallax>
    </div>
    <div class="q-pa-xl">
      <div class="row">
        <div class="hidden-in-mobile col">
          <div class="flex flex-center">
            <svg
              width="380px"
              height="500px"
              viewBox="0 0 837 1045"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
            >
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
                sketch:type="MSPage"
              >
                <path
                  d="M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z"
                  id="Polygon-1"
                  stroke="#007FB2"
                  stroke-width="6"
                  sketch:type="MSShapeGroup"
                ></path>
                <path
                  d="M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z"
                  id="Polygon-2"
                  stroke="#EF4A5B"
                  stroke-width="6"
                  sketch:type="MSShapeGroup"
                ></path>
                <path
                  d="M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z"
                  id="Polygon-3"
                  stroke="#795D9C"
                  stroke-width="6"
                  sketch:type="MSShapeGroup"
                ></path>
                <path
                  d="M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z"
                  id="Polygon-4"
                  stroke="#F2773F"
                  stroke-width="6"
                  sketch:type="MSShapeGroup"
                ></path>
                <path
                  d="M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z"
                  id="Polygon-5"
                  stroke="#36B455"
                  stroke-width="6"
                  sketch:type="MSShapeGroup"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <div class="message-box col q-pl-xm">
          <h1>西电微软学生俱乐部</h1>
          <p>
            西电微软学生俱乐部（西电MSC，西电美食城）成立于2007年10月，并于2021年7月适应俱乐部模式改革，由原微软学生俱乐部更新为MOSC联络社团。加入我们，你可以：
          </p>
          <ul>
            <li>参与全国联络社团的技术沙龙，与MOSC中全国的技术爱好者联动！</li>
            <li>
              与微软更亲密的接触机会，在这里每年都有参观微软的暑期实践活动，更有微软亚研的内推机会！
            </li>
            <li>
              参与MOSC每学年的官方项目，或建立自己的项目，得到微软亚洲研究院、全国MOSC大神的指导，并获得由微软亚洲研究院颁发的证书。
            </li>
          </ul>
          <div class="flex flex-center">
            <q-btn
              padding="md"
              color="primary"
              icon="send"
              label="加入我们！"
              to="register"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="message-box col q-pl-xm">
          <h1>微软开源学习社群</h1>
          <p>
            微软开源学习社群(Microsoft Open-source Study
            Community-MOSC)，脱胎于原微软学生俱乐部,是微软亚洲研究院对高校人才培养的进一步探索。社群成立于2021年7月，以分布在各高校的联络社团成员为核心,以开源平台和社区为基础，通过课程共建、知识共享、团队共创形式，培养社群成员的开源思想、创新头脑、实践能力和组织能力，并助力所有学生从开源社区同获益、共成长。
          </p>
          <div class="flex flex-center">
            <q-btn
              padding="md"
              color="primary"
              icon="send"
              label="加入我们！"
              to="register"
            />
          </div>
        </div>
        <div class="hidden-in-mobile col">
          <div class="flex flex-center">
            <div class="loading">
              <div class="loading__square"></div>
              <div class="loading__square"></div>
              <div class="loading__square"></div>
              <div class="loading__square"></div>
              <div class="loading__square"></div>
              <div class="loading__square"></div>
              <div class="loading__square"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="message-box">
          <h1 class="flex flex-center">精彩活动</h1>
          <p>
            俱乐部每年会举办多种多样的精彩活动，包括由各路大神主讲的技术沙龙，一年一度的周年庆，Hackathon、编程之美等比赛，各种团建。而如今改组为西电MOSC联络社团后，成员能够享受更多福利，你可以：
          </p>
          <ul>
            <li>
              1.参与全国联络社团的技术沙龙，与MOSC中全国的技术爱好者联动！
            </li>
            <li>
              2.与微软更亲密的接触机会，在这里每年都有参观微软的暑期实践活动，更有微软亚研的内推机会！
            </li>
            <li>
              3.参与MOSC每学年的官方项目，或建立自己的项目，得到微软亚洲研究院、全国MOSC大神的指导，并获得由微软亚洲研究院颁发的证书。
            </li>
          </ul>
          <div class="flex flex-center">
            <q-btn
              padding="md"
              color="primary"
              icon="send"
              label="加入我们！"
              to="register"
            />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Index',
  components: {},
  setup() {
    return {};
  },
});
</script>

<style scoped>
.message-box {
  color: #000;
  font-family: monospace;
  font-weight: 300;
  margin-top: 80px;
  margin-left: 80px;
  margin-right: 80px;
}
.message-box p {
  font-family: monospace;
  font-size: 20px;
  line-height: 36px;
  margin-bottom: 40px;
}
.message-box ul {
  padding: 0;
  margin: 0;
}
.message-box li {
  font-size: 20px;
  line-height: 36px;
  margin-bottom: 24px;
}
.message-box h1 {
  font-family: monospace;
  font-size: 60px;
  line-height: 72px;
  margin-bottom: 40px;
}

#Polygon-1,
#Polygon-2,
#Polygon-3,
#Polygon-4,
#Polygon-4,
#Polygon-5 {
  -webkit-animation: float 1s infinite ease-in-out alternate;
  animation: float 1s infinite ease-in-out alternate;
}
#Polygon-2 {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
#Polygon-3 {
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}
#Polygon-4 {
  -webkit-animation-delay: 0.6s;
  animation-delay: 0.6s;
}
#Polygon-5 {
  -webkit-animation-delay: 0.8s;
  animation-delay: 0.8s;
}

@-webkit-keyframes float {
  100% {
    transform: translateY(20px);
  }
}
.hidden-in-mobile {
  display: flex;
  justify-content: center;
  align-items: center;
}

@keyframes float {
  100% {
    transform: translateY(20px);
  }
}
@media (max-width: 750px) {
  .hidden-in-mobile {
    display: none;
  }
  .message-box {
    margin-top: 25px;
    margin-left: 25px;
    margin-right: 25px;
  }
}
@-webkit-keyframes square-animation {
  0% {
    left: 0;
    top: 0;
  }
  10.5% {
    left: 0;
    top: 0;
  }
  12.5% {
    left: 32px;
    top: 0;
  }
  23% {
    left: 32px;
    top: 0;
  }
  25% {
    left: 64px;
    top: 0;
  }
  35.5% {
    left: 64px;
    top: 0;
  }
  37.5% {
    left: 64px;
    top: 32px;
  }
  48% {
    left: 64px;
    top: 32px;
  }
  50% {
    left: 32px;
    top: 32px;
  }
  60.5% {
    left: 32px;
    top: 32px;
  }
  62.5% {
    left: 32px;
    top: 64px;
  }
  73% {
    left: 32px;
    top: 64px;
  }
  75% {
    left: 0;
    top: 64px;
  }
  85.5% {
    left: 0;
    top: 64px;
  }
  87.5% {
    left: 0;
    top: 32px;
  }
  98% {
    left: 0;
    top: 32px;
  }
  100% {
    left: 0;
    top: 0;
  }
}
@keyframes square-animation {
  0% {
    left: 0;
    top: 0;
  }
  10.5% {
    left: 0;
    top: 0;
  }
  12.5% {
    left: 32px;
    top: 0;
  }
  23% {
    left: 32px;
    top: 0;
  }
  25% {
    left: 64px;
    top: 0;
  }
  35.5% {
    left: 64px;
    top: 0;
  }
  37.5% {
    left: 64px;
    top: 32px;
  }
  48% {
    left: 64px;
    top: 32px;
  }
  50% {
    left: 32px;
    top: 32px;
  }
  60.5% {
    left: 32px;
    top: 32px;
  }
  62.5% {
    left: 32px;
    top: 64px;
  }
  73% {
    left: 32px;
    top: 64px;
  }
  75% {
    left: 0;
    top: 64px;
  }
  85.5% {
    left: 0;
    top: 64px;
  }
  87.5% {
    left: 0;
    top: 32px;
  }
  98% {
    left: 0;
    top: 32px;
  }
  100% {
    left: 0;
    top: 0;
  }
}
@-webkit-keyframes hue-rotate {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}
@keyframes hue-rotate {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}
body {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
}

.loading {
  position: relative;
  width: 96px;
  height: 96px;
  transform: rotate(45deg);
  -webkit-animation: hue-rotate 10s linear infinite both;
  animation: hue-rotate 10s linear infinite both;
}

.loading__square {
  position: absolute;
  top: 0;
  left: 0;
  width: 28px;
  height: 28px;
  margin: 2px;
  border-radius: 2px;
  background: #07a;
  background-image: linear-gradient(45deg, #fa0 40%, #0c9 60%);
  background-image: -moz-linear-gradient(#fa0, #fa0);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  -webkit-animation: square-animation 10s ease-in-out infinite both;
  animation: square-animation 10s ease-in-out infinite both;
}
.loading__square:nth-of-type(0) {
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}
.loading__square:nth-of-type(1) {
  -webkit-animation-delay: -1.4285714286s;
  animation-delay: -1.4285714286s;
}
.loading__square:nth-of-type(2) {
  -webkit-animation-delay: -2.8571428571s;
  animation-delay: -2.8571428571s;
}
.loading__square:nth-of-type(3) {
  -webkit-animation-delay: -4.2857142857s;
  animation-delay: -4.2857142857s;
}
.loading__square:nth-of-type(4) {
  -webkit-animation-delay: -5.7142857143s;
  animation-delay: -5.7142857143s;
}
.loading__square:nth-of-type(5) {
  -webkit-animation-delay: -7.1428571429s;
  animation-delay: -7.1428571429s;
}
.loading__square:nth-of-type(6) {
  -webkit-animation-delay: -8.5714285714s;
  animation-delay: -8.5714285714s;
}
.loading__square:nth-of-type(7) {
  -webkit-animation-delay: -10s;
  animation-delay: -10s;
}
</style>
