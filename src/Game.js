'use strict';

function Game() {
  this.score = INITIAL_SCORE
  this.frameNo = INITIAL_FRAME_NO
  this.rollCount = INITIAL_ROLL_COUNT
  this.frameHistory = []
  this.currentFrame = []
  this.bonusPoints = INITIAL_BONUS_POINTS
}

const INITIAL_SCORE = 0
const INITIAL_FRAME_NO = 1
const INITIAL_ROLL_COUNT = 0
const INITIAL_BONUS_POINTS = 0

Game.prototype.getScore = function(){
  return this.score
}

Game.prototype.getFrameNo = function(){
  return this.frameNo
}

Game.prototype.getRollCount = function(){
  return this.rollCount
}

Game.prototype.getFrameHistory = function(){
  return this.frameHistory
}

Game.prototype.getBonusPoints = function(){
  return this.bonusPoints
}

Game.prototype.makeRoll = function(points){
  this.increaseRollNo();
  this.currentFrame.push(points);
  if (this.isWhichRoll() === 2){
    this.makeFrame();
  }
  else{
    this.isStrike(points)
  }
}

Game.prototype.increaseRollNo = function(){
  this.rollCount += 1;
}

Game.prototype.isWhichRoll = function(){
  if (this.rollCount % 2 === 1){
    return 1;
  }
  return 2;
}

Game.prototype.isStrike = function(points){
  return points === 10
}

Game.prototype.makeFrame = function(){
  this.frameHistory.push(this.currentFrame);
  this.nextFrame();
}

Game.prototype.nextFrame = function(){
  this.frameNo += 1;
  this.currentFrame = [];
}



