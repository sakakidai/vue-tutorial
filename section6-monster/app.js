function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currnetRound: 0,
      winner: null,
      logMessages: [],
    };
  },

  computed: {
    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        return { width: '0%' }
      }
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      if (this.playerHealth < 0) {
        return { width: '0%' }
      }
      return { width: this.playerHealth + "%" };
    },
    mayUseAttack() {
      return this.currnetRound % 3 !== 0;
    },
  },

  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    }
  },

  methods: {
    attackMonster() {
      this.currnetRound++;
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.addLogMessage('player', 'attack', attackValue);
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
      this.addLogMessage('monster', 'attack', attackValue);
    },
    specialAttackMonster() {
      this.currnetRound++;
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.addLogMessage('player', 'attack', attackValue);
      this.attackPlayer();
    },
    healPlayer() {
      this.currnetRound++;
      const healValue = getRandomValue(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.addLogMessage('player', 'heal', healValue);
      this.attackPlayer();
    },
    startGame() {
      this.playerHealth = 100
      this.monsterHealth = 100
      this.currnetRound = 0
      this.winner = null
      this.logMessages = []
    },
    surrender() {
      this.winner = 'monster';
    },
    addLogMessage(who, that, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: that,
        actionValue: value,
      });
    }
  },
});

app.mount("#game");
