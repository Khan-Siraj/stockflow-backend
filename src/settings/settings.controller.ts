import { Body, Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { SettingsService } from './settings.service';

@UseGuards(JwtAuthGuard)
@Controller('settings')
export class SettingsController {
  constructor(private settingsService: SettingsService) {}

  @Get()
  getSettings(@Req() req: any) {
    return this.settingsService.getSettings(req.user);
  }

  @Patch()
  updateSettings(@Body() body: any, @Req() req: any) {
    return this.settingsService.updateSettings(body, req.user);
  }
}
