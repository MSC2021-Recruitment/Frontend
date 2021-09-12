<template>
  <q-page>
    <div class="q-pa-md">
      <q-carousel
        v-model="slide"
        vertical
        transition-prev="slide-down"
        transition-next="slide-up"
        swipeable
        animated
        control-color="black"
        navigation-icon="radio_button_unchecked"
        navigation
        padding
        arrows
        height="80vh"
      >
        <q-carousel-slide name="media" class="column no-wrap flex-center">
          <h3 id="活动部">活动部</h3>
          <p>活动部最重要的职责就是<strong>搞事情</strong></p>
          <p>作为社团最应该搞事情和最能搞事情的部门</p>
          <p><strong>迎新 技术沙龙 轰趴</strong> 等等都由活动部负责</p>
          <p>
            我们需要你<strong>积极的心态</strong>
            <strong>沟通的能力</strong> 还有 <strong>筹划的技巧</strong>
          </p>
          <p>展现你的魅力 我们期待你能加入活动部!</p>
        </q-carousel-slide>
        <q-carousel-slide name="science" class="column no-wrap flex-center">
          <h3 id="人工智能科研部">人工智能科研部</h3>
          <p style="max-width: 1200px">
            应微软亚洲研究院的要求所建立的以人工智能科研为导向的部门，其主要内容是带领大家找到适合自己的人工智能科研方向，并进行相应的科研训练，获得一定的科研能力，部门内会定期举行各个方向的学术报告活动。对于大一的同学来说，不仅在学业上获得指导，也可以在入门人工智能的过程中更多的对各个领域进行了解，让自己更快的找到适合自己的方向。
          </p>
        </q-carousel-slide>
        <q-carousel-slide name="publicity" class="column no-wrap flex-center"
          ><h3 id="媒体部">媒体部</h3>
          <p style="max-width: 1200px">
            媒体部负责西电MSC各新媒体平台的运营，宣传海报视频的制作，通过文字影像等方式记录俱乐部的大小日常，同时对外代表俱乐部的发言，以及与微软亚洲研究院的联络，是距离微软亚洲研究院最近的部门哦~
          </p>
          <p style="max-width: 1200px">
            你想把自己的想法加入视频或者海报？想体验一下公众号后台的操作？想用影像记录生活？想让自己的文字拥有展示的平台？想和小伙伴一起搞事情？那就来媒体部吧
          </p>
        </q-carousel-slide>
        <q-carousel-slide name="tech" class="column no-wrap flex-center">
          <h3 id="技术部">技术部</h3>
          <p style="max-width: 1200px">
            作为美食城最大的部门，<del>鸽子部</del>技术部为美食城的日常活动提供有力的技术保证。技术部下设科研组，web组，ACM组，game组，软件组，硬件组等组别，不同小组会定期召开面向全俱乐部的技术沙龙，在各个小组里你可以随时请教学长们技术问题，一起学习，共同进步。
          </p></q-carousel-slide
        >
        <q-carousel-slide name="web" class="column no-wrap flex-center">
          <h4 id="web-组">Web 组</h4>
          <p style="max-width: 1200px">Web组主要分开发和安全两个方向。</p>
          <p style="max-width: 1200px">
            开发中主要的学习有服务器的搭建与各种响应的原理，微信小程序后端开发(目前是用Django)，还有一些网页的简单开发(比如MSC的招新网站)等等，只要和开发有关都可以学习。
          </p>
          <p style="max-width: 1200px">
            Web安全方向这一块主要围绕着CTF进行入门，从基本的F12(划掉)等工具的利用去理解掌握浏览器原理以及其他的安全方向的EXP和漏洞知识，在良好掌握之后可以深入代码审计和漏洞挖掘等等。
          </p>
          <p style="max-width: 1200px">
            Web组欢迎大家来玩～一起交流一起学～
          </p></q-carousel-slide
        >
        <q-carousel-slide name="acm" class="column no-wrap flex-center">
          <h4 id="acm组">ACM组</h4>
          <p style="max-width: 1200px">
            ACM组是MSC中由一群热爱算法竞赛的同学们组成的小团体,
            无论你是热爱这类竞赛, 还是只是热爱算法本身, 还是虽然没什么基础,
            但是有着在赛场上拼搏的热情, 你都可以来这里找到志同道合的朋友们.
          </p>
          <p style="max-width: 1200px">
            想要在大学里参加程序设计竞赛的同学们. 我们可以给大家提供入门指导,
            以及一些模拟训练和交流的机会.
          </p>
          <p style="max-width: 1200px">
            均身高1.81m的ACM组Mentor们欢迎各位学弟学妹的到来～
          </p></q-carousel-slide
        >
        <q-carousel-slide name="game" class="column no-wrap flex-center">
          <h4 id="game组">Game组</h4>
          <p style="max-width: 1200px">
            1, 游戏的发展及未来展望:涉及游戏的设计及概念流程.
          </p>
          <p style="max-width: 1200px">2, 技术实践:建模及基础项目编程.</p>
          <p style="max-width: 1200px">
            3, 与 Nova 独游社绝赞合作中，加入 MSC-game 组即可同时取得 Nova
            独游社社员身份。
          </p></q-carousel-slide
        >
        <q-carousel-slide name="software" class="column no-wrap flex-center">
          <h4 id="软件组">软件组</h4>
          <p style="max-width: 1200px">
            学习Android、iOS软件开发，linux、windows桌面软件开发等技术，目前以Hybrid
            App开发为主。日常活动包含但不局限于一起吃喝玩乐，组队进行软件设计开发，指导参加国创、星火杯等项目和比赛，为大学生活和发展提供建议等。欢迎对技术有热情，想参与工程实践的同学来玩。
          </p>
        </q-carousel-slide>
        <q-carousel-slide name="hardware" class="column no-wrap flex-center">
          <h4 id="硬件组">硬件组</h4>
          <p style="max-width: 1200px">
            MSC硬件组，聚集着广大硬件爱好者。组内有着众多硬件大佬学长，不乏电赛入围与国奖获得者。组内有这浓厚的硬件交流讨论氛围，在硬件学习上助你一臂之力，更可在组内结识更多巨巨，寻找电赛同伴。硬件组以技术为本，干饭作为支撑，欢迎技术控学弟和有意愿学习硬件的学妹的到来。
          </p>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Login',
  components: {},
  setup() {
    return {
      slide: ref('media'),
    };
  },
});
</script>

<style scoped>
h3 {
  font-size: 2em;
}

h4 {
  font-size: 1.5em;
}

p {
  font-size: 18px;
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
</style>
