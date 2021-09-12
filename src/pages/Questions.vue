<template>
  <q-page>
    <div class="q-pa-xl">
      <div class="row q-ma-xl">
        <div class="col q-ma-xl">
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
        <div class="message-box col-7 q-pl-xm">
          <h1>西电微软学生俱乐部</h1>
          <p class="text-h3" style="color: #808080;">
            Web组绝赞开发中...<br><br>
            不妨先去水水群？
          </p>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Questions',
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

@keyframes float {
  100% {
    transform: translateY(20px);
  }
}
@media (max-width: 450px) {
  svg {
    visibility: hidden;
  }
  .message-box {
    margin-top: 25px;
    margin-left: 25px;
    margin-right: 25px;
    width: 100%;
  }
}

</style>
