import { Component, EventEmitter, Output } from '@angular/core';

@Component ({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})


export class GameControl {
  @Output() gameStarted = new EventEmitter<number>();
  @Output() gameStop = new EventEmitter<any>();
  seconds: number = 0;

  onGameStart() {
    console.log("Game started!");
    setInterval(this.incrementSeconds, 1000);
    this.gameStarted.emit(this.seconds);
  }

  onGameStop() {
    this.gameStop.emit();
  }

  incrementSeconds() {
    return this.seconds = this.seconds++;
  }

}
