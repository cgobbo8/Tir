<template>
  <div>
    <img src="@/assets/blob.svg" alt="" class="blob-background" />
    <section class="section first">
      <div class="nav">
        <div class="logo">
          <h2>Projet TIR</h2>
        </div>
        <div class="liens">
          <nuxt-link class="voir-article" to="/articles"
            >Voir les articles</nuxt-link
          >
        </div>
      </div>
      <div class="header">
        <div class="bloc-title">
          <h1>
            Programmation
            <span class="accentuated-text"
              >fonctionnelle
              <div class="barre"></div
            ></span>
            : langages, paradigme et écosystème
          </h1>
          <div class="btns-header">
            <a href="https://github.com/cgobbo8/Tir">
              <img class="header-btn-img" src="@/assets/github.png" alt="" />
              Github
            </a>
            <a href="/Poster.pdf" download="">
              <img class="header-btn-img" src="@/assets/presentation.png" alt="" />
              Poster
            </a>
            <a href="/Projet_TIR.pdf" download="">
              <img class="header-btn-img overleaf" src="@/assets/overleaf.png" alt="" />
              Rapport
            </a>
          </div>
        </div>
        <div class="bloc-code">
          <div class="head-code">
            <div class="dots">
              <span class="dot1">.</span><span class="dot2">.</span
              ><span class="dot3">.</span>
            </div>
            <p>code</p>
          </div>
          <pre>
            <code ref="code" class="code">
              // Méthode impérative
              function multiplication (liste, n) {
                let listeReturn = [];
                for(let i = 0; i < liste.length; i++) {
                  listeReturn.push(liste[i]*n);
                }
                return listeReturn;
              }
              let listeDouble = multiplication(liste,2);


              // Méthode fonctionnelle
              let multiplication = x => y => x*y;
              let double = multiplication(2);
              let listeDouble = liste.map( v => double(v));      
                   
            </code><span class="curdor"></span>
            
            <div class="hide-cursor"></div>
          </pre>
        </div>
      </div>
    </section>
    <section class="section-poster">
      <img class="poster" src="@/assets/Poster.png" alt="">
    </section>
    
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  data() {
    return {
      tl: gsap.timeline({ paused: true }),
    };
  },
  mounted() {
    this.formatCodeBlock();

    // if (this.$nuxt.context.from == undefined) {
    this.tl.to(".blob-background", 1, { scaleX: 1, opacity: 1, right: 0 });
    this.tl.to(".logo", 0.8, { opacity: 1, y: "+=50" });
    this.tl.to(".liens", 0.8, { opacity: 1, y: "+=50" }, 1); // the zero tells this tween to start at time 0
    this.tl.to(".bloc-title", { opacity: 1, y: "+=50", duration: 0.5 });
    this.tl.from(".barre", { width: 0, duration: 0.5 });
    this.tl.to(".bloc-code", { opacity: 1, y: "+=50", duration: 0.5 });
    this.tl.to(".scrollComponent", { opacity: 1, y: "-=50", duration: 0.5 });
    this.tl.staggerFrom(".letter", 0.015, { display: "none" }, 0.015, 2);
    // }
    this.tl.play();
  },
  methods: {
    goToGit() {
      window.location.replace("https://github.com/cgobbo8/Tir")
    },
    goToZotero() {
      window.location.replace("https://www.zotero.org")
    },
    goToOverleaf() {
      window.location.replace("https://fr.overleaf.com/read/xsryvzmmgbqb")
    },
    formatCodeBlock() {
      let code = document.querySelector(".code");
      let test = [...code.innerHTML].map((v) => {
        if (
          v == "(" ||
          v == ")" ||
          v == "{" ||
          v == "}" ||
          v == "[" ||
          v == "]"
        ) {
          return `<span class="letter parent">${v}</span>`;
        } else {
          return `<span class="letter">${v}</span>`;
        }
      });
      let texte = test.join("");
      // function
      texte = texte.replaceAll(
        `<span class="letter">f</span><span class="letter">u</span><span class="letter">n</span><span class="letter">c</span><span class="letter">t</span><span class="letter">i</span><span class="letter">o</span><span class="letter">n</span>`,
        `<span class="letter function">f</span><span class="letter function">u</span><span class="letter function">n</span><span class="letter function">c</span><span class="letter function">t</span><span class="letter function">i</span><span class="letter function">o</span><span class="letter function">n</span>`
      );
      // return
      texte = texte.replaceAll(
        `<span class="letter">r</span><span class="letter">e</span><span class="letter">t</span><span class="letter">u</span><span class="letter">r</span><span class="letter">n</span>`,
        `<span class="letter keyword">r</span><span class="letter keyword">e</span><span class="letter keyword">t</span><span class="letter keyword">u</span><span class="letter keyword">r</span><span class="letter keyword">n</span>`
      );
      // Commentaire
      texte = texte.replaceAll(
        `<span class="letter">/</span><span class="letter">/</span><span class="letter"> </span><span class="letter">M</span><span class="letter">é</span><span class="letter">t</span><span class="letter">h</span><span class="letter">o</span><span class="letter">d</span><span class="letter">e</span><span class="letter"> </span><span class="letter">f</span><span class="letter">o</span><span class="letter">n</span><span class="letter">c</span><span class="letter">t</span><span class="letter">i</span><span class="letter">o</span><span class="letter">n</span><span class="letter">n</span><span class="letter">e</span><span class="letter">l</span><span class="letter">l</span><span class="letter">e</span>`,
        `<span class="letter commentaire">/</span><span class="letter commentaire">/</span><span class="letter commentaire"> </span><span class="letter commentaire">M</span><span class="letter commentaire">é</span><span class="letter commentaire">t</span><span class="letter commentaire">h</span><span class="letter commentaire">o</span><span class="letter commentaire">d</span><span class="letter commentaire">e</span><span class="letter commentaire"> </span><span class="letter commentaire">f</span><span class="letter commentaire">o</span><span class="letter commentaire">n</span><span class="letter commentaire">c</span><span class="letter commentaire">t</span><span class="letter commentaire">i</span><span class="letter commentaire">o</span><span class="letter commentaire">n</span><span class="letter commentaire">n</span><span class="letter commentaire">e</span><span class="letter commentaire">l</span><span class="letter commentaire">l</span><span class="letter commentaire">e</span>`
      );
      // Commentaire
      texte = texte.replaceAll(
        `<span class="letter">/</span><span class="letter">/</span><span class="letter"> </span><span class="letter">M</span><span class="letter">é</span><span class="letter">t</span><span class="letter">h</span><span class="letter">o</span><span class="letter">d</span><span class="letter">e</span><span class="letter"> </span><span class="letter">i</span><span class="letter">m</span><span class="letter">p</span><span class="letter">é</span><span class="letter">r</span><span class="letter">a</span><span class="letter">t</span><span class="letter">i</span><span class="letter">v</span><span class="letter">e</span>`,
        `<span class="letter commentaire">/</span><span class="letter commentaire">/</span><span class="letter commentaire"> </span><span class="letter commentaire">M</span><span class="letter commentaire">é</span><span class="letter commentaire">t</span><span class="letter commentaire">h</span><span class="letter commentaire">o</span><span class="letter commentaire">d</span><span class="letter commentaire">e</span><span class="letter commentaire"> </span><span class="letter commentaire">i</span><span class="letter commentaire">m</span><span class="letter commentaire">p</span><span class="letter commentaire">é</span><span class="letter commentaire">r</span><span class="letter commentaire">a</span><span class="letter commentaire">t</span><span class="letter commentaire">i</span><span class="letter commentaire">v</span><span class="letter commentaire">e</span>`
      );
      // let
      texte = texte.replaceAll(
        `<span class="letter">l</span><span class="letter">e</span><span class="letter">t</span>`,
        `<span class="letter keyword">l</span><span class="letter keyword">e</span><span class="letter keyword">t</span>`
      );
      // push
      texte = texte.replaceAll(
        `<span class="letter">p</span><span class="letter">u</span><span class="letter">s</span><span class="letter>h</span>`,
        `<span class="letter function">p</span><span class="letter function">u</span><span class="letter function">s</span><span class="letter function>h</span>`
      );
      // map
      texte = texte.replaceAll(
        `<span class="letter">m</span><span class="letter">a</span><span class="letter">p</span>`,
        `<span class="letter function">m</span><span class="letter function">a</span><span class="letter function">p</span>`
      );
      // for
      texte = texte.replaceAll(
        `<span class="letter">f</span><span class="letter">o</span><span class="letter">r</span>`,
        `<span class="letter keyword">f</span><span class="letter keyword">o</span><span class="letter keyword">r</span>`
      );
      // &gt;
      texte = texte.replaceAll(
        `<span class="letter">=</span><span class="letter">&</span><span class="letter">g</span><span class="letter">t</span><span class="letter">;</span>`,
        `<span class="letter keyword">=></span>`
      );
      // &lt;
      texte = texte.replaceAll(
        `<span class="letter">&</span><span class="letter">l</span><span class="letter">t</span><span class="letter">;</span>`,
        `<span class="letter keyword"><</span>`
      );

      code.innerHTML = texte;
    },
  },
};
</script>

