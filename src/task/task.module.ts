import { Module } from '@nestjs/common';
import { TaskResolver } from './task.resolver';
import { TaskService } from './task.service';

// 関連するResolverやServiceなどをまとめ、アプリケーションとして利用できるようにNest.jsに登録する

@Module({
  providers: [TaskResolver, TaskService],
})
export class TaskModule {}
