// pages/main/main.js

Page({
  data: {
    theme: '要不要上课',
    items: [{
        name: '1',
        value: '初级版',
        checked: "true"
      },
      {
        name: '2',
        value: '中级版'
      },
      {
        name: '3',
        value: '高级版'
      },
    ],
    edition: '1',
    laststring: " ",
    couldview: "false",
    string1: [['一觉起来这么多赞了？本来只是答着玩玩，实在受宠若惊\n以下原答案:\n-----------------------分割线------------------------\n', '谢邀\n本人在国内TOP2就读，现麻省理工博士，月薪50k\n现在人在美国纽约，中午刚下飞机，简单回答一下\n关于', '，这个问题我不知道\n\n以上\n本人利益相关，很多东西不方便透露，匿了\n侵删'], ['本答案禁止任何形式的未经授权转载以下原答案，本声明具有法律效力。\n-----------------------分割线------------------------\n', '谢邀\n本人在国内985就读，国外读的MBA，现在腐国任高级基金经理，和圈内大牛比不了\n中午刚下飞机，等下公司还有个内部会议，时间仓促，简单回答一下\n关于', '，这个问题我不知道\n\n以上\n先写这么多，再有想到就来补充\n侵删'], ['补充一点，我的答案不具有100%效用，只针对普遍情况，评论区戾气太重关了\n以下原答案:\n-----------------------分割线------------------------\n', '感谢用户@Muntno的邀请\n本人在国内从事相关行业工作20年，现在行业内一家龙头企业工作，月薪五位数加提成\n刚参加完一个行业标准制定会议，有点累，就简单回答一下这个问题。\n关于', '，这个问题我不知道\n\n以上\n利益相关，同事朋友都在玩知乎，匿了\n侵删'], ['偶然看到这个问题，觉得挺有意思的，正好有点想法，回答一下\n-----------------------分割线------------------------\n', '本人在国内从事相关行业工作20年，现在行业内一家龙头企业工作，月薪五位数加提成\n刚参加完一个行业标准制定会议，有点困了，就简单回答一下这个问题。\n关于', '，这个问题我不知道\n\n以上瞎编的\n利益不相关，圈子没熟人，很多东西方便透露，不匿了\n侵删'], ['一觉醒来 没想到都过千了，第一次回答没想到这个待遇谢谢大家。\n-----------------------分割线------------------------\n', '谢邀\n作为相关行业从事该方面工作30年的老鸟，这个问题我想我比较有资格回答。刚刚深夜赶完一个国外项目下班，前前后后忙了一个多月，有点累，就简单回答一下这个问题。\n关于', '，这个问题我也不知道\n\n以上\n利益相关，圈子有点小，大家都认识，可能有人已经认出我了，先匿了\n侵删'], ['本答案共1000字，预计1分钟读完，请在拨号上网下阅读。\n-----------------------分割线------------------------\n', '谢邀，本人大专毕业，和这个行业没半毛钱关系，人穷读书少，长得丑没爆照，现在行业内一家快破产公司上班，月薪3位数，刚搬完砖有点累了，就简单回答下这个问题。\n关于', '，这个问题我也不知道\n\n以上\n利益不相关，没有圈子，大家都不认识，没人认得出我，不匿了\n侵也不删\n\n']],
    string2: [['评论下面有点酸啊，我不做点评了，圈内人太多匿了。平时基本没有休息日，工作到很晚，没什么时间回复。送他们一句莎士比亚的话——本来无望的事，大胆尝试，往往能成功。\n-----------------------分割线------------------------\n', '谢邀\n本人坐标曼哈顿市区，15岁随父母出国，本硕博就读常春藤名校，毕业后曾参加过登月计划， 经历不算丰富，比不上行业内大牛。工作也不喜欢，整天在白宫给特朗普做汇报，人情世故太复杂，而且曼哈顿交通不好，开宾利每天堵在路上。还是喜欢在中国上海浦东新区的别墅，宽敞而且舒适。\n关于', '这个问题，我个人觉得太浅显了，建议善用搜索引擎，在此不做详细解答。培根说过，深窥自己的心，而后发觉一切的奇迹在你自己。自己探索的乐趣是别人无法取代的。有问题可以付费咨询我。 \n\n', '由于圈内人士太多不方便透露具体，可能有些圈内人士大概知道我是谁了吧，评论里酸我的，就是见不得人好！\n侵删\n以上'], ['本答案禁止任何形式的未经授权转载以下原答案，本声明具有法律效力。已经联系了维权骑士\n-----------------------分割线------------------------\n', '谢邀\n本人坐标纽约市区，21岁出国深造，本科国内一般985，MBA就读耶鲁，毕业后曾参加过一些华尔街金融项目，本身经历不算丰富，比不上行业内大牛。现于花旗银行做亚太投资顾问，谈不上多有成就感。还是之前在JP摩根的工作开心，虽然只有50k刀但是工作开心，没那么多人情世故要考虑。\n关于', '这个问题，我个人觉得还是研究不够仔细，建议多看下相关手册，里面写的很清楚，在此不做详细解答。正如伏尔泰所说，坚持意志伟大的事业需要始终不渝的精神。希望你一如既往的探索，有问题可以付费咨询我。\n\n', '圈内人太多了，不方便再说更多，怕给认出来，先匿了，侵删\n以上'], ['今天下班的时候偶然看到这个问题，觉得挺有意思的，正好有点相关的想法，回答一下\n-----------------------分割线------------------------\n', '谢邀\n本人坐标腐国，国内C9读的工科，MBA就读剑桥，毕业后曾参加过一些政府的金融顾问工作，本身经历不算太丰富，家庭条件一般。现于汇丰控股公司做亚太战略投资顾问，谈不上多有成就感。后来回国从事相关工作，还是喜欢在中国北京的别墅，宽敞而且舒适。\n关于', '这个问题，我个人觉得还是多研究下相关事例，会有不一样的体验。正如笛卡儿所说，我的努力求学没有得到别的好处，只不过是愈来愈发觉自己的无知。有问题可以付费咨询我。\n\n', '认识的人太多了，闷声发大财，先匿了\n侵删\n以上'], ['一觉起来这么多赞了？本来只是答着玩玩，实在受宠若惊。郭沫若——形成天才的决定因素应该是勤奋。希望各位共勉。以下原文。\n-----------------------分割线------------------------\n', '谢邀\n本人坐标深圳南山区，没出过国，本硕博就读国内top2，没有太多出国的梦想，所以留在了深圳，现在入职腾讯作为一名项目经理，平时没太多时间。一路走来一直觉得努力是解决一切问题的先决条件。\n关于', '这个问题，应该经常看看别人成功的事例，一步一个脚印的解决问题。亚伯拉罕·林肯说过，我这个人走得很慢，但是我从不后退。解决问题的乐趣是别人无法取代的。如果还有问题可以付费咨询我。\n\n', '平台上很多熟人，不说太多了，匿了。\n侵删\n以上'], ['一觉醒来 没想到都过千了，第一次回答没想到这个待遇谢谢大家。引用一句戴尔·卡耐基的名言——多数人都拥有自己不了解的能力和机会，都有可能做到未曾梦想的事情。以下正文\n-----------------------分割线------------------------\n', '谢邀\n本人坐标北京，生活一般，三环有一套房，在私企内生活，还算过得去。本科就读国内C9。现于国内做金融投资相关工作。以我的经历看，看别人的成功经历是很有必要的。\n关于', '这个问题，可以多参考行业内相关的成功事例，在思考中独立地解决问题。正如苏轼所说，古之立大事者，不惟有超世之才，亦必有坚忍不拔之志。多思考就会有收获，有问题可以付费咨询我。\n\n', '知乎认识的人太多了，闷声发大财，先匿了\n侵删\n以上']],
    string3: [['谢邀。\n实名反对目前最高票答案，', '应该需要一个有深厚数学专业知识为前提，并且具备理性思考能力才可以全面回答清楚。首先在条理清晰的进行阐述这个问题之前，我们应该先问是不是，再问对不对，要重新审视这个结论。\n我们采用支持非线性回归（Nonlinear regression，NR）的办法对样本中奇异样本点的比例做一个统计分析：用于训练的样本点来自： Wiley InterScience中的在线数据库（一共26530个样本点），其中符合', '的样本点一共有（14543个）。根据这些样本点来产生向量机模型\n训练出来的向量机对随机抽取的15784份样本进行分析得到以下结果：①', '在一般情况下占有很大的比例，不过远远没有达到最高票所说的84%那么夸张，上面数据表明只有65%。②根据Ocorrafoo Cobange在2004年依据牛顿-莱布尼兹审敛法做的非线性曲线局部直线化的模型得出的结果，发生率只有60%的可能性（与上面数据相符合）\n-------------------------------------------------------\n10k赞更新\n', '仍然是很有可能的，因为在我们实际抽取中，虽然样本是随机的，但是是依据Poisson distribution随机出现在样本总体中的问题得到的。在考虑到快速随机摆动指标（QKD）这一指标之后，数值稍微比原来下降了2.56%。大体结论仍然保持不变。\n-------------------------------------------------------\n参考文献\n【1】Vladimir Vapnik. The Nature of Statistical Learning Theory. Springer-Verlag, 1999. ISBN 0-387-98780-0\n【2】Bernhard Schölkopf and A. J. Smola: Learning with Kernels. MIT Press, Cambridge, MA,2002. （Partly available on line: [6].）ISBN 0-262-19475-9\n【3】Vojislav Kecman: "Learning and Soft Computing - Support Vector Machines, Neural\n\n以上'], ['谢邀。\n作为行业资深20年的从业者，来说说我对这个问题的看法，', '应该用一个辩证的思维来认真审视，不能简单的判断对错。首先在条理清晰的进行阐述这个问题之前，我们应该先问是不是，再问对不对，要重新审视这个结论。\n我们采用支持柯布-道格拉斯函数（Cobb-Douglas）的办法对样本中特殊的样本点与样本均方根做一个统计分析。用于训练的样本点来自： Taxonomy中的在线数据库（一共25631个样本点），其中符合', '的样本点一共有（15256个）。根据这些样本点来产生向量机模型\n训练出来的向量机对随机抽取的18754份数据进行分析得到以下结果：①', '在一般情况下占有大部分的样本数量，字面数据表明只有65%。②根据Joey Saladino在2004年依据PQ分解法做的非线性曲线局部直线化的模型得出的结果，发生率有70%的可能性，与原来的数据基本一样\n-------------------------------------------------------\n5k赞更新\n', '似乎是一种巧合，但如果我们从一个更大的角度看待问题，这似乎是一种不可避免的事实。依据正态分布随机出现在样本总体中的问题得到的。在考虑到AFD这一指标之后，数值稍微比原来下降了6%。大体结论仍然保持不变。\n-------------------------------------------------------\n参考文献\n【1】Bar-On E, Mashiach R, Inbar O, et al. Prenatal ultrasound diagnosis of club foot: outcome and recommendations for counselling and follow-up[J]. The Journal of bone and joint surgery. British volume, 2005, 87(7): 990-993.\n【2】Mammen, Leena, and Carol B. Benson. "Outcome of fetuses with clubfeet diagnosed by prenatal sonography." Journal of ultrasound in medicine 23.4 (2004): 497-500.\n【3】Mammen, L., & Benson, C. B. (2004). Outcome of fetuses with clubfeet diagnosed by prenatal sonography. Journal of ultrasound in medicine, 23(4), 497-500.\n\n以上'], ['谢邀。\n来谈谈我个人对这个问题本身的看法，', '应该用一种充满想象力的问题进行分析，跳出常规的思维往往有不一样的收获。最重要的是，了解清楚这个问题的本质，并且了解这个问题是一种怎么样的存在,这是解决一切问题的关键。\n我们采用线性回归（Linear Regression）的办法对样本中特殊的样本点与样本发生可能性的均值做一个训练模型。用于训练的样本点来自： PUBMED中的在线数据库（一共27850个样本点），其中符合', '的样本点一共有（18542个）。根据这些样本点来产生计算机模型\n训练出来的向量机对随机抽取的14785份数据进行分析得到以下结果：①', '在一般情况下占有大部分的样本数量，字面数据表明只有56%。②根据Nihilistic Nachos在2007年依据拉格朗日乘数法做的模型得出的结果，发生率有50%的可能性，与原来的数据基本一样\n-------------------------------------------------------\n6k赞更新\n', '出现了,我们就不得不考虑它出现了的事实。依据指数分布随机出现在样本总体中的问题得到的。在考虑到ERT这一指标之后，数值稍微比原来下降了8%。不过大体的结论仍然保持不变。\n-------------------------------------------------------\n参考文献\n【1】Brand, Martin D., et al. "The causes and functions of mitochondrial proton leak." Biochimica et Biophysica Acta (BBA)-Bioenergetics 1187.2 (1994): 132-139.\n【2】Rolfe, David FS, A. J. Hulbert, and Martin D. Brand. "Characteristics of mitochondrial proton leak and control of oxidative phosphorylation in the major oxygen-consuming tissues of the rat." Biochimica et Biophysica Acta (BBA)-Bioenergetics 1188.3 (1994): 405-416.\n【3】Natusch, David FS, and John R. Wallace. "Urban aerosol toxicity: the influence of particle size." Science 186.4165 (1974): 695-699.\n\n以上'], ['谢邀。\n以严谨的科学态度分析问题，', '应该需要重头开始认真审视它为何产生，产生的结果却不是完全重要的, 更加重要的问题是要重新审视这个结论。\n我们采用支持神经网络（Neural Networks）的办法对样本中奇异样本点的比例做一个统计分析：用于训练的样本点来自： Oracle中的在线数据库（一共24320个样本点），其中符合', '的样本点一共有（17850个）。根据这些样本点来产生向量机模型。\n训练出来的向量机对随机抽取的19568份进行分析得到以下结果：①', '在一般情况下是普遍的，不过远远没有达到最高票所说的80%那么夸张，上面数据表明只有65%。②根据Angelo Iacono在2000年依据高斯分解法做的模型得出的结果，发生率只有60%的可能性（与上面数据相符合）\n-------------------------------------------------------\n8k赞更新\n', '仍然是很有可能的，因为在我们实际抽取中，虽然样本是随机的，但是是依据离散分布随机出现在样本总体中的问题得到的。在考虑到YTX这一指标之后，数值稍微比原来下降了4%。大体结论仍然保持不变。\n-------------------------------------------------------\n参考文献\n【1】Clark D A, Biron D, Sengupta P, et al. The AFD sensory neurons encode multiple functions underlying thermotactic behavior in Caenorhabditis elegans[J]. Journal of Neuroscience, 2006, 26(28): 7444-7451.\n【2】Hwang, W. C., Wood, J. J., & Fujimoto, K. (2010). Acculturative family distancing (AFD) and depression in Chinese American families. Journal of Consulting and Clinical Psychology, 78(5), 655.\n【3】Samuel A D T, Silva R A, Murthy V N. Synaptic Activity of the AFD Neuron inCaenorhabditis elegans Correlates with Thermotactic Memory[J]. Journal of Neuroscience, 2003, 23(2): 373-376.\n\n以上'], ['谢邀。\n不太同意前面的观点，但是这个问题不能不说非常重要，', '应该需要重头开始认真审视它为何产生，并且在这种不可避免的冲突下，我们必须解决这个问题，了解清楚它为何会产生。\n我们采用支持深度学习（Deep learning）的办法对样本中奇异样本点与均方差之间做一个统计分析：用于训练的样本点来自： Sybase中的在线数据库（一共27450个样本点），其中符合', '的样本点一共有（16758个）。根据这些样本点来产生向量机模型\n训练出来的模型对随机抽取的17854份样本进行分析得到以下结果：①', '在一般情况下是基本成立的，最高票所说的80%并不成立，上面数据表明只有65%。②根据Angelo Iacono在2000年依据高斯分解法做的模型得出的结果，发生率只有60%的可能性（与上面数据相符合）\n-------------------------------------------------------\n13k赞更新\n', '仍然是很有可能的，因为在我们实际抽取中，虽然样本是随机的，但是是依据离散分布随机出现在样本总体中的问题得到的。在考虑到UER这一指标之后，数值稍微比原来下降了4%。大体结论仍然保持不变。\n最后引用一句话，既然我们已经踏上追求真理的路，那么，任何东西都不应妨碍我沿着这条路走下去，我希望诸位也能好好地体会这句话\n-------------------------------------------------------\n参考文献\n【1】Hayashi T, Yamagami S. Amenable tensor categories and their realizations as AFD bimodules[J]. Journal of Functional Analysis, 2000, 172(1): 19-75.\n【2】Lau L J, Burniaux J M, Havrylyshyn O, et al. Models of development: a comparative study of economic growth in South Korea and Taiwan[M]. Banco Mundial, Washington, DC (EUA), 1990.\n【3】Murad MA, Loula AFD. On stability and convergence of finite element approximations of Biot\n\n以上']],
  },
  //-------------------------------------根据单选框设置输出模式-----------------------------------
  radioChange: function(e) {
    this.setData({
      'edition': e.detail.value,
    })
  },

  //-----------------------------------------获取用户主题-------------------------------------------
  touched: function(event) {
    console.log("默认内容：", this.data.theme);
    this.setData({
      'theme': event.detail.value,
    })
    console.log("用户输入内容：", this.data.theme)
  },

// -------------------------------------点击生成按钮，写小程序生成高中低的知乎体------------------------------ 
  create: function(event) {
    switch (this.data.edition) {
      case '1':
        this.setData({
          'laststring': this.data.string1[this.randomNum(0, 5)][0] + this.data.string1[this.randomNum(0, 5)][1] + this.data.theme + this.data.string1[this.randomNum(0, 5)][2]
        });
        break;
      case '2':
        this.setData({
          'laststring': this.data.string2[this.randomNum(0, 4)][0] + this.data.string2[this.randomNum(0, 4)][1] + this.data.theme + this.data.string2[this.randomNum(0, 4)][2] + this.data.string2[this.randomNum(0, 4)][3]
        });
        break;
      default:
        this.setData({
          'laststring': this.data.string3[this.randomNum(0, 4)][0] + this.data.theme + this.data.string3[this.randomNum(0, 4)][1] + this.data.theme + this.data.string3[this.randomNum(0, 4)][2] + this.data.theme + this.data.string3[this.randomNum(0, 4)][3] + this.data.theme + this.data.string3[this.randomNum(0, 4)][4]
        });
    };
    this.setData({
      'couldview': true
    });
    console.log('执行版本：', this.data.edition);
  },
  //------------------------------------------------一键复制按钮-----------------------------
  copyText: function(e) {
    console.log(e)
    wx.setClipboardData({
      data: e.currentTarget.dataset.text,
      success: function(res) {
        wx.getClipboardData({
          success: function(res) {
            wx.showToast({
              title: '复制成功'
            })
          }
        })
      }
    })
  },
  //----------------------------------------生成从minNum到maxNum的随机数----------------------------------------
  randomNum: function(minNum, maxNum) {
    switch (arguments.length) {
      case 1:
        return parseInt(Math.random() * minNum + 1, 10);
        break;
      case 2:
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        break;
      default:
        return 0;
        break;
    }
  }
})