<style lang="scss" >
// @import url("//fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Source+Code+Pro:wght@500&display=swap");
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

* {
  transition: .4s;
}

html,
body {
  scroll-behavior: smooth;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}
.container {
  font-family: "IBM Plex Sans", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #040d21;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.blob-background {
  position: absolute;
  top: 0;
  right: -100%;
  z-index: -1000;
  width: 100vw;
  opacity: 0;
}

section {
  padding: 20px 100px;
  overflow: hidden;

  &.first {
    height: 90vh;
  }
}

.separator {
  height: 10vh;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    font-weight: 800;
    font-size: 1.2rem;
    transform: translateY(-50px);
    opacity: 0;
  }

  .liens {
    transform: translateY(-50px);
    opacity: 0;
  }

  .liens a {
    text-decoration: none;
    color: #2c3e50;
  }

  .liens .voir-article {
    color: #fff;
    font-weight: 600;
    position: relative;

    &:hover::after {
      width: 100%;
    }

    &::after {
      content: "";
      width: 0%;
      height: 4px;
      position: absolute;
      background: yellow;
      left: 0;
      bottom: 0;
      transition: all 0.5s ease-out;
    }
  }
}

.bloc-title {
  max-width: 50%;
  font-size: 2em;
  transform: translateY(-50px);
  opacity: 0;
}

