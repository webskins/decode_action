//Sat Jan 25 2025 12:15:51 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const W = aa("七猫免费小说 阅读+听书");
const X = require("got");
const Y = require("crypto-js");
const Z = 18000;
const a0 = 3;
const a1 = 50;
const a2 = ["\n", "@"];
const a3 = "qmreadck";
const a4 = console;
let a5;
const a6 = process.env[a3] || "";
const a7 = process.env.qmmax || "8";
let a8 = process.env.qmmode || 0;
try {
  if (!a8) {
    console.log("\n并发运行 " + a7 + " 次");
  }
  if (a8) {
    console.log("\n顺序运行 " + a7 + " 次");
  }
} catch (ab) {}
class a9 {
  constructor(f) {
    this.index = W.userIdx++;
    a5 = W.h();
    this.ck = f.split("#")[0];
    this.params = f.split("#")[1];
    this.rdtime = "AUTHORIZATION=" + this.ck + "app-version=71720application-id=com.kmxs.readeris-white=0net-env=4platform=androidqm-params=" + this.params;
    const l = {
      limit: a0
    };
    this.got = X.extend({
      headers: {
        "net-env": "4",
        "is-white": "0",
        platform: "android",
        "app-version": "71720",
        "application-id": "com.kmxs.reader",
        AUTHORIZATION: this.ck,
        "qm-params": this.params,
        sign: this.sign(this.rdtime),
        "no-permiss": "3",
        "User-Agent": "webviewversion/0",
        Connection: "Keep-Alive",
        "Accept-Encoding": "gzip"
      },
      retry: l,
      timeout: Z,
      followRedirect: false
    });
    var f = a4;
    f.log("@jk 七猫阅读 和 听书时长");
  }
  async Task() {
    const f = {
      fwiUv: function (i, k) {
        return i * k;
      },
      DeLtT: "听书 ：随机听一本书",
      UACRX: "1|0|3|2|5|6|7|4",
      YbKDJ: "android",
      xmvhS: "71720",
      RanQo: "com.kmxs.reader",
      rIloe: "webviewversion/0",
      RurUj: "Keep-Alive",
      daPiL: "gzip",
      ehbON: function (i, k) {
        return i === k;
      },
      jCwrv: "BqIAL",
      eheeu: function (i, k) {
        return i !== k;
      },
      RYBnO: "OMvTQ",
      upGYE: "QWHdw",
      DxLaw: "查询并领取未领取的听读金币 ：有奖励打印 没有直接下一步任务",
      hUMeZ: "eRflM",
      GPRBO: "UdQPt",
      HBJoE: "task",
      ffraP: "video",
      BTtbl: function (i, k) {
        return i < k;
      },
      XYYFm: "klUXQ",
      aanzW: function (i, k) {
        return i >= k;
      }
    };
    a5 += W.g();
    if (a8) {
      {
        const i = {
          time: true,
          sp: true,
          console: false
        };
        W.log("账号[" + W.padStr(this.index, W.userCount.toString().length) + "]", i);
        this.x = "";
      }
    } else {
      this.x = "账号[" + W.padStr(this.index, W.userCount.toString().length) + "]";
    }
    var g = [17, 22, 24, 31, 32, 33, 39, 42, 43, 44, 45, 46, 47, 100, 101, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 120, 121, 122, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179];
    var h = [155, 156, 157, 158, 159, 160, 167, 172, 42, 43, 44, 46, 47, 121];
    this.bk = 0;
    await this.withalbum1_index();
    await this.read_index();
    a4.log(this.x, "查询并领取未领取的听读金币 ：有奖励打印 没有直接下一步任务");
    for (const m of h) {
      {
        await this.reward(m, "task");
        await this.reward(m, "video");
      }
    }
    if (a8) {
      a4.log("");
    }
    for (let o = 0; o < a7; o++) {
      {
        if (a8) {
          a4.log("");
        }
        await this.read();
        if (a8) {
          a4.log("");
        }
        await this.read2();
        if (this.bk >= 2) {
          break;
        }
      }
    }
  }
  async read() {
    a5 += W.f();
    a5 += W.q();
    if (this.readid) {
      {
        await this.timing1(0, "null", 1);
        if (this.starttimex) {
          {
            var d = Number(29) + Number(W.randomNum(1));
            await W.wait(d);
            await this.timing1(1, this.starttimex, 2);
          }
        }
      }
    }
  }
  async read2() {
    if (this.tbook) {
      {
        await this.withalbum1(0, "null", 1);
        if (this.albumtime) {
          {
            var d = Number(29) + Number(W.randomNum(1));
            await W.wait(d);
            await this.withalbum1(1, this.albumtime, 2);
          }
        }
      }
    }
  }
  async read_index() {
    const f = {
      WhtAa: "hh:mm:ss",
      WvDWC: function (k, l) {
        return k + l;
      },
      mEssh: function (k, l) {
        return k === l;
      },
      qOPYg: "uQcAg",
      sJgoZ: "GcQbY",
      ipRmZ: "GET",
      xTKRe: function (k, l) {
        return k !== l;
      },
      SxAwH: "FcHXT"
    };
    try {
      {
        var g = "book_privacy=1id=is_history=1read_preference=1tab_type=1";
        var h = {
          method: "GET",
          url: "https://api-bc.wtzw.com/api/v1/must-read?id=&tab_type=1&is_history=1&read_preference=1&book_privacy=1&sign=" + this.sign(g)
        };
        let {
          result: l
        } = await this.request(h);
        if (l?.["data"]?.["books"]) {
          {
            var i = W.randomList(l?.["data"]?.["books"]);
            this.readid = i.id;
            a4.log(this.x, "阅读 : 必读榜随机挑选一本书：《" + i?.["title"] + "》", i?.["author"], i?.["sub_title"]);
          }
        }
      }
    } catch (n) {}
  }
  async withalbum1_index() {
    try {
      {
        var g = "book_privacy=1cache_ver=read_preference=0";
        var h = {
          method: "GET",
          url: "https://api-bc.wtzw.com/api/v1/album/index?read_preference=0&book_privacy=1&cache_ver=&sign=" + this.sign(g)
        };
        let {
          result: l
        } = await this.request(h);
        if (l?.["data"]?.["sections"]) {
          {
            for (var i of l?.["data"]?.["sections"]) {
              {
                if (i?.["section_header"]?.["section_title"] == "猜你想听") {
                  {
                    i = W.randomList(i?.["books"]);
                    this.tbook = i.album_id;
                    a4.log(this.x, "听书 ：随机听一本书", "《" + i?.["title"] + "》", i?.["sub_title"]);
                  }
                }
              }
            }
          }
        }
      }
    } catch (p) {}
  }
  async reward(g, h) {
    const k = {
      PAIEs: "d3d",
      wiGrz: function (m, n) {
        return m > n;
      },
      kYSNh: function (m, n) {
        return m === n;
      },
      yfinm: "OMvth",
      OYvyz: "POST",
      SZuGC: function (m, n) {
        return m === n;
      },
      zBYAx: "mECXe",
      bXqmj: "EnLdR",
      TLeuE: function (m, n) {
        return m == n;
      },
      LSKAR: "task",
      afYKN: "听读金币奖励 ：",
      gYbbG: "video",
      WAJUm: "听读金币视频奖励 ："
    };
    try {
      {
        const m = {
          install_app_list: ""
        };
        const n = {
          params: m
        };
        const o = {
          task_id: g,
          type_prefix: h,
          axiosConfig: n
        };
        var l = {
          method: "POST",
          url: "https://api-gw.wtzw.com/welf/h5/v1/task/reward?t=" + W.ts(13) + "&install_app_list=",
          form: o
        };
        let {
          result: p
        } = await this.request(l);
        if (p?.["reward"]) {
          {
            if (h == "task") {
              a4.log(this.x, "听读金币奖励 ：", p?.["reward"]);
            }
            if (h == "video") {
              a4.log(this.x, "听读金币视频奖励 ：", p?.["reward"]);
            }
          }
        }
      }
    } catch (t) {}
  }
  async timing1(f, g, h) {
    try {
      {
        var l = "bi=" + this.readid + "bt=0rrn=" + f + "st=" + g;
        var m = {
          method: "POST",
          url: "https://api-sc.wtzw.com/api/v4/timing-reward/report",
          form: {
            bi: this.readid,
            bt: 0,
            rrn: f,
            st: g,
            sign: this.sign(l)
          }
        };
        let {
          result: p
        } = await this.request(m);
        if (p?.["data"]?.["status"] == 1) {
          {
            this.bk = 0;
            var g = p?.["data"]?.["tntrd"]["split"]("|");
            h == 1 && a4.log(this.x, "阅读 ：当前阅读时间", (g[0] / 60).toFixed(1) + "分 ");
            this.starttimex = p?.["data"]?.["st"];
            h == 2 && a4.log(this.x, "阅读时长：[上传成功] 当前阅读时间: ", (g[0] / 60).toFixed(1) + "分 ", "下次可领取阅读奖励的时间: ", (g[1] / 60).toFixed(1) + "分 ");
          }
        } else {
          if (p?.["data"]?.["status"] == 2) {
            {
              this.bk += 1;
              var n = p?.["data"]?.["tntrd"]["split"]("|");
              a4.log(this.x, "阅读 ：当前阅读时间", (n[0] / 60).toFixed(1) + "分 请领取阅读奖励");
              for (const v of [172, 42, 43, 44, 46, 47, 121]) {
                await this.reward(v, "task");
                await this.reward(v, "video");
              }
            }
          }
        }
      }
    } catch (x) {}
  }
  async withalbum1(f, g, h) {
    const k = {
      OCodg: function (n, o) {
        return n == o;
      },
      PpGkt: "task",
      QHDsN: "听读金币奖励 ：",
      NMOqb: "video",
      NGcyu: function (n, o) {
        return n === o;
      },
      snMfj: "fPsTd",
      PKqKA: "null",
      XqpSk: "POST",
      IVqdU: "https://api-sc.wtzw.com/api/v4/timing-reward/report-with-album",
      RdAOn: function (n, o) {
        return n == o;
      },
      rHEQO: function (n, o) {
        return n === o;
      },
      gZrwt: "UHdbn",
      aBeeT: "0|1|3|4|2",
      ixosY: function (n, o) {
        return n == o;
      },
      SnEFp: "听书时长：[上传成功] 当前听书时间: ",
      JRLxn: function (n, o) {
        return n + o;
      },
      DrDgo: function (n, o) {
        return n / o;
      },
      DJrnX: "下次可领取听书奖励的时间: ",
      FaqyC: function (n, o) {
        return n + o;
      },
      GstvZ: "听书 ：当前听书时间",
      GUDTW: function (n, o) {
        return n == o;
      },
      gYdKP: "UfoLj",
      gZAre: function (n, o) {
        return n + o;
      },
      VkXjW: function (n, o) {
        return n / o;
      },
      HNQzw: "分 请领取听书奖励",
      YgCyt: function (n, o) {
        return n !== o;
      },
      lmCWb: "SlKyw"
    };
    try {
      {
        if (!g) {
          g = "null";
        }
        var l = "ai=" + this.tbook + "bt=0rrn=" + f + "st=" + g;
        var m = {
          method: "POST",
          url: "https://api-sc.wtzw.com/api/v4/timing-reward/report-with-album",
          form: {
            ai: this.tbook,
            bt: 0,
            rrn: f,
            st: g,
            sign: this.sign(l)
          }
        };
        let {
          result: n
        } = await this.request(m);
        if (n?.["data"]?.["status"] == 1) {
          {
            this.bk = 0;
            this.albumtime = n?.["data"]?.["st"];
            var g = n?.["data"]?.["tntrd"]["split"]("|");
            h == 1 && a4.log(this.x, "听书 ：当前听书时间", (g[0] / 60).toFixed(1) + "分 ");
            h == 2 && a4.log(this.x, "听书时长：[上传成功] 当前听书时间: ", (g[0] / 60).toFixed(1) + "分", "下次可领取听书奖励的时间: ", (g[1] / 60).toFixed(1) + "分 ");
          }
        } else {
          if (n?.["data"]?.["status"] == 2) {
            {
              this.bk += 1;
              var g = n?.["data"]?.["tntrd"]["split"]("|");
              a4.log(this.x, "听书 ：当前听书时间", (g[0] / 60).toFixed(1) + "分 请领取听书奖励");
              for (const t of [155, 156, 157, 158, 159, 160, 167]) {
                {
                  await this.reward(t, "task");
                  await this.reward(t, "video");
                }
              }
            }
          }
        }
      }
    } catch (x) {}
  }
  async request(g) {
    var k = null;
    var l = 0;
    var m = g.fn || g.url;
    g.method = g?.["method"]?.["toUpperCase"]() || "GET";
    while (l++ < a0) {
      try {
        {
          await this.got(g).then(u => {
            {
              k = u;
            }
          }, u => {
            {
              k = u.response;
            }
          });
          if ((k?.["statusCode"] / 100 | 0) <= 4) {
            break;
          }
        }
      } catch (u) {
        "TimeoutError" == u.name ? this.qq("[" + m + "]请求超时，重试第" + l + "次") : this.qq("[" + m + "]请求错误(" + u.message + ")，重试第" + l + "次");
      }
    }
    const n = {
      statusCode: -1,
      headers: null,
      result: null
    };
    if (k == null) {
      return Promise.resolve(n);
    }
    let {
      statusCode: o,
      headers: p,
      body: r
    } = k;
    if (r) {
      try {
        {
          r = JSON.parse(r);
        }
      } catch {}
    }
    const s = {
      statusCode: o,
      headers: p,
      result: r
    };
    return Promise.resolve(s);
  }
  sign(d) {
    d = d + "d3dGiJc651gSQ8w1";
    return W.getmd5(d);
  }
}
!(async () => {
  W.read_env(a9);
  if (a8) {
    {
      for (const f of W.userList) await f.Task();
    }
  } else {
    await W.threadTask("Task", a1);
  }
})().catch(c => W.log(c)).finally(() => W.exitNow());
function aa(c) {
  return new class {
    constructor(e) {
      {
        this.name = e;
        this.startTime = Date.now();
        const k = {
          time: true
        };
        this.log("开始运行", k);
        this.notifyStr = [];
        this.notifyFlag = true;
        this.userIdx = 1;
        this.userList = [];
        this.userCount = 0;
      }
    }
    h() {
      {
        return "d3d";
      }
    }
    g() {
      {
        return "GiJ";
      }
    }
    f() {
      {
        return "c651";
      }
    }
    q() {
      {
        return "gSQ8w1";
      }
    }
    log(e, f = {}) {
      {
        let k = {
          console: true
        };
        Object.assign(k, f);
        if (k.time) {
          {
            let m = k.fmt || "hh:mm:ss";
            e = "[" + this.time(m) + "] " + e;
          }
        }
        if (k.sp) {
          console.log("\n-------------- " + e + " --------------");
        }
        if (k.notify) {
          this.notifyStr.push(e);
        }
        if (k.console) {
          console.log(e);
        }
      }
    }
    read_env(e) {
      {
        let i = a6;
        let k = a2.filter(m => i.includes(m));
        let l = k.length > 0 ? k[0] : a2[0];
        for (let m of i.split(l).filter(n => !!n)) {
          {
            this.userList.push(new e(m));
          }
        }
        this.userCount = this.userList.length;
        if (!this.userCount) {
          this.log("\n未找到数据，请检查变量[" + a3 + "]");
          return false;
        }
        this.log("共找到" + this.userCount + "个账号");
        return true;
      }
    }
    EncryptCrypto(e, f, g, h, i, k) {
      const m = {
        sPXJY: function (n, o) {
          return n * o;
        }
      };
      {
        return Y[e].encrypt(Y.enc.Utf8.parse(h), Y.enc.Utf8.parse(i), {
          mode: Y.mode[f],
          padding: Y.pad[g],
          iv: Y.enc.Utf8.parse(k)
        }).ciphertext.toString(Y.enc.Base64);
      }
    }
    DecryptCrypto(e, f, g, h, i, k) {
      return Y[e].decrypt({
        ciphertext: Y.enc.Base64.parse(h)
      }, Y.enc.Utf8.parse(i), {
        mode: Y.mode[f],
        padding: Y.pad[g],
        iv: Y.enc.Utf8.parse(k)
      }).toString(Y.enc.Utf8);
    }
    async threads(e, f, g = {}) {
      const h = {
        Wflxu: function (i, k) {
          return i * k;
        }
      };
      {
        while (f.idx < W.userList.length) {
          {
            let i = W.userList[f.idx++];
            await i[e](g);
          }
        }
      }
    }
    async threadTask(e, f) {
      {
        let h = [];
        let k = {
          idx: 0
        };
        while (f--) {
          h.push(this.threads(e, k));
        }
        await Promise.all(h);
      }
    }
    randomarr(f) {
      {
        return [...Array(f)].map((h, i) => i + 1);
      }
    }
    time(f, g = null) {
      {
        let h = g ? new Date(g) : new Date();
        let i = {
          "M+": h.getMonth() + 1,
          "d+": h.getDate(),
          "h+": h.getHours(),
          "m+": h.getMinutes(),
          "s+": h.getSeconds(),
          "q+": Math.floor((h.getMonth() + 3) / 3),
          S: this.padStr(h.getMilliseconds(), 3)
        };
        /(y+)/.test(f) && (f = f.replace(RegExp.$1, (h.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (let k in i) new RegExp("(" + k + ")").test(f) && (f = f.replace(RegExp.$1, 1 == RegExp.$1.length ? i[k] : ("00" + i[k]).substr(("" + i[k]).length)));
        return f;
      }
    }
    async showmsg() {
      {
        if (!this.notifyFlag) {
          return;
        }
        if (!this.notifyStr.length) {
          return;
        }
        var e = require("./sendNotify");
        this.log("\n============== 推送 ==============");
        await e.sendNotify(this.name, this.notifyStr.join("\n"));
      }
    }
    padStr(e, f, g = {}) {
      const h = {
        bbkyj: function (k, l) {
          return k + l;
        }
      };
      {
        let l = g.padding || "0";
        let m = g.mode || "l";
        let n = String(e);
        let o = f > n.length ? f - n.length : 0;
        let p = "";
        for (let r = 0; r < o; r++) {
          {
            p += l;
          }
        }
        if (m == "r") {
          n = n + p;
        } else {
          {
            n = p + n;
          }
        }
        return n;
      }
    }
    json2str(e, f, g = false) {
      {
        let i = [];
        for (let k of Object.keys(e).sort()) {
          let l = e[k];
          if (l && g) {
            l = encodeURIComponent(l);
          }
          i.push(k + "=" + l);
        }
        return i.join(f);
      }
    }
    getmd5(e, f = 0) {
      if (f >= 1) {
        {
          return Y.MD5(e).toString().toUpperCase();
        }
      } else {
        {
          return Y.MD5(e).toString();
        }
      }
    }
    enbase64(e) {
      var f = Y.enc.Utf8.parse(e);
      var g = Y.enc.Base64.stringify(f);
      return g;
    }
    debase64(e) {
      var f = Y.enc.Base64.parse(e);
      var g = f.toString(Y.enc.Utf8);
      return g;
    }
    str2json(e, f = false) {
      let g = {};
      for (let h of e.split("&")) {
        if (!h) {
          continue;
        }
        let i = h.indexOf("=");
        if (i == -1) {
          continue;
        }
        let l = h.substr(0, i);
        let m = h.substr(i + 1);
        if (f) {
          m = decodeURIComponent(m);
        }
        g[l] = m;
      }
      return g;
    }
    randomPattern(e, f = "abcdef0123456789") {
      let g = "";
      for (let h of e) {
        if (h == "x") {
          g += f.charAt(Math.floor(Math.random() * f.length));
        } else {
          h == "X" ? g += f.charAt(Math.floor(Math.random() * f.length)).toUpperCase() : g += h;
        }
      }
      return g;
    }
    randomString(e, f = "abcdefghijk0123456789") {
      let g = "";
      for (let h = 0; h < e; h++) {
        g += f.charAt(Math.floor(Math.random() * f.length));
      }
      return g;
    }
    ts(e) {
      if (e == 10) {
        let f = Math.round(new Date().getTime() / 1000).toString();
        return f;
      } else {
        let g = new Date().getTime();
        return g;
      }
    }
    randomNum(f) {
      return W.randomString(f, "1234567890");
    }
    randomList(e) {
      let f = Math.floor(Math.random() * e.length);
      return e[f];
    }
    wait(e) {
      return new Promise(f => setTimeout(f, e * 1000));
    }
    async exitNow() {
      this.log("");
      const e = {
        time: true
      };
      this.log("运行结束，共运行了" + (Date.now() - this.startTime) / 1000 + "秒", e);
      process.exit(0);
    }
  }(c);
}