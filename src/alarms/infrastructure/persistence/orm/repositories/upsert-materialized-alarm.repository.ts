import { UpsertMaterializedAlarmRepository } from '@/alarms/application/ports/upsert-materialized-alarm.repository';
import { AlarmReadModel } from '@/alarms/domain/read-models/alarm.read-model';
import { MaterializedAlarmView } from '@/alarms/infrastructure/persistence/orm/schemas/materialized-alarm-view.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class OrmUpsertMaterializedAlarmRepository implements UpsertMaterializedAlarmRepository {
	constructor(
		@InjectModel(MaterializedAlarmView.name)
		private readonly alarmModel: Model<MaterializedAlarmView>,
	) {}

	async upsert(alarm: Pick<AlarmReadModel, 'id'> & Partial<AlarmReadModel>): Promise<void> {
		await this.alarmModel.findOneAndUpdate({ id: alarm.id }, alarm, {
			upsert: true,
			strict: false,
		});
	}
}