.header {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.accentuated-text {
  position: relative;
  .barre {
    content: "";
    width: 100%;
    height: 8px;
    position: absolute;
    background: yellow;
    left: 0;
    bottom: 0;
    transition: all 0.5s ease-out;
    transform: translateY(-10px);
    z-index: -100;
  }
}

.scrollComponent {
  display: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%) translateY(50px);
  cursor: pointer;
  opacity: 0;
}

.bloc-code {
  transition: .4s;
  background-color: #0c162d;
  min-width: 700px;
  position: relative;
  border: 0.5px solid lightblue;
  border-radius: 10px;
  transform: translateY(-50px);
  opacity: 0;
  box-shadow: 0 5px 36px 15px rgba(87, 141, 240, 0.1),
    0 5px 55px 35px rgba(204, 218, 245, 0.05), 0 0 0 1px, 0 34px 65px #040d21,
    0 2.76726px 2.21381px rgba(0, 0, 0, 0.07),
    0 6.6501px 5.32008px rgba(0, 0, 0, 0.04),
    0 12.5216px 10.0172px rgba(0, 0, 0, 0.03),
    0 22.3363px 17.869px rgba(0, 0, 0, 0.03),
    0 41.7776px 33.4221px rgba(0, 0, 0, 0.02), 0 100px 80px rgba(0, 0, 0, 0.02);
  overflow: hidden;
  .head-code {
    width: 100%;
    height: 25px;
    background: #020713;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .dots {
      position: absolute;
      top: 0;
      left: 5px;
      transform: translateY(-64%);
      font-size: 6em;
      color: #2c3e50;
      letter-spacing: -8px;

      .dot1 {
        color: #151d25;
      }
      .dot2 {
        color: #202c38;
      }
      .dot3 {
        color: #2c3e50;
      }
    }

    p {
      color: #2c3e50;
    }
  }

  pre {
    code {
      font-family: "Source Code Pro";
      letter-spacing: -1px;
      font-weight: 500;
    }

    font-weight: 500;
    margin: 20px 0;
    height: 400px !important;
    code {
      max-height: 400px !important;
    }
    color: rgba(236, 244, 255, 0.774);
    position: relative;

    span.function {
      color: rgb(250, 166, 166);
    }

    span.parent {
      color: rgb(251, 251, 184);
    }

    span.keyword {
      color: rgb(174, 181, 245);
    }

    span.commentaire {
      color: #464b53;
    }
  }
}

