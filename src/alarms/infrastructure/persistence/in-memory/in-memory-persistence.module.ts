import { FindAlarmsRepository } from '@/alarms/application/ports/find-alarms.repository';
import { UpsertMaterializedAlarmRepository } from '@/alarms/application/ports/upsert-materialized-alarm.repository';
import { Module } from '@nestjs/common';
import { CreateAlarmRepository } from '../../../application/ports/create-alarm.repository';
import { InMemoryAlarmRepository } from './repositories/alarm.repository';

@Module({
	imports: [],
	providers: [
		InMemoryAlarmRepository,
		{
			provide: CreateAlarmRepository,
			useExisting: InMemoryAlarmRepository,
		},
		{
			provide: FindAlarmsRepository,
			useExisting: InMemoryAlarmRepository,
		},
		{
			provide: UpsertMaterializedAlarmRepository,
			useExisting: InMemoryAlarmRepository,
		},
	],
	exports: [
		// 👈
		CreateAlarmRepository,
		FindAlarmsRepository,
		UpsertMaterializedAlarmRepository,
	],
})
export class InMemoryAlarmPersistenceModule {}
