import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { HostModule } from './host/host.module';
import { PlayerModule } from './player/player.module';
import { GameModule } from './game/game.module';

@Module({
  imports: [AuthModule, HostModule, PlayerModule, GameModule],
})
export class AppModule {}