.curdor {
  height: 10px;
  width: 7px;
  background: white;
  display: inline-block;
  opacity: 0;
  animation: cursor-blink 1s infinite;
}

@keyframes cursor-blink {
  0% {
    opacity: 0;
  }
  49% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  99% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.hide-cursor {
  position: absolute;
  left: 0;
  top: 10px;
  bottom: 10px;
  width: 115px;
  background: #0c162d;
  z-index: 100;
}

.btns-header {
  display: flex;
}

.header {
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8em;
    margin-right: 30px;
    padding: 10px 20px;
    width: 170px;
    background: #fff;
    border: none;
    border-radius: 7px;
    margin-top: 30px;
    box-shadow: 0 4px 4px 3px rgba(0, 0, 0, 0.05);
    opacity: 0.7;
    cursor: pointer;
    transition: 0.4s;
    outline: none;
    text-decoration: none;
    color: #151d25;

    &:hover {
      transform: scale(0.97);
      box-shadow: 0 1px 4px 3px rgba(0, 0, 0, 0.02);
    }
    .header-btn-img {
      img {
        filter: grayscale(90%);
      }
      height: 40px;
      opacity: 0.7;

      &.overleaf {
        margin-left: -10px;
        margin-right: 5px;
      }
    }
  }
}

@media screen and (max-width : 1400px) {
  .bloc-code {
    min-width: 80%;
  }
}

@media screen and (max-width : 1400px) {

  section, section.first {
    height: auto;
  }
  .header {
    flex-direction: column;
    height: auto;
  }

  .bloc-title {
    margin-top: 100px;
    width: 100%;
    max-width: 100%;
    h1 {
      color: #fff;
    }
  }

  .bloc-code {
    margin-top: 100px;
    margin-bottom: 100px;
  }

  .scrollComponent {
    
    transform: translateY(100px);
  }

  .blob-background {
    width: 200vw;
  }

  .logo {
    color: #fff;
  }
}

@media screen and (max-width:939px) {
  .bloc-code {
    min-width: 100%;
  }

  .poster {
    margin: 200px 0;
    width: 100%;
  }
}

@media screen and (max-width : 735px) {
  section {
    padding: 20px 20px;
  }

  .blob-background {
    width: 300vw;
  }
}
@media screen and (max-width : 600px) {
  .bloc-code {
    width: 100%;
    min-width: 0px;
  }

  .hide-cursor {
    display: none;
  }

  .bloc-code pre {
    margin-left: -80px;

    code {
      font-size: .9em;
    }
  }

  
}

@media screen and (max-width : 580px) {
  .btns-header {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    button {
      height: 80%;
    }
  }

  .section-poster .poster {
    width: 100%;
  }

}

@media screen and (max-width : 440px) {
  .bloc-code pre code{
      font-size: .8em;
    
  }
}

.section-poster {
  display: flex;
  justify-content: center;
  align-items: center;

  .poster {
    margin: 400px 0;
    width: 80%;
  }
}

</style>