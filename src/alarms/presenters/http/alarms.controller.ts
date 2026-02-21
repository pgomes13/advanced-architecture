import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateAlarmDto } from './dto/create-alarm.dto';
import { AlarmsService } from '../../../alarms/application/alarms.service';

@Controller('alarms')
export class AlarmsController {
	constructor(private readonly alarmsService: AlarmsService) {}

	@Post()
	create(@Body() createAlarmDto: CreateAlarmDto) {
		return this.alarmsService.create(createAlarmDto);
	}

	@Get()
	findAll() {
		return this.alarmsService.findAll();
	}
}
