import { Migration } from '@mikro-orm/migrations';

export class Migration20210316000859 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" drop constraint "user_password_unique";');
  }

}
