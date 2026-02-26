import { CreateAlarmCommand } from '@/alarms/application/commands/create-alarm.command';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AlarmsService } from '../../../alarms/application/alarms.service';
import { CreateAlarmDto } from './dto/create-alarm.dto';

@Controller('alarms')
export class AlarmsController {
	constructor(private readonly alarmsService: AlarmsService) {}

	@Post()
	create(@Body() createAlarmDto: CreateAlarmDto) {
		return this.alarmsService.create(
			new CreateAlarmCommand(
				createAlarmDto.name,
				createAlarmDto.severity,
				createAlarmDto.triggeredAt,
				createAlarmDto.items,
			),
		);
	}

	@Get()
	findAll() {
		return this.alarmsService.findAll();
	}
}
