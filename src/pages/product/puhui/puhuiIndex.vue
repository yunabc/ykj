<template>
  <div
    ref="home"
    @scroll="scrollHandler($event)"
    class="home"
  >
    <div
      id="con5"
      class="home_banner"
    >
      <img src="@/assets/imgs/product/puhui/home-banner.png">
      <div class="home_countdown">
        <div class="foot_date">
          <div class="data_tit">
            参 保 倒 计 时
          </div>
          <ul class="flex">
            <li> <p> {{ countDown.day }} </p><span>天</span> </li>
            <li> <p> {{ countDown.hour }} </p><span>时</span> </li>
            <li> <p> {{ countDown.minute }} </p><span>分</span> </li>
            <li> <p> {{ countDown.second }} </p><span>秒</span> </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="security_content">
      <div class="security_content_top">
        <div class="title">
          <div>
            保障内容
          </div>
          <img
            src="@/assets/imgs/product/puhui/shadow.png"
            alt=""
          >
          <div class="bg_color" />
        </div>
        <div
          @click="showPopHandler('security_content')"
          y-log-id="protection_content-more_details"
          class="detail"
        >
          更多详情
          <img
            src="@/assets/imgs/product/puhui/qa_icon_8fc00ac6.png"
            alt=""
          >
        </div>
      </div>
      <ul>
        <li>
          <div class="content">
            <div>
              <span>医保内</span>医疗费用保险金
            </div>
            <div>
              <span>100万</span>
            </div>
          </div>
          <div class="security_text">
            覆盖普通部住院+门诊医保目录范围内自付一、自付二的费用
          </div>
        </li>
        <li>
          <div class="content">
            <div>
              <span>医保外</span>医疗费用保险金
            </div>
            <div>
              <span>100万</span>
            </div>
          </div>
          <div class="security_text">
            覆盖普通部住院医保目录范围外完全由个人承担的自费费用
          </div>
        </li>
        <li>
          <div class="content">
            <div>
              特定药品医疗费用保险金
            </div>
            <div>
              <span>100万</span>
            </div>
          </div>
          <div class="security_text">
            100种海内外高额特药，覆盖高发癌症
          </div>
        </li>
      </ul>
    </div>
    <div class="tab_background" />
    <div class="tab_con">
      <div
        v-show="isFixed"
        class="nav-bar isFixed"
      >
        <li
          :class="curIndex==index?'active':''"
          @click="to(index)"
          v-for="(item,index) in navArr"
          :key="index+'4325'"
        >
          {{ item.text }}
        </li>
      </div>
      <div
        id="navBar"
        class="nav-bar"
      >
        <li
          :class="curIndex==index?'active':''"
          @click="to(index)"
          v-for="(item,index) in navArr"
          :key="index+'423325'"
        >
          {{ item.text }}
        </li>
        <!--  <li
          y-log-id="i_want_insurance"
          class="active"
        >
          我要投保
        </li>
        <li y-log-id="tab-product_features">
          产品特色
        </li>
        <li y-log-id="tab-demo_case">
          演示案例
        </li>
        <li y-log-id="tab_frequently_asked_questions">
          常见问题
        </li> -->
      </div>
    </div>
    <div id="con0">
      <div class="insure_info">
        <div class="insure_info_list_title">
          <div class="title_num">
            1
          </div>
          <div class="title_text">
            投保人信息
            <span style="color:#888B8E;">(购买人本人)</span>
          </div>
        </div>
        <form class="van-form">
          <div class="info_list">
            <ul>
              <li
                id="info12"
                class="li_shadow"
              >
                <div class="van-cell van-field">
                  <div class="van-cell__title van-field__label">
                    <span>
                      姓名
                    </span>
                  </div>
                  <div class="van-cell__value van-field__value">
                    <div class="van-field__body">
                      <input
                        id="name-1"
                        v-model="userName"
                        type="text"
                        placeholder="请输入投保人姓名"
                        class="van-field__control"
                      >
                    </div>
                  </div>
                </div>
                <div class="line-gray" />
                <div>
                  <div class="id_type_box">
                    <div
                      role="button"
                      tabindex="0"
                      class="id_type van-cell van-cell--clickable van-field"
                    >
                      <div class="van-cell__value van-cell__value--alone van-field__value">
                        <div
                          @click="idPickerShowHandler"
                          class="van-field__body"
                        >
                          <input
                            v-model="idType.displayText"
                            type="text"
                            name="idType"
                            readonly="readonly"
                            placeholder="请选择"
                            class="van-field__control"
                          >
                          <div class="van-field__right-icon">
                            <i class="van-icon van-icon-arrow-down">
                              <!---->
                            </i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!---->
                    <div class="id_type_num van-cell van-field">
                      <div class="van-cell__value van-cell__value--alone van-field__value">
                        <div class="van-field__body">
                          <input
                            id="idNo-1"
                            v-model="idNo"
                            type="text"
                            name="idNo"
                            placeholder="请输入证件号"
                            class="van-field__control"
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="line-gray" />
                </div>
                <div
                  v-if="idType.type>1"
                  class="van-cell van-field"
                >
                  <div class="van-cell__title van-field__label">
                    <span>性别</span>
                  </div>
                  <div class="van-cell__value van-field__value">
                    <div class="van-field__body">
                      <div class="van-field__control van-field__control--custom">
                        <div
                          role="radiogroup"
                          class="van-radio-group van-radio-group--horizontal"
                        >
                          <div
                            role="radio"
                            class="van-radio van-radio--horizontal"
                          >
                            <div
                              @click="sex=1"
                              :class="sex==1?'van-radio__icon--checked':''"
                              class="van-radio__icon van-radio__icon--round"
                            >
                              <i
                                class="van-icon van-icon-success"
                              >
                              <!----></i>
                            </div>
                            <span class="van-radio__label">男</span>
                          </div>
                          <div
                            role="radio"
                            class="sex_radio van-radio van-radio--horizontal"
                          >
                            <div
                              @click="sex=2"
                              :class="sex==2?'van-radio__icon--checked':''"
                              class="van-radio__icon van-radio__icon--round"
                            >
                              <i class="van-icon van-icon-success">
                              <!----></i>
                            </div>
                            <span class="van-radio__label">女</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  v-if="idType.type>1"
                  class="line-gray"
                />
                <div
                  v-if="idType.type>1"
                  role="button"
                  tabindex="0"
                  class="van-cell van-cell--clickable van-field"
                >
                  <div class="van-cell__title van-field__label">
                    <span>出生日期</span>
                  </div>
                  <div
                    @click="openPicker"
                    class="van-cell__value van-field__value"
                  >
                    <div class="van-field__body">
                      <input
                        v-model="birthday"
                        type="text"
                        name="birthday"
                        readonly="readonly"
                        placeholder="请选择"
                        class="van-field__control"
                      >
                    </div>
                  </div>
                </div>
                <!---->
                <div
                  v-if="idType.type>1"
                  class="line-gray"
                />

                <div class="phone_field van-cell van-field">
                  <div class="van-cell__title van-field__label">
                    <span>
                      登录手机号
                    </span>
                  </div>
                  <div class="van-cell__value van-field__value">
                    <div class="van-field__body">
                      <input
                        id="phone-1"
                        v-if="!verifyed"
                        v-model="mobile"
                        type="tel"
                        name="phone"
                        placeholder="用于后续账号登录"
                        class="van-field__control"
                      >
                      <input
                        id="phone-1"
                        v-else
                        v-model="mobile"
                        type="tel"
                        disabled
                        name="phone"
                        placeholder="用于后续账号登录"
                        class="van-field__control"
                      >
                      <div
                        v-if="!verifyed"
                        class="van-field__button"
                      >
                        <button
                          class="m_verify van-button van-button--default van-button--small"
                        >
                          <div class="van-button__content">
                            <span
                              :class="sending?'sending':''"
                              @click.stop="getCode"
                              class="van-button__text"
                            >
                              {{ sendCodeTxt }}
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <div
                id="insure"
                style="margin-left:0;"
                class="insure_info_list_title"
              >
                <div class="title_num">
                  2
                </div>
                <div class="title_text">
                  被保险人信息
                  <span style="color:#888B8E;">
                    (为谁买)
                  </span>
                </div>
              </div>
              <div
                v-if="!hasInsure"
                class="add_insure_img"
              />
              <!-- 被保人列表 -->
              <div
                v-else
                class="add_insure_list"
              >
                <div
                  v-for="(single,index) in insureList"
                  :key="index+32424324"
                >
                  <div
                    v-for="(item,index1) in single"
                    :key="index1+3247889324"
                    class="list_item"
                  >
                    <div
                      @click="deleteInsure(index,index1)"
                      class="img"
                    >
                      <img
                        y-log-id="delete_insured"
                        src="https://static1.webao99.com/newbeijing/img/list_close_085a2104.png"
                        alt=""
                      >
                    </div>
                    <div class="user_info">
                      <div class="name_info">
                        <span>被保人：</span>
                        <span>{{ item.userName }}</span>
                        <span class="self">{{ item.role.displayText }}</span>
                      </div>
                      <div class="id_info">
                        <span>{{ item.idType.displayText }}:</span>
                        <span>{{ item.idNo }}</span>
                      </div>
                    </div>
                    <!---->
                  </div>
                </div>
              </div>

              <!-- <div
                y-log-id="add_insured"
                class="friends_btn"
                @click.stop="addInsureBtnHandler"
              >
                <img
                  src="https://static1.webao99.com/newbeijing/img/add-icon2_5cfb0513.png"
                  alt=""
                  class=""
                >
                <span>
                  添加被保人
                </span>
              </div> -->
              <div
                @click.stop="addInsureBtnHandler"
                class="friends_btn"
              >
                <div
                  v-if="!hadClick"
                  class="handder_round"
                >
                  <div />
                </div>
                <img
                  src="https://static1.webao99.com/newbeijing/img/add-icon2_5cfb0513.png"
                  alt=""
                >
                <span>添加被保人</span>
                <img
                  v-if="!hadClick"
                  src="https://static1.webao99.com/newbeijing/img/handder_6d1de7a1.png"
                  alt=""
                  class="handder"
                >
              </div>
            </ul>
          </div>
          <!---->
          <!---->
        </form>
        <!---->
        <!---->
        <!---->
        <!---->
        <!---->
      </div>
    </div>
    <div id="con1">
      <div class="product-features">
        <div class="feature feature1" />
        <div class="feature feature2" />
        <div class="feature feature3"><div class="maskbtn" @click="showPopHandler('medicine')"></div></div>
        <div class="feature feature4"><div class="maskbtn" @click="showPopHandler('pormise')"></div></div>
        <div class="feature feature5"><div class="maskbtn" @click="showPopHandler('service_list')"></div></div>
      </div>
    </div>
    <div id="con2">
      <div class="test_cases">
        <div class="security_content_top">
          <div class="title">
            <div>
              演示案例
            </div>
            <img
              src="@/assets/imgs/product/puhui/shadow.png"
              alt=""
            >
            <div class="bg_color" />
          </div>
        </div>
        <div class="cases_title">
          <div class="cases_info">
            <div class="info_name">
              <span>Y先生</span>
              <span />
              <span>53岁</span>
            </div>
            <div class="info_content">
              安阳市城乡居民医疗保险参保人
            </div>
          </div>
          <img
            src="@/assets/imgs/product/puhui/renwu.png"
            alt=""
            class="cases_people"
          >
          <div class="cases_title_content">
            <div class="text">
              <div>
                <span class="niu">参保</span>2021年7月起参保，年保费95元
              </div>
            </div>
            <div class="text">
              <div>
                <span class="niu">生效</span>2022年1月1日安阳普惠健康保保障生效
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="div_img">
          <img
            src="https://static1.webao99.com/newbeijing/img/test_icon_afd75299.png"
            alt=""
            class="icon"
          >
          <img
            src="https://static1.webao99.com/newbeijing/img/test_icon_afd75299.png"
            alt=""
            class="icon1"
          >
        </div> -->
        <div class="claim">
          <div class="insurance">
            <div class="title">
              出险
            </div>
            <div class="content">
              <div class="content_title">
                <i />
                <span>门诊+住院治疗</span>
              </div>
              <div class="content_text">
                Y先生为安阳普惠健康保非特定既往症人群，在安阳普惠健康保保障生效后因肺部恶性肿瘤在安阳市某三甲医院同一保单年度内多次门诊+住院治疗
              </div>
              <div class="bg_content_text">
                <div class="content_text">
                  <span class="span_color">总治疗费用85.2万元</span> (门诊4.2万元+住院81万元)其中医保统筹基金报销25.45万元，大病保险基金报销25.41万元
                </div>
                <div class="content_text">
                  <span class="span_color">个人负担医疗费用34.34万元</span> (自付一和自付二共14.64万元+自费19.7万元）
                </div>
              </div>
              <div class="content_title">
                <i />
                <span>外购特药</span>
              </div>
              <div class="content_text">
                Y先生可根据病情选择国内特药或海外特药
              </div>
              <!---->
              <div class="bg_content_text">
                <div class="content_text">
                  <span class="span_color">若选择国内特药</span> (在安阳普惠健康保指定医疗机构/药店购买欧狄沃（纳武利尤单抗注射液），符合本保险约定的国内特药适应症范围，该药品为自费药品，个人需承担该药品的自费部分39.96万元。
                </div>
                <div class="content_text">
                  <span class="span_color">若选择海外特药</span> 在安阳普惠健康保海外特药指定医疗机构购买Alunbrig（Brigatinib），Alunbrig为《安阳普惠健康保特定药品目录》内的海外特药，符合本保险约定的海外特药适应症范围，该药品为自费药品，个人需承担该药品的自费部分55.62万元（因海外特药为专人专用，每个人专属的药品的价格和批号都不一定相同，实际价格以实际申请时间对应的采购批次价格为准，此处价格仅作演示使用，不作为理赔依据）。
                </div>
              </div>
            </div>
            <!-- <div
              y-log-id="claim_cases-unfolding"
              class="btn"
            >
              展开
              <img
                src="https://static1.webao99.com/newbeijing/img/home_down_503abac5.png"
                alt=""
              >
            </div> -->
            <!---->
          </div>
          <div class="insurance">
            <div class="title">
              理赔
            </div>
            <div class="content">
              <div class="content_title">
                <i />
                <span class="span_color">医保内门诊+住院医疗费用</span>(自付一+自付二)
              </div>
              <div class="content_text">
                赔付【14.64万元-3.04万元(免赔额)】*80%
                <br>=9.28万元
              </div>
              <div class="content_title">
                <i />
                <span class="span_color">医保外住院医疗费用</span>(自费)
              </div>
              <div class="content_text">
                赔付【19.7万元-2万元(免赔额)】*70%
                <br>=12.39万元
              </div>
              <div class="content_title">
                <i />
                <span class="span_color">外购特药赔付</span>
              </div>
              <div class="content_text">
                选国内特药【39.96万元-2万元(免赔额)】*60%
                <br>=22.78万元
              </div>
              <div class="content_text">
                选海外特药【55.62万元-2万元(免赔额)】*60%
                <br>=32.17万元
              </div>
            </div>
          </div>
          <div class="claim_text_title">
            合计安阳普惠健康保理赔金额
          </div>
          <div class="claim_text">
            <div class="content_text">
              选国内特药：9.28万元+12.39万元+22.78万元=44.45万元
            </div>
            <div class="content_text">
              选海外特药：9.28万元+12.39万元+32.17万元=53.84万元
            </div>
            <div class="content_text">
              Y先生购买安阳普惠健康保
              <span class="span_color">花费95元</span>，选择国内特药安阳普惠健康保
              <span class="span_color">合计赔付44.45万元</span>，选择海外特药安阳普惠健康保
              <span class="span_color">合计赔付53.84万元</span>。
            </div>
          </div>
        </div>
        <div class="footer">
          *详细保障方案请见投保界面相关内容，上述案例系为方便了解保障内容而作的假设，仅作演示使用，不作为理赔依据。
        </div>
      </div>
    </div>
    <div id="con3">
      <div class="QA">
        <div class="product_bg">
          <div class="tit_top">
            <p><span>常见问题</span></p>
            <img
              src="@/assets/imgs/product/puhui/shadow.png"
              alt=""
            >
            <div class="bg_color" />
          </div>
          <div class="question-ul">
            <div class="question-ul-li">
              <div>
                <div class="question-li-tit">
                  <i>Q</i>
                  <p>“安阳普惠健康保”是什么？</p>
                </div>
                <div class="question-li-msg">
                  <i>A</i>
                  <p />
                  <p>
                    “安阳普惠健康保”是专为安阳医保参保人定制，紧密衔接基本医疗保险的一款普惠的商业健康保险产品，旨在满足人民群众多样化的医疗保障需求，进一步提高广大安阳医保参保人员应对高额医疗费用负担的能力，是安阳多层次医疗保障体系的重要组成部分。该产品由安阳市医疗保障局、安阳市地方金融监督管理局共同指导，由中国银行保险监督管理委员会安阳监管局负责监督。&nbsp;
                  </p>
                  <p />
                </div>
              </div>
            </div>
            <div class="question-ul-li">
              <div>
                <div class="question-li-tit">
                  <i>Q</i>
                  <p>哪些人可以参保“安阳普惠健康保”？</p>
                </div>
                <div class="question-li-msg">
                  <i>A</i>
                  <p />
                  <p>只要是安阳市基本医疗保险在保状态的参保人员均能参加，包括城镇职工基本医疗保险参保人员、城乡居民基本医疗保险参保人员等。</p>
                  <p />
                </div>
              </div>
            </div>
            <div class="question-ul-li">
              <div>
                <div class="question-li-tit">
                  <i>Q</i>
                  <p>“安阳普惠健康保”保什么？</p>
                </div>
                <div class="question-li-msg">
                  <i>A</i>
                  <p />
                  <p><strong>医保目录内住院+门诊个人自付费用</strong><br> ① 保额为100万元/年。②免赔额为承保期间当年的安阳市大病医疗保险起付标准（以2020年为例：城镇职工3.95万，城乡居民3.04万），如安阳市大病医疗保险起付标准政策调整，则医保内责任免赔额也相应调整。③给付比例健康人群为80%，特定既往症人群为40%。</p>
                  <p><strong>医保目录外住院个人自费费用</strong><br> ① 保额为100万元/年。②免赔额为健康人群2万元，特定既往症人群4万元。③给付比例为健康人群70%，特定既往症人群35%。单一药品每年赔付上限为30万元；单一植体或耗材，每年赔付上限为10万元。</p>
                  <p><strong>百种海内外高额特药</strong><br> ① 25种国内特药保额为50万元/年，75种国外特药保额为50万元/年，合计保额100万元/年。②国内特药免赔额为健康人群2万元，特定既往症人群4万元；国外特药免赔额为健康人群2万元，特定既往症人群4万元。③给付比例为健康人群60%，特定既往症人群30%。</p>
                  <p />
                </div>
              </div>
            </div>
            <div class="question-ul-li">
              <div>
                <div class="question-li-tit">
                  <i>Q</i>
                  <p>哪些是特定既往症范畴？有特定既往症能理赔吗？如何理赔？</p>
                </div>
                <div class="question-li-msg">
                  <i>A</i>
                  <p />
                  <p>可以！特定既往症人群可投保可理赔<br> 特定既往症包括：（1）恶性肿瘤；（2）肝肾疾病：①肾功能不全 ②肝功能不全；（3）心脑血管及糖脂代谢疾病：①心脏类疾病 ②脑血管疾病 ③高血压III级 ④糖尿病；（4）肺部疾病：①慢性阻塞性肺病 ②慢性呼吸衰竭；（5）其他疾病：①系统性红斑狼疮 ②再生障碍性贫血 ③溃疡性结肠炎。（详见投保须知）<br> <strong>* 特定既往症人群保障与健康人群存在差异，具体赔付标准详见产品保障方案。</strong></p>
                  <p />
                </div>
              </div>
            </div>
            <div class="question-ul-li">
              <!---->
            </div>
            <div class="question-ul-li">
              <!---->
            </div>
            <div class="question-ul-li">
              <!---->
            </div>
            <div class="question-ul-li">
              <!---->
            </div>
            <div class="question-ul-li">
              <!---->
            </div>
            <div class="question-ul-li">
              <!---->
            </div>
            <div class="question-ul-li">
              <!---->
            </div>
            <div class="question-ul-li">
              <!---->
            </div>
            <div class="question-ul-li">
              <!---->
            </div>
            <div class="question-ul-li">
              <!---->
            </div>
            <div class="question-ul-li">
              <!---->
            </div>
            <div class="question-ul-li">
              <!---->
            </div>
            <div
              @click="goQA"
              y-log-id="qa-more"
              class="btn_qa"
            >
              更多问题
              <img
                src="https://static1.webao99.com/newbeijing/img/qa_icon_8fc00ac6.png"
                alt=""
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="insurance_unit">
      <div class="unit">
        <div class="unit_content">
          <div class="unit_title">
            <img src="@/assets/imgs/product/puhui/star.png">
            <span>主承保单位：</span>
          </div>
          <div class="color_gray">
            中国人民财产保险股份有限公司安阳分公司
          </div>
          <div class="color_gray">
            中国人寿财产保险股份有限公司安阳分公司
          </div>
        </div>
        <div class="unit_content">
          <div class="unit_title">
            <img src="@/assets/imgs/product/puhui/star.png">
            <span>共同承保单位：</span>
          </div>
          <div class="color_gray">
            泰康养老保险股份有限公司安阳分公司
          </div>
          <div class="color_gray">
            中国太平洋人寿保险股份有限公司安阳分公司
          </div>
          <div class="color_gray">
            中国平安财产保险股份有限公司安阳分公司
          </div>
        </div>
        <div class="unit_div">
          <div class="unit_content">
            <div class="unit_title">
              <img src="@/assets/imgs/product/puhui/star.png">
              <span>主运营平台：</span>
            </div>
            <div class="color_gray">
              易康吉
            </div>
          </div>
          <div class="unit_content">
            <div class="unit_title">
              <img src="@/assets/imgs/product/puhui/star.png">
              <span>数据与技术支持：</span>
            </div>
            <div class="color_gray">
              易联众
            </div>
          </div>
        </div>
        <div class="unit_div">
          <div class="unit_content">
            <div class="unit_title">
              <img src="@/assets/imgs/product/puhui/star.png">
              <span>药品服务：</span>
            </div>
            <div class="color_gray">
              易方科技
            </div>
          </div>
          <div class="unit_content">
            <div class="unit_title">
              <img src="@/assets/imgs/product/puhui/star.png">
              <span>健康服务：</span>
            </div>
            <div class="color_gray">
              金牌护士
            </div>
          </div>
        </div>
        <div class="unit_content">
          <div class="color_gray">
            <span style="font-weight: bold;color:#393d46;">咨询电话</span>：4008015880
          </div>
          <div class="color_gray">
            <span style="font-weight: bold;color:#393d46;">服务平台</span>：易康吉保险经纪有限公司
          </div>
          <div class="color_gray">
            辽ICP备17004821号-1
          </div>
        </div>
      </div>
    </div>
    <div class="home_footer">
      <div class="submit_btn">
        <img
          src="https://static1.webao99.com/newbeijing/img/home_gezhang_icon_eb5315ac.png"
          alt=""
          class="gezhang_icon"
        >
        <div
          y-log-id="consulting_customer_service"
          class="consulting"
          @click="toService"
        >
          <img
            src="https://static1.webao99.com/newbeijing/img/customer_service_7ef21eb3.png"
            alt=""
          >
          <div class="consulting_text">
            咨询
          </div>
        </div>
        <div class="line" />
        <div class="money">
          <div class="money_num">
            <span class="unit">&yen;</span>
            <span class="num">{{ sumPrice }}</span>
            <span>元/年</span>
          </div>
          <!---->
        </div>
        <div
          @click="buyInsure"
          y-log-id="immediate_insurance"
          class="btn"
        >
          立即投保
        </div>
      </div>
    </div>
    <div>
      <div
        class="dialogModel van-overlay"
        style="display: none;"
      >
        <div class="dialog_copy">
          <div class="share_main">
            <div class="share_close">
              <img
                src="https://static1.webao99.com/newbeijing/img/add_insure_close_59c1ce8c.png"
                alt=""
              >
            </div>
            <div class="dialog_copy_con">
              <div class="share_top">
                <div class="top_img">
                  <img
                    src="https://static1.webao99.com/newbeijing/img/dia_share_8d5bd3bc.png"
                    alt=""
                  >
                </div>
                <div class="top_tit flex">
                  <img
                    src="https://static1.webao99.com/newbeijing/img/dot-left_2f8db4cd.png"
                    alt=""
                  >
                  <p>分享方式</p>
                  <img
                    src="https://static1.webao99.com/newbeijing/img/dot-left_2f8db4cd.png"
                    alt=""
                  >
                </div>
              </div>
              <div class="share_ul">
                <ul>
                  <li>
                    <p class="flex">
                      <span>点击小程序里的</span><img
                        src="https://static1.webao99.com/newbeijing/img/share-icon_fd3c761d.png"
                        alt=""
                      ><span>发送给亲友</span>
                    </p>
                  </li>
                  <li>
                    <p>或点击下方按钮复制链接分享</p>
                    <div
                      data-clipboard-text="https://hmb.webao99.com/newbeijing/#/home?shareInfo=eyJzaGFyZUlkIjoiODEwNzUxMjAxMTAxNjMyMzg3NTcwNDQ2IiwicGFnZVBhdGgiOiIvaG9tZSIsImNoYW5uZWxJZCI6IkNETF9HUkNCIiwic2hhcmVVc2VySWQiOiIiLCJzb3VyY2VQYXRoIjoiIiwicG9zaXRpb25UeXBlIjoiRVhURVJOQUwifQ%3D%3D"
                      class="li_copy"
                    >
                      点击复制链接
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 添加被保人 -->
    <div
      v-if="addInsureShow"
      data-v-134cc356=""
      class="action_pop"
    >
      <div class="inner">
        <div class="action_header">
          <div class="action_tit">
            <div class="win-title">
              <span>添加被保人</span>
            </div>
            <div class="close">
              <img
                @click="closeAddInsure"
                class="close"
                src="https://static1.webao99.com/newbeijing/img/close_9d874087.png"
                alt=""
              >
            </div>
          </div>
        </div>
        <div class="action_body">
          <div class="navTitle">
            请先选择被保人关系
          </div>
          <div class="options">
            <div
              v-for="(item, index) in insures"
              :class="curInsureItem.role.type==item.type?'active':''"
              @click="chooseAddInsure(item)"
              class="option"
            >
              {{ item.displayText }}
            </div>
          </div>
          <div class="form">
            <form class="van-form">
              <div class="info_list">
                <ul>
                  <li
                    id="info12"
                    class="li_shadow"
                  >
                    <div class="van-cell van-field">
                      <div class="van-cell__title van-field__label">
                        <span>
                          姓名
                        </span>
                      </div>
                      <div class="van-cell__value van-field__value">
                        <div class="van-field__body">
                          <input
                            id="name-1"
                            v-model="curInsureItem.userName"
                            type="text"
                            placeholder="请输入投保人姓名"
                            class="van-field__control"
                          >
                        </div>
                      </div>
                    </div>
                    <div class="line-gray" />
                    <div>
                      <div class="id_type_box">
                        <div
                          role="button"
                          tabindex="0"
                          class="id_type van-cell van-cell--clickable van-field"
                        >
                          <div class="van-cell__value van-cell__value--alone van-field__value">
                            <div
                              @click="idPickerShowHandler"
                              class="van-field__body"
                            >
                              <input
                                v-model="curInsureItem.idType.displayText"
                                type="text"
                                name="idType"
                                readonly="readonly"
                                placeholder="请选择"
                                class="van-field__control"
                              >
                              <div class="van-field__right-icon">
                                <i class="van-icon van-icon-arrow-down">
                                  <!---->
                                </i>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!---->
                        <div class="id_type_num van-cell van-field">
                          <div class="van-cell__value van-cell__value--alone van-field__value">
                            <div class="van-field__body">
                              <input
                                id="idNo-1"
                                v-model="curInsureItem.idNo"
                                type="text"
                                name="idNo"
                                placeholder="请输入证件号"
                                class="van-field__control"
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="line-gray" />
                    </div>
                    <div
                      v-if="curInsureItem.idType.type>1"
                      class="van-cell van-field"
                    >
                      <div class="van-cell__title van-field__label">
                        <span>性别</span>
                      </div>
                      <div class="van-cell__value van-field__value">
                        <div class="van-field__body">
                          <div class="van-field__control van-field__control--custom">
                            <div
                              role="radiogroup"
                              class="van-radio-group van-radio-group--horizontal"
                            >
                              <div
                                role="radio"
                                style="margin-right:30px;"
                                class="van-radio van-radio--horizontal"
                              >
                                <div
                                  @click="curInsureItem.sex=1"
                                  :class="curInsureItem.sex==1?'van-radio__icon--checked':''"
                                  class="van-radio__icon van-radio__icon--round"

                                >
                                  <i
                                    class="van-icon van-icon-success"
                                  >
                                  <!----></i>
                                </div>
                                <span class="van-radio__label">男</span>
                              </div>
                              <div
                                role="radio"
                                class="sex_radio van-radio van-radio--horizontal"
                              >
                                <div
                                  @click="curInsureItem.sex=2"
                                  :class="curInsureItem.sex==2?'van-radio__icon--checked':''"
                                  class="van-radio__icon van-radio__icon--round"
                                >
                                  <i class="van-icon van-icon-success">
                                  <!----></i>
                                </div>
                                <span class="van-radio__label">女</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      v-if="curInsureItem.idType.type>1"
                      class="line-gray"
                    />
                    <div
                      v-if="curInsureItem.idType.type>1"
                      role="button"
                      tabindex="0"
                      class="van-cell van-cell--clickable van-field"
                    >
                      <div class="van-cell__title van-field__label">
                        <span>出生日期</span>
                      </div>
                      <div
                        @click="openPicker"
                        class="van-cell__value van-field__value"
                      >
                        <div class="van-field__body">
                          <input
                            v-model="curInsureItem.birthday"
                            type="text"
                            name="birthday"
                            readonly="readonly"
                            placeholder="请选择"
                            class="van-field__control"
                          >
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </form>
          </div>
          <div
            @click="addInsureHandler"
            class="btn"
          >
            确定添加
          </div>
        </div>
      </div>
    </div>
    <!-- 文档弹窗 -->
    <div
      v-show="popShow"
      data-v-134cc356=""
      class="action_pop doc_pop"
    >
      <div class="inner">
        <div class="action_header">
          <div class="action_tit">
            <div class="win-title">
              <span>{{ popContent.title }}</span>
            </div>
            <div class="close">
              <img
                @click="popShow=false"
                class="close"
                src="https://static1.webao99.com/newbeijing/img/close_9d874087.png"
                alt=""
              >
            </div>
          </div>
        </div>
        <div class="action_body" v-if="popContent.content">
          <div
            v-for="(item,index) in popContent.content"
            class="para"
          >
            <div
              v-if="item.type=='img'"
              class="line"
            >
              <img
                :src="item.url"
                alt=""
              >
            </div>
            <div
              v-else
              :class="item.type?item.type:''"
              class="line"
            >
              {{ item.text }}
            </div>
          </div>
        </div>
        <div class="action_body" v-else>
          <div class="nodata"><img src="@/assets/imgs/product/puhui/nodata.png" alt=""></div>
          <div class="desc">以正式投保产品相关详情展示为准</div>
        </div>
      </div>
    </div>
    <!-- 立即购买弹窗协议 -->
    <div
      v-if="orderProtocolShow"
      class="action_pop protocol"
    >
      <div class="inner">
        <div class="action_header">
          <div class="action_tit">
            <div class="close">
              <img
                @click="orderProtocolShow=false"
                class="close"
                src="https://static1.webao99.com/newbeijing/img/close_9d874087.png"
                alt=""
              >
            </div>
            <div
              v-if="curProtocol"
              class="slides"
              ref="slides"
            >
              <div
                :class="curProtocol.proto == 'proto1'?'active':''"
                @click="showProtocol($event,'proto1')"
                class="slide "
              >
                重要提示
              </div>
              <div
                :class="curProtocol.proto == 'proto2'?'active':''"
                @click="showProtocol($event,'proto2')"
                class="slide"
              >
                产品投保须知
              </div>
              <div
                :class="curProtocol.proto == 'proto3'?'active':''"
                @click="showProtocol($event,'proto3')"
                class="slide"
              >
                医保个人信息查询及个人账户专户支付授权书
              </div>
            </div>
          </div>
        </div>
        <div class="action_body">
          <div
            v-if="curProtocol"
            class="content"
          >
            <div
              v-for="(item,index) in curProtocol.content"
              class="para"
            >
              <div
                v-if="item.type=='img'"
                class="line"
              >
                <img
                  :src="item.url"
                  alt=""
                >
              </div>
              <div
                v-else-if="item.type=='html'"
                :class="item.type?item.type:''"
                class="line"
                v-html="item.text"
              >
                
              </div>
              <div
                v-else
                :class="item.type?item.type:''"
                class="line"
              >
                {{ item.text }}
              </div>
            </div>
          </div>
        </div>
        <div class="action_footer">
          <div class="protocols">
            <div class="pro" @click="showPopHandler('security_content')">《保障计划表》</div>
            <div class="pro" @click="showPopHandler('security_content')">《产品说明书》</div>
            <div class="pro" @click="showPopHandler('security_content')">《理赔须知》</div>
            <div class="pro" @click="showPopHandler('security_content')">《医保个人信息查询及个人账户专户支付授权书》</div>
            <div class="pro" @click="showPopHandler('security_content')">《产品投保须知》</div>
            <div class="pro" @click="showPopHandler('security_content')">《适用条款》</div>
            <div class="pro" @click="showPopHandler('security_content')">《保险经纪服务委托协议》</div>
            <div class="pro" @click="showPopHandler('security_content')">《承诺书》</div>
          </div>
          <div
            @click="toNextPage"
            class="btn"
          >
            已阅读并同意以上文件及页面内容
          </div>
        </div>
      </div>
    </div>
    <!-- 证件选择器 -->
    <div
      v-show="idPickerShow"
      class="pickerbox"
    >
      <div class="pick-wrapper">
        <div class="title-box">
          <div
            @click="closeIdPicker"
            class="cancle"
          >
            取消
          </div>
          <div class="title" />
          <div
            @click="pickConfirm"
            class="confirm"
          >
            确认
          </div>
        </div>
        <mt-picker
          ref="idTypePicker"
          :slots="slots"
          :showToolbar="true"
          value-key="displayText"
        />
      </div>
    </div>
    <!-- 生日选择器 -->
    <mt-datetime-picker
      ref="datePicker"
      @confirm="confirmHandler"
      v-model="pickerBirthdayDate"
      :startDate="startDate"
      type="date"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
    />
    <verify-code
      ref="verifyCode"
      @verifyed-event="verifyedHandler"
      @send-code-event="sendCodeHandler"
      :mobile="mobile"
      @showdoc-event="showPopHandler('security_content')"
    />
    <v-notify
      ref="notify"
      @notify-event="notifyed=true"
      @showdoc-event="showPopHandler('security_content')"
    />
  </div>
</template>

<script>
import { throttle } from 'js/util';
// import { this.$toast, Picker, DatetimePicker } from 'mint-ui';
import contentList from './contentList.js';
import protocols from './protocols.js';
import verifyCode from './verifyCode';
import vNotify from './notify';

export default {
  name: '',
  components: {
    verifyCode,
    vNotify
  },
  data() {
    return {
      startDate: new Date('1961/1/1'),
      hadSelf: false,
      notifyed: sessionStorage.getItem('notifyed') == 'true',
      hadWife: false,
      hadClick: false,
      sendCodeTxt: '获取验证码',
      sending: false,
      singlePrice: '95',
      orderProtocolShow: false,
      curProtocol: null,
      addInsureShow: false,
      insureList: {
        1: [],
        2: [],
        3: [],
        4: []
      },
      curInsureItem: null,
      insures: [
        {
          displayText: '本人',
          type: '1'
        },
        {
          displayText: '配偶',
          type: '2'
        },
        {
          displayText: '父母',
          type: '3'
        },
        {
          displayText: '子女',
          type: '4'
        }
      ],
      deadLine: '2021/10/1',
      popShow: false,
      idPickerShow: false,
      slots: [
        {
          flex: 1,
          values: [],
          className: 'slot1',
          textAlign: 'center',
          defaultIndex: 0
        }
      ],
      countDown: {
        day: '',
        hour: '',
        minute: '',
        second: ''
      },
      contentList: contentList,
      userName: '',
      idType: {
        type: '',
        displayText: ''
      },
      idNo: '',
      sex: '',
      birthday: '',
      mobile: sessionStorage.getItem('mobile') || '',

      popContent: '',
      timer: null,
      isFixed: false,
      navArr: [
        {
          text: '我要投保',
          top: 0
        },
        {
          text: '产品特色',
          top: 0
        },
        {
          text: '演示案例',
          top: 0
        },
        {
          text: '常见问题',
          top: 0
        }
      ],
      curIndex: 0,
      idTypes: [
        {
          displayText: '身份证',
          type: 1
        },

        {
          displayText: '外国护照',
          type: 2
        },

        {
          displayText: '港澳通行证',
          type: 3
        },

        {
          displayText: '香港身份证',
          type: 4
        },

        {
          displayText: '澳门身份证',
          type: 5
        },

        {
          displayText: '台湾身份证',
          type: 6
        },

        {
          displayText: '港澳台居民居住证',
          type: 7
        },

        {
          displayText: '外国人永久居留身份证',
          type: 8
        }
      ],
      birthdayDate: '',
      pickerBirthdayDate: '',
      running: false,
      verifyed: false
    };
  },
  computed: {
    // locked(){
    //   return this.userName && this.idNo
    // },
    // birthday() {
    //   return this.formatDate(this.birthdayDate);
    // },
    hasInsure() {
      for (const key in this.insureList) {
        const item = this.insureList[key];
        if (item.length > 0) {
          return true;
        }
      }
      return false;
    },
    sumPrice() {
      let length = 0;
      for (const key in this.insureList) {
        const item = this.insureList[key];
        for (var i = 0; i < item.length; i++) {
          length++;
        }
      }
      return length>0?length * this.singlePrice:this.singlePrice;
    }
  },
  watch: {
    userName(val){
      console.log(this,val)

    }
    // pickerBirthdayDate(val){
    //   console.log(val instanceof Date,!val,val)
    //   if(val instanceof Date){
    //     if(this.curInsureItem){
    //       this.curInsureItem.birthday = this.formatDate(val)
    //     }else{

    //       this.birthday = this.formatDate(val)
    //     }
    //   }
    // },
  },

  created() {
    // debugger
    this.deadLine = new Date();
    // this.$toast('Hello world!')
    this.countDownHandler();
    this.timer = setInterval(() => {
      const { day, hour, minute, second } = this.countDownHandler();
      if (day == 0 && hour == 0 && minute == 0 && second == 0) {
        clearInterval(this.timer);
      }
    }, 1000);
    this.idType = this.idTypes[0];
    this.initPicker();
    this.verifyed = !!this.mobile;
  },
  mounted() {
    this.bindFixed();
    setTimeout(() => {
      this.getNavTops();
    }, 300);
    // this.getNavTops();
  },
  methods: {
    toService(){
      this.$router.push('./zixun')
    },
    setBirthday(val) {
      if (val instanceof Date) {
        if (this.curInsureItem) {
          this.curInsureItem.birthday = this.formatDate(val);
        } else {
          this.birthday = this.formatDate(val);
        }
      }
    },

    goQA() {
      this.$router.push('./QA');
    },
    verifyedHandler() {
      this.verifyed = true;
    },
    sendCodeHandler(arg) {
      this.sendCodeTxt = arg.resendTxt;
      this.sending = arg.sending;
    },
    getCode(e) {
      e.preventDefault();
      if (!this.notifyed) { return this.$refs['notify'].show(); }
      if (this.mobile) {
        if (!this.sending) {
          this.$refs['verifyCode'].show();
          this.$refs['verifyCode'].sendCode();
        }
      } else {
        this.$toast('请填写手机号码');
      }
    },
    toNextPage() {
      this.orderProtocolShow = false
      this.$router.push('./puhuiPay');
      sessionStorage.setItem('holder', JSON.stringify({
        // this.insures[0]
        userName: this.userName,
        idType: this.idType,
        idNo: this.idNo
      }));
      sessionStorage.setItem('insures', JSON.stringify(this.insureList));
    },
    showProtocol(e, proto) {
      if(e){

        let target = e.target
        let slideWidth = target.offsetWidth
        let slideLeft = target.offsetLeft
        let parentsWidth = this.$refs['slides'].offsetWidth
        let slidesWidth = this.$refs['slides'].scrollWidth

        let scrollX= slideWidth/2 + slideLeft - parentsWidth/2

        this.$refs['slides'].scrollTo(scrollX,0)
      }


      this.curProtocol = protocols[proto];
      this.curProtocol.proto = proto;
    },
    deleteInsure(roleType, index) {
      this.insureList[roleType].splice(index, 1);
    },
    closeAddInsure() {
      this.addInsureShow = false;
      this.curInsureItem = null;
    },
    addInsureHandler() {
      if (this.validate()) {
        this.insureList[this.curInsureItem.role.type].push(JSON.parse(JSON.stringify(this.curInsureItem)));
        if (this.curInsureItem.role.type == 1) {
          this.userName = this.curInsureItem.userName;
          this.idType = this.curInsureItem.idType;
          this.idNo = this.curInsureItem.idNo;
          this.sex = this.curInsureItem.sex;
          this.birthday = this.curInsureItem.birthday;
        }
        this.closeAddInsure();
      }
    },
    confirmHandler() {
      console.log(this.$refs.datePicker);
      const value = this.$refs.datePicker.currentValue;
      this.pickerBirthdayDate = value;
      this.setBirthday(value);
    },
    formatDate(datearg) {
      if (!datearg) { return; }
      var date = new Date(datearg);
      var seperator1 = '-';
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = '0' + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate;
      }
      var currentdate = year + seperator1 + month + seperator1 + strDate;
      return currentdate;
    },
    openPicker() {
      this.$refs.datePicker.open();
    },
    pickConfirm() {
      console.log(this.$refs['idTypePicker']);
      const values = this.$refs['idTypePicker'].values;
      this.$refs['idTypePicker'].setSlotValue(0, values[0]);
      if (this.curInsureItem) {
        // 存在说明正在添加被保人
        this.curInsureItem.idType = values[0];
      } else {
        this.idType = values[0];
      }
      this.closeIdPicker();
    },
    closeIdPicker() {
      this.idPickerShow = false;
    },

    initPicker() {
      // Picker
      // let arr = []
      // this.idTypes.forEach(item=>{
      //   arr.push(item.displayText)
      // })
      this.slots[0].values = this.idTypes;
    },
    showPopHandler(type) {
      this.popContent = contentList[type];
      this.popShow = true;
    },
    chooseAddInsure(item) {
      if (item.type == 1) {
        if (this.hadSelf) {
          this.$toast('本人已添加');
          return;
        }
      }
      if (item.type == 2) {
        if (this.hadWife) {
          this.$toast('配偶已添加');
          return;
        }
      }
      if (item.type == 1) {
        this.curInsureItem = {
          // ...this.insures[0],
          role: this.insures[0],
          userName: this.userName,
          idType: this.idType,
          idNo: this.idNo,
          sex: this.sex,
          birthday: this.birthday
        };
      } else {
        this.curInsureItem = {
          role: item,
          userName: '',
          idType: this.idTypes[0],
          idNo: '',
          sex: '',
          birthday: ''
        };
      }
      console.log(this.$refs.datePicker);
      this.pickerBirthdayDate = this.startDate;
    },
    idPickerShowHandler() {
      this.idPickerShow = true;
      let idType = this.idType;
      if (this.curInsureItem) {
        idType = this.curInsureItem.idType;
      }
      this.$refs['idTypePicker'].setSlotValue(0, idType);
    },
    buyInsure() {
      // debugger
      if (!this.notifyed) { return this.$refs['notify'].show(); }
      if (!this.validate()) {
        this.to(0);
      } else {
        if (!this.hasInsure) {
        // 跳到添加被保人
          this.$refs['home'].scrollTo(0, this.navArr[0].top + 300);
          this.$toast('请添加被保人');
          this.hadClick = false;

        }else{

        // 展示相关协议
          if(!this.verifyed){
            return this.$toast('请输入手机号验证码');
          }
          this.orderProtocolShow = true;
          this.showProtocol(null, 'proto1');
          // this.curProtocol = protocols['proto1']
        }
        
      }

    },
    addInsureBtnHandler() {
      // if(this.userName && this.idNo && this.verifyed) {
      //   this.locked = true
      // }
      if (!this.notifyed) { return this.$refs['notify'].show(); }
      this.hadClick = true;
      this.addInsureShow = true;
      this.setCurInsureItem();
    },
    setCurInsureItem() {
      // this.insureList = {
      // 1:{}, 本人
      // 2:{}, 爱人
      // 3:[], 父母
      // 4:[], 子女
      // }
      if (this.insureList[1].length == 0) {
        // 本人只有一个
        this.chooseAddInsure(this.insures[0]);
      } else if (this.insureList[2] == 0) {
        this.hadSelf = true;
        // 配偶只有一个
        this.chooseAddInsure(this.insures[1]);
      } else if (this.insureList[3].length < 4) {
        this.hadWife = true;
        this.hadSelf = true;

        // 父母暂定4个
        this.chooseAddInsure(this.insures[2]);
      } else {
        this.hadWife = true;
        this.hadSelf = true;

        // 子女不确定数量
        this.chooseAddInsure(this.insures[3]);
      }
    },
    validate() {
      console.log(this)
      let userName = this.userName;
      let idNo = this.idNo;
      let idType = this.idType;
      let birthday = this.birthday;
      let sex = this.sex;
      let role = '投保人';
      if (this.curInsureItem) {
        userName = this.curInsureItem.userName;
        idNo = this.curInsureItem.idNo;
        idType = this.curInsureItem.idType;
        birthday = this.curInsureItem.birthday;
        sex = this.curInsureItem.sex;
        role = '被保人';
      }
      if (!userName) {
        this.$toast(`${role}姓名不能为空`);
        // this.$toast(
        //   {
        //     message:'请添加被保人',
        //     duration:100000
        //   }
        // )
        return false;
      }
      if (!idNo) {
        this.$toast(`${role}证件号码不能为空`);
        return false;
      } else {
        if (idType.type > 1) {
          if (!sex) {
            this.$toast(`请选择${role}性别`);
            return false;
          }
          if (!birthday) {
            this.$toast(`请选择${role}生日`);
            return false;
          }
        }
      }
      if (!this.curInsureItem) {
        if(!this.mobile){
          this.$toast(`投保人手机号码不能为空`);
          return false
        }

      }
      return true;
    },
    getNavTops() {
      for (var i = this.navArr.length - 1; i >= 0; i--) {
        const item = this.navArr[i];
        const targetId = 'con' + i;
        const el = document.querySelector(`#${targetId}`);
        const offset = this.getreal(el);
        this.navArr[i].top = offset[1] - 70;
      }
      console.log(this.navArr);
    },

    updateNavArr() {

    },

    scrollHandler(e) {
      if (this.running) { return; }
      this.running = true;
      // console.log(e)
      setTimeout(() => {
        this.running = false;
        const target = e.target;
        this.getNavTops();
        console.log(target.scrollTop, this.navArr);
        for (var i = 0; i < this.navArr.length; i++) {
          const length = this.navArr.length;
          const curItem = this.navArr[i];
          let nextItem;
          if (i == length - 1) {
            nextItem = null;
          } else {
            nextItem = this.navArr[i + 1];
          }
          console.log(target.scrollTop > curItem.top, nextItem && nextItem.top);
          if (target.scrollTop > curItem.top) {
            if (!nextItem) {
              this.curIndex = i;
              return;
            } else {
              if (target.scrollTop < nextItem.top) {
                this.curIndex = i;
                return;
              }
            }
          }
        }
      }, 500);
    },
    to(index) {
      this.curIndex = index;
      // const targetId = 'con' + index;
      // const el = document.querySelector(`#${targetId}`);
      // let offset = this.getreal(el)
      // console.log(top)
      this.$refs['home'].scrollTo(0, this.navArr[index].top);
    },

    getreal(el, pname = 'body') {
      let left = el.offsetLeft;
      let top = el.offsetTop;
      if (el.offsetParent && el.offsetParent.tagName !== pname) { // 默认一致计算到body, 实际上需要根据需求(实际坐标点)进行修改, 可以用className或者id或者别的什么的, 灵活改变;
        const p = this.getreal(el.offsetParent, pname);
        left += p[0];
        top += p[1];
      }
      return [left, top];
    },
    countDownHandler() {
      const deadLine = new Date(this.deadLine).getTime() + 4 * 24 * 60 * 60 * 1000;
      const deltaS = deadLine - new Date().getTime();
      let day = Math.floor(deltaS / 1000 / 60 / 60 / 24);
      let hour = Math.floor(deltaS / 1000 / 60 / 60) - day * 24;
      let minute = Math.floor(deltaS / 1000 / 60) - day * 24 * 60 - hour * 60;
      let second = Math.floor(deltaS / 1000 % 60);
      if (deltaS < 0) {
        day = 0;
        hour = 0;
        minute = 0;
        second = 0;
      }
      this.countDown.day = day;
      this.countDown.hour = hour > 9 ? hour : '0' + hour;
      this.countDown.minute = minute > 9 ? minute : '0' + minute;
      this.countDown.second = second > 9 ? second : '0' + second;
      return {
        day, hour, minute, second
      };
    },
    bindFixed() {
      const intersectionObserver = new IntersectionObserver(
        this.observerCb,
        {
          threshold: [0, 1]
        }
      );
      intersectionObserver.observe(document.querySelector('#navBar'));
    },
    observerCb(entries) {
      console.log(entries);
      const target = entries[0];
      if (target.boundingClientRect.top < 0) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
  @import "./main.css"
  @import "./QA.css"
  @import "./common.styl"
  >>> .mint-datetime-action
    width 120px
  >>> .mint-datetime-confirm
    color #576b95
  >>> .mint-datetime-cancel
    color #969799
  input
    outline none
    &::placeholder
      color #C3C3C3
  .btn
    width 590px
    margin 70px auto
    line-height 98px
    color #fff
    text-align center
    background linear-gradient(90deg,#ffaf40,#ff7108)
    border-radius 49px
    font-size 28px
  .pickerbox
    position fixed
    left 0
    top 0
    width 100%
    height 100%
    z-index 50
    background rgba(0,0,0,.6)
    .pick-wrapper
      position absolute
      bottom 0
      width 100%
      background-color #fff
      .title-box
        height 80px
        line-height 80px
        display flex
        padding 0 20px
        font-size 32px
        justify-content space-between
        border 1px solid #eaeaea
        .title
          flex 1
        .cancle
          color #969799
        .confirm
          color #576b95
  .action_pop
    z-index 50
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    font-size 28px
    line-height 40px
    text-align left
    background rgba(0,0,0,0.6)
    &.doc_pop
      z-index 60
    .inner
      overflow auto
      width 100%
      max-height 90%
      min-height 60%
      position absolute
      bottom 0
      border-radius 25px 25px 0 0
      background-color #fff
      display flex
      flex-direction column
      input
        font-size 32px
      .action_tit
        position relative
        z-index 2
        background-color #fff
        text-align center
        padding-top 36px
        padding-bottom 1px
        border-bottom 1px solid #D8D8D8
        .close
          border-radius 50%
          width 50px
          height 50px
          position absolute
          right 10px
          top 10px
      .action_header
        height 130px
        width 100%
        background-color #fff
      .action_body
        flex 1
        padding 20px 20px 40px
        overflow auto
        width 100%
        .nodata
          width 595px
          margin 92px auto
          img
           width 100%
        .desc
          color #888B8E
          font-size 26px
          text-align center
        .navTitle
          margin-bottom 30px
        .options

          display flex
          justify-content space-between
          margin-bottom 20px
          .option
            text-align center
            width 147px
            height 70px
            line-height 70px
            color #F8B144
            background-color #FFFAF5
            border-radius 6px
            &.active
              color #fff
              background-color #F8B144
              position relative
              &:after
                position absolute
                right 0
                bottom 0
                width 32px
                height 22px
                background url("~@/assets/imgs/product/puhui/relation_check1_2ee46f75.png") 0 no-repeat
                background-size 100%

        .line
          margin-bottom 20px
          img
            width 100%
    &.protocol
      .inner
        display flex
        flex-direction column
        .action_tit
          padding-top 80px
          .slides
            position relative
            width 100%
            height 50px
            overflow-x auto
            overflow-y hidden
            display flex
            flex-wrap nowrap
            background-color #fff
            &::-webkit-scrollbar
              display: none
            .slide
              flex 1
              white-space nowrap
              padding 0 20px
              color #646566
              position relative
              &.active
                color #323233
                &:after
                  position absolute
                  bottom 0
                  content ''
                  left 50%
                  width 80px
                  height 4px
                  font-size 0
                  margin-left -40px
                  background-color rgb(75, 141, 250)
        .action_body
          position relative
          flex 1 1 800px
          overflow-y auto
          overflow-x hidden
          .content
            overflow auto
            padding-top 30px
            height 100%

        .action_footer
          flex 1 0 100px
          .protocols
            background-color #fbfbfb
            padding 20px
            display flex
            flex-wrap wrap
            .pro
              color #4b8dfa
              font-size 24px
              margin 0 10px
          .btn
            margin 20px auto
  #con0
    .van-button__content
      .van-button__text
        &.sending
          color #999
  #con1
    .product-features
      .feature
        position relative
        &.feature1
          height 918px
          background url('~@/assets/imgs/product/puhui/pro1.jpg') 0 top no-repeat
          background-size 100%
        &.feature2
          height 1074px
          background url('~@/assets/imgs/product/puhui/pro2.jpg') 0 top no-repeat
          background-size 100%
        &.feature3
          height 1050px
          background url('~@/assets/imgs/product/puhui/pro3.jpg') 0 top no-repeat
          background-size 100%
        .maskbtn
          width 400px
          height 60px
          // background-color red
          position absolute
          bottom 45px
          left 50%
          margin-left -200px
        &.feature4
          height 956px
          background url('~@/assets/imgs/product/puhui/pro4.jpg') 0 top no-repeat
          background-size 100%
        &.feature5
          height 1110px
          background url('~@/assets/imgs/product/puhui/pro5.jpg') 0 top no-repeat
          background-size 100%
          background-color #fcf8f5
  #con2
    .test_cases
      .cases_title_content
        .text
          line-height 40px
          div
            margin-left 0
            padding-left 20px
            font-size 26px
          .niu
            margin-right 20px
            display inline-block
            width 92px
            height 40px
            color #fff
            border-radius 20px
            text-align center
            vertical-align baseline
            line-height 40px
            background linear-gradient(top,#feb974,#ff7c25);
      .bg_content_text
        background-color #f9f9f9
        padding 10px 0
        border-radius 20px
      .claim_text_title
        width 557px
        height 69px
        margin 0 0 30px 26px
        text-indent 1em
        background url('~@/assets/imgs/product/puhui/claim-title.png') 0 top no-repeat
        background-size 100%
        font-size 32px
        line-height 70px
        color #fff
        text-align left
</style>
