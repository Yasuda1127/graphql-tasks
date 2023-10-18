import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { Task } from './modes/task.model';

// GraphQL APIがどのような処理を行うか定義
// データの取得はQuery、その他(追加・更新・削除など)はMutation
// GraphQLスキーマに定義されたデータを返却する
// イメージとしてはREST APIにControllerのような立ち位置
// ルーティング？エンドポイント（URLパス）とHTTPメソッド（GET、POST、PUT、DELETEなど）?

@Resolver()
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Query(() => [Task], { nullable: 'items' }) // graphQLのデータを取得するためのメソッドであることを伝える。第一引数はgraphQLの型をアロー関数で書く。第二引数には設定のためのオブジェクトを渡すことができる。
  getTasks(): Task[] {
    return this.taskService.getTasks(); // getTasksメソッドの結果を返却
  }

  @Mutation(() => Task)
  createTask(
    @Args('name') name: string,
    @Args('dueDate') dueDate: string,
    @Args('description', { nullable: true }) description: string,
  ): Task {
    return this.taskService.createTask(name, dueDate, description);
  }
}
