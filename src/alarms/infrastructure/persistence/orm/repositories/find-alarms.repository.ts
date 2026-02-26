import { FindAlarmsRepository } from '@/alarms/application/ports/find-alarms.repository';
import { AlarmReadModel } from '@/alarms/domain/read-models/alarm.read-model';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AlarmEntity } from '../entities/alarm.entity';

@Injectable()
export class OrmFindAlarmsRepository implements FindAlarmsRepository {
	constructor(
		@InjectRepository(AlarmEntity)
		private readonly alarmRepository: Repository<AlarmEntity>,
	) {}

	async findAll(): Promise<AlarmReadModel[]> {
		return this.alarmRepository.find();
	}
}
