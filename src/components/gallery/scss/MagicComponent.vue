<template>
    <div class="gallery-item">
      <!-- Card's frame -->
      <div class="magic-frame">
        <!-- Background & background-deco -->
        <div class="background">
          <div class="brown-frame">
        
            <!-- Orange deco dots -->
            <div class="orange-dot tl"></div>
            <div class="orange-dot tr"></div>
            <div class="orange-dot bl"></div>
            <div class="orange-dot br"></div>
        
            <div class="oval-frame">
              <div class="oval-frame-blue">
                <!-- Title -->
                <div class="title-container">
                  <span class="title big-M">M</span>
                  <h1 class="title __1">AGIC</h1>
                  <h2 class="title __2">The Gathering</h2>
                </div>
                <!-- 5 Colors -->
                <div class="colors-display">
                  <div class="magic-circle white"></div>
                  <div class="magic-circle blue"></div>
                  <div class="magic-circle black"></div>
                  <div class="magic-circle red"></div>
                  <div class="magic-circle green"></div>
                </div>
                <!-- Deckmaster Socket -->
                <div class="deckmaster-frame">
                  <div class="deckmaster">DECKMASTER</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4 class="title-fourth">(Made with CSS)</h4>
    </div>
</template>

<style lang="scss">
    @import '@/styles/theme.scss';

    /* ***** FONTS ***** */
/* Gaelic: */
@font-face {font-family: "Gaelic"; src: url("//db.onlinewebfonts.com/t/0c712c4b3992cf238bdffc2d47f09c86.eot"); src: url("//db.onlinewebfonts.com/t/0c712c4b3992cf238bdffc2d47f09c86.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/0c712c4b3992cf238bdffc2d47f09c86.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/0c712c4b3992cf238bdffc2d47f09c86.woff") format("woff"), url("//db.onlinewebfonts.com/t/0c712c4b3992cf238bdffc2d47f09c86.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/0c712c4b3992cf238bdffc2d47f09c86.svg#Gaelic") format("svg"); } 

/* Almendra */
@font-face {font-family: "Almendra"; src: url("//db.onlinewebfonts.com/t/acc12c6d4d6170894c5db235530f6e03.eot"); src: url("//db.onlinewebfonts.com/t/acc12c6d4d6170894c5db235530f6e03.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/acc12c6d4d6170894c5db235530f6e03.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/acc12c6d4d6170894c5db235530f6e03.woff") format("woff"), url("//db.onlinewebfonts.com/t/acc12c6d4d6170894c5db235530f6e03.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/acc12c6d4d6170894c5db235530f6e03.svg#Almendra") format("svg"); } 

@import url(//db.onlinewebfonts.com/c/0c712c4b3992cf238bdffc2d47f09c86?family=Gaelic);


/* ***** GENERAL ***** */
* {
  margin: 0;
  padding: 0;
}

.body {
  height: 100vh;
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
}

/* ***** ELEMENTS ***** */

/* *** FRAME *** */
.magic-frame {
  width: 100%;
  height: 280px;
  border-radius: 15px;
  border: 15px #000000 solid;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (min-width: $bp-xxs) {
    width: 230px;
    height: 320px;
  }

}

.background {
  width: 100%;
  height: 100%;
  background: linear-gradient(55deg, #453024, #A27B44);
  border-top: 4px solid rgba(255, 255, 255, 0.25);
  border-right: 4px solid rgba(255, 255, 255, 0.25);
  border-bottom: 4px solid rgba(0, 0, 0, 0.6);
  border-left: 4px solid rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.brown-frame {
  width: 98%;
  height: 270px;
  border: 2px solid rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  @media (min-width: $bp-xxs) {
    width: 210px;
    height: 300px;
  }

}

.oval-frame { //here
  box-sizing: border-box;
  width: 200px;
  height: 260px;
  border: 2px solid rgba(0, 0, 0, 0.9);
  border-radius: 48%;
  background-color: #9B5538;
  position: relative;
  
  @media (min-width: $bp-xxs) {
    width: 230px;
    height: 325px;
  }

}

.oval-frame-blue {
  box-sizing: border-box;
  width: 198px;
  height: 258px;
  border: 3px solid #6D74AC;
  border-radius: 48%;
  
  @media (min-width: $bp-xxs) {
    width: 226px;
    height: 323px;
  }

}

/* *** TEXT *** */

/* TITLES */
.title {
  font-family: "Almendra", "Gaelic", Arial, sans-serif;
  color: #4983A0;
  text-shadow: -1px 1px 15px #833D4B, 1px 1px 0 #833D4B, 1px -1px 0 #833D4B, -1px -1px 0 #833D4B;
}

.big-M {
  font-size: 86px;
  position: absolute;
  top: 15px;
  left: 10px;
  
  @media (min-width: $bp-xxs) {
    font-size: 96px;
  }

}

.title.__1 {
  font-size: 48px;
  font-weight: bold;
  line-height: 1;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 35px;
  right: 20px;
  
  @media (min-width: $bp-xxs) {
    font-size: 56px;
  }
  
}

.title.__2 {
  font-size: 16px;
  line-height: 1;
  margin: 0;
  position: absolute;
  top: 90px;
  left: 100px;
}

/* DECKMASTER SOCKET */

.deckmaster-frame {
  position: absolute;
  bottom: 20px;
  left: 20px;
  border: 1px solid #000000;
  background-color: #628D9D;
  width: 160px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (min-width: $bp-xxs) {
    width: 185px;
  }
}

.deckmaster {
  box-sizing: border-box;
  width: 182px;
  height: 27px;
  font-family: "Gaelic", "Almendra", Impact, sans-serif;
  font-size: 20px;
  text-align: center;
  border: 1px solid #000000;
}

/* *** DETAILS *** */

/* 5 COLORS */

.colors-display {
  width: 100px;
  height: 100px;
  top: 120px;
  left: 50px;
  position: relative;
  
  @media (min-width: $bp-xxs) {
    top: 145px;
    left: 65px;
  }
}

.magic-circle {
  z-index: 5;
  border: 0.25px solid #000000;
  border-radius: 100%;
  box-shadow: 1.5px -3px 2px rgba(0, 0, 0, 0.3) inset;
  width: 12px;
  height: 12px;
  position: absolute;
}

.magic-circle.white {
  background-color: #E8D08E;
  right: 45px;
}

.magic-circle.blue {
  background-color: #0CA9D0;
  right: 15px;
  top: 25px;
}

.magic-circle.black {
  background-color: #4E4136;
  right: 25px;
  top: 60px;
}

.magic-circle.red {
  background-color: #E7482D;
  left: 25px;
  top: 60px;
}

.magic-circle.green {
  background-color: #76AE36;
  left: 15px;
  top: 25px;
}

/* Border circles */
.orange-dot {
  z-index: 10;
  width: 12px;
  height: 12px;
  border: 0.25px solid #000000;
  border-radius: 100%;
  background-color: #DF4A26;
  box-shadow: 1.5px -3px 2px rgba(0, 0, 0, 0.3) inset;
  position: absolute;
}

.tl {
  position: absolute;
  top: 3px;
  left: 3px;
}

.tr {
  position: absolute;
  top: 3px;
  right: 3px;
}

.bl {
  position: absolute;
  bottom: 3px;
  left: 3px;
}

.br {
  position: absolute;
  bottom: 3px;
  right: 3px;
}
</style